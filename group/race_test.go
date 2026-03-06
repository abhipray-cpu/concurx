package group

import (
	"context"
	"errors"
	"strconv"
	"sync"
	"testing"
	"time"
)

// NOTE: these race tests are intentionally aggressive — run them with -race.
//
// go test -race ./group -run TestGroupRace -v

// TestGroupRace_ConcurrentGoAndWait spawns many goroutines calling Go() while
// other goroutines call Wait(). This exercise verifies the wg/Add/Wait ordering
// and ensures no "WaitGroup reused" panic or data race.
func TestGroupRace_ConcurrentGoAndWait(t *testing.T) {
	const iters = 200
	fl := newFakeLogger()
	fm := newFakeMetrics()

	for run := 0; run < 5; run++ {
		g := New(WithLogger(fl), WithMetrics(fm)).(*groupImpl)

		// coordinator for tasks: tasks block until we close Proceed
		c := newCoord(iters)

		// spawn goroutines that call Go
		var sp sync.WaitGroup
		sp.Add(iters)
		for i := 0; i < iters; i++ {
			iCopy := i
			go func() {
				defer sp.Done()
				g.Go(successTask(iCopy, c))
			}()
		}

		// spawn Wait callers concurrently
		var waitWg sync.WaitGroup
		waitWg.Add(3)
		for i := 0; i < 3; i++ {
			go func() {
				defer waitWg.Done()
				// each Wait should not panic and should eventually return nil
				_ = g.Wait()
			}()
		}

		// let some goroutines enqueue and then release them
		time.Sleep(20 * time.Millisecond)
		close(c.Proceed)

		// ensure all Go spawns finished (they may be blocked internally on sem)
		sp.Wait()

		// finally call Wait for main goroutine to ensure cleanup
		if err := g.Wait(); err != nil {
			t.Fatalf("expected nil, got %v", err)
		}

		waitWg.Wait()
	}
}

// TestGroupRace_ConcurrentGoAndCancel runs many concurrent Go() calls and cancels the group
// concurrently to ensure scheduling/cancel path is race-free.
func TestGroupRace_ConcurrentGoAndCancel(t *testing.T) {
	const goroutines = 300
	fl := newFakeLogger()
	fm := newFakeMetrics()
	g := New(WithLogger(fl), WithMetrics(fm)).(*groupImpl)

	// create many tasks that check ctx done
	var wg sync.WaitGroup
	wg.Add(goroutines)
	for i := 0; i < goroutines; i++ {
		// capture loop var
		go func(i int) {
			defer wg.Done()
			g.Go(func(ctx context.Context) error {
				select {
				case <-ctx.Done():
					return ctx.Err()
				case <-time.After(10 * time.Millisecond):
					return nil
				}
			})
		}(i)
	}

	// cancel concurrently while scheduling is in flight
	time.Sleep(5 * time.Millisecond)
	g.cancel()

	// wait for spawners to finish
	wg.Wait()

	// Wait must return (either nil or the first error) without races
	_ = g.Wait()
}

// TestGroupRace_ConcurrentTryBlockingGo mixes TryGo, BlockingGo, and Go concurrently.
// Useful when you implemented all three scheduling APIs.
func TestGroupRace_ConcurrentTryBlockingGo(t *testing.T) {
	const tasks = 200
	fl := newFakeLogger()
	fm := newFakeMetrics()

	g := New(WithLogger(fl), WithMetrics(fm), WithMaxConcurrency(5)).(*groupImpl)
	c := newCoord(tasks)

	var sp sync.WaitGroup
	sp.Add(tasks)

	for i := 0; i < tasks; i++ {
		iCopy := i
		go func() {
			defer sp.Done()
			// randomize scheduling variant
			switch iCopy % 3 {
			case 0:
				// TryGo: ignore return (may fail)
				_ = g.TryGo(successTask(iCopy, c))
			case 1:
				// BlockingGo: if it returns error, ignore
				_ = g.BlockingGo(successTask(iCopy, c))
			default:
				// Go (non-blocking)
				g.Go(successTask(iCopy, c))
			}
		}()
	}

	// allow some to start, then release them
	time.Sleep(20 * time.Millisecond)
	close(c.Proceed)

	sp.Wait()
	_ = g.Wait()
}

