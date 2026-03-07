package concurx_test

import (
	"context"
	"errors"
	"fmt"
	"sync"
	"sync/atomic"
	"testing"
	"time"

	"github.com/abhipray-cpu/concurx/group"
	"github.com/abhipray-cpu/concurx/patterns/bulkhead"
	breaker "github.com/abhipray-cpu/concurx/patterns/circuitbreaker"
	"github.com/abhipray-cpu/concurx/patterns/pipeline"
	"github.com/abhipray-cpu/concurx/supervisor"
	"github.com/abhipray-cpu/concurx/workergroup"
)

// ──────────────────────────────────────────────────────
// Integration Test 1: Group + Supervisor
//
// A Supervisor manages a long-running child. Inside that child,
// a Group orchestrates short-lived parallel tasks. When the
// child fails, the supervisor restarts it — including a fresh Group.
// ──────────────────────────────────────────────────────

func TestIntegration_GroupInsideSupervisor(t *testing.T) {
	t.Parallel()

	var childRuns atomic.Int32

	s := supervisor.New(
		supervisor.WithStrategy(supervisor.NewOneForOne()),
	)

	err := s.Add(supervisor.ChildSpec{
		ID: "group-worker",
		Run: func(ctx context.Context) error {
			run := childRuns.Add(1)

			g := group.New(
				group.WithContext(ctx),
				group.WithMaxConcurrency(2),
			)

			g.Go(func(ctx context.Context) error {
				select {
				case <-ctx.Done():
					return ctx.Err()
				case <-time.After(5 * time.Millisecond):
					return nil
				}
			})

			g.Go(func(ctx context.Context) error {
				select {
				case <-ctx.Done():
					return ctx.Err()
				case <-time.After(5 * time.Millisecond):
					// Fail on first run to trigger a restart
					if run == 1 {
						return fmt.Errorf("transient failure")
					}
					return nil
				}
			})

			return g.Wait()
		},
		Mode: supervisor.RestartModePermanent,
	})
	if err != nil {
		t.Fatalf("Add: %v", err)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer cancel()

	if err := s.Start(ctx); err != nil {
		t.Fatalf("Start: %v", err)
	}

	// Give enough time for the child to fail once and restart
	time.Sleep(200 * time.Millisecond)

	stopCtx, stopCancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer stopCancel()
	if err := s.Stop(stopCtx); err != nil {
		t.Fatalf("Stop: %v", err)
	}

	runs := childRuns.Load()
	if runs < 2 {
		t.Errorf("expected child to run at least 2 times (fail + restart), got %d", runs)
	}
}

// ──────────────────────────────────────────────────────
// Integration Test 2: Group context propagation from Supervisor
//
// When the supervisor stops, the child context should cancel,
// and the Group should propagate that cancellation to all tasks.
// ──────────────────────────────────────────────────────

func TestIntegration_GroupContextFromSupervisor(t *testing.T) {
	t.Parallel()

	var tasksCanceled atomic.Int32
	var startedOnce sync.Once
	childStarted := make(chan struct{})

	s := supervisor.New(
		supervisor.WithStrategy(supervisor.NewOneForOne()),
	)

	err := s.Add(supervisor.ChildSpec{
		ID: "ctx-child",
		Run: func(ctx context.Context) error {
			g := group.New(group.WithContext(ctx))

			for i := 0; i < 3; i++ {
				g.Go(func(ctx context.Context) error {
					startedOnce.Do(func() { close(childStarted) })
					<-ctx.Done()
					tasksCanceled.Add(1)
					return ctx.Err()
				})
			}

			// Signal that tasks are running
			return g.Wait()
		},
		Mode: supervisor.RestartModeTemporary, // don't restart
	})
	if err != nil {
		t.Fatalf("Add: %v", err)
	}

	ctx := context.Background()
	if err := s.Start(ctx); err != nil {
		t.Fatalf("Start: %v", err)
	}

	// Wait for child tasks to be running
	select {
	case <-childStarted:
	case <-time.After(2 * time.Second):
		t.Fatal("child tasks never started")
	}

	// Stop supervisor — should cascade cancellation
	stopCtx, stopCancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer stopCancel()
	if err := s.Stop(stopCtx); err != nil {
		t.Fatalf("Stop: %v", err)
	}

	canceled := tasksCanceled.Load()
	if canceled == 0 {
		t.Error("expected at least one task to observe cancellation")
	}
}

// ──────────────────────────────────────────────────────
// Integration Test 3: WorkerGroup + Pipeline
//
// A WorkerGroup consumes output from a Pipeline.
// The pipeline transforms data, and the worker group processes
// the transformed results.
// ──────────────────────────────────────────────────────

func TestIntegration_WorkerGroupConsumesPipeline(t *testing.T) {
	t.Parallel()

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	// Pipeline: double each number
	input := make(chan int, 10)
	go func() {
		defer close(input)
		for i := 1; i <= 10; i++ {
			input <- i
		}
	}()

	doubleStage := pipeline.Stage(func(ctx context.Context, in <-chan any) <-chan any {
		out := make(chan any)
		go func() {
			defer close(out)
			for {
				select {
				case <-ctx.Done():
					return
				case v, ok := <-in:
					if !ok {
						return
					}
					n := v.(int)
					out <- n * 2
				}
			}
		}()
		return out
	})

	pipeOut, err := pipeline.Pipeline(ctx, input, []pipeline.Stage{doubleStage})
	if err != nil {
		t.Fatalf("Pipeline: %v", err)
	}

	// WorkerGroup processes pipeline output
	var processed atomic.Int64
	var mu sync.Mutex
	var results []int

	wg, err := workergroup.New(
		workergroup.Config{Workers: 2, QueueSize: 10},
		workergroup.Hooks{},
	)
	if err != nil {
		t.Fatalf("WorkerGroup New: %v", err)
	}

	// Feed pipeline output into worker group
	go func() {
		for v := range pipeOut {
			val := v
			if err := wg.Submit(ctx, func(ctx context.Context) error {
				processed.Add(1)
				mu.Lock()
				results = append(results, val)
				mu.Unlock()
				return nil
			}); err != nil {
				break
			}
		}
	}()

	// Wait for pipeline to drain
	time.Sleep(500 * time.Millisecond)
	wg.Stop()

	count := processed.Load()
	if count != 10 {
		t.Errorf("expected 10 processed items, got %d", count)
	}

	// Verify all results are doubled
	mu.Lock()
	defer mu.Unlock()
	for _, r := range results {
		if r%2 != 0 {
			t.Errorf("expected even (doubled) result, got %d", r)
		}
	}
}

// ──────────────────────────────────────────────────────
// Integration Test 4: CircuitBreaker + Bulkhead
//
// A Bulkhead limits concurrency while a CircuitBreaker protects
// against cascading failures. When the circuit opens, bulkhead
// slots are freed up for other callers.
// ──────────────────────────────────────────────────────

func TestIntegration_CircuitBreakerInsideBulkhead(t *testing.T) {
	t.Parallel()

	ctx := context.Background()

	// Circuit breaker: opens after 3 failures
	cb, err := breaker.New(
		breaker.WithFailureThreshold(3),
		breaker.WithSuccessThreshold(1),
		breaker.WithOpenTimeout(500*time.Millisecond),
	)
	if err != nil {
		t.Fatalf("CircuitBreaker New: %v", err)
	}

	// Bulkhead: max 2 concurrent, queue of 5
	bh, err := bulkhead.NewBulkhead(
		bulkhead.WithCapacity(2),
		bulkhead.WithQueueSize(5),
	)
	if err != nil {
		t.Fatalf("Bulkhead New: %v", err)
	}

	injectedErr := errors.New("downstream failure")

	// Phase 1: Trip the circuit breaker by sending failures through the bulkhead
	for i := 0; i < 3; i++ {
		execErr := bh.Execute(ctx, func(ctx context.Context) error {
			return cb.Execute(ctx, func(ctx context.Context) error {
				return injectedErr
			})
		})
		if execErr == nil {
			t.Fatalf("expected error on iteration %d", i)
		}
	}

	// Phase 2: Circuit should be open — calls fail fast
	err = bh.Execute(ctx, func(ctx context.Context) error {
		return cb.Execute(ctx, func(ctx context.Context) error {
			return nil // would succeed, but circuit is open
		})
	})
	if !errors.Is(err, breaker.ErrCircuitOpen) {
		t.Errorf("expected ErrCircuitOpen, got %v", err)
	}

	// Phase 3: Wait for circuit to transition to half-open
	time.Sleep(600 * time.Millisecond)

	// A successful call should close the circuit
	err = bh.Execute(ctx, func(ctx context.Context) error {
		return cb.Execute(ctx, func(ctx context.Context) error {
			return nil
		})
	})
	if err != nil {
		t.Errorf("expected success after circuit recovery, got %v", err)
	}
}

// ──────────────────────────────────────────────────────
// Integration Test 5: Bulkhead capacity isolation
//
// When the bulkhead is full, new requests get rejected (FailFast)
// or queued, while existing requests complete normally.
// ──────────────────────────────────────────────────────

func TestIntegration_BulkheadCapacityIsolation(t *testing.T) {
	t.Parallel()

	ctx := context.Background()

	bh, err := bulkhead.NewBulkhead(
		bulkhead.WithCapacity(2),
		bulkhead.WithQueueSize(0),
		bulkhead.WithFailFast(),
	)
	if err != nil {
		t.Fatalf("Bulkhead New: %v", err)
	}

	// Fill the bulkhead
	blocker := make(chan struct{})
	var running sync.WaitGroup
	running.Add(2)

	for i := 0; i < 2; i++ {
		go func() {
			_ = bh.Execute(ctx, func(ctx context.Context) error {
				running.Done()
				<-blocker
				return nil
			})
		}()
	}

	// Wait until both slots are occupied
	running.Wait()

	// Next request should fail fast — bulkhead full
	err = bh.Execute(ctx, func(ctx context.Context) error {
		return nil
	})
	if err == nil {
		t.Error("expected bulkhead rejection when full")
	}

	// Release the blocker
	close(blocker)
}

// ──────────────────────────────────────────────────────
// Integration Test 6: Group error propagation under concurrency
//
// Multiple tasks run concurrently in a Group. When one fails,
// the rest should observe context cancellation.
// ──────────────────────────────────────────────────────

func TestIntegration_GroupErrorCancelsAllTasks(t *testing.T) {
	t.Parallel()

	var canceledCount atomic.Int32
	barrier := make(chan struct{})

	g := group.New(group.WithMaxConcurrency(5))

	// 4 long-running tasks
	for i := 0; i < 4; i++ {
		g.Go(func(ctx context.Context) error {
			<-barrier // ensure all tasks are running before the error
			<-ctx.Done()
			canceledCount.Add(1)
			return ctx.Err()
		})
	}

	// 1 task that fails after a short delay
	g.Go(func(ctx context.Context) error {
		// Let other tasks start
		time.Sleep(10 * time.Millisecond)
		close(barrier)
		return fmt.Errorf("task-5 failed")
	})

	err := g.Wait()
	if err == nil {
		t.Fatal("expected error from Wait()")
	}

	// Give canceled goroutines time to increment counter
	time.Sleep(50 * time.Millisecond)

	if canceledCount.Load() < 3 {
		t.Errorf("expected at least 3 tasks to observe cancellation, got %d", canceledCount.Load())
	}
}

// ──────────────────────────────────────────────────────
// Integration Test 7: Supervisor with AllForOne strategy
//
// When one child fails, all children should be restarted.
// ──────────────────────────────────────────────────────

func TestIntegration_SupervisorAllForOne(t *testing.T) {
	t.Parallel()

	var childARuns, childBRuns atomic.Int32

	s := supervisor.New(
		supervisor.WithStrategy(supervisor.NewAllForOne()),
	)

	_ = s.Add(supervisor.ChildSpec{
		ID: "child-a",
		Run: func(ctx context.Context) error {
			childARuns.Add(1)
			<-ctx.Done()
			return ctx.Err()
		},
		Mode: supervisor.RestartModePermanent,
	})

	_ = s.Add(supervisor.ChildSpec{
		ID: "child-b",
		Run: func(ctx context.Context) error {
			run := childBRuns.Add(1)
			if run == 1 {
				// Fail on first run to trigger AllForOne restart
				time.Sleep(20 * time.Millisecond)
				return fmt.Errorf("child-b failure")
			}
			<-ctx.Done()
			return ctx.Err()
		},
		Mode: supervisor.RestartModePermanent,
	})

	ctx := context.Background()
	if err := s.Start(ctx); err != nil {
		t.Fatalf("Start: %v", err)
	}

	// Give time for failure + restart
	time.Sleep(300 * time.Millisecond)

	stopCtx, stopCancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer stopCancel()
	_ = s.Stop(stopCtx)

	aRuns := childARuns.Load()
	bRuns := childBRuns.Load()

	// child-b failed once → AllForOne → both restarted
	if aRuns < 2 {
		t.Errorf("expected child-a to run at least 2 times, got %d", aRuns)
	}
	if bRuns < 2 {
		t.Errorf("expected child-b to run at least 2 times, got %d", bRuns)
	}
}

// ──────────────────────────────────────────────────────
// Integration Test 8: WorkerGroup with error hooks
//
// Jobs that return errors trigger the OnJobError hook.
// The worker continues processing subsequent jobs.
// ──────────────────────────────────────────────────────

func TestIntegration_WorkerGroupErrorHook(t *testing.T) {
	t.Parallel()

	var errorCount atomic.Int32
	var successCount atomic.Int32

	wg, err := workergroup.New(
		workergroup.Config{Workers: 2, QueueSize: 10},
		workergroup.Hooks{
			OnJobError: func(workerID int, err error) {
				errorCount.Add(1)
			},
		},
	)
	if err != nil {
		t.Fatalf("New: %v", err)
	}

	ctx := context.Background()

	// Submit a mix of successful and failing jobs
	for i := 0; i < 10; i++ {
		idx := i
		if err := wg.Submit(ctx, func(ctx context.Context) error {
			if idx%3 == 0 {
				return fmt.Errorf("job %d failed", idx)
			}
			successCount.Add(1)
			return nil
		}); err != nil {
			t.Fatalf("Submit: %v", err)
		}
	}

	// Wait for all jobs to complete
	time.Sleep(200 * time.Millisecond)
	wg.Stop()

	errs := errorCount.Load()
	succs := successCount.Load()

	// Jobs 0, 3, 6, 9 fail → 4 errors; Jobs 1, 2, 4, 5, 7, 8 succeed → 6 successes
	if errs != 4 {
		t.Errorf("expected 4 error hook calls, got %d", errs)
	}
	if succs != 6 {
		t.Errorf("expected 6 successful jobs, got %d", succs)
	}
}

// ──────────────────────────────────────────────────────
// Integration Test 9: Pipeline feeding Group
//
// A pipeline transforms data, and each output is processed
// by a Group for parallel side-effect execution.
// ──────────────────────────────────────────────────────

func TestIntegration_PipelineFeedingGroup(t *testing.T) {
	t.Parallel()

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	input := make(chan int, 5)
	go func() {
		defer close(input)
		for i := 1; i <= 5; i++ {
			input <- i
		}
	}()

	// Pipeline: add 10 to each value
	addStage := pipeline.Stage(func(ctx context.Context, in <-chan any) <-chan any {
		out := make(chan any)
		go func() {
			defer close(out)
			for {
				select {
				case <-ctx.Done():
					return
				case v, ok := <-in:
					if !ok {
						return
					}
					out <- v.(int) + 10
				}
			}
		}()
		return out
	})

	pipeOut, err := pipeline.Pipeline(ctx, input, []pipeline.Stage{addStage})
	if err != nil {
		t.Fatalf("Pipeline: %v", err)
	}

	// Collect pipeline output
	var pipeResults []int
	for v := range pipeOut {
		pipeResults = append(pipeResults, v)
	}

	// Process results with a Group
	var mu sync.Mutex
	var processed []int

	g := group.New(group.WithMaxConcurrency(3))
	for _, val := range pipeResults {
		v := val
		g.Go(func(ctx context.Context) error {
			mu.Lock()
			processed = append(processed, v)
			mu.Unlock()
			return nil
		})
	}

	if err := g.Wait(); err != nil {
		t.Fatalf("Group Wait: %v", err)
	}

	if len(processed) != 5 {
		t.Errorf("expected 5 processed items, got %d", len(processed))
	}

	// Verify values are original + 10
	for _, v := range processed {
		if v < 11 || v > 15 {
			t.Errorf("expected value in [11,15], got %d", v)
		}
	}
}

// ──────────────────────────────────────────────────────
// Integration Test 10: Supervisor BackoffOneForOne with Group child
//
// A supervisor with exponential backoff restarts a child that
// uses a Group internally. Verifies that restart delays are
// respected and the group is recreated correctly each time.
// ──────────────────────────────────────────────────────

func TestIntegration_SupervisorBackoffWithGroupChild(t *testing.T) {
	t.Parallel()

	// Use large enough backoff values so scheduler jitter (typically <50ms on
	// CI runners) cannot obscure the signal.  With Initial=150ms and Factor=2
	// the expected inter-restart delays are ~150ms, ~300ms, ~600ms — well
	// above OS scheduling noise on any supported platform.
	const (
		initial = 150 * time.Millisecond
		factor  = 2.0
	)
	// minTotalBackoff is a conservative lower bound for the cumulative delay
	// introduced by backoff across 3 failures: initial + initial*factor.
	// We use 70 % of the theoretical value to absorb timing imprecision.
	minTotalBackoff := time.Duration(float64(initial+time.Duration(float64(initial)*factor)) * 0.70)

	var runTimes []time.Time
	var mu sync.Mutex

	s := supervisor.New(
		supervisor.WithStrategy(&supervisor.BackoffOneForOne{
			Initial: initial,
			Max:     2 * time.Second,
			Factor:  factor,
		}),
	)

	_ = s.Add(supervisor.ChildSpec{
		ID: "backoff-child",
		Run: func(ctx context.Context) error {
			mu.Lock()
			runTimes = append(runTimes, time.Now())
			attempt := len(runTimes)
			mu.Unlock()

			if attempt <= 3 {
				return fmt.Errorf("attempt %d failed", attempt)
			}

			// Succeed and block until stopped.
			<-ctx.Done()
			return ctx.Err()
		},
		Mode: supervisor.RestartModePermanent,
	})

	ctx := context.Background()
	if err := s.Start(ctx); err != nil {
		t.Fatalf("Start: %v", err)
	}

	// Give enough time for 3 failures + backoff delays + final run.
	// 150 + 300 + 600 = 1050ms of pure backoff; 3s gives 3× headroom.
	time.Sleep(3 * time.Second)

	stopCtx, stopCancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer stopCancel()
	_ = s.Stop(stopCtx)

	mu.Lock()
	defer mu.Unlock()

	if len(runTimes) < 4 {
		t.Fatalf("expected at least 4 runs (3 failures + 1 success), got %d", len(runTimes))
	}

	// Verify that backoff added meaningful cumulative delay: the time from
	// the first restart to the fourth run must exceed minTotalBackoff.
	// This is immune to per-step jitter — it only checks the gross total.
	totalDelay := runTimes[3].Sub(runTimes[0])
	if totalDelay < minTotalBackoff {
		t.Errorf("total delay from run[0] to run[3] was %v, want >= %v; backoff may not be working",
			totalDelay, minTotalBackoff)
	}
}
