package timeout

import (
	"context"
	"testing"
	"time"
)

// -----------------------------------------------------------------------------
// Benchmark 1: Baseline (no timeout)
// -----------------------------------------------------------------------------
func BenchmarkTimeout_NoWrapper(b *testing.B) {
	fn := func(ctx context.Context) error {
		return nil
	}

	ctx := context.Background()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_ = fn(ctx)
	}
}

// -----------------------------------------------------------------------------
// Benchmark 2: Timeout wrapper (fast success)
// -----------------------------------------------------------------------------
func BenchmarkTimeout_FastSuccess(b *testing.B) {
	ctx := context.Background()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_ = Timeout(
			ctx,
			func(ctx context.Context) error {
				return nil
			},
			WithTimeout(50*time.Millisecond),
		)
	}
}

// -----------------------------------------------------------------------------
// Benchmark 3: Timeout expiry path
// -----------------------------------------------------------------------------
func BenchmarkTimeout_Expiry(b *testing.B) {
	ctx := context.Background()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_ = Timeout(
			ctx,
			func(ctx context.Context) error {
				time.Sleep(100 * time.Millisecond)
				return nil
			},
			WithTimeout(1*time.Millisecond),
		)
	}
}

// -----------------------------------------------------------------------------
// Benchmark 4: High concurrency
// -----------------------------------------------------------------------------
func BenchmarkTimeout_Parallel(b *testing.B) {
	ctx := context.Background()

	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			_ = Timeout(
				ctx,
				func(ctx context.Context) error {
					return nil
				},
				WithTimeout(10*time.Millisecond),
			)
		}
	})
}

// -----------------------------------------------------------------------------
// Benchmark 5: Panic path
// -----------------------------------------------------------------------------
func BenchmarkTimeout_Panic(b *testing.B) {
	ctx := context.Background()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_ = Timeout(
			ctx,
			func(ctx context.Context) error {
				panic("boom")
			},
			WithTimeout(10*time.Millisecond),
		)
	}
}
