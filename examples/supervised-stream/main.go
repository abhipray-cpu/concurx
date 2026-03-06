// Example: supervised-stream
//
// Demonstrates a stream processing system that combines:
//   - Supervisor with AllForOne strategy for tightly-coupled services
//   - Group for parallel fan-out processing
//   - Throttler with adaptive policy for backpressure
//   - ScatterGather for quorum-based multi-backend queries
//
// Stress targets:
//   - AllForOne: one child crash restarts ALL children
//   - Throttler policy rejects under high error rates
//   - ScatterGather with partial failures and timeout
//   - Concurrent Group tasks with error propagation
//   - Context cascade from supervisor to children to patterns
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
	scatter "github.com/abhipray-cpu/concurx/patterns/scattergather"
	"github.com/abhipray-cpu/concurx/patterns/throttler"
	"github.com/abhipray-cpu/concurx/supervisor"
)

// ─── Adaptive Throttle Policy ───
// Rejects when error rate exceeds 50% in recent window.
type adaptivePolicy struct {
	mu        sync.Mutex
	successes int64
	failures  int64
}

func (p *adaptivePolicy) Decide(ctx context.Context) (throttler.ThrottleDecision, time.Duration) {
	p.mu.Lock()
	total := p.successes + p.failures
	failRate := 0.0
	if total > 0 {
		failRate = float64(p.failures) / float64(total)
	}
	p.mu.Unlock()

	if failRate > 0.5 && total > 10 {
		return throttler.ThrottleDelay, 50 * time.Millisecond
	}
	return throttler.ThrottleAllow, 0
}

func (p *adaptivePolicy) Observe(success bool, latency time.Duration) {
	p.mu.Lock()
	defer p.mu.Unlock()
	if success {
		p.successes++
	} else {
		p.failures++
	}
}

// ─── Metrics ───
var (
	eventsProcessed   int64
	eventsThrottled   int64
	scatterSuccesses  int64
	scatterFailures   int64
	groupErrors       int64
	allForOneRestarts int64
)

