package group

import (
	"context"
	"runtime"
	"sync"
	"sync/atomic"
	"testing"
	"time"
)

// shortTask: minimal work (returns immediately)
func shortTask() func(ctx context.Context) error {
	return func(ctx context.Context) error {
		return nil
	}
}

// busyTask: simulates a small amount of work (non-zero duration)
func busyTask(d time.Duration) func(ctx context.Context) error {
	return func(ctx context.Context) error {
		select {
		case <-time.After(d):
			return nil
		case <-ctx.Done():
			return ctx.Err()
		}
	}
}

// ---------- Benchmarks ----------

// 1) Go() scheduling cost with no semaphore and very short tasks.
func BenchmarkGo_NoSemaphore_ShortTasks(b *testing.B) {
	b.ReportAllocs()
	for i := 0; i < b.N; i++ {
		// create a fresh group per iteration to measure per-task cost
		g := New().(*groupImpl)
		// schedule one task and wait
		g.Go(shortTask())
		_ = g.Wait()
	}
}

// 2) Go() scheduling cost with semaphore (moderate concurrency).
func BenchmarkGo_WithSemaphore_ShortTasks(b *testing.B) {
	b.ReportAllocs()
	concurrency := runtime.GOMAXPROCS(0)
	for i := 0; i < b.N; i++ {
		g := New(WithMaxConcurrency(concurrency)).(*groupImpl)

		// schedule concurrency tasks and wait — measure scheduling cost under semaphore
		var wg sync.WaitGroup
		wg.Add(concurrency)
		for j := 0; j < concurrency; j++ {
			g.Go(func(ctx context.Context) error {
				// quick signal
				wg.Done()
				return nil
			})
		}
		// wait for these to finish (synchronization)
		wg.Wait()
		_ = g.Wait()
	}
}

// 3) Go() scheduling with heavier tasks (to see amortized scheduling cost)
func BenchmarkGo_WithSemaphore_LongTasks(b *testing.B) {
	b.ReportAllocs()
	concurrency := runtime.GOMAXPROCS(0)
	taskDuration := 500 * time.Microsecond // tune to simulate small work

	for i := 0; i < b.N; i++ {
		g := New(WithMaxConcurrency(concurrency)).(*groupImpl)

		for j := 0; j < concurrency; j++ {
			g.Go(busyTask(taskDuration))
		}
		_ = g.Wait()
	}
}

// 4) TryGo: measure success path and failure under contention.
// We'll measure success path when no semaphore (acts like Go), and also run a contention scenario separately.
func BenchmarkTryGo_NoSemaphore(b *testing.B) {
	b.ReportAllocs()
	for i := 0; i < b.N; i++ {
		g := New().(*groupImpl)
		ok := g.TryGo(shortTask())
		if !ok {
			b.Fatalf("TryGo unexpected reject")
		}
		_ = g.Wait()
	}
}

// 4b) TryGo under contention (small semaphore). We measure accepted/rejected counts.
func BenchmarkTryGo_WithContention(b *testing.B) {
	b.ReportAllocs()
	const cap = 2
	for i := 0; i < b.N; i++ {
		// create group with very small concurrency to force some TryGo rejections
		g := New(WithMaxConcurrency(cap)).(*groupImpl)

		var accepted int32
		var attempts int32 = 100 // number of attempts in this iteration

		// spawn attempts concurrently
		var wg sync.WaitGroup
		wg.Add(int(attempts))
		for a := 0; a < int(attempts); a++ {
			go func() {
				defer wg.Done()
				if g.TryGo(busyTask(200 * time.Microsecond)) {
					atomic.AddInt32(&accepted, 1)
				}
			}()
		}

		wg.Wait()
		_ = g.Wait()
		// we don't assert accepted value (it's just to exercise TryGo)
		_ = accepted
	}
}

// 5) BlockingGo: measure the caller blocking path for acquiring semaphore.
// If BlockingGo returns error on cancel, we ignore it.
func BenchmarkBlockingGo_AcquireLatency(b *testing.B) {
	b.ReportAllocs()
	const cap = 4

	for i := 0; i < b.N; i++ {
		g := New(WithMaxConcurrency(cap)).(*groupImpl)
		var wg sync.WaitGroup
		wg.Add(cap)

		// fill the semaphore to force blocking
		for j := 0; j < cap; j++ {
			g.Go(busyTask(1 * time.Millisecond))
		}

		// now call BlockingGo in parallel to measure blocking + scheduling overhead
		var inner sync.WaitGroup
		inner.Add(cap)
		for j := 0; j < cap; j++ {
			go func() {
				defer inner.Done()
				_ = g.BlockingGo(shortTask())
			}()
		}
		inner.Wait()
		_ = g.Wait()
	}
}

// 6) Wait() overhead when many tasks finish — useful to measure wait/wg coordination cost.
func BenchmarkWait_Overhead(b *testing.B) {
	b.ReportAllocs()
	const tasks = 1000

	for i := 0; i < b.N; i++ {
		g := New().(*groupImpl)
		for t := 0; t < tasks; t++ {
			g.Go(shortTask())
		}
		// measure Wait cost
		b.StartTimer()
		_ = g.Wait()
		b.StopTimer()
	}
}
