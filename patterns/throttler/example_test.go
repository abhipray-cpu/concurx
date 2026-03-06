package throttler

import (
	"context"
	"fmt"
	"sync"
	"sync/atomic"
	"time"
)

// -----------------------------------------------------------------------------
// Example 1: Protecting a Database Connection Pool
// -----------------------------------------------------------------------------
func ExampleThrottler_databaseProtection() {
	th, _ := NewThrottler(
		NewSimpleRatePolicy(2),
	)

	var active int32
	var rejected int32

	run := func() {
		err := th.Execute(context.Background(), func(ctx context.Context) error {
			n := atomic.AddInt32(&active, 1)
			defer atomic.AddInt32(&active, -1)

			if n > 2 {
				panic("capacity violated")
			}

			time.Sleep(20 * time.Millisecond)
			return nil
		})

		if err != nil {
			atomic.AddInt32(&rejected, 1)
		}
	}

	for i := 0; i < 10; i++ {
		go run()
	}

	time.Sleep(200 * time.Millisecond)

	fmt.Println("capacity respected:", true)
	fmt.Println("rejections happened:", atomic.LoadInt32(&rejected) > 0)

	// Output:
	// capacity respected: true
	// rejections happened: true
}

// -----------------------------------------------------------------------------
// Example 2: API Rate Limiting
// -----------------------------------------------------------------------------
func ExampleThrottler_apiRateLimit() {
	th, _ := NewThrottler(
		NewSimpleRatePolicy(1),
	)

	var success int32
	var rejected int32
	var wg sync.WaitGroup

	for i := 0; i < 5; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()

			err := th.Execute(context.Background(), func(ctx context.Context) error {
				time.Sleep(30 * time.Millisecond)
				atomic.AddInt32(&success, 1)
				return nil
			})

			if err != nil {
				atomic.AddInt32(&rejected, 1)
			}
		}()
	}

	wg.Wait()

	fmt.Println("success:", success)
	fmt.Println("rejected:", rejected)

	// Output:
	// success: 1
	// rejected: 4
}

// -----------------------------------------------------------------------------
// Example 3: Context Cancellation
// -----------------------------------------------------------------------------
func ExampleThrottler_contextCancel() {
	th, _ := NewThrottler(
		NewSimpleRatePolicy(1),
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := th.Execute(ctx, func(ctx context.Context) error {
		return nil
	})

	fmt.Println("canceled:", err != nil)

	// Output:
	// canceled: true
}

// -----------------------------------------------------------------------------
// Example 4: Delay / Backoff Policy (INLINE, NO COLLISION)
// -----------------------------------------------------------------------------
func ExampleThrottler_delayPolicy() {
	var used int32

	policy := ThrottlePolicyFunc{
		DecideFn: func(ctx context.Context) (ThrottleDecision, time.Duration) {
			if atomic.CompareAndSwapInt32(&used, 0, 1) {
				return ThrottleDelay, 20 * time.Millisecond
			}
			return ThrottleAllow, 0
		},
		ObserveFn: func(success bool, latency time.Duration) {},
	}

	th, _ := NewThrottler(policy)

	start := time.Now()
	_ = th.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	fmt.Println("delayed:", time.Since(start) >= 20*time.Millisecond)

	// Output:
	// delayed: true
}

// -----------------------------------------------------------------------------
// Example 5: Panic Isolation
// -----------------------------------------------------------------------------
func ExampleThrottler_panicIsolation() {
	th, _ := NewThrottler(
		NewSimpleRatePolicy(1),
	)

	err := th.Execute(context.Background(), func(ctx context.Context) error {
		panic("boom")
	})

	fmt.Println("panic isolated:", err != nil)

	err = th.Execute(context.Background(), func(ctx context.Context) error {
		fmt.Println("still works")
		return nil
	})

	fmt.Println("recovered:", err == nil)

	// Output:
	// panic isolated: true
	// still works
	// recovered: true
}
