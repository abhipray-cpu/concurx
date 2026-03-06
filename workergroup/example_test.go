package workergroup

import (
	"context"
	"fmt"
	"sync"
	"sync/atomic"
	"time"
)

// Example 1: Basic usage
//
// Demonstrates:
// - Fixed worker pool
// - Jobs run
// - Stop waits for completion
func Example_basic() {
	wg, _ := New(Config{
		Workers:   2,
		QueueSize: 10,
	}, noopHooks())

	ctx := context.Background()

	var ran int32
	var jobsWg sync.WaitGroup
	jobsWg.Add(5)

	for i := 0; i < 5; i++ {
		_ = wg.Submit(ctx, func(ctx context.Context) error {
			atomic.AddInt32(&ran, 1)
			jobsWg.Done()
			return nil
		})
	}

	// Wait for all jobs to complete
	jobsWg.Wait()

	// Now it is safe to stop workers
	wg.Stop()

	fmt.Printf("ran=%d\n", ran)
	// Output:
	// ran=5
}

// Example 2: Backpressure with SubmitReject
//
// Demonstrates:
// - Bounded queue
// - Immediate rejection when full
func Example_submitReject() {
	wg, _ := New(Config{
		Workers:        1,
		QueueSize:      1,
		SubmitBehavior: SubmitReject,
	}, noopHooks())

	ctx := context.Background()

	// occupy worker
	_ = wg.Submit(ctx, func(ctx context.Context) error {
		time.Sleep(100 * time.Millisecond)
		return nil
	})

	// fill queue
	_ = wg.Submit(ctx, func(ctx context.Context) error { return nil })

	// this must fail
	err := wg.Submit(ctx, func(ctx context.Context) error { return nil })

	fmt.Printf("rejected=%v\n", err == ErrQueueFull)

	wg.Stop()

	// Output:
	// rejected=true
}

// Example 3: SubmitBlock respects context cancellation
//
// Demonstrates:
// - Blocking submit
// - Context cancellation unblocks caller
// - No goroutine leaks
func Example_submitBlockWithContextCancel() {
	wg, _ := New(Config{
		Workers:        1,
		QueueSize:      1,
		SubmitBehavior: SubmitBlock,
	}, noopHooks())

	// occupy worker
	_ = wg.Submit(context.Background(), func(ctx context.Context) error {
		time.Sleep(200 * time.Millisecond)
		return nil
	})

	// fill queue
	_ = wg.Submit(context.Background(), func(ctx context.Context) error { return nil })

	// blocked submit
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := wg.Submit(ctx, func(ctx context.Context) error { return nil })

	fmt.Printf("canceled=%v\n", err == context.Canceled)

	wg.Stop()

	// Output:
	// canceled=true
}

// Example 4: Panic isolation
//
// Demonstrates:
// - Panic inside a job does NOT kill workers
// - Pool continues processing jobs
func Example_panicIsolation() {
	wg, _ := New(Config{
		Workers: 1,
	}, noopHooks())

	ctx := context.Background()

	_ = wg.Submit(ctx, func(ctx context.Context) error {
		panic("boom")
	})

	var ran int32
	_ = wg.Submit(ctx, func(ctx context.Context) error {
		atomic.AddInt32(&ran, 1)
		return nil
	})

	wg.Stop()

	fmt.Printf("ran=%d\n", ran)
	// Output:
	// ran=1
}

// Example 5: Unbuffered queue (direct handoff)
//
// Demonstrates:
// - QueueSize = 0
// - No buffering
// - Producer waits for worker
func Example_unbufferedQueue() {
	wg, _ := New(Config{
		Workers:   1,
		QueueSize: 0,
	}, noopHooks())

	ctx := context.Background()

	var ran int32
	_ = wg.Submit(ctx, func(ctx context.Context) error {
		atomic.AddInt32(&ran, 1)
		return nil
	})

	wg.Stop()

	fmt.Printf("ran=%d\n", ran)
	// Output:
	// ran=1
}

// Example 6: Stop is idempotent
//
// Demonstrates:
// - Stop can be called multiple times safely
func Example_stopIdempotent() {
	wg, _ := New(Config{
		Workers: 1,
	}, noopHooks())

	wg.Stop()
	wg.Stop()

	fmt.Println("ok")
	// Output:
	// ok
}
