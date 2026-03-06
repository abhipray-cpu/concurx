package workerpercore

import (
	"context"
	"fmt"
	"sync"
	"sync/atomic"
	"time"
)

// -----------------------------------------------------------------------------
// Example 1: Basic background worker pool
//
// Real-world use:
//   - Offload background jobs
//   - Limit CPU usage
//
// Invariants validated:
//   - Tasks execute
//   - Pool remains usable
//
// -----------------------------------------------------------------------------
func ExampleWorkerPerCore_basic() {
	w, _ := NewWorkerPerCore(
		WithWorkers(2),
	)

	var count int32

	for i := 0; i < 5; i++ {
		_ = w.Submit(func(_ context.Context) error {
			atomic.AddInt32(&count, 1)
			return nil
		})
	}

	time.Sleep(50 * time.Millisecond)
	w.Shutdown()

	fmt.Println("executed:", count)

	// Output:
	// executed: 5
}

// -----------------------------------------------------------------------------
// Example 2: CPU-bound isolation
//
// Real-world use:
//   - Prevent CPU oversubscription
//   - Ensure bounded parallelism
//
// Invariants validated:
//   - Concurrency never exceeds worker count
//
// -----------------------------------------------------------------------------
func ExampleWorkerPerCore_concurrencyBound() {
	w, _ := NewWorkerPerCore(
		WithWorkers(2),
	)

	var running int32
	var maxRunning int32
	var mu sync.Mutex

	work := func(_ context.Context) error {
		cur := atomic.AddInt32(&running, 1)
		defer atomic.AddInt32(&running, -1)

		mu.Lock()
		if cur > maxRunning {
			maxRunning = cur
		}
		mu.Unlock()

		time.Sleep(20 * time.Millisecond)
		return nil
	}

	for i := 0; i < 6; i++ {
		_ = w.Submit(work)
	}

	time.Sleep(150 * time.Millisecond)
	w.Shutdown()

	fmt.Println("max concurrency:", maxRunning)

	// Output:
	// max concurrency: 2
}

// -----------------------------------------------------------------------------
// Example 3: Fail-fast queue (load shedding)
//
// Real-world use:
//   - Reject excess work immediately
//   - Protect latency-sensitive systems
//
// Invariants validated:
//   - Queue rejects immediately when full
//
// -----------------------------------------------------------------------------
func ExampleWorkerPerCore_failFastQueue() {
	w, _ := NewWorkerPerCore(
		WithWorkers(1),
		WithQueueSize(0),
		WithFailFast(),
	)

	block := make(chan struct{})

	// Occupy the only worker
	_ = w.Submit(func(_ context.Context) error {
		<-block
		return nil
	})

	time.Sleep(10 * time.Millisecond)

	err := w.Submit(func(_ context.Context) error { return nil })
	fmt.Println("rejected:", err != nil)

	close(block)
	w.Shutdown()

	// Output:
	// rejected: true
}

// -----------------------------------------------------------------------------
// Example 4: Blocking queue
//
// Real-world use:
//   - Bounded buffering
//   - Backpressure instead of rejection
//
// Invariants validated:
//   - Queued task executes after capacity frees
//
// -----------------------------------------------------------------------------
func ExampleWorkerPerCore_blockingQueue() {
	w, _ := NewWorkerPerCore(
		WithWorkers(1),
		WithQueueSize(1),
	)

	started := make(chan struct{})
	done := make(chan struct{})
	release := make(chan struct{})

	_ = w.Submit(func(_ context.Context) error {
		close(started)
		<-release
		return nil
	})

	<-started

	go func() {
		_ = w.Submit(func(_ context.Context) error {
			close(done)
			return nil
		})
	}()

	time.Sleep(20 * time.Millisecond)
	close(release)

	<-done
	w.Shutdown()

	fmt.Println("queued task executed")

	// Output:
	// queued task executed
}

// -----------------------------------------------------------------------------
// Example 5: Context cancellation
//
// Real-world use:
//   - Request-scoped background jobs
//   - Cancel before execution
//
// Invariants validated:
//   - Canceled context prevents execution
//
// -----------------------------------------------------------------------------
func ExampleWorkerPerCore_contextCancel() {
	w, _ := NewWorkerPerCore(
		WithWorkers(1),
		WithQueueSize(1),
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := w.SubmitContext(ctx, func(_ context.Context) error { return nil })
	fmt.Println("canceled:", err != nil)

	w.Shutdown()

	// Output:
	// canceled: true
}

// -----------------------------------------------------------------------------
// Example 6: Panic isolation
//
// Real-world use:
//   - User-provided jobs
//   - Worker pool must survive panics
//
// Invariants validated:
//   - Panic does not kill worker
//   - Pool remains usable
//
// -----------------------------------------------------------------------------
func ExampleWorkerPerCore_panicIsolation() {
	w, _ := NewWorkerPerCore(
		WithWorkers(1),
	)

	_ = w.Submit(func(_ context.Context) error {
		panic("boom")
	})

	done := make(chan struct{})

	_ = w.Submit(func(_ context.Context) error {
		close(done)
		return nil
	})

	<-done
	w.Shutdown()

	fmt.Println("recovered")

	// Output:
	// recovered
}

// -----------------------------------------------------------------------------
// Example 7: Graceful shutdown
//
// Real-world use:
//   - Service termination
//   - Stop accepting new work
//
// Invariants validated:
//   - Submit after shutdown fails
//
// -----------------------------------------------------------------------------
func ExampleWorkerPerCore_shutdown() {
	w, _ := NewWorkerPerCore(
		WithWorkers(1),
	)

	w.Shutdown()

	err := w.Submit(func(_ context.Context) error { return nil })
	fmt.Println("closed:", err != nil)

	// Output:
	// closed: true
}
