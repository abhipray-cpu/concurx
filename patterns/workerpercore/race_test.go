package workerpercore

import (
	"context"
	"sync"
	"testing"
	"time"
)

// -----------------------------------------------------------------------------
// Race Test 1: Concurrent submit + execution
// -----------------------------------------------------------------------------
func TestWorkerPerCore_Race_SubmitExecute(t *testing.T) {
	w, _ := NewWorkerPerCore(
		WithWorkers(4),
		WithQueueSize(50),
	)
	defer w.Shutdown()

	var wg sync.WaitGroup

	for i := 0; i < 100; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = w.Submit(func(_ context.Context) error {
				time.Sleep(1 * time.Millisecond)
				return nil
			})
		}()
	}

	wg.Wait()
}

// -----------------------------------------------------------------------------
// Race Test 2: Panic isolation under concurrency
// -----------------------------------------------------------------------------
func TestWorkerPerCore_Race_PanicIsolation(t *testing.T) {
	w, _ := NewWorkerPerCore(
		WithWorkers(2),
		WithQueueSize(20),
	)
	defer w.Shutdown()

	var wg sync.WaitGroup

	for i := 0; i < 50; i++ {
		wg.Add(1)
		go func(i int) {
			defer wg.Done()
			_ = w.Submit(func(_ context.Context) error {
				if i%5 == 0 {
					panic("boom")
				}
				return nil
			})
		}(i)
	}

	wg.Wait()

	// Must still accept work
	done := make(chan struct{})
	_ = w.Submit(func(_ context.Context) error {
		close(done)
		return nil
	})

	select {
	case <-done:
	case <-time.After(50 * time.Millisecond):
		t.Fatalf("worker pool corrupted after panic")
	}
}

// -----------------------------------------------------------------------------
// Race Test 3: Concurrent shutdown + submit
// -----------------------------------------------------------------------------
func TestWorkerPerCore_Race_Shutdown(t *testing.T) {
	w, _ := NewWorkerPerCore(
		WithWorkers(2),
		WithQueueSize(10),
	)

	var wg sync.WaitGroup

	for i := 0; i < 20; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = w.Submit(func(_ context.Context) error {
				time.Sleep(1 * time.Millisecond)
				return nil
			})
		}()
	}

	time.Sleep(5 * time.Millisecond)
	w.Shutdown()

	wg.Wait()
}

// -----------------------------------------------------------------------------
// Race Test 4: Context cancellation
// -----------------------------------------------------------------------------
func TestWorkerPerCore_Race_ContextCancel(t *testing.T) {
	w, _ := NewWorkerPerCore(
		WithWorkers(1),
		WithQueueSize(5),
	)
	defer w.Shutdown()

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := w.SubmitContext(ctx, func(_ context.Context) error { return nil })
	if err == nil {
		t.Fatalf("expected cancellation error")
	}
}
