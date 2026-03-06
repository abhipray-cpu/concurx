package retry

import (
	"context"
	"errors"
	"sync/atomic"
	"testing"
	"time"
)

//
// -----------------------------------------------------------------------------
// 1. Correctness – happy path
// -----------------------------------------------------------------------------

func TestRetry_SuccessFirstAttempt(t *testing.T) {
	var attempts int32

	err := Retry(context.Background(), func(ctx context.Context) error {
		atomic.AddInt32(&attempts, 1)
		return nil
	},
		WithMaxAttempts(3),
	)

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if attempts != 1 {
		t.Fatalf("expected 1 attempt, got %d", attempts)
	}
}

func TestRetry_SucceedsAfterRetries(t *testing.T) {
	var attempts int32

	err := Retry(context.Background(), func(ctx context.Context) error {
		n := atomic.AddInt32(&attempts, 1)
		if n < 3 {
			return errors.New("temporary")
		}
		return nil
	},
		WithMaxAttempts(5),
		WithRetryIf(func(err error) bool { return true }),
	)

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if attempts != 3 {
		t.Fatalf("expected 3 attempts, got %d", attempts)
	}
}

//
// -----------------------------------------------------------------------------
// 2. Exhaustion
// -----------------------------------------------------------------------------

func TestRetry_Exhausted(t *testing.T) {
	var attempts int32

	err := Retry(context.Background(), func(ctx context.Context) error {
		atomic.AddInt32(&attempts, 1)
		return errors.New("always fails")
	},
		WithMaxAttempts(3),
		WithRetryIf(func(err error) bool { return true }),
	)

	if !errors.Is(err, ErrRetryExhausted) {
		t.Fatalf("expected ErrRetryExhausted, got %v", err)
	}

	if attempts != 3 {
		t.Fatalf("expected 3 attempts, got %d", attempts)
	}
}

//
// -----------------------------------------------------------------------------
// 3. Retry predicate
// -----------------------------------------------------------------------------

func TestRetry_NonRetryableError(t *testing.T) {
	var attempts int32
	sentinel := errors.New("fatal")

	err := Retry(context.Background(), func(ctx context.Context) error {
		atomic.AddInt32(&attempts, 1)
		return sentinel
	},
		WithMaxAttempts(5),
		WithRetryIf(func(err error) bool {
			return err != sentinel
		}),
	)

	if !errors.Is(err, sentinel) {
		t.Fatalf("expected original error, got %v", err)
	}

	if attempts != 1 {
		t.Fatalf("expected 1 attempt, got %d", attempts)
	}
}

//
// -----------------------------------------------------------------------------
// 4. Context semantics
// -----------------------------------------------------------------------------

func TestRetry_ContextCanceledBeforeStart(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := Retry(ctx, func(ctx context.Context) error {
		t.Fatal("should not be called")
		return nil
	})

	if !errors.Is(err, ErrRetryCanceled) {
		t.Fatalf("expected ErrRetryCanceled, got %v", err)
	}
}

func TestRetry_ContextCanceledDuringRetry(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	var attempts int32

	err := Retry(ctx, func(ctx context.Context) error {
		n := atomic.AddInt32(&attempts, 1)
		if n == 2 {
			cancel()
		}
		return errors.New("retry")
	},
		WithMaxAttempts(5),
		WithRetryIf(func(err error) bool { return true }),
	)

	if !errors.Is(err, ErrRetryCanceled) {
		t.Fatalf("expected ErrRetryCanceled, got %v", err)
	}

	if attempts < 2 {
		t.Fatalf("expected at least 2 attempts, got %d", attempts)
	}
}

//
// -----------------------------------------------------------------------------
// 5. MaxDuration
// -----------------------------------------------------------------------------

func TestRetry_MaxDurationExceeded(t *testing.T) {
	start := time.Now()

	err := Retry(context.Background(), func(ctx context.Context) error {
		time.Sleep(20 * time.Millisecond)
		return errors.New("retry")
	},
		WithMaxAttempts(100),
		WithRetryIf(func(err error) bool { return true }),
		WithMaxDuration(50*time.Millisecond),
	)

	if !errors.Is(err, ErrRetryTimeout) {
		t.Fatalf("expected ErrRetryTimeout, got %v", err)
	}

	if time.Since(start) > 150*time.Millisecond {
		t.Fatalf("retry exceeded reasonable duration")
	}
}

//
// -----------------------------------------------------------------------------
// 6. Panic semantics
// -----------------------------------------------------------------------------

func TestRetry_PanicPropagates(t *testing.T) {
	defer func() {
		if r := recover(); r == nil {
			t.Fatalf("expected panic to propagate")
		}
	}()

	_ = Retry(context.Background(), func(ctx context.Context) error {
		panic("boom")
	})
}

func TestRetry_PanicAfterRetries(t *testing.T) {
	var attempts int32

	defer func() {
		if r := recover(); r == nil {
			t.Fatalf("expected panic to propagate")
		}
	}()

	_ = Retry(context.Background(), func(ctx context.Context) error {
		n := atomic.AddInt32(&attempts, 1)
		if n == 3 {
			panic("boom")
		}
		return errors.New("retry")
	},
		WithMaxAttempts(5),
		WithRetryIf(func(err error) bool { return true }),
	)
}

//
// -----------------------------------------------------------------------------
// 7. Validation
// -----------------------------------------------------------------------------

func TestRetry_InvalidOptions(t *testing.T) {
	err := Retry(context.Background(), func(ctx context.Context) error {
		return nil
	},
		WithMaxAttempts(0),
	)

	if !errors.Is(err, ErrRetryInvalid) {
		t.Fatalf("expected ErrRetryInvalid, got %v", err)
	}
}

func TestRetry_NilFunction(t *testing.T) {
	err := Retry(context.Background(), nil)

	if !errors.Is(err, ErrRetryInvalid) {
		t.Fatalf("expected ErrRetryInvalid, got %v", err)
	}
}

//
// -----------------------------------------------------------------------------
// 8. Stress / no leaks
// -----------------------------------------------------------------------------

func TestRetry_Stress(t *testing.T) {
	for i := 0; i < 1000; i++ {
		_ = Retry(context.Background(), func(ctx context.Context) error {
			return nil
		})
	}
}
