package workerpercore

import (
	"context"
	"testing"
	"time"
)

// -----------------------------------------------------------------------------
// Benchmark 1: Baseline submit + execute
//
// Measures:
//   - Submission overhead
//   - Worker scheduling cost
//
// -----------------------------------------------------------------------------
func BenchmarkWorkerPerCore_Submit(b *testing.B) {
	w, _ := NewWorkerPerCore(
		WithWorkers(4),
		WithQueueSize(100),
	)
	defer w.Shutdown()

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = w.Submit(func(_ context.Context) error { return nil })
	}
}

// -----------------------------------------------------------------------------
// Benchmark 2: CPU-bound workload
//
// Measures:
//   - Worker throughput
//   - Scheduling under load
//
// -----------------------------------------------------------------------------
func BenchmarkWorkerPerCore_CPUWork(b *testing.B) {
	w, _ := NewWorkerPerCore(
		WithWorkers(4),
		WithQueueSize(100),
	)
	defer w.Shutdown()

	work := func(_ context.Context) error {
		x := 0
		for i := 0; i < 1000; i++ {
			x += i
		}
		_ = x
		return nil
	}

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = w.Submit(work)
	}
}

// -----------------------------------------------------------------------------
// Benchmark 3: Blocking queue behavior
//
// Measures:
//   - Backpressure cost
//   - Queue contention
//
// -----------------------------------------------------------------------------
func BenchmarkWorkerPerCore_BlockingQueue(b *testing.B) {
	w, _ := NewWorkerPerCore(
		WithWorkers(1),
		WithQueueSize(10),
	)
	defer w.Shutdown()

	work := func(_ context.Context) error {
		time.Sleep(100 * time.Microsecond)
		return nil
	}

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = w.Submit(work)
	}
}

// -----------------------------------------------------------------------------
// Benchmark 4: Fail-fast queue
//
// Measures:
//   - Rejection path cost
//
// -----------------------------------------------------------------------------
func BenchmarkWorkerPerCore_FailFast(b *testing.B) {
	w, _ := NewWorkerPerCore(
		WithWorkers(1),
		WithQueueSize(0),
		WithFailFast(),
	)
	defer w.Shutdown()

	block := make(chan struct{})

	// occupy worker
	_ = w.Submit(func(_ context.Context) error {
		<-block
		return nil
	})

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = w.Submit(func(_ context.Context) error { return nil })
	}

	close(block)
}
