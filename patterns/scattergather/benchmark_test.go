package scatter

import (
	"context"
	"testing"
	"time"
)

// -----------------------------------------------------------------------------
// Benchmark: AllSuccessPolicy (baseline)
// -----------------------------------------------------------------------------

func BenchmarkScatterGather_AllSuccess(b *testing.B) {
	ctx := context.Background()

	branches := make([]func(context.Context) (int, error), 32)
	for i := range branches {
		branches[i] = func(ctx context.Context) (int, error) {
			return 1, nil
		}
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, err := ScatterGather(
			ctx,
			branches,
			NewAllSuccessPolicy(len(branches)),
			WithConcurrency(8),
		)
		if err != nil {
			b.Fatal(err)
		}
	}
}

// -----------------------------------------------------------------------------
// Benchmark: Concurrency scaling
// -----------------------------------------------------------------------------

func BenchmarkScatterGather_ConcurrencyScaling(b *testing.B) {
	branches := make([]func(context.Context) (int, error), 64)
	for i := range branches {
		branches[i] = func(ctx context.Context) (int, error) {
			time.Sleep(1 * time.Millisecond)
			return 1, nil
		}
	}

	for _, conc := range []int{1, 2, 4, 8, 16} {
		b.Run("concurrency="+itoa(conc), func(b *testing.B) {
			for i := 0; i < b.N; i++ {
				_, err := ScatterGather(
					context.Background(),
					branches,
					NewAllSuccessPolicy(len(branches)),
					WithConcurrency(conc),
				)
				if err != nil {
					b.Fatal(err)
				}
			}
		})
	}
}

// -----------------------------------------------------------------------------
// Benchmark: FirstSuccessPolicy (early termination)
// -----------------------------------------------------------------------------

func BenchmarkScatterGather_FirstSuccess(b *testing.B) {
	branches := []func(context.Context) (int, error){
		func(ctx context.Context) (int, error) {
			time.Sleep(50 * time.Millisecond)
			return 1, nil
		},
		func(ctx context.Context) (int, error) {
			time.Sleep(1 * time.Millisecond)
			return 42, nil
		},
		func(ctx context.Context) (int, error) {
			time.Sleep(50 * time.Millisecond)
			return 3, nil
		},
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, err := ScatterGather(
			context.Background(),
			branches,
			NewFirstSuccessPolicy(),
			WithConcurrency(3),
		)
		if err != nil {
			b.Fatal(err)
		}
	}
}

// -----------------------------------------------------------------------------
// Benchmark: MinSuccessPolicy (quorum-style)
// -----------------------------------------------------------------------------

func BenchmarkScatterGather_MinSuccess(b *testing.B) {
	branches := make([]func(context.Context) (int, error), 20)
	for i := range branches {
		if i%3 == 0 {
			branches[i] = func(ctx context.Context) (int, error) {
				return 0, ErrTaskFailed
			}
		} else {
			branches[i] = func(ctx context.Context) (int, error) {
				return 1, nil
			}
		}
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, err := ScatterGather(
			context.Background(),
			branches,
			NewMinSuccessPolicy(len(branches), 10),
			WithConcurrency(6),
		)
		if err != nil {
			b.Fatal(err)
		}
	}
}

// -----------------------------------------------------------------------------
// tiny helper (avoids fmt in benchmarks)
// -----------------------------------------------------------------------------

func itoa(n int) string {
	if n == 0 {
		return "0"
	}
	buf := [10]byte{}
	i := len(buf)
	for n > 0 {
		i--
		buf[i] = byte('0' + n%10)
		n /= 10
	}
	return string(buf[i:])
}
