// Example: email-worker
//
// Demonstrates a supervised email sending service that combines:
//   - Supervisor with BackoffOneForOne strategy for crash recovery
//   - WorkerGroup for bounded email sending concurrency
//   - Bulkhead for isolating email provider calls
//   - RateLimiter (token bucket) to respect provider API limits
//
// Stress targets:
//   - Worker crashes (panic recovery, automatic restart)
//   - Bulkhead saturation (fail-fast rejection)
//   - Rate limit enforcement under burst load
//   - Supervisor shutdown while children are running
//   - AddAndStart for dynamic child registration
package main

import (
	"context"
	"errors"
	"fmt"
	"math/rand"
	"sync/atomic"
	"time"

	"github.com/abhipray-cpu/concurx/patterns/bulkhead"
	"github.com/abhipray-cpu/concurx/patterns/ratelimiter"
	"github.com/abhipray-cpu/concurx/supervisor"
	"github.com/abhipray-cpu/concurx/workergroup"
)

// simulated email provider errors
var (
	errProviderDown  = errors.New("email provider: service unavailable")
	errInvalidAddr   = errors.New("email: invalid recipient address")
	errQuotaExceeded = errors.New("email provider: quota exceeded")
)

type EmailJob struct {
	To      string
	Subject string
	Body    string
}

// metrics
var (
	emailsSent       int64
	emailsFailed     int64
	emailsRejected   int64
	bulkheadRejected int64
	rateLimited      int64
	workerCrashes    int64
)

func sendEmail(ctx context.Context, bh bulkhead.Bulkhead, rl *ratelimiter.RateLimiter, job EmailJob) error {
	// Rate limit check
	if err := rl.Allow(ctx); err != nil {
		atomic.AddInt64(&rateLimited, 1)
		return fmt.Errorf("rate limited: %w", err)
	}

	// Execute inside bulkhead for isolation
	return bh.Execute(ctx, func(bhCtx context.Context) error {
		// Simulate email sending latency
		latency := time.Duration(rand.Intn(30)+5) * time.Millisecond
		select {
		case <-time.After(latency):
		case <-bhCtx.Done():
			return bhCtx.Err()
		}

		// 20% failure rate
		r := rand.Float64()
		switch {
		case r < 0.05:
			// Simulate crash (panic)
			panic("email provider connection reset!")
		case r < 0.10:
			return errProviderDown
		case r < 0.15:
			return errInvalidAddr
		case r < 0.20:
			return errQuotaExceeded
		default:
			atomic.AddInt64(&emailsSent, 1)
			return nil
		}
	})
}

