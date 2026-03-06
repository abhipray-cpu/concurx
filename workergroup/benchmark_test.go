package workergroup

import (
	"context"
	"sync/atomic"
	"testing"
	"time"
)

// --------------------
// Helpers
// --------------------

func benchConfig(workers int) Config {
	return Config{
		Workers:        workers,
		QueueSize:      1024,
		SubmitBehavior: SubmitBlock,
	}
}

// --------------------
// 1. Submit + Execute throughput
// --------------------

func BenchmarkWorkerGroup_SubmitAndRun(b *testing.B) {
	wg, err := New(benchConfig(8), noopHooks())
	if err != nil {
		b.Fatalf("new failed: %v", err)
	}
	defer wg.Stop()

	ctx := context.Background()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		err := wg.Submit(ctx, func(ctx context.Context) error { return nil })
		if err != nil {
			b.Fatalf("submit failed: %v", err)
		}
	}
}

// --------------------
// 2. Submit-only overhead (queue pressure)
// --------------------

func BenchmarkWorkerGroup_SubmitOnly(b *testing.B) {
	cfg := Config{
		Workers:        4,
		QueueSize:      64,
		SubmitBehavior: SubmitReject,
	}

	wg, err := New(cfg, noopHooks())
	if err != nil {
		b.Fatalf("new failed: %v", err)
	}
	defer wg.Stop()

	ctx := context.Background()
	job := func(ctx context.Context) error { return nil }

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_ = wg.Submit(ctx, job) // may reject, that's fine
	}
}

// --------------------
// 3. Panic isolation cost
// --------------------

func BenchmarkWorkerGroup_PanicIsolation(b *testing.B) {
	wg, err := New(benchConfig(1), noopHooks())
	if err != nil {
		b.Fatalf("new failed: %v", err)
	}
	defer wg.Stop()

	ctx := context.Background()

	var ran int32

	panicJob := func(ctx context.Context) error {
		panic("boom")
	}

	okJob := func(ctx context.Context) error {
		atomic.AddInt32(&ran, 1)
		return nil
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_ = wg.Submit(ctx, panicJob)
		_ = wg.Submit(ctx, okJob)
	}

	// Allow workers to drain
	time.Sleep(10 * time.Millisecond)
}

// --------------------
// Optional: SubmitReject behavior
// --------------------

func BenchmarkWorkerGroup_SubmitReject(b *testing.B) {
	cfg := benchConfig(2)
	cfg.QueueSize = 1
	cfg.SubmitBehavior = SubmitReject

	wg, err := New(cfg, noopHooks())
	if err != nil {
		b.Fatalf("new failed: %v", err)
	}
	defer wg.Stop()

	ctx := context.Background()

	blocking := func(ctx context.Context) error {
		time.Sleep(10 * time.Millisecond)
		return nil
	}

	// Fill workers
	_ = wg.Submit(ctx, blocking)
	_ = wg.Submit(ctx, blocking)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_ = wg.Submit(ctx, func(ctx context.Context) error { return nil })
	}
}
