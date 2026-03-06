package group

import (
	"context"
	"errors"
	"fmt"
	"sync/atomic"
	"time"
)

// Example 1 — basic usage: spawn a few tasks and wait.
// This variant collects results from concurrent tasks and prints them
// in deterministic order so the example output is stable.
func Example_basic() {
	g := New()

	// simple coordinator: tasks wait on this channel before finishing
	proceed := make(chan struct{})

	const n = 3
	resultsCh := make(chan int, n)

	// spawn n tasks
	for i := 0; i < n; i++ {
		idx := i
		g.Go(func(ctx context.Context) error {
			// pretend work; wait until main signals
			<-proceed
			// send index to collector
			resultsCh <- idx
			return nil
		})
	}

	// let tasks finish
	close(proceed)

	// Wait for tasks to finish
	if err := g.Wait(); err != nil {
		fmt.Printf("unexpected error: %v\n", err)
		return
	}

	// Collect results and print them in order (deterministic)
	results := make([]int, 0, n)
	close(resultsCh) // safe: all senders have finished because Wait returned
	for v := range resultsCh {
		results = append(results, v)
	}
	// sort ascending
	for i := 0; i < n; i++ {
		// find i in results slice (small n so O(n^2) is fine for example)
		for _, v := range results {
			if v == i {
				fmt.Printf("task-%d done\n", v)
				break
			}
		}
	}

	// Output:
	// task-0 done
	// task-1 done
	// task-2 done
}

// Example 2 — limiting concurrency with WithMaxConcurrency.
// We start N tasks but only M should run concurrently.
func Example_maxConcurrency() {
	const (
		total = 6
		limit = 2
	)

	g := New(WithMaxConcurrency(limit))

	var running int32
	var maxObserved int32

	proceed := make(chan struct{})

	// Schedule tasks from separate scheduler goroutines.
	// This avoids blocking the example runner if semaphore slots are full.
	for i := 0; i < total; i++ {
		go func() {
			g.Go(func(ctx context.Context) error {
				// count how many are running right now
				curr := atomic.AddInt32(&running, 1)

				// update maxObserved (CAS loop)
				for {
					prev := atomic.LoadInt32(&maxObserved)
					if curr > prev {
						if atomic.CompareAndSwapInt32(&maxObserved, prev, curr) {
							break
						}
						continue
					}
					break
				}

				// wait until released
				<-proceed

				atomic.AddInt32(&running, -1)
				return nil
			})
		}()
	}

	// allow tasks to start and compete for semaphore slots
	time.Sleep(40 * time.Millisecond)

	// release all tasks
	close(proceed)

	_ = g.Wait()

	fmt.Printf("maxObserved=%d\n", atomic.LoadInt32(&maxObserved))

	// Output:
	// maxObserved=2
}

// Example 3 — cancel-on-error: when one task errors, other tasks observe ctx.Done().
func Example_cancelOnError() {
	g := New()

	canceled := int32(0)
	proceed := make(chan struct{})

	// failing task
	g.Go(func(ctx context.Context) error {
		return errors.New("boom")
	})

	// other tasks should observe cancellation
	for i := 0; i < 2; i++ {
		g.Go(func(ctx context.Context) error {
			// signal started and wait for cancellation
			select {
			case <-ctx.Done():
				atomic.AddInt32(&canceled, 1)
				return ctx.Err()
			case <-proceed:
				// if proceed is closed before cancel, exit normally
				return nil
			}
		})
	}

	// Wait for group — because one task returns error, Wait returns non-nil
	err := g.Wait()
	fmt.Printf("waitErr=%v canceled=%d\n", err, atomic.LoadInt32(&canceled))
	// Output:
	// waitErr=boom canceled=2
}

// Example 4 — panic recovery: if a task panics, group converts it to an error.
func Example_panicRecovery() {
	g := New()

	// a task that panics
	g.Go(func(ctx context.Context) error {
		panic("unexpected")
	})

	// other task that should observe cancellation
	g.Go(func(ctx context.Context) error {
		<-ctx.Done()
		return ctx.Err()
	})

	err := g.Wait()
	fmt.Printf("err:%v containsPanic:%v\n", err, err != nil && contains(err.Error(), "panic"))
	// Output:
	// err:panic: unexpected containsPanic:true
}

// Example 5 — cancel timeout: a hanging task that ignores ctx will not block Wait()
func Example_cancelTimeout() {
	// small cancel timeout for example
	g := New(WithCancelTimeout(50 * time.Millisecond))

	// task 0: hangs and ignores ctx
	g.Go(func(ctx context.Context) error {
		// intentionally ignore ctx.Done() and hang a bit
		time.Sleep(200 * time.Millisecond)
		return nil
	})

	// task 1: returns error quickly and triggers cancel
	g.Go(func(ctx context.Context) error {
		return errors.New("trigger")
	})

	start := time.Now()
	err := g.Wait()
	elapsed := time.Since(start)

	fmt.Printf("err=%v elapsed_ms=%d\n", err, elapsed.Milliseconds())
	// We expect Wait to return within the cancel timeout (plus small slack).
	// Output (approx):
	// err=trigger elapsed_ms=50
}
