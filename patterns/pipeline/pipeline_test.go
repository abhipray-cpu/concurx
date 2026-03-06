package pipeline

import (
	"context"
	"errors"
	"testing"
	"time"
)

//
// -----------------------------------------------------------------------------
// VALIDATION
// -----------------------------------------------------------------------------

func TestPipeline_NoStages(t *testing.T) {
	ctx := context.Background()

	in := make(chan any)
	close(in)

	_, err := Pipeline(ctx, in, []Stage{})
	if err == nil {
		t.Fatalf("expected error for no stages")
	}
}

//
// -----------------------------------------------------------------------------
// CORE FUNCTIONALITY
// -----------------------------------------------------------------------------

func TestPipeline_SingleStage(t *testing.T) {
	ctx := context.Background()

	in := make(chan any, 3)
	in <- 1
	in <- 2
	in <- 3
	close(in)

	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		return v.(int) * 2, nil
	})

	out, err := Pipeline(ctx, in, []Stage{stage})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	var got []int
	for v := range out {
		got = append(got, v.(int))
	}

	if len(got) != 3 || got[0] != 2 || got[1] != 4 || got[2] != 6 {
		t.Fatalf("unexpected output: %v", got)
	}
}

func TestPipeline_MultiStage(t *testing.T) {
	ctx := context.Background()

	in := make(chan any, 2)
	in <- 1
	in <- 2
	close(in)

	stage1 := NewStage(func(ctx context.Context, v any) (any, error) {
		return v.(int) * 2, nil
	})

	stage2 := NewStage(func(ctx context.Context, v any) (any, error) {
		return v.(int) + 1, nil
	})

	out, err := Pipeline(ctx, in, []Stage{stage1, stage2})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	results := []int{}
	for v := range out {
		results = append(results, v.(int))
	}

	if results[0] != 3 || results[1] != 5 {
		t.Fatalf("unexpected results: %v", results)
	}
}

//
// -----------------------------------------------------------------------------
// STREAMING SEMANTICS
// -----------------------------------------------------------------------------

func TestPipeline_IsStreaming(t *testing.T) {
	ctx := context.Background()

	in := make(chan any)

	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		time.Sleep(20 * time.Millisecond)
		return v.(int) * 10, nil
	})

	out, err := Pipeline(ctx, in, []Stage{stage})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	go func() {
		in <- 1
		time.Sleep(10 * time.Millisecond)
		in <- 2
		close(in)
	}()

	first := <-out
	if first.(int) != 10 {
		t.Fatalf("expected streaming behavior")
	}
}

//
// -----------------------------------------------------------------------------
// BACKPRESSURE
// -----------------------------------------------------------------------------

func TestPipeline_Backpressure(t *testing.T) {
	ctx := context.Background()

	in := make(chan any)

	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		time.Sleep(10 * time.Millisecond)
		return v, nil
	})

	out, _ := Pipeline(ctx, in, []Stage{stage})

	// Producer
	go func() {
		in <- 1
		in <- 2
		close(in)
	}()

	// Allow stage to process
	time.Sleep(20 * time.Millisecond)

	// Only ONE value should be available without consuming
	select {
	case <-out:
		// ok: first value emitted
	default:
		t.Fatalf("expected first output")
	}

	// Second output MUST be blocked until first is consumed
	select {
	case <-out:
		t.Fatalf("expected backpressure to block second output")
	default:
		// correct
	}

	// Now consume second
	<-out
}

//
// -----------------------------------------------------------------------------
// ERROR HANDLING
// -----------------------------------------------------------------------------

func TestPipeline_StageError_FailFast(t *testing.T) {
	ctx := context.Background()

	in := make(chan any, 3)
	in <- 1
	in <- 2
	in <- 3
	close(in)

	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		if v.(int) == 2 {
			return nil, errors.New("boom")
		}
		return v, nil
	})

	out, _ := Pipeline(ctx, in, []Stage{stage})

	// Drain output until closed
	timeout := time.After(50 * time.Millisecond)

	for {
		select {
		case _, ok := <-out:
			if !ok {
				// pipeline stopped correctly
				return
			}
		case <-timeout:
			t.Fatalf("pipeline did not stop after stage error")
		}
	}
}

//
// -----------------------------------------------------------------------------
// PANIC SAFETY
// -----------------------------------------------------------------------------

func TestPipeline_PanicIsolation(t *testing.T) {
	ctx := context.Background()

	in := make(chan any, 1)
	in <- 1
	close(in)

	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		panic("boom")
	})

	out, _ := Pipeline(ctx, in, []Stage{stage})

	_, ok := <-out
	if ok {
		t.Fatalf("expected closed output after panic")
	}
}

//
// -----------------------------------------------------------------------------
// CONTEXT CANCELLATION
// -----------------------------------------------------------------------------

func TestPipeline_ContextCancel(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())

	in := make(chan any)

	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		time.Sleep(50 * time.Millisecond)
		return v, nil
	})

	out, _ := Pipeline(ctx, in, []Stage{stage})

	go func() {
		in <- 1
		cancel()
		in <- 2
		close(in)
	}()

	<-out
	_, ok := <-out
	if ok {
		t.Fatalf("expected cancellation")
	}
}

//
// -----------------------------------------------------------------------------
// TIMEOUT
// -----------------------------------------------------------------------------

func TestPipeline_Timeout(t *testing.T) {
	ctx := context.Background()

	in := make(chan any, 1)
	in <- 1
	close(in)

	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		time.Sleep(100 * time.Millisecond)
		return v, nil
	})

	out, _ := Pipeline(ctx, in, []Stage{stage}, WithTimeout(20*time.Millisecond))

	_, ok := <-out
	if ok {
		t.Fatalf("expected timeout")
	}
}