// TestGroupRace_FirstErrorRace ensures only the first observed application error is stored
// when many tasks fail concurrently. This checks firstError.once usage.
func TestGroupRace_FirstErrorRace(t *testing.T) {
	const n = 200
	fl := newFakeLogger()
	fm := newFakeMetrics()
	g := New(WithLogger(fl), WithMetrics(fm)).(*groupImpl)

	var wg sync.WaitGroup
	wg.Add(n)
	for i := 0; i < n; i++ {
		iCopy := i
		go func() {
			defer wg.Done()
			// use strconv.Itoa to avoid rune conversion
			errVal := errors.New("err#" + time.Now().Format("150405") + "_" + strconv.Itoa(iCopy%10))
			g.Go(func(ctx context.Context) error {
				return errVal
			})
		}()
	}

	wg.Wait()
	got := g.Wait()
	if got == nil {
		t.Fatalf("expected first error captured, got nil")
	}
	// ensure repeated Wait returns same string (sanity)
	got2 := g.Wait()
	if got2 == nil || got.Error() != got2.Error() {
		t.Fatalf("expected same error on repeated Waits; got %v and %v", got, got2)
	}
}

// TestGroupRace_SemaphoreStress stresses semaphore acquisition/release under heavy load.
func TestGroupRace_SemaphoreStress(t *testing.T) {
	const tasks = 400
	const maxConcurrency = 4
	fl := newFakeLogger()
	fm := newFakeMetrics()
	g := New(WithLogger(fl), WithMetrics(fm), WithMaxConcurrency(maxConcurrency)).(*groupImpl)
	c := newCoord(tasks)

	// track observed max concurrently running
	running := newAtomicInt()
	maxObserved := newAtomicInt()

	var sp sync.WaitGroup
	sp.Add(tasks)
	for i := 0; i < tasks; i++ {
		iCopy := i
		go func() {
			defer sp.Done()
			g.Go(func(ctx context.Context) error {
				// signal started
				select {
				case c.Started <- iCopy:
				default:
				}
				if v := running.Inc(); v > maxObserved.Get() {
					maxObserved.Set(v)
				}
				// simulate work
				time.Sleep(5 * time.Millisecond)
				running.Dec()
				return nil
			})
		}()
	}

	// let them start
	time.Sleep(20 * time.Millisecond)
	// release all
	close(c.Proceed)
	sp.Wait()
	if err := g.Wait(); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if maxObserved.Get() > int64(maxConcurrency) {
		t.Fatalf("maxObserved %d > maxConcurrency %d", maxObserved.Get(), maxConcurrency)
	}
}

// TestGroupRace_ConcurrentWaits ensures many concurrent Wait callers get identical result.
func TestGroupRace_ConcurrentWaits(t *testing.T) {
	fl := newFakeLogger()
	fm := newFakeMetrics()
	g := New(WithLogger(fl), WithMetrics(fm)).(*groupImpl)

	c := newCoord(20)
	for i := 0; i < 20; i++ {
		iCopy := i
		g.Go(successTask(iCopy, c))
	}
	close(c.Proceed)

	const callers = 50
	var wg sync.WaitGroup
	wg.Add(callers)
	results := make([]error, callers)
	for i := 0; i < callers; i++ {
		iCopy := i
		go func(idx int) {
			results[idx] = g.Wait()
			wg.Done()
		}(iCopy)
	}
	wg.Wait()

	for i := 0; i < callers; i++ {
		if results[i] != nil {
			t.Fatalf("caller %d: expected nil, got %v", i, results[i])
		}
	}
}

// TestGroupRace_PanicRecovery concurrently causes panics in many tasks and ensures panic
// recovery + handleTaskError is safe.
func TestGroupRace_PanicRecovery(t *testing.T) {
	const n = 200
	fl := newFakeLogger()
	fm := newFakeMetrics()
	g := New(WithLogger(fl), WithMetrics(fm)).(*groupImpl)

	for i := 0; i < n; i++ {
		iCopy := i
		g.Go(func(ctx context.Context) error {
			if iCopy%2 == 0 {
				panic("boom")
			}
			return nil
		})
	}

	// Wait should return (error or nil) and race detector should find no races
	_ = g.Wait()
}
