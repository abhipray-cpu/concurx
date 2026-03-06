package bulkhead

import (
	"context"
	"errors"
	"sync"
	"sync/atomic"
	"testing"
	"time"
)

//
// -----------------------------------------------------------------------------
// BASIC SEMANTICS
// -----------------------------------------------------------------------------

func TestBulkhead_AllowsUpToCapacity(t *testing.T) {
	b, err := NewBulkhead(
		WithCapacity(2),
	)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	var running int32
	var maxRunning int32

	fn := func(ctx context.Context) error {
		cur := atomic.AddInt32(&running, 1)
		if cur > atomic.LoadInt32(&maxRunning) {
			atomic.StoreInt32(&maxRunning, cur)
		}
		time.Sleep(20 * time.Millisecond)
		atomic.AddInt32(&running, -1)
		return nil
	}

	var wg sync.WaitGroup
	for i := 0; i < 5; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = b.Execute(context.Background(), fn)
		}()
	}

	wg.Wait()

	if maxRunning > 2 {
		t.Fatalf("capacity exceeded: %d", maxRunning)
	}
}

//
// -----------------------------------------------------------------------------
// FAIL-FAST SEMANTICS
// -----------------------------------------------------------------------------

func TestBulkhead_FailFastRejectsWhenFull(t *testing.T) {
	b, err := NewBulkhead(
		WithCapacity(1),
		WithFailFast(),
	)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	block := make(chan struct{})

	go func() {
		_ = b.Execute(context.Background(), func(ctx context.Context) error {
			<-block
			return nil
		})
	}()

	time.Sleep(10 * time.Millisecond)

	err = b.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if err == nil {
		t.Fatalf("expected rejection when bulkhead is full")
	}

	close(block)
}

//
// -----------------------------------------------------------------------------
// BLOCKING QUEUE SEMANTICS
// -----------------------------------------------------------------------------

func TestBulkhead_BlockingQueue(t *testing.T) {
	b, err := NewBulkhead(
		WithCapacity(1),
		WithQueueSize(1),
	)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	started := make(chan struct{})
	release := make(chan struct{})

	go func() {
		_ = b.Execute(context.Background(), func(ctx context.Context) error {
			close(started)
			<-release
			return nil
		})
	}()

	<-started

	done := make(chan struct{})
	go func() {
		_ = b.Execute(context.Background(), func(ctx context.Context) error {
			close(done)
			return nil
		})
	}()

	select {
	case <-done:
		t.Fatalf("should have blocked due to queue")
	case <-time.After(20 * time.Millisecond):
	}

	close(release)

	select {
	case <-done:
	case <-time.After(50 * time.Millisecond):
		t.Fatalf("queued request never executed")
	}
}

//
// -----------------------------------------------------------------------------
// TIMEOUT SEMANTICS
// -----------------------------------------------------------------------------

func TestBulkhead_Timeout(t *testing.T) {
	b, err := NewBulkhead(
		WithCapacity(1),
		WithTimeout(20*time.Millisecond),
	)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	block := make(chan struct{})

	go func() {
		_ = b.Execute(context.Background(), func(ctx context.Context) error {
			<-block
			return nil
		})
	}()

	time.Sleep(5 * time.Millisecond)

	err = b.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if err == nil {
		t.Fatalf("expected timeout")
	}

	close(block)
}

//
// -----------------------------------------------------------------------------
// PANIC ISOLATION
// -----------------------------------------------------------------------------

func TestBulkhead_PanicIsolation(t *testing.T) {
	b, err := NewBulkhead(
		WithCapacity(1),
	)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	err = b.Execute(context.Background(), func(ctx context.Context) error {
		panic("boom")
	})

	if !errors.Is(err, ErrBulkheadPanic) {
		t.Fatalf("expected ErrBulkheadPanic, got %v", err)
	}

	// Ensure bulkhead still works after panic
	err = b.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if err != nil {
		t.Fatalf("bulkhead broken after panic: %v", err)
	}
}

//
// -----------------------------------------------------------------------------
// CONTEXT CANCELLATION
// -----------------------------------------------------------------------------

func TestBulkhead_ContextCancel(t *testing.T) {
	b, err := NewBulkhead(
		WithCapacity(1),
	)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err = b.Execute(ctx, func(ctx context.Context) error {
		return nil
	})

	if !errors.Is(err, context.Canceled) {
		t.Fatalf("expected context cancellation error")
	}
}
