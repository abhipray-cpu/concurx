package breaker

import (
	"context"
	"errors"
	"sync"
	"sync/atomic"
	"testing"
	"time"
)

// -----------------------------------------------------------------------------
// Construction & Validation
// -----------------------------------------------------------------------------

func TestCircuitBreaker_InvalidOptions(t *testing.T) {
	_, err := New(
		WithFailureThreshold(0),
	)
	if err == nil {
		t.Fatalf("expected error for invalid failure threshold")
	}
}

// -----------------------------------------------------------------------------
// CLOSED state behavior
// -----------------------------------------------------------------------------

func TestCircuitBreaker_AllowsInitially(t *testing.T) {
	cb, _ := New(
		WithFailureThreshold(3),
		WithOpenTimeout(50*time.Millisecond),
	)

	err := cb.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
}

func TestCircuitBreaker_FailureIncrementsButDoesNotOpenEarly(t *testing.T) {
	cb, _ := New(
		WithFailureThreshold(3),
	)

	_ = cb.Execute(context.Background(), func(ctx context.Context) error {
		return errors.New("fail")
	})

	err := cb.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if err != nil {
		t.Fatalf("circuit opened prematurely")
	}
}

// -----------------------------------------------------------------------------
// CLOSED → OPEN
// -----------------------------------------------------------------------------

func TestCircuitBreaker_OpensAtFailureThreshold(t *testing.T) {
	cb, _ := New(
		WithFailureThreshold(2),
	)

	_ = cb.Execute(context.Background(), func(ctx context.Context) error {
		return errors.New("fail")
	})
	_ = cb.Execute(context.Background(), func(ctx context.Context) error {
		return errors.New("fail")
	})

	err := cb.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if !errors.Is(err, ErrCircuitOpen) {
		t.Fatalf("expected circuit open, got %v", err)
	}
}

// -----------------------------------------------------------------------------
// OPEN state
// -----------------------------------------------------------------------------

func TestCircuitBreaker_OpenRejectsImmediately(t *testing.T) {
	cb, _ := New(
		WithFailureThreshold(1),
	)

	_ = cb.Execute(context.Background(), func(ctx context.Context) error {
		return errors.New("fail")
	})

	start := time.Now()
	err := cb.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if !errors.Is(err, ErrCircuitOpen) {
		t.Fatalf("expected ErrCircuitOpen")
	}
	if time.Since(start) > time.Millisecond {
		t.Fatalf("open circuit should not block")
	}
}

// -----------------------------------------------------------------------------
// OPEN → HALF-OPEN
// -----------------------------------------------------------------------------

func TestCircuitBreaker_TransitionsToHalfOpenAfterTimeout(t *testing.T) {
	cb, _ := New(
		WithFailureThreshold(1),
		WithOpenTimeout(20*time.Millisecond),
	)

	_ = cb.Execute(context.Background(), func(ctx context.Context) error {
		return errors.New("fail")
	})

	time.Sleep(25 * time.Millisecond)

	err := cb.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if err != nil {
		t.Fatalf("expected half-open trial call")
	}
}

// -----------------------------------------------------------------------------
// HALF-OPEN behavior
// -----------------------------------------------------------------------------

func TestCircuitBreaker_HalfOpenFailureReopens(t *testing.T) {
	cb, _ := New(
		WithFailureThreshold(1),
		WithOpenTimeout(20*time.Millisecond),
	)

	_ = cb.Execute(context.Background(), func(ctx context.Context) error {
		return errors.New("fail")
	})

	time.Sleep(25 * time.Millisecond)

	_ = cb.Execute(context.Background(), func(ctx context.Context) error {
		return errors.New("fail again")
	})

	err := cb.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if !errors.Is(err, ErrCircuitOpen) {
		t.Fatalf("expected reopen after half-open failure")
	}
}

func TestCircuitBreaker_HalfOpenSuccessCloses(t *testing.T) {
	cb, _ := New(
		WithFailureThreshold(1),
		WithSuccessThreshold(2),
		WithOpenTimeout(20*time.Millisecond),
	)

	_ = cb.Execute(context.Background(), func(ctx context.Context) error {
		return errors.New("fail")
	})

	time.Sleep(25 * time.Millisecond)

	_ = cb.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})
	_ = cb.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	err := cb.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if err != nil {
		t.Fatalf("expected closed circuit, got %v", err)
	}
}

// -----------------------------------------------------------------------------
// Panic behavior
// -----------------------------------------------------------------------------

func TestCircuitBreaker_PanicPropagates(t *testing.T) {
	cb, _ := New()

	defer func() {
		if recover() == nil {
			t.Fatalf("expected panic")
		}
	}()

	_ = cb.Execute(context.Background(), func(ctx context.Context) error {
		panic("boom")
	})
}

func TestCircuitBreaker_UsableAfterPanic(t *testing.T) {
	cb, _ := New(
		WithFailureThreshold(2),
	)

	func() {
		defer func() { _ = recover() }()
		_ = cb.Execute(context.Background(), func(ctx context.Context) error {
			panic("boom")
		})
	}()

	err := cb.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if err != nil {
		t.Fatalf("breaker corrupted after panic")
	}
}

// -----------------------------------------------------------------------------
// Concurrency & race safety
// -----------------------------------------------------------------------------

func TestCircuitBreaker_ConcurrentFailuresOpenOnce(t *testing.T) {
	cb, _ := New(
		WithFailureThreshold(5),
	)

	var wg sync.WaitGroup
	for i := 0; i < 20; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = cb.Execute(context.Background(), func(ctx context.Context) error {
				return errors.New("fail")
			})
		}()
	}
	wg.Wait()

	err := cb.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if !errors.Is(err, ErrCircuitOpen) {
		t.Fatalf("expected open circuit after concurrent failures")
	}
}

func TestCircuitBreaker_ConcurrentOpenDoesNotExecuteFn(t *testing.T) {
	cb, _ := New(
		WithFailureThreshold(1),
	)

	_ = cb.Execute(context.Background(), func(ctx context.Context) error {
		return errors.New("fail")
	})

	var executed int32
	var wg sync.WaitGroup

	for i := 0; i < 20; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = cb.Execute(context.Background(), func(ctx context.Context) error {
				atomic.AddInt32(&executed, 1)
				return nil
			})
		}()
	}
	wg.Wait()

	if executed != 0 {
		t.Fatalf("fn executed while circuit open")
	}
}
