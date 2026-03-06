package ratelimiter

import (
	"context"
	"testing"
	"time"
)

// -----------------------------------------------------------------------------
// Benchmark: TokenBucket Allow()
// -----------------------------------------------------------------------------

func BenchmarkRateLimiter_TokenBucket_Allow(b *testing.B) {
	rl, err := New(
		WithPolicy(NewTokenBucket(1000, 1000)),
	)
	if err != nil {
		b.Fatal(err)
	}
	defer rl.Close()

	ctx := context.Background()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_ = rl.Allow(ctx)
	}
}

// -----------------------------------------------------------------------------
// Benchmark: TokenBucket with Execute()
// -----------------------------------------------------------------------------

func BenchmarkRateLimiter_TokenBucket_Execute(b *testing.B) {
	rl, err := New(
		WithPolicy(NewTokenBucket(1000, 1000)),
	)
	if err != nil {
		b.Fatal(err)
	}
	defer rl.Close()

	ctx := context.Background()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_ = rl.Execute(ctx, func(context.Context) error {
			return nil
		})
	}
}

// -----------------------------------------------------------------------------
// Benchmark: Sliding Window (FailFast)
// -----------------------------------------------------------------------------

func BenchmarkRateLimiter_SlidingWindow_FailFast(b *testing.B) {
	rl, err := New(
		WithPolicy(NewSlidingWindow(1000, time.Second)),
		WithFailFast(),
	)
	if err != nil {
		b.Fatal(err)
	}
	defer rl.Close()

	ctx := context.Background()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_ = rl.Allow(ctx)
	}
}

// -----------------------------------------------------------------------------
// Benchmark: Timeout + Delay
// -----------------------------------------------------------------------------

func BenchmarkRateLimiter_Timeout_Delay(b *testing.B) {
	rl, err := New(
		WithPolicy(alwaysDelayPolicy{}),
		WithTimeout(10*time.Millisecond),
	)
	if err != nil {
		b.Fatal(err)
	}
	defer rl.Close()

	ctx := context.Background()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_ = rl.Allow(ctx)
	}
}
