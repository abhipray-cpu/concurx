package pipeline

import (
	"context"
	"sync/atomic"
	"testing"
	"time"
)

//
// -----------------------------------------------------------------------------
// Benchmark helpers
// -----------------------------------------------------------------------------

func makeInput[T any](n int, v T) <-chan T {
	ch := make(chan T, n)
	for i := 0; i < n; i++ {
		ch <- v
	}
	close(ch)
	return ch
}

func drain[T any](ch <-chan T) {
	for range ch {
	}
}

//
// -----------------------------------------------------------------------------
// 1. Baseline: single stage, trivial transform
// -----------------------------------------------------------------------------

func BenchmarkPipeline_SingleStage(b *testing.B) {
	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		return v, nil
	})

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		in := makeInput(1024, 1)
		out, _ := Pipeline(context.Background(), in, []Stage{stage})
		drain(out)
	}
}

//
// -----------------------------------------------------------------------------
// 2. Multi-stage pipeline (realistic processing chain)
// -----------------------------------------------------------------------------

func BenchmarkPipeline_MultiStage(b *testing.B) {
	stage1 := NewStage(func(ctx context.Context, v any) (any, error) {
		return v.(int) + 1, nil
	})
	stage2 := NewStage(func(ctx context.Context, v any) (any, error) {
		return v.(int) * 2, nil
	})
	stage3 := NewStage(func(ctx context.Context, v any) (any, error) {
		return v.(int) - 3, nil
	})

	stages := []Stage{stage1, stage2, stage3}

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		in := makeInput(1024, 1)
		out, _ := Pipeline(context.Background(), in, stages)
		drain(out)
	}
}

//
// -----------------------------------------------------------------------------
// 3. Backpressure cost (slow consumer)
// -----------------------------------------------------------------------------

func BenchmarkPipeline_Backpressure(b *testing.B) {
	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		time.Sleep(10 * time.Microsecond)
		return v, nil
	})

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		in := makeInput(256, 1)
		out, _ := Pipeline(context.Background(), in, []Stage{stage})

		for range out {
			time.Sleep(10 * time.Microsecond)
		}
	}
}

//
// -----------------------------------------------------------------------------
// 4. High fan-in (large input stream)
// -----------------------------------------------------------------------------

func BenchmarkPipeline_HighFanIn(b *testing.B) {
	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		return v, nil
	})

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		in := makeInput(10_000, 1)
		out, _ := Pipeline(context.Background(), in, []Stage{stage})
		drain(out)
	}
}

//
// -----------------------------------------------------------------------------
// 5. Fail-fast cost (early error)
// -----------------------------------------------------------------------------

func BenchmarkPipeline_FailFast(b *testing.B) {
	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		if v.(int) == 5 {
			return nil, ErrStageFailed
		}
		return v, nil
	})

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		in := makeInput(1024, 1)
		out, _ := Pipeline(context.Background(), in, []Stage{stage})
		drain(out)
	}
}

//
// -----------------------------------------------------------------------------
// 6. Cancellation propagation latency
// -----------------------------------------------------------------------------

func BenchmarkPipeline_Cancellation(b *testing.B) {
	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		select {
		case <-ctx.Done():
			return nil, ctx.Err()
		case <-time.After(50 * time.Microsecond):
			return v, nil
		}
	})

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		ctx, cancel := context.WithCancel(context.Background())
		in := make(chan int)

		out, _ := Pipeline(ctx, in, []Stage{stage})

		go func() {
			in <- 1
			in <- 2
			cancel()
			close(in)
		}()

		drain(out)
	}
}

//
// -----------------------------------------------------------------------------
// 7. Panic isolation overhead
// -----------------------------------------------------------------------------

func BenchmarkPipeline_PanicIsolation(b *testing.B) {
	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		panic("boom")
	})

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		in := makeInput(1, 1)
		out, _ := Pipeline(context.Background(), in, []Stage{stage})
		drain(out)
	}
}

//
// -----------------------------------------------------------------------------
// 8. Throughput under contention (atomic side effects)
// -----------------------------------------------------------------------------

func BenchmarkPipeline_Contention(b *testing.B) {
	var counter int64

	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		atomic.AddInt64(&counter, 1)
		return v, nil
	})

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		in := makeInput(1024, 1)
		out, _ := Pipeline(context.Background(), in, []Stage{stage})
		drain(out)
	}
}
