package retry

import (
	"context"
	"errors"
	"testing"
	"time"
)

// -----------------------------------------------------------------------------
// Benchmark 1: Successful call (no retries)
// Measures baseline overhead
// -----------------------------------------------------------------------------
func BenchmarkRetry_Success_NoRetry(b *testing.B) {
	for i := 0; i < b.N; i++ {
		_ = Retry(context.Background(), func(ctx context.Context) error {
			return nil
		})
	}
}

// -----------------------------------------------------------------------------
// Benchmark 2: One retry then success
// -----------------------------------------------------------------------------
func BenchmarkRetry_SingleRetry(b *testing.B) {
	for i := 0; i < b.N; i++ {
		attempt := 0
		_ = Retry(context.Background(), func(ctx context.Context) error {
			attempt++
			if attempt == 1 {
				return errors.New("temporary")
			}
			return nil
		}, WithMaxAttempts(2))
	}
}

// -----------------------------------------------------------------------------
// Benchmark 3: Exhausted retries
// Worst-case retry cost
// -----------------------------------------------------------------------------
func BenchmarkRetry_Exhausted(b *testing.B) {
	for i := 0; i < b.N; i++ {
		_ = Retry(context.Background(), func(ctx context.Context) error {
			return errors.New("fail")
		}, WithMaxAttempts(5))
	}
}

// -----------------------------------------------------------------------------
// Benchmark 4: Retry with backoff
// Measures sleep / scheduling overhead
// -----------------------------------------------------------------------------
func BenchmarkRetry_WithBackoff(b *testing.B) {
	for i := 0; i < b.N; i++ {
		_ = Retry(context.Background(), func(ctx context.Context) error {
			return errors.New("rate limited")
		},
			WithMaxAttempts(3),
			WithBackoff(ConstantBackoff(1*time.Millisecond)),
		)
	}
}

// -----------------------------------------------------------------------------
// Benchmark 5: Context cancellation fast-path
// -----------------------------------------------------------------------------
func BenchmarkRetry_ContextCanceled(b *testing.B) {
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	for i := 0; i < b.N; i++ {
		_ = Retry(ctx, func(ctx context.Context) error {
			return nil
		})
	}
}
