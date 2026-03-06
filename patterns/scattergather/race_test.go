package scatter

import (
	"context"
	"sync"
	"sync/atomic"
	"testing"
	"time"
)

// -----------------------------------------------------------------------------
// Race Test: Concurrent ScatterGather invocations
// -----------------------------------------------------------------------------

func TestScatterGather_Race_ConcurrentInvocations(t *testing.T) {
	const runs = 50

	var wg sync.WaitGroup
	wg.Add(runs)

	for i := 0; i < runs; i++ {
		go func() {
			defer wg.Done()

			branches := []func(context.Context) (int, error){
				func(ctx context.Context) (int, error) {
					time.Sleep(5 * time.Millisecond)
					return 1, nil
				},
				func(ctx context.Context) (int, error) {
					return 2, nil
				},
				func(ctx context.Context) (int, error) {
					return 3, nil
				},
			}

			_, err := ScatterGather(
				context.Background(),
				branches,
				NewAllSuccessPolicy(len(branches)),
				WithConcurrency(2),
			)

			if err != nil {
				t.Errorf("unexpected error: %v", err)
			}
		}()
	}

	wg.Wait()
}

// -----------------------------------------------------------------------------
// Race Test: Policy state isolation
// -----------------------------------------------------------------------------

func TestScatterGather_Race_PolicyIsolation(t *testing.T) {
	const runs = 100

	var wg sync.WaitGroup
	wg.Add(runs)

	for i := 0; i < runs; i++ {
		go func() {
			defer wg.Done()

			policy := NewMinSuccessPolicy(3, 2)

			branches := []func(context.Context) (int, error){
				func(ctx context.Context) (int, error) { return 1, nil },
				func(ctx context.Context) (int, error) { return 0, ErrTaskFailed },
				func(ctx context.Context) (int, error) { return 2, nil },
			}

			_, err := ScatterGather(
				context.Background(),
				branches,
				policy,
				WithConcurrency(3),
			)

			if err != nil && err != ErrInsufficientSuccess {
				t.Errorf("unexpected error: %v", err)
			}
		}()
	}

	wg.Wait()
}

// -----------------------------------------------------------------------------
// Race Test: FailFast cancellation pressure
// -----------------------------------------------------------------------------

func TestScatterGather_Race_FailFastCancellation(t *testing.T) {
	var started int32

	branches := []func(context.Context) (int, error){
		func(ctx context.Context) (int, error) {
			atomic.AddInt32(&started, 1)
			return 0, ErrTaskFailed
		},
		func(ctx context.Context) (int, error) {
			atomic.AddInt32(&started, 1)
			time.Sleep(50 * time.Millisecond)
			return 2, nil
		},
		func(ctx context.Context) (int, error) {
			atomic.AddInt32(&started, 1)
			time.Sleep(50 * time.Millisecond)
			return 3, nil
		},
	}

	for i := 0; i < 50; i++ {
		_, _ = ScatterGather(
			context.Background(),
			branches,
			NewAllSuccessPolicy(len(branches)),
			WithConcurrency(3),
			WithFailFast(),
		)
	}
}

// -----------------------------------------------------------------------------
// Race Test: Panic isolation
// -----------------------------------------------------------------------------

func TestScatterGather_Race_PanicIsolation(t *testing.T) {
	branches := []func(context.Context) (int, error){
		func(ctx context.Context) (int, error) {
			panic("boom")
		},
		func(ctx context.Context) (int, error) {
			return 1, nil
		},
	}

	for i := 0; i < 100; i++ {
		_, _ = ScatterGather(
			context.Background(),
			branches,
			NewAllSuccessPolicy(len(branches)),
			WithConcurrency(2),
		)
	}
}
