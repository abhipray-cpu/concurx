package fanout

import (
	"context"
	"errors"
	"testing"
	"time"
)

// --------------------
// Helpers
// --------------------

func benchInputs(n int) []int {
	in := make([]int, n)
	for i := 0; i < n; i++ {
		in[i] = i
	}
	return in
}

// --------------------
// 1. Baseline: CPU-bound work
// --------------------

func BenchmarkFanOut_CPU(b *testing.B) {
	ctx := context.Background()
	inputs := benchInputs(1024)

	work := func(_ context.Context, v int) (int, error) {
		x := v
		for i := 0; i < 100; i++ {
			x = x*31 + i
		}
		return x, nil
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, err := FanOut(
			ctx,
			inputs,
			work,
			WithConcurrency(8),
		)
		if err != nil {
			b.Fatal(err)
		}
	}
}

// --------------------
// 2. Ordered vs unordered comparison
// --------------------

func BenchmarkFanOut_PreserveOrder(b *testing.B) {
	ctx := context.Background()
	inputs := benchInputs(1024)

	work := func(_ context.Context, v int) (int, error) {
		return v * 2, nil
	}

	b.Run("ordered", func(b *testing.B) {
		for i := 0; i < b.N; i++ {
			_, err := FanOut(
				ctx,
				inputs,
				work,
				WithConcurrency(8),
				WithPreserveOrder(),
			)
			if err != nil {
				b.Fatal(err)
			}
		}
	})

	b.Run("unordered", func(b *testing.B) {
		for i := 0; i < b.N; i++ {
			_, err := FanOut(
				ctx,
				inputs,
				work,
				WithConcurrency(8),
			)
			if err != nil {
				b.Fatal(err)
			}
		}
	})
}

// --------------------
// 3. Fail-fast path
// --------------------

func BenchmarkFanOut_FailFast(b *testing.B) {
	ctx := context.Background()
	inputs := benchInputs(256)

	work := func(_ context.Context, v int) (int, error) {
		if v == 3 {
			return 0, errors.New("boom")
		}
		time.Sleep(50 * time.Microsecond)
		return v, nil
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, _ = FanOut(
			ctx,
			inputs,
			work,
			WithConcurrency(8),
			WithFailFast(),
		)
	}
}

// --------------------
// 4. Timeout overhead
// --------------------

func BenchmarkFanOut_Timeout(b *testing.B) {
	ctx := context.Background()
	inputs := benchInputs(128)

	work := func(_ context.Context, v int) (int, error) {
		time.Sleep(200 * time.Microsecond)
		return v, nil
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, _ = FanOut(
			ctx,
			inputs,
			work,
			WithConcurrency(4),
			WithTimeout(100*time.Microsecond),
		)
	}
}
