package bulkhead

import (
	"context"
	"sync"
	"testing"
	"time"
)

// ------------------------------------------------------------
// Concurrent execution stress
// ------------------------------------------------------------

func TestBulkhead_Race_ConcurrentExecute(t *testing.T) {
	bh, _ := NewBulkhead(
		WithCapacity(4),
		WithQueueSize(8),
	)

	var wg sync.WaitGroup

	for i := 0; i < 50; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = bh.Execute(context.Background(), func(ctx context.Context) error {
				time.Sleep(1 * time.Millisecond)
				return nil
			})
		}()
	}

	wg.Wait()
}

// ------------------------------------------------------------
// Context cancel during execution
// ------------------------------------------------------------

func TestBulkhead_Race_ContextCancelMidExecution(t *testing.T) {
	bh, _ := NewBulkhead(
		WithCapacity(2),
	)

	ctx, cancel := context.WithCancel(context.Background())

	var wg sync.WaitGroup

	// Cancel shortly after execution begins
	go func() {
		time.Sleep(5 * time.Millisecond)
		cancel()
	}()

	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = bh.Execute(ctx, func(ctx context.Context) error {
				select {
				case <-ctx.Done():
					return ctx.Err()
				case <-time.After(10 * time.Millisecond):
					return nil
				}
			})
		}()
	}

	wg.Wait()
}

// ------------------------------------------------------------
// Panic isolation under concurrency
// ------------------------------------------------------------

func TestBulkhead_Race_PanicIsolation(t *testing.T) {
	bh, _ := NewBulkhead(
		WithCapacity(2),
	)

	var wg sync.WaitGroup

	for i := 0; i < 20; i++ {
		wg.Add(1)
		go func(i int) {
			defer wg.Done()

			_ = bh.Execute(context.Background(), func(ctx context.Context) error {
				if i%3 == 0 {
					panic("boom")
				}
				return nil
			})
		}(i)
	}

	wg.Wait()
}

// ------------------------------------------------------------
// Queue pressure stress
// ------------------------------------------------------------

func TestBulkhead_Race_QueuePressure(t *testing.T) {
	bh, _ := NewBulkhead(
		WithCapacity(1),
		WithQueueSize(1),
	)

	var wg sync.WaitGroup

	for i := 0; i < 20; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = bh.Execute(context.Background(), func(ctx context.Context) error {
				time.Sleep(2 * time.Millisecond)
				return nil
			})
		}()
	}

	wg.Wait()
}

// ------------------------------------------------------------
// Mass cancellation
// ------------------------------------------------------------

func TestBulkhead_Race_MassCancel(t *testing.T) {
	bh, _ := NewBulkhead(
		WithCapacity(4),
	)

	var wg sync.WaitGroup

	for i := 0; i < 20; i++ {
		ctx, cancel := context.WithCancel(context.Background())
		cancel() // cancel BEFORE execute

		wg.Add(1)
		go func(ctx context.Context) {
			defer wg.Done()
			_ = bh.Execute(ctx, func(ctx context.Context) error {
				time.Sleep(10 * time.Millisecond)
				return nil
			})
		}(ctx)
	}

	wg.Wait()
}
