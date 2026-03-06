package mapreduce

import (
	"context"
	"testing"
)

func BenchmarkMapReduce_1k(b *testing.B) {
	ctx := context.Background()
	in := make([]int, 1000)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, _ = MapReduce(
			ctx,
			in,
			func(ctx context.Context, v int) (int, error) {
				return v + 1, nil
			},
			func(acc int, v int) int {
				return acc + v
			},
			0,
			WithParallelism(8),
		)
	}
}

func BenchmarkMapReduce_10k(b *testing.B) {
	ctx := context.Background()
	in := make([]int, 10_000)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, _ = MapReduce(
			ctx,
			in,
			func(ctx context.Context, v int) (int, error) {
				return v + 1, nil
			},
			func(acc int, v int) int {
				return acc + v
			},
			0,
			WithParallelism(16),
		)
	}
}
