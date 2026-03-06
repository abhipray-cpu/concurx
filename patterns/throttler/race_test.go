package throttler

import (
	"context"
	"sync"
	"sync/atomic"
	"testing"
	"time"
)

func TestThrottler_Race_ConcurrentExecute(t *testing.T) {
	th, _ := NewThrottler(
		NewSimpleRatePolicy(5),
	)

	var wg sync.WaitGroup

	for i := 0; i < 50; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = th.Execute(context.Background(), func(ctx context.Context) error {
				time.Sleep(1 * time.Millisecond)
				return nil
			})
		}()
	}

	wg.Wait()
}

func TestThrottler_Race_RejectAndAllow(t *testing.T) {
	th, _ := NewThrottler(
		NewSimpleRatePolicy(1),
	)

	var wg sync.WaitGroup

	for i := 0; i < 100; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = th.Execute(context.Background(), func(ctx context.Context) error {
				time.Sleep(2 * time.Millisecond)
				return nil
			})
		}()
	}

	wg.Wait()
}

func TestThrottler_Race_PanicIsolation(t *testing.T) {
	th, _ := NewThrottler(
		NewSimpleRatePolicy(2),
	)

	var wg sync.WaitGroup

	for i := 0; i < 50; i++ {
		wg.Add(1)
		go func(i int) {
			defer wg.Done()

			_ = th.Execute(context.Background(), func(ctx context.Context) error {
				if i%7 == 0 {
					panic("boom")
				}
				return nil
			})
		}(i)
	}

	wg.Wait()

	// Throttler must still be usable
	err := th.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if err != nil {
		t.Fatalf("throttler corrupted after panic")
	}
}

func TestThrottler_Race_CustomPolicy(t *testing.T) {
	var calls int64

	policy := ThrottlePolicyFunc{
		DecideFn: func(ctx context.Context) (ThrottleDecision, time.Duration) {
			atomic.AddInt64(&calls, 1)
			return ThrottleAllow, 0
		},
		ObserveFn: func(success bool, latency time.Duration) {},
	}

	th, _ := NewThrottler(policy)

	var wg sync.WaitGroup

	for i := 0; i < 100; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = th.Execute(context.Background(), func(ctx context.Context) error {
				return nil
			})
		}()
	}

	wg.Wait()

	if atomic.LoadInt64(&calls) == 0 {
		t.Fatalf("policy was never invoked")
	}
}
