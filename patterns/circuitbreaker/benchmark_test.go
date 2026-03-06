package breaker

import (
	"context"
	"errors"
	"testing"
	"time"
)

var errFail = errors.New("fail")

// -----------------------------------------------------------------------------
// Benchmark 1: Steady-state success (closed circuit)
//
// Measures:
//   - Minimal overhead when downstream is healthy
//   - Hot-path cost
//
// -----------------------------------------------------------------------------
func BenchmarkCircuitBreaker_ClosedSuccess(b *testing.B) {
	cb, _ := New(
		WithFailureThreshold(5),
	)

	ctx := context.Background()

	ok := func(ctx context.Context) error {
		return nil
	}

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = cb.Execute(ctx, ok)
	}
}

// -----------------------------------------------------------------------------
// Benchmark 2: Failure path before open
//
// Measures:
//   - Error handling overhead
//   - Failure counting cost
//
// -----------------------------------------------------------------------------
func BenchmarkCircuitBreaker_FailureBeforeOpen(b *testing.B) {
	cb, _ := New(
		WithFailureThreshold(b.N + 1), // never open
	)

	ctx := context.Background()

	fail := func(ctx context.Context) error {
		return errFail
	}

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = cb.Execute(ctx, fail)
	}
}

// -----------------------------------------------------------------------------
// Benchmark 3: Open circuit fast-fail
//
// Measures:
//   - Fast rejection cost
//   - No function execution
//
// -----------------------------------------------------------------------------
func BenchmarkCircuitBreaker_OpenFastFail(b *testing.B) {
	cb, _ := New(
		WithFailureThreshold(1),
		WithOpenTimeout(time.Second),
	)

	ctx := context.Background()

	fail := func(ctx context.Context) error {
		return errFail
	}

	// Trip the circuit
	_ = cb.Execute(ctx, fail)

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = cb.Execute(ctx, fail)
	}
}

// -----------------------------------------------------------------------------
// Benchmark 4: Half-open success recovery
//
// Measures:
//   - Cost of half-open probe
//   - Transition overhead
//
// -----------------------------------------------------------------------------
func BenchmarkCircuitBreaker_HalfOpenRecovery(b *testing.B) {
	cb, _ := New(
		WithFailureThreshold(1),
		WithOpenTimeout(1*time.Nanosecond),
	)

	ctx := context.Background()

	fail := func(ctx context.Context) error {
		return errFail
	}
	ok := func(ctx context.Context) error {
		return nil
	}

	// Open circuit
	_ = cb.Execute(ctx, fail)

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = cb.Execute(ctx, ok)
	}
}

// -----------------------------------------------------------------------------
// Benchmark 5: Parallel contention
//
// Measures:
//   - Atomic contention
//   - Lock-free behavior under load
//
// -----------------------------------------------------------------------------
func BenchmarkCircuitBreaker_Parallel(b *testing.B) {
	cb, _ := New(
		WithFailureThreshold(10),
	)

	ctx := context.Background()

	ok := func(ctx context.Context) error {
		return nil
	}

	b.ResetTimer()

	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			_ = cb.Execute(ctx, ok)
		}
	})
}