func main() {
	fmt.Println("=== supervised-stream example ===")
	fmt.Println("Exercising: Supervisor (AllForOne) + Group + Throttler + ScatterGather")
	fmt.Println()

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	// Shared event channel
	eventCh := make(chan int, 100)

	// ─── Supervisor (AllForOne) ───
	sup := supervisor.New(
		supervisor.WithStrategy(supervisor.NewAllForOne()),
		supervisor.WithHooks(supervisor.Hooks{
			OnChildStart: func(id string) {
				fmt.Printf("  [sup] %s started\n", id)
			},
			OnChildStop: func(id string, err error) {
				fmt.Printf("  [sup] %s stopped: %v\n", id, err)
			},
			OnChildRestart: func(id string, restarts int, err error) {
				atomic.AddInt64(&allForOneRestarts, 1)
				fmt.Printf("  [sup] ALL-FOR-ONE restart triggered by %s (#%d): %v\n",
					id, restarts, err)
			},
			OnSupervisorStop: func(err error) {
				fmt.Printf("  [sup] supervisor stopped: %v\n", err)
			},
		}),
	)

	// ─── Child 1: Event Producer ───
	sup.Add(supervisor.ChildSpec{
		ID:       "producer",
		Mode:     supervisor.RestartModePermanent,
		Announce: true,
		Run: func(childCtx context.Context) error {
			ticker := time.NewTicker(20 * time.Millisecond)
			defer ticker.Stop()

			seq := 0
			for {
				select {
				case <-childCtx.Done():
					return childCtx.Err()
				case <-ticker.C:
					seq++
					// 3% chance of producer crash (triggers AllForOne)
					if rand.Float64() < 0.03 {
						return fmt.Errorf("producer crash at seq=%d", seq)
					}
					select {
					case eventCh <- seq:
					default:
						// channel full, apply backpressure
					}
				}
			}
		},
	})

	// ─── Child 2: Event Consumer (Throttler + Group + ScatterGather) ───
	policy := &adaptivePolicy{}
	sup.Add(supervisor.ChildSpec{
		ID:       "consumer",
		Mode:     supervisor.RestartModePermanent,
		Announce: true,
		Run: func(childCtx context.Context) error {
			th, err := throttler.NewThrottler(policy)
			if err != nil {
				return fmt.Errorf("throttler: %w", err)
			}

			for {
				select {
				case <-childCtx.Done():
					return childCtx.Err()
				case event, ok := <-eventCh:
					if !ok {
						return nil
					}

					// Throttle event processing
					err := th.Execute(childCtx, func(tCtx context.Context) error {
						// Use Group for parallel fan-out of each event
						g := group.New(
							group.WithMaxConcurrency(3),
							group.WithContext(tCtx),
						)

						// Fan-out: process event in 3 parallel tasks
						for taskID := 0; taskID < 3; taskID++ {
							taskID := taskID
							g.Go(func(gCtx context.Context) error {
								// Each task does a ScatterGather to query 3 backends
								backends := []func(context.Context) (string, error){
									func(bCtx context.Context) (string, error) {
										time.Sleep(time.Duration(rand.Intn(30)+5) * time.Millisecond)
										if rand.Float64() < 0.2 {
											return "", errors.New("backend-1 timeout")
										}
										return fmt.Sprintf("b1:event=%d,task=%d", event, taskID), nil
									},
									func(bCtx context.Context) (string, error) {
										time.Sleep(time.Duration(rand.Intn(20)+5) * time.Millisecond)
										if rand.Float64() < 0.15 {
											return "", errors.New("backend-2 error")
										}
										return fmt.Sprintf("b2:event=%d,task=%d", event, taskID), nil
									},
									func(bCtx context.Context) (string, error) {
										time.Sleep(time.Duration(rand.Intn(25)+5) * time.Millisecond)
										if rand.Float64() < 0.1 {
											return "", errors.New("backend-3 unavailable")
										}
										return fmt.Sprintf("b3:event=%d,task=%d", event, taskID), nil
									},
								}

								results, sgErr := scatter.ScatterGather(
									gCtx,
									backends,
									scatter.NewAllSuccessPolicy(len(backends)),
									scatter.WithTimeout(100*time.Millisecond),
								)
								if sgErr != nil {
									atomic.AddInt64(&scatterFailures, 1)
									return sgErr
								}
								atomic.AddInt64(&scatterSuccesses, 1)
								_ = results // consume results
								return nil
							})
						}

						if waitErr := g.Wait(); waitErr != nil {
							atomic.AddInt64(&groupErrors, 1)
							return waitErr
						}

						atomic.AddInt64(&eventsProcessed, 1)
						return nil
					})

					if err != nil {
						atomic.AddInt64(&eventsThrottled, 1)
					}
				}
			}
		},
	})

	// ─── Child 3: Metrics Reporter ───
	sup.Add(supervisor.ChildSpec{
		ID:       "reporter",
		Mode:     supervisor.RestartModeTemporary,
		Announce: true,
		Run: func(childCtx context.Context) error {
			ticker := time.NewTicker(1 * time.Second)
			defer ticker.Stop()

			for {
				select {
				case <-childCtx.Done():
					return childCtx.Err()
				case <-ticker.C:
					fmt.Printf("  [metrics] processed=%d throttled=%d scatter_ok=%d scatter_fail=%d group_err=%d restarts=%d\n",
						atomic.LoadInt64(&eventsProcessed),
						atomic.LoadInt64(&eventsThrottled),
						atomic.LoadInt64(&scatterSuccesses),
						atomic.LoadInt64(&scatterFailures),
						atomic.LoadInt64(&groupErrors),
						atomic.LoadInt64(&allForOneRestarts),
					)
				}
			}
		},
	})

	// Start supervisor
	if err := sup.Start(ctx); err != nil {
		panic(fmt.Sprintf("supervisor start: %v", err))
	}

	// Let it run for 5 seconds
	time.Sleep(5 * time.Second)

	// Graceful shutdown
	fmt.Println("\nShutting down...")
	shutdownCtx, shutdownCancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer shutdownCancel()
	if err := sup.Stop(shutdownCtx); err != nil {
		fmt.Printf("Shutdown error: %v\n", err)
	}

	fmt.Println("\n=== Final Metrics ===")
	fmt.Printf("  Events processed:     %d\n", atomic.LoadInt64(&eventsProcessed))
	fmt.Printf("  Events throttled:     %d\n", atomic.LoadInt64(&eventsThrottled))
	fmt.Printf("  Scatter successes:    %d\n", atomic.LoadInt64(&scatterSuccesses))
	fmt.Printf("  Scatter failures:     %d\n", atomic.LoadInt64(&scatterFailures))
	fmt.Printf("  Group errors:         %d\n", atomic.LoadInt64(&groupErrors))
	fmt.Printf("  AllForOne restarts:   %d\n", atomic.LoadInt64(&allForOneRestarts))

	fmt.Println("\nsupervised-stream example complete.")
}
