package throttler

import (
	"context"
	"sync/atomic"
	"testing"
	"time"
)

func BenchmarkThrottler_AllowOnly(b *testing.B) {
	th, _ := NewThrottler(
		NewSimpleRatePolicy(1000),
	)

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = th.Execute(context.Background(), func(ctx context.Context) error {
			return nil
		})
	}
}

func BenchmarkThrottler_Contention(b *testing.B) {
	th, _ := NewThrottler(
		NewSimpleRatePolicy(10),
	)

	b.ResetTimer()

	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			_ = th.Execute(context.Background(), func(ctx context.Context) error {
				time.Sleep(10 * time.Microsecond)
				return nil
			})
		}
	})
}

func BenchmarkThrottler_RejectHeavy(b *testing.B) {
	th, _ := NewThrottler(
		NewSimpleRatePolicy(1),
	)

	var rejected int64

	b.ResetTimer()

	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			err := th.Execute(context.Background(), func(ctx context.Context) error {
				time.Sleep(50 * time.Microsecond)
				return nil
			})
			if err != nil {
				atomic.AddInt64(&rejected, 1)
			}
		}
	})

	b.ReportMetric(float64(rejected), "rejected")
}

func BenchmarkThrottler_DelayPolicy(b *testing.B) {
	var used int32

	policy := ThrottlePolicyFunc{
		DecideFn: func(ctx context.Context) (ThrottleDecision, time.Duration) {
			if atomic.CompareAndSwapInt32(&used, 0, 1) {
				return ThrottleDelay, 1 * time.Millisecond
			}
			return ThrottleAllow, 0
		},
		ObserveFn: func(success bool, latency time.Duration) {},
	}

	th, _ := NewThrottler(policy)

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = th.Execute(context.Background(), func(ctx context.Context) error {
			return nil
		})
	}
}
