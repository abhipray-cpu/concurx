package workergroup

import (
	"context"
	"sync"
	"sync/atomic"
	"testing"
	"time"
)

// ------------------------------------------------------------
// RACE TESTS
// Run with: go test ./workergroup -race -run TestRace
// ------------------------------------------------------------

// 1. Concurrent Submit from many goroutines
func TestRace_WorkerGroup_ConcurrentSubmit(t *testing.T) {
	wg, err := New(Config{
		Workers:   4,
		QueueSize: 100,
	}, noopHooks())
	if err != nil {
		t.Fatal(err)
	}

	ctx := context.Background()

	var submitters sync.WaitGroup
	for i := 0; i < 10; i++ {
		submitters.Add(1)
		go func() {
			defer submitters.Done()
			for j := 0; j < 100; j++ {
				_ = wg.Submit(ctx, func(ctx context.Context) error { return nil })
			}
		}()
	}

	submitters.Wait()
	wg.Stop()
}

// ------------------------------------------------------------

// 2. Submit racing with Stop
func TestRace_WorkerGroup_SubmitWhileStop(t *testing.T) {
	wg, err := New(Config{
		Workers:   2,
		QueueSize: 10,
	}, noopHooks())
	if err != nil {
		t.Fatal(err)
	}

	ctx := context.Background()

	go func() {
		for i := 0; i < 1000; i++ {
			_ = wg.Submit(ctx, func(ctx context.Context) error { return nil })
		}
	}()

	time.Sleep(5 * time.Millisecond)
	wg.Stop()
}

// ------------------------------------------------------------

// 3. Panic isolation under race
func TestRace_WorkerGroup_PanicIsolation(t *testing.T) {
	wg, err := New(Config{
		Workers:   2,
		QueueSize: 10,
	}, noopHooks())
	if err != nil {
		t.Fatal(err)
	}

	ctx := context.Background()

	for i := 0; i < 100; i++ {
		_ = wg.Submit(ctx, func(ctx context.Context) error {
			panic("boom")
		})
		_ = wg.Submit(ctx, func(ctx context.Context) error { return nil })
	}

	wg.Stop()
}

// ------------------------------------------------------------

// 4. Queue pressure with SubmitReject
func TestRace_WorkerGroup_SubmitReject(t *testing.T) {
	cfg := Config{
		Workers:        1,
		QueueSize:      1,
		SubmitBehavior: SubmitReject,
	}

	wg, err := New(cfg, noopHooks())
	if err != nil {
		t.Fatal(err)
	}

	ctx := context.Background()

	block := func(ctx context.Context) error {
		time.Sleep(5 * time.Millisecond)
		return nil
	}

	_ = wg.Submit(ctx, block)

	var callers sync.WaitGroup
	for i := 0; i < 10; i++ {
		callers.Add(1)
		go func() {
			defer callers.Done()
			for j := 0; j < 100; j++ {
				_ = wg.Submit(ctx, func(ctx context.Context) error { return nil })
			}
		}()
	}

	callers.Wait()
	wg.Stop()
}

// ------------------------------------------------------------

// 5. Hooks must be race-safe
func TestRace_WorkerGroup_Hooks(t *testing.T) {
	var workerStarts int64
	var jobStarts int64
	var panics int64

	hooks := Hooks{
		OnWorkerStart: func(workerID int) {
			atomic.AddInt64(&workerStarts, 1)
		},
		OnJobStart: func(workerID int) {
			atomic.AddInt64(&jobStarts, 1)
		},
		OnJobPanic: func(workerID int, v any) {
			atomic.AddInt64(&panics, 1)
		},
	}

	wg, err := New(Config{
		Workers:   4,
		QueueSize: 50,
	}, hooks)
	if err != nil {
		t.Fatal(err)
	}

	ctx := context.Background()

	for i := 0; i < 500; i++ {
		_ = wg.Submit(ctx, func(ctx context.Context) error { return nil })
		_ = wg.Submit(ctx, func(ctx context.Context) error {
			panic("boom")
		})
	}

	wg.Stop()
}

// ------------------------------------------------------------

// 6. Stop called concurrently
func TestRace_WorkerGroup_StopConcurrent(t *testing.T) {
	wg, err := New(Config{
		Workers:   2,
		QueueSize: 10,
	}, noopHooks())
	if err != nil {
		t.Fatal(err)
	}

	ctx := context.Background()

	for i := 0; i < 10; i++ {
		_ = wg.Submit(ctx, func(ctx context.Context) error {
			time.Sleep(10 * time.Millisecond)
			return nil
		})
	}

	var stoppers sync.WaitGroup
	for i := 0; i < 5; i++ {
		stoppers.Add(1)
		go func() {
			defer stoppers.Done()
			wg.Stop()
		}()
	}

	stoppers.Wait()
}
