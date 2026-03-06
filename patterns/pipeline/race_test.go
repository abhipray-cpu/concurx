package pipeline

import (
	"context"
	"sync"
	"sync/atomic"
	"testing"
	"time"
)

//
// -----------------------------------------------------------------------------
// RACE TEST 1: Concurrent pipeline consumption
// Ensures:
//   - No races between producer, stages, and consumer
//   - Safe channel close behavior
// -----------------------------------------------------------------------------

func TestPipeline_Race_ConcurrentConsume(t *testing.T) {
	ctx := context.Background()

	in := make(chan int)

	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		time.Sleep(1 * time.Millisecond)
		return v.(int) * 2, nil
	})

	out, err := Pipeline(ctx, in, []Stage{stage})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	var wg sync.WaitGroup

	// Producer
	wg.Add(1)
	go func() {
		defer wg.Done()
		for i := 0; i < 1000; i++ {
			in <- i
		}
		close(in)
	}()

	// Consumer
	wg.Add(1)
	go func() {
		defer wg.Done()
		for range out {
		}
	}()

	wg.Wait()
}

//
// -----------------------------------------------------------------------------
// RACE TEST 2: Cancellation during execution
// Ensures:
//   - No races when ctx is canceled mid-flight
//   - Goroutines exit cleanly
// -----------------------------------------------------------------------------

func TestPipeline_Race_CancelMidExecution(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())

	in := make(chan int)

	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		time.Sleep(5 * time.Millisecond)
		return v, nil
	})

	out, err := Pipeline(ctx, in, []Stage{stage})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	go func() {
		defer close(in)
		for i := 0; i < 100; i++ {
			select {
			case <-ctx.Done():
				return
			case in <- i:
			}
		}
	}()

	time.Sleep(10 * time.Millisecond)
	cancel()

	for range out {
	}
}

//
// -----------------------------------------------------------------------------
// RACE TEST 3: Fail-fast stage error propagation
// Ensures:
//   - Error path does not cause data races
//   - Context cancellation is safe
// -----------------------------------------------------------------------------

func TestPipeline_Race_FailFast(t *testing.T) {
	ctx := context.Background()

	in := make(chan int)

	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		if v.(int) == 10 {
			return nil, ErrStageFailed
		}
		time.Sleep(1 * time.Millisecond)
		return v, nil
	})

	out, err := Pipeline(ctx, in, []Stage{stage})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	go func() {
		for i := 0; i < 100; i++ {
			in <- i
		}
		close(in)
	}()

	for range out {
	}
}

//
// -----------------------------------------------------------------------------
// RACE TEST 4: Multiple stages with shared counters
// Ensures:
//   - No races between stages
//   - Correct synchronization under load
// -----------------------------------------------------------------------------

func TestPipeline_Race_MultiStageSharedState(t *testing.T) {
	ctx := context.Background()

	in := make(chan int)

	var s1 int32
	var s2 int32

	stage1 := NewStage(func(ctx context.Context, v any) (any, error) {
		atomic.AddInt32(&s1, 1)
		return v, nil
	})

	stage2 := NewStage(func(ctx context.Context, v any) (any, error) {
		atomic.AddInt32(&s2, 1)
		return v, nil
	})

	out, err := Pipeline(ctx, in, []Stage{stage1, stage2})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	go func() {
		for i := 0; i < 500; i++ {
			in <- i
		}
		close(in)
	}()

	for range out {
	}

	if s1 != s2 {
		t.Fatalf("stage counts mismatch: %d vs %d", s1, s2)
	}
}

//
// -----------------------------------------------------------------------------
// RACE TEST 5: High churn pipeline creation/destruction
// Ensures:
//   - No races across repeated pipeline lifecycles
// -----------------------------------------------------------------------------

func TestPipeline_Race_RepeatedCreateDestroy(t *testing.T) {
	for i := 0; i < 100; i++ {
		ctx, cancel := context.WithCancel(context.Background())

		in := make(chan int)

		stage := NewStage(func(ctx context.Context, v any) (any, error) {
			return v, nil
		})

		out, err := Pipeline(ctx, in, []Stage{stage})
		if err != nil {
			t.Fatalf("unexpected error: %v", err)
		}

		go func() {
			in <- 1
			close(in)
		}()

		for range out {
		}

		cancel()
	}
}
