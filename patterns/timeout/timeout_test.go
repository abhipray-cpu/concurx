package timeout

import (
	"context"
	"errors"
	"sync"
	"sync/atomic"
	"testing"
	"time"
)

// -----------------------------------------------------------------------------
// Test 1: Completes within timeout
// -----------------------------------------------------------------------------
func TestTimeout_SuccessWithinDeadline(t *testing.T) {
	err := Timeout(
		context.Background(),
		func(ctx context.Context) error {
			time.Sleep(10 * time.Millisecond)
			return nil
		},
		WithTimeout(50*time.Millisecond),
	)

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
}

// -----------------------------------------------------------------------------
// Test 2: Times out
// -----------------------------------------------------------------------------
func TestTimeout_DeadlineExceeded(t *testing.T) {
	err := Timeout(
		context.Background(),
		func(ctx context.Context) error {
			time.Sleep(50 * time.Millisecond)
			return nil
		},
		WithTimeout(10*time.Millisecond),
	)

	if !errors.Is(err, ErrTimeout) {
		t.Fatalf("expected ErrTimeout, got %v", err)
	}
}

// -----------------------------------------------------------------------------
// Test 3: Parent context cancel wins
// -----------------------------------------------------------------------------
func TestTimeout_ParentContextCancelWins(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := Timeout(
		ctx,
		func(ctx context.Context) error {
			time.Sleep(20 * time.Millisecond)
			return nil
		},
		WithTimeout(50*time.Millisecond),
	)

	if !errors.Is(err, context.Canceled) {
		t.Fatalf("expected context.Canceled, got %v", err)
	}
}

// -----------------------------------------------------------------------------
// Test 4: Parent deadline wins over wrapper timeout
// -----------------------------------------------------------------------------
func TestTimeout_ParentDeadlineWins(t *testing.T) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Millisecond)
	defer cancel()

	err := Timeout(
		ctx,
		func(ctx context.Context) error {
			time.Sleep(50 * time.Millisecond)
			return nil
		},
		WithTimeout(100*time.Millisecond),
	)

	if !errors.Is(err, context.DeadlineExceeded) {
		t.Fatalf("expected parent deadline exceeded, got %v", err)
	}
}

// -----------------------------------------------------------------------------
// Test 5: Child context is canceled on timeout
// -----------------------------------------------------------------------------
func TestTimeout_CancelsChildContext(t *testing.T) {
	done := make(chan struct{})

	err := Timeout(
		context.Background(),
		func(ctx context.Context) error {
			<-ctx.Done()
			close(done)
			return ctx.Err()
		},
		WithTimeout(10*time.Millisecond),
	)

	<-done

	if !errors.Is(err, ErrTimeout) {
		t.Fatalf("expected ErrTimeout, got %v", err)
	}
}

// -----------------------------------------------------------------------------
// Test 6: Panic propagates
// -----------------------------------------------------------------------------
func TestTimeout_PanicConvertedToError(t *testing.T) {
	err := Timeout(
		context.Background(),
		func(ctx context.Context) error {
			panic("boom")
		},
		WithTimeout(50*time.Millisecond),
	)

	if !errors.Is(err, ErrTimeout) {
		t.Fatalf("expected ErrTimeoutPanic, got %v", err)
	}
}

// -----------------------------------------------------------------------------
// Test 7: Concurrency isolation
// -----------------------------------------------------------------------------
func TestTimeout_ConcurrentIndependence(t *testing.T) {
	var ok int32
	var timedOut int32

	var wg sync.WaitGroup

	for i := 0; i < 100; i++ {
		wg.Add(1)

		go func(i int) {
			defer wg.Done()

			err := Timeout(
				context.Background(),
				func(ctx context.Context) error {
					if i%2 == 0 {
						time.Sleep(5 * time.Millisecond)
					} else {
						time.Sleep(50 * time.Millisecond)
					}
					return nil
				},
				WithTimeout(10*time.Millisecond),
			)

			if err == nil {
				atomic.AddInt32(&ok, 1)
			} else if errors.Is(err, ErrTimeout) {
				atomic.AddInt32(&timedOut, 1)
			}
		}(i)
	}

	wg.Wait()

	if ok == 0 || timedOut == 0 {
		t.Fatalf("expected mix of success and timeout, got ok=%d timeout=%d", ok, timedOut)
	}
}

// -----------------------------------------------------------------------------
// Test 8: Invalid options rejected
// -----------------------------------------------------------------------------
func TestTimeout_InvalidTimeoutRejected(t *testing.T) {
	err := Timeout(
		context.Background(),
		func(ctx context.Context) error {
			return nil
		},
		WithTimeout(0),
	)

	if !errors.Is(err, ErrInvalidTimeoutOptions) {
		t.Fatalf("expected ErrInvalidTimeoutOptions, got %v", err)
	}
}

// -----------------------------------------------------------------------------
// Test 9: Nil function rejected
// -----------------------------------------------------------------------------
func TestTimeout_NilFunctionRejected(t *testing.T) {
	err := Timeout(
		context.Background(),
		nil,
		WithTimeout(10*time.Millisecond),
	)

	if !errors.Is(err, ErrInvalidTimeoutOptions) {
		t.Fatalf("expected ErrInvalidTimeoutOptions, got %v", err)
	}
}
