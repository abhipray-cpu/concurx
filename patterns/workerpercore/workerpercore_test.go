package workerpercore

import (
	"context"
	"errors"
	"sync"
	"sync/atomic"
	"testing"
	"time"
)

// -----------------------------------------------------------------------------
// Test 1: Executes tasks successfully
// -----------------------------------------------------------------------------
func TestWorkerPerCore_BasicExecution(t *testing.T) {
	w, err := NewWorkerPerCore(WithWorkers(2))
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	var count int32

	for i := 0; i < 10; i++ {
		if err := w.Submit(func(_ context.Context) error {
			atomic.AddInt32(&count, 1)
			return nil
		}); err != nil {
			t.Fatalf("submit failed: %v", err)
		}
	}

	time.Sleep(50 * time.Millisecond)

	if atomic.LoadInt32(&count) != 10 {
		t.Fatalf("expected 10 executions, got %d", count)
	}

	w.Shutdown()
}

// -----------------------------------------------------------------------------
// Test 2: Concurrency never exceeds worker count
// -----------------------------------------------------------------------------
func TestWorkerPerCore_ConcurrencyBound(t *testing.T) {
	workers := 2
	w, _ := NewWorkerPerCore(WithWorkers(workers))

	var running int32
	var maxRunning int32

	for i := 0; i < 10; i++ {
		_ = w.Submit(func(_ context.Context) error {
			cur := atomic.AddInt32(&running, 1)
			defer atomic.AddInt32(&running, -1)

			for {
				prev := atomic.LoadInt32(&maxRunning)
				if cur <= prev || atomic.CompareAndSwapInt32(&maxRunning, prev, cur) {
					break
				}
			}

			time.Sleep(20 * time.Millisecond)
			return nil
		})
	}

	time.Sleep(100 * time.Millisecond)

	if maxRunning > int32(workers) {
		t.Fatalf("concurrency exceeded: %d > %d", maxRunning, workers)
	}

	w.Shutdown()
}

// -----------------------------------------------------------------------------
// Test 3: FailFast rejects when queue is full
// -----------------------------------------------------------------------------
func TestWorkerPerCore_FailFastQueue(t *testing.T) {
	w, _ := NewWorkerPerCore(
		WithWorkers(1),
		WithQueueSize(0),
		WithFailFast(),
	)

	block := make(chan struct{})

	_ = w.Submit(func(_ context.Context) error {
		<-block
		return nil
	})

	time.Sleep(10 * time.Millisecond)

	err := w.Submit(func(_ context.Context) error { return nil })
	if !errors.Is(err, ErrQueueFull) {
		t.Fatalf("expected ErrQueueFull, got %v", err)
	}

	close(block)
	w.Shutdown()
}

// -----------------------------------------------------------------------------
// Test 4: Blocking queue allows execution later
// -----------------------------------------------------------------------------
func TestWorkerPerCore_BlockingQueue(t *testing.T) {
	w, _ := NewWorkerPerCore(
		WithWorkers(1),
		WithQueueSize(1),
	)

	started := make(chan struct{})
	release := make(chan struct{})
	done := make(chan struct{})

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

	select {
	case <-done:
		t.Fatalf("task should be queued, not executed yet")
	case <-time.After(20 * time.Millisecond):
	}

	close(release)

	select {
	case <-done:
	case <-time.After(50 * time.Millisecond):
		t.Fatalf("queued task never executed")
	}

	w.Shutdown()
}

// -----------------------------------------------------------------------------
// Test 5: Context cancellation before execution
// -----------------------------------------------------------------------------
func TestWorkerPerCore_ContextCancel(t *testing.T) {
	w, _ := NewWorkerPerCore(
		WithWorkers(1),
		WithQueueSize(1),
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := w.SubmitContext(ctx, func(_ context.Context) error { return nil })
	if !errors.Is(err, context.Canceled) {
		t.Fatalf("expected context.Canceled, got %v", err)
	}

	w.Shutdown()
}

// -----------------------------------------------------------------------------
// Test 6: Panic isolation
// -----------------------------------------------------------------------------
func TestWorkerPerCore_PanicIsolation(t *testing.T) {
	w, _ := NewWorkerPerCore(WithWorkers(1))

	_ = w.Submit(func(_ context.Context) error {
		panic("boom")
	})

	done := make(chan struct{})

	err := w.Submit(func(_ context.Context) error {
		close(done)
		return nil
	})

	if err != nil {
		t.Fatalf("unexpected submit error: %v", err)
	}

	select {
	case <-done:
	case <-time.After(50 * time.Millisecond):
		t.Fatalf("worker did not recover after panic")
	}

	w.Shutdown()
}

// -----------------------------------------------------------------------------
// Test 7: Shutdown stops accepting tasks
// -----------------------------------------------------------------------------
func TestWorkerPerCore_Shutdown(t *testing.T) {
	w, _ := NewWorkerPerCore()

	w.Shutdown()

	err := w.Submit(func(_ context.Context) error { return nil })
	if !errors.Is(err, ErrWorkerClosed) {
		t.Fatalf("expected ErrWorkerClosed, got %v", err)
	}
}

// -----------------------------------------------------------------------------
// Test 8: No goroutine leak under load
// -----------------------------------------------------------------------------
func TestWorkerPerCore_Stress(t *testing.T) {
	w, _ := NewWorkerPerCore(
		WithWorkers(4),
		WithQueueSize(10),
	)

	var wg sync.WaitGroup

	for i := 0; i < 1000; i++ {
		err := w.Submit(func(_ context.Context) error {
			wg.Done()
			time.Sleep(1 * time.Millisecond)
			return nil
		})
		if err == nil {
			wg.Add(1)
		}
	}

	wg.Wait()
	w.Shutdown()
}
