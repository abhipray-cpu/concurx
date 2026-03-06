package workergroup

import (
	"context"
	"sync"
	"sync/atomic"
	"testing"
	"time"
)

/* ---------- helpers ---------- */

func shortCtx() (context.Context, context.CancelFunc) {
	return context.WithTimeout(context.Background(), 2*time.Second)
}

func noopHooks() Hooks {
	return Hooks{}
}

/* ---------- config validation ---------- */

func TestWorkerGroup_InvalidConfig(t *testing.T) {
	tests := []struct {
		name string
		cfg  Config
	}{
		{"zero_workers", Config{Workers: 0}},
		{"negative_workers", Config{Workers: -1}},
		{"negative_queue", Config{Workers: 1, QueueSize: -1}},
		{"invalid_submit_behavior", Config{Workers: 1, SubmitBehavior: 99}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if _, err := New(tt.cfg, noopHooks()); err == nil {
				t.Fatalf("expected config error")
			}
		})
	}
}

/* ---------- basic execution ---------- */

func TestWorkerGroup_JobsRun(t *testing.T) {
	wg, err := New(Config{
		Workers:   2,
		QueueSize: 10,
	}, noopHooks())
	if err != nil {
		t.Fatalf("new failed: %v", err)
	}

	ctx, cancel := shortCtx()
	defer cancel()

	var ran int32
	for i := 0; i < 5; i++ {
		err := wg.Submit(ctx, func(ctx context.Context) error {
			atomic.AddInt32(&ran, 1)
			return nil
		})
		if err != nil {
			t.Fatalf("submit failed: %v", err)
		}
	}

	wg.Stop()

	if atomic.LoadInt32(&ran) != 5 {
		t.Fatalf("expected 5 jobs to run")
	}
}

/* ---------- submit behavior ---------- */

func TestWorkerGroup_SubmitReject(t *testing.T) {
	wg, _ := New(Config{
		Workers:        1,
		QueueSize:      1,
		SubmitBehavior: SubmitReject,
	}, noopHooks())

	ctx, cancel := shortCtx()
	defer cancel()

	block := make(chan struct{})

	_ = wg.Submit(ctx, func(ctx context.Context) error {
		<-block
		return nil
	})

	if err := wg.Submit(ctx, func(ctx context.Context) error { return nil }); err == nil {
		t.Fatalf("expected ErrQueueFull")
	}

	close(block)
	wg.Stop()
}

func TestWorkerGroup_SubmitBlock(t *testing.T) {
	wg, _ := New(Config{
		Workers:        1,
		QueueSize:      0, // unbuffered
		SubmitBehavior: SubmitBlock,
	}, noopHooks())

	ctx, cancel := shortCtx()
	defer cancel()

	started := make(chan struct{})
	release := make(chan struct{})

	go func() {
		_ = wg.Submit(ctx, func(ctx context.Context) error {
			close(started)
			<-release
			return nil
		})
	}()

	<-started

	done := make(chan struct{})
	go func() {
		_ = wg.Submit(ctx, func(ctx context.Context) error { return nil })
		close(done)
	}()

	time.Sleep(20 * time.Millisecond)

	select {
	case <-done:
		t.Fatalf("submit should block")
	default:
	}

	close(release)
	<-done
	wg.Stop()
}

/* ---------- shutdown ---------- */

func TestWorkerGroup_Stop_Idempotent(t *testing.T) {
	wg, _ := New(Config{Workers: 1}, noopHooks())
	wg.Stop()
	wg.Stop() // must not panic
}

/* ---------- concurrency ---------- */

func TestWorkerGroup_ConcurrentSubmit(t *testing.T) {
	wg, _ := New(Config{
		Workers:   4,
		QueueSize: 100,
	}, noopHooks())

	ctx, cancel := shortCtx()
	defer cancel()

	var submitWG sync.WaitGroup
	var ran int32

	for i := 0; i < 50; i++ {
		submitWG.Add(1)
		go func() {
			defer submitWG.Done()
			_ = wg.Submit(ctx, func(ctx context.Context) error {
				atomic.AddInt32(&ran, 1)
				return nil
			})
		}()
	}

	submitWG.Wait()
	wg.Stop()

	if atomic.LoadInt32(&ran) != 50 {
		t.Fatalf("expected all jobs to run")
	}
}

/* ---------- panic isolation ---------- */

func TestWorkerGroup_PanicIsolation(t *testing.T) {
	wg, _ := New(Config{Workers: 1}, noopHooks())

	ctx, cancel := shortCtx()
	defer cancel()

	_ = wg.Submit(ctx, func(ctx context.Context) error {
		panic("boom")
	})

	var ran int32
	_ = wg.Submit(ctx, func(ctx context.Context) error {
		atomic.AddInt32(&ran, 1)
		return nil
	})

	wg.Stop()

	if ran != 1 {
		t.Fatalf("panic should not kill worker")
	}
}

/* ---------- submit after stop ---------- */

func TestWorkerGroup_SubmitAfterStop(t *testing.T) {
	wg, _ := New(Config{Workers: 1}, noopHooks())
	wg.Stop()

	ctx, cancel := shortCtx()
	defer cancel()

	if err := wg.Submit(ctx, func(ctx context.Context) error { return nil }); err == nil {
		t.Fatalf("expected submit failure after stop")
	}
}
