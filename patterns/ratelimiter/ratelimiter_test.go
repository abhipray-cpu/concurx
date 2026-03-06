package ratelimiter

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
// Token Bucket — FailFast behavior
// -----------------------------------------------------------------------------

func TestRateLimiter_TokenBucket_AllowsWithinBurst(t *testing.T) {
	rl, err := New(
		WithPolicy(NewTokenBucket(1, 2)),
		WithFailFast(),
	)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	defer rl.Close()

	ctx := context.Background()

	if err := rl.Allow(ctx); err != nil {
		t.Fatalf("unexpected reject")
	}
	if err := rl.Allow(ctx); err != nil {
		t.Fatalf("unexpected reject")
	}
}

func TestRateLimiter_RejectsWhenEmpty_FailFast(t *testing.T) {
	rl, _ := New(
		WithPolicy(NewSlidingWindow(1, time.Second)),
		WithFailFast(),
	)
	defer rl.Close()

	ctx := context.Background()

	_ = rl.Allow(ctx)

	err := rl.Allow(ctx)
	if !errors.Is(err, ErrRateLimited) {
		t.Fatalf("expected ErrRateLimited, got %v", err)
	}
}

//
// -----------------------------------------------------------------------------
// Delay + Timeout behavior (NON-FailFast)
// -----------------------------------------------------------------------------

func TestRateLimiter_TimesOut_WithHardDelay(t *testing.T) {
	rl, _ := New(
		WithPolicy(alwaysDelayPolicy{}),
		WithTimeout(20*time.Millisecond),
	)
	defer rl.Close()

	err := rl.Allow(context.Background())

	if !errors.Is(err, ErrRateLimitTimeout) {
		t.Fatalf("expected ErrRateLimitTimeout, got %v", err)
	}
}

func TestRateLimiter_TokenBucket_EventuallyAllows(t *testing.T) {
	rl, _ := New(
		WithPolicy(NewTokenBucket(10, 1)), // 1 token / 100ms
	)
	defer rl.Close()

	ctx := context.Background()

	_ = rl.Allow(ctx)

	err := rl.Allow(ctx)
	if err != nil {
		t.Fatalf("expected eventual allow, got %v", err)
	}
}

//
// -----------------------------------------------------------------------------
// Sliding Window
// -----------------------------------------------------------------------------

func TestRateLimiter_SlidingWindow_RejectsOverLimit_FailFast(t *testing.T) {
	rl, _ := New(
		WithPolicy(NewSlidingWindow(2, 50*time.Millisecond)),
		WithFailFast(),
	)
	defer rl.Close()

	ctx := context.Background()

	_ = rl.Allow(ctx)
	_ = rl.Allow(ctx)

	err := rl.Allow(ctx)
	if !errors.Is(err, ErrRateLimited) {
		t.Fatalf("expected rate limit")
	}
}

func TestRateLimiter_SlidingWindow_ResetsAfterWindow(t *testing.T) {
	rl, _ := New(
		WithPolicy(NewSlidingWindow(1, 30*time.Millisecond)),
	)
	defer rl.Close()

	ctx := context.Background()

	_ = rl.Allow(ctx)
	time.Sleep(35 * time.Millisecond)

	if err := rl.Allow(ctx); err != nil {
		t.Fatalf("expected allow after reset")
	}
}

//
// -----------------------------------------------------------------------------
// Context cancellation
// -----------------------------------------------------------------------------

func TestRateLimiter_ContextCancel(t *testing.T) {
	rl, _ := New(
		WithPolicy(NewTokenBucket(1, 1)),
	)
	defer rl.Close()

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := rl.Allow(ctx)
	if !errors.Is(err, context.Canceled) {
		t.Fatalf("expected context cancellation")
	}
}

//
// -----------------------------------------------------------------------------
// Execute wrapper
// -----------------------------------------------------------------------------

func TestRateLimiter_ExecuteRunsFunction(t *testing.T) {
	rl, _ := New(
		WithPolicy(NewTokenBucket(1, 1)),
	)
	defer rl.Close()

	called := false

	err := rl.Execute(context.Background(), func(ctx context.Context) error {
		called = true
		return nil
	})

	if err != nil || !called {
		t.Fatalf("execute failed")
	}
}

func TestRateLimiter_ExecuteRejectsWhenLimited_FailFast(t *testing.T) {
	rl, _ := New(
		WithPolicy(NewSlidingWindow(1, time.Second)),
		WithFailFast(),
	)
	defer rl.Close()

	ctx := context.Background()

	_ = rl.Allow(ctx)

	err := rl.Execute(ctx, func(ctx context.Context) error {
		return nil
	})

	if !errors.Is(err, ErrRateLimited) {
		t.Fatalf("expected ErrRateLimited, got %v", err)
	}
}

//
// -----------------------------------------------------------------------------
// Panic behavior
// -----------------------------------------------------------------------------

func TestRateLimiter_PanicPropagates(t *testing.T) {
	rl, _ := New(
		WithPolicy(NewTokenBucket(1, 1)),
	)
	defer rl.Close()

	defer func() {
		if recover() == nil {
			t.Fatalf("expected panic")
		}
	}()

	_ = rl.Execute(context.Background(), func(ctx context.Context) error {
		panic("boom")
	})
}

func TestRateLimiter_UsableAfterPanic(t *testing.T) {
	rl, _ := New(
		WithPolicy(NewTokenBucket(1, 1)),
	)
	defer rl.Close()

	func() {
		defer func() { _ = recover() }()
		_ = rl.Execute(context.Background(), func(ctx context.Context) error {
			panic("boom")
		})
	}()

	err := rl.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if err != nil {
		t.Fatalf("limiter corrupted after panic")
	}
}

//
// -----------------------------------------------------------------------------
// Close behavior
// -----------------------------------------------------------------------------

func TestRateLimiter_Close(t *testing.T) {
	rl, _ := New(
		WithPolicy(NewTokenBucket(1, 1)),
	)

	rl.Close()

	err := rl.Allow(context.Background())
	if !errors.Is(err, ErrRateLimiterClosed) {
		t.Fatalf("expected closed error")
	}
}

//
// -----------------------------------------------------------------------------
// Concurrency safety (upper bound, not timing)
// -----------------------------------------------------------------------------

func TestRateLimiter_ConcurrentAccess_FailFastUpperBound(t *testing.T) {
	rl, _ := New(
		WithPolicy(NewSlidingWindow(5, time.Second)),
		WithFailFast(),
	)
	defer rl.Close()

	var allowed int32
	var wg sync.WaitGroup

	for i := 0; i < 20; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			if rl.Allow(context.Background()) == nil {
				atomic.AddInt32(&allowed, 1)
			}
		}()
	}

	wg.Wait()

	if allowed > 5 {
		t.Fatalf("rate limit violated: allowed=%d", allowed)
	}
}