func main() {
	fmt.Println("=== email-worker example ===")
	fmt.Println("Exercising: Supervisor + WorkerGroup + Bulkhead + RateLimiter")
	fmt.Println()

	ctx, cancel := context.WithTimeout(context.Background(), 8*time.Second)
	defer cancel()

	// Bulkhead: max 3 concurrent provider calls, queue of 5
	bh, err := bulkhead.NewBulkhead(
		bulkhead.WithCapacity(3),
		bulkhead.WithQueueSize(5),
		bulkhead.WithTimeout(500*time.Millisecond),
		bulkhead.WithFailFast(),
	)
	if err != nil {
		panic(fmt.Sprintf("bulkhead: %v", err))
	}

	// RateLimiter: 10 tokens, refill every 50ms (20/sec)
	rl, err := ratelimiter.New(
		ratelimiter.WithPolicy(ratelimiter.NewTokenBucket(10, 50*time.Millisecond)),
		ratelimiter.WithFailFast(),
	)
	if err != nil {
		panic(fmt.Sprintf("ratelimiter: %v", err))
	}
	defer rl.Close()

	// Supervisor with backoff strategy
	sup := supervisor.New(
		supervisor.WithStrategy(supervisor.NewBackoffOneForOne(
			50*time.Millisecond, // initial delay
			2*time.Second,       // max delay
			2.0,                 // factor
			0.3,                 // jitter
		)),
		supervisor.WithHooks(supervisor.Hooks{
			OnChildStart: func(id string) {
				fmt.Printf("  [supervisor] child %q started\n", id)
			},
			OnChildStop: func(id string, err error) {
				fmt.Printf("  [supervisor] child %q stopped: %v\n", id, err)
			},
			OnChildRestart: func(id string, restarts int, err error) {
				fmt.Printf("  [supervisor] child %q restarting (#%d): %v\n", id, restarts, err)
			},
			OnSupervisorStop: func(err error) {
				fmt.Printf("  [supervisor] stopped: %v\n", err)
			},
		}),
	)

	// Register email sender child — a WorkerGroup that processes email jobs
	emailCh := make(chan EmailJob, 50)

	sup.Add(supervisor.ChildSpec{
		ID:       "email-sender",
		Mode:     supervisor.RestartModePermanent,
		Announce: true,
		Backoff: supervisor.BackoffPolicy{
			Initial:    100 * time.Millisecond,
			Max:        5 * time.Second,
			Multiplier: 2.0,
			Jitter:     0.2,
		},
		Run: func(childCtx context.Context) error {
			pool, poolErr := workergroup.New(
				workergroup.Config{
					Workers:        3,
					QueueSize:      10,
					SubmitBehavior: workergroup.SubmitBlock,
				},
				workergroup.Hooks{
					OnJobError: func(wid int, err error) {
						atomic.AddInt64(&emailsFailed, 1)
						fmt.Printf("    [email-worker %d] error: %v\n", wid, err)
					},
					OnJobPanic: func(wid int, r any) {
						atomic.AddInt64(&workerCrashes, 1)
						fmt.Printf("    [email-worker %d] PANIC: %v\n", wid, r)
					},
				},
			)
			if poolErr != nil {
				return poolErr
			}

			// Drain email channel into worker pool
			for {
				select {
				case <-childCtx.Done():
					pool.Stop()
					return childCtx.Err()
				case job, ok := <-emailCh:
					if !ok {
						pool.Stop()
						return nil
					}
					submitErr := pool.Submit(childCtx, func(jobCtx context.Context) error {
						return sendEmail(jobCtx, bh, rl, job)
					})
					if submitErr != nil {
						atomic.AddInt64(&emailsRejected, 1)
					}
				}
			}
		},
	})

	// Start supervisor
	if err := sup.Start(ctx); err != nil {
		panic(fmt.Sprintf("supervisor start: %v", err))
	}

	// Dynamically add a health monitor child
	sup.AddAndStart(supervisor.ChildSpec{
		ID:       "health-monitor",
		Mode:     supervisor.RestartModeTemporary,
		Announce: true,
		Run: func(childCtx context.Context) error {
			ticker := time.NewTicker(500 * time.Millisecond)
			defer ticker.Stop()
			for {
				select {
				case <-childCtx.Done():
					return childCtx.Err()
				case <-ticker.C:
					fmt.Printf("  [health] sent=%d failed=%d rejected=%d rate_limited=%d bulkhead_rejected=%d crashes=%d\n",
						atomic.LoadInt64(&emailsSent),
						atomic.LoadInt64(&emailsFailed),
						atomic.LoadInt64(&emailsRejected),
						atomic.LoadInt64(&rateLimited),
						atomic.LoadInt64(&bulkheadRejected),
						atomic.LoadInt64(&workerCrashes),
					)
				}
			}
		},
	})

	// Generate burst of emails
	fmt.Println("\nSending 100 emails in bursts...")
	go func() {
		defer close(emailCh)
		for i := 0; i < 100; i++ {
			select {
			case <-ctx.Done():
				return
			case emailCh <- EmailJob{
				To:      fmt.Sprintf("user%d@example.com", i),
				Subject: fmt.Sprintf("Notification #%d", i),
				Body:    "Hello from concurx!",
			}:
			}
			// Small burst spacing
			if i%10 == 9 {
				time.Sleep(100 * time.Millisecond)
			}
		}
	}()

	// Let it run for a few seconds
	time.Sleep(4 * time.Second)

	// Graceful shutdown
	fmt.Println("\nShutting down supervisor...")
	shutdownCtx, shutdownCancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer shutdownCancel()
	if err := sup.Stop(shutdownCtx); err != nil {
		fmt.Printf("Shutdown error: %v\n", err)
	}

	fmt.Println("\n=== Final Stats ===")
	fmt.Printf("  Emails sent:         %d\n", atomic.LoadInt64(&emailsSent))
	fmt.Printf("  Emails failed:       %d\n", atomic.LoadInt64(&emailsFailed))
	fmt.Printf("  Emails rejected:     %d\n", atomic.LoadInt64(&emailsRejected))
	fmt.Printf("  Rate limited:        %d\n", atomic.LoadInt64(&rateLimited))
	fmt.Printf("  Bulkhead rejected:   %d\n", atomic.LoadInt64(&bulkheadRejected))
	fmt.Printf("  Worker crashes:      %d\n", atomic.LoadInt64(&workerCrashes))

	fmt.Println("\nemail-worker example complete.")
}
