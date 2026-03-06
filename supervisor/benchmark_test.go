package supervisor

import (
	"context"
	"errors"
	"fmt"
	"testing"
	"time"
)

// -------------------- helpers --------------------

func benchFailFastChild(id string) ChildSpec {
	return ChildSpec{
		ID: id,
		Run: func(ctx context.Context) error {
			return errors.New("fail")
		},
		Mode: RestartModePermanent,
	}
}

func benchBlockingChild(id string) ChildSpec {
	return ChildSpec{
		ID: id,
		Run: func(ctx context.Context) error {
			<-ctx.Done()
			return ctx.Err()
		},
	}
}

// -------------------- benchmarks --------------------

// A. Startup & registration cost
func BenchmarkSupervisor_StartStop(b *testing.B) {
	for _, n := range []int{1, 10, 100} {
		b.Run(fmt.Sprintf("children=%d", n), func(b *testing.B) {
			for i := 0; i < b.N; i++ {
				s := New()
				for j := 0; j < n; j++ {
					_ = s.Add(benchBlockingChild(fmt.Sprintf("c-%d", j)))
				}

				ctx, cancel := context.WithCancel(context.Background())
				_ = s.Start(ctx)
				cancel()
				_ = s.Stop(context.Background())
			}
		})
	}
}

// B. Failure handling (permanent restart)
func BenchmarkSupervisor_FailureHandling(b *testing.B) {
	s := New()
	_ = s.Add(benchFailFastChild("failer"))

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	_ = s.Start(ctx)

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		s.handleFailure(FailureEvent{
			ChildID: "failer",
			Err:     errors.New("boom"),
			Attempt: i + 1,
		})
	}
}

// C. Strategy overhead
func BenchmarkStrategy_OnFailure(b *testing.B) {
	strategies := []struct {
		name string
		s    Strategy
	}{
		{"OneForOne", NewOneForOne()},
		{"AllForOne", NewAllForOne()},
		{"FuncStrategy", FuncStrategy(func(string, error, int) (RestartAction, time.Duration) {
			return RestartOne, 0
		})},
	}

	for _, tt := range strategies {
		b.Run(tt.name, func(b *testing.B) {
			for i := 0; i < b.N; i++ {
				_, _ = tt.s.OnFailure("x", errors.New("err"), i+1)
			}
		})
	}
}

// D. Hooks overhead
func BenchmarkSupervisor_Hooks(b *testing.B) {
	hooks := Hooks{
		OnChildStart:   func(string) {},
		OnChildRestart: func(string, int, error) {},
		OnChildStop:    func(string, error) {},
	}

	b.Run("hooks-disabled", func(b *testing.B) {
		s := New()
		_ = s.Add(benchFailFastChild("x"))
		ctx, cancel := context.WithCancel(context.Background())
		defer cancel()
		_ = s.Start(ctx)

		b.ResetTimer()
		for i := 0; i < b.N; i++ {
			s.handleFailure(FailureEvent{ChildID: "x", Err: errors.New("e"), Attempt: i + 1})
		}
	})

	b.Run("hooks-enabled", func(b *testing.B) {
		s := New(WithHooks(hooks))
		_ = s.Add(benchFailFastChild("x"))
		ctx, cancel := context.WithCancel(context.Background())
		defer cancel()
		_ = s.Start(ctx)

		b.ResetTimer()
		for i := 0; i < b.N; i++ {
			s.handleFailure(FailureEvent{ChildID: "x", Err: errors.New("e"), Attempt: i + 1})
		}
	})
}
