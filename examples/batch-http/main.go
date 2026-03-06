// Example: batch-http
//
// Demonstrates a realistic HTTP batch processor that combines:
//   - WorkerGroup for bounded concurrency
//   - Retry with exponential backoff for transient failures
//   - CircuitBreaker to protect downstream services
//   - Timeout to bound individual request latency
//   - Group for parallel result aggregation
//
// Stress targets:
//   - High failure rate (40%) to trigger circuit breaker
//   - Tight timeouts to stress timeout isolation
//   - Concurrent submitters racing with Stop
//   - Panic recovery in worker callbacks
package main

import (
	"context"
	"errors"
	"fmt"
	"math/rand"
	"sync"
	"sync/atomic"
	"time"

	"github.com/abhipray-cpu/concurx/group"
	breaker "github.com/abhipray-cpu/concurx/patterns/circuitbreaker"
	"github.com/abhipray-cpu/concurx/patterns/retry"
	"github.com/abhipray-cpu/concurx/patterns/timeout"
	"github.com/abhipray-cpu/concurx/workergroup"
)

// simulated downstream errors
var (
	errDownstreamTimeout = errors.New("downstream: timeout")
	errBadGateway        = errors.New("downstream: 502 bad gateway")
	errRateLimit         = errors.New("downstream: rate limited")
)

func simulateHTTPCall(ctx context.Context, url string) (string, error) {
	select {
	case <-ctx.Done():
		return "", ctx.Err()
	default:
	}

	latency := time.Duration(rand.Intn(50)+10) * time.Millisecond
	select {
	case <-time.After(latency):
	case <-ctx.Done():
		return "", ctx.Err()
	}

	// 40% failure rate to stress circuit breaker
	r := rand.Float64()
	switch {
	case r < 0.15:
		return "", errDownstreamTimeout
	case r < 0.30:
		return "", errBadGateway
	case r < 0.40:
		return "", errRateLimit
	default:
		return fmt.Sprintf("response from %s", url), nil
	}
}

func main() {
	fmt.Println("=== batch-http example ===")
	fmt.Println("Exercising: WorkerGroup + Retry + CircuitBreaker + Timeout + Group")
	fmt.Println()

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	// Circuit Breaker: trips after 3 failures, recovers after 2 successes
	cb, err := breaker.New(
		breaker.WithFailureThreshold(3),
		breaker.WithSuccessThreshold(2),
		breaker.WithOpenTimeout(500*time.Millisecond),
	)
	if err != nil {
		panic(fmt.Sprintf("circuit breaker: %v", err))
	}

	// Counters
	var (
		submitted  int64
		succeeded  int64
		failed     int64
		retried    int64
		cbRejected int64
		panicked   int64
	)

	// Worker Group: 4 workers, queue of 20, reject when full
	pool, err := workergroup.New(
		workergroup.Config{
			Workers:        4,
			QueueSize:      20,
			SubmitBehavior: workergroup.SubmitReject,
		},
		workergroup.Hooks{
			OnWorkerStart: func(id int) {
				fmt.Printf("  [worker %d] started\n", id)
			},
			OnWorkerStop: func(id int) {
				fmt.Printf("  [worker %d] stopped\n", id)
			},
			OnJobError: func(workerID int, err error) {
				atomic.AddInt64(&failed, 1)
			},
			OnJobPanic: func(workerID int, r any) {
				atomic.AddInt64(&panicked, 1)
				fmt.Printf("  [worker %d] PANIC recovered: %v\n", workerID, r)
			},
		},
	)
	if err != nil {
		panic(fmt.Sprintf("workergroup: %v", err))
	}

	// Generate 50 URLs
	urls := make([]string, 50)
	for i := range urls {
		urls[i] = fmt.Sprintf("https://api.example.com/items/%d", i)
	}

	// Submit jobs concurrently (stress: racing submitters)
	var submitWg sync.WaitGroup
	for _, url := range urls {
		url := url
		submitWg.Add(1)
		go func() {
			defer submitWg.Done()

			job := func(jobCtx context.Context) error {
				atomic.AddInt64(&submitted, 1)

				// Inject a panic for stress testing (2% chance)
				if rand.Float64() < 0.02 {
					panic("random panic in job!")
				}

				// Timeout wrapper: 200ms per attempt
				return timeout.Timeout(jobCtx, func(tCtx context.Context) error {
					// Retry wrapper: 3 attempts with exponential backoff
					return retry.Retry(tCtx, func(rCtx context.Context) error {
						atomic.AddInt64(&retried, 1)

						// Circuit breaker wrapper
						return cb.Execute(rCtx, func(cbCtx context.Context) error {
							_, callErr := simulateHTTPCall(cbCtx, url)
							if callErr != nil {
								return callErr
							}
							atomic.AddInt64(&succeeded, 1)
							return nil
						})
					},
						retry.WithMaxAttempts(3),
						retry.WithBackoff(retry.ExponentialBackoff{
							Base: 10 * time.Millisecond,
							Max:  100 * time.Millisecond,
						}),
						retry.WithRetryIf(func(err error) bool {
							// Don't retry circuit breaker open errors
							if errors.Is(err, breaker.ErrCircuitOpen) {
								atomic.AddInt64(&cbRejected, 1)
								return false
							}
							return true
						}),
					)
				}, timeout.WithTimeout(200*time.Millisecond))
			}

			if submitErr := pool.Submit(ctx, job); submitErr != nil {
				// Queue full or stopped
			}
		}()
	}

	submitWg.Wait()

	// Graceful shutdown
	fmt.Println("\nStopping worker group...")
	pool.Stop()

	// Aggregate results using Group
	fmt.Println("\nAggregating results with Group...")
	g := group.New(group.WithMaxConcurrency(2), group.WithContext(ctx))

	var results sync.Map
	g.Go(func(_ context.Context) error {
		results.Store("submitted", atomic.LoadInt64(&submitted))
		results.Store("succeeded", atomic.LoadInt64(&succeeded))
		return nil
	})
	g.Go(func(_ context.Context) error {
		results.Store("failed", atomic.LoadInt64(&failed))
		results.Store("retried", atomic.LoadInt64(&retried))
		return nil
	})
	g.Go(func(_ context.Context) error {
		results.Store("cb_rejected", atomic.LoadInt64(&cbRejected))
		results.Store("panicked", atomic.LoadInt64(&panicked))
		return nil
	})

	if err := g.Wait(); err != nil {
		fmt.Printf("Group error: %v\n", err)
	}

	fmt.Println("\n=== Results ===")
	results.Range(func(key, value any) bool {
		fmt.Printf("  %-15s %v\n", key, value)
		return true
	})

	fmt.Println("\nbatch-http example complete.")
}
