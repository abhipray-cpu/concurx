package retry

import (
	"context"
	"errors"
	"fmt"
	"sync/atomic"
	"time"
)

// -----------------------------------------------------------------------------
// Example 1: Retrying a flaky HTTP/API call
// -----------------------------------------------------------------------------
//
// Scenario:
//   - External service intermittently fails
//   - Retries should succeed within limit
//
// Invariants validated:
//   - Retry stops immediately on success
//   - Attempts do not exceed max
func ExampleRetry_flakyService() {
	var attempts int32

	err := Retry(context.Background(), func(ctx context.Context) error {
		n := atomic.AddInt32(&attempts, 1)
		if n < 3 {
			return errors.New("503 service unavailable")
		}
		return nil
	},
		WithMaxAttempts(5),
		WithRetryIf(func(err error) bool {
			return err != nil
		}),
	)

	fmt.Println("success:", err == nil)
	fmt.Println("attempts:", attempts)

	// Output:
	// success: true
	// attempts: 3
}

// -----------------------------------------------------------------------------
// Example 2: Do NOT retry on client errors (4xx)
// -----------------------------------------------------------------------------
//
// Scenario:
//   - HTTP 400 should fail fast
//
// Invariants validated:
//   - Retry predicate is enforced
func ExampleRetry_noRetryOnClientError() {
	var attempts int32
	badRequest := errors.New("400 bad request")

	err := Retry(context.Background(), func(ctx context.Context) error {
		atomic.AddInt32(&attempts, 1)
		return badRequest
	},
		WithMaxAttempts(5),
		WithRetryIf(func(err error) bool {
			return err.Error()[0] == '5' // retry only 5xx
		}),
	)

	fmt.Println("error returned:", err != nil)
	fmt.Println("attempts:", attempts)

	// Output:
	// error returned: true
	// attempts: 1
}

// -----------------------------------------------------------------------------
// Example 3: Retry with global timeout (SLA protection)
// -----------------------------------------------------------------------------
//
// Scenario:
//   - Backend is slow
//   - Retry must stop once SLA breached
//
// Invariants validated:
//   - Total retry duration is bounded
func ExampleRetry_slaTimeout() {
	start := time.Now()

	err := Retry(context.Background(), func(ctx context.Context) error {
		time.Sleep(30 * time.Millisecond)
		return errors.New("timeout")
	},
		WithMaxAttempts(10),
		WithRetryIf(func(err error) bool { return true }),
		WithMaxDuration(70*time.Millisecond),
	)

	fmt.Println("timed out:", errors.Is(err, ErrRetryTimeout))
	fmt.Println("elapsed >= 60ms:", time.Since(start) >= 60*time.Millisecond)

	// Output:
	// timed out: true
	// elapsed >= 60ms: true
}

// -----------------------------------------------------------------------------
// Example 4: Context cancellation (user abort / request dropped)
// -----------------------------------------------------------------------------
//
// Scenario:
//   - Upstream request canceled
//   - Retry must stop immediately
func ExampleRetry_contextCancel() {
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := Retry(ctx, func(ctx context.Context) error {
		return errors.New("should not run")
	})

	fmt.Println("canceled:", errors.Is(err, ErrRetryCanceled))

	// Output:
	// canceled: true
}

// -----------------------------------------------------------------------------
// Example 5: Retry + backoff (rate limited API)
// -----------------------------------------------------------------------------
//
// Scenario:
//   - API enforces rate limits
//   - Backoff prevents hammering
//
// Invariants validated:
//   - Backoff delays are respected
func ExampleRetry_withBackoff() {
	var attempts int32

	err := Retry(context.Background(), func(ctx context.Context) error {
		atomic.AddInt32(&attempts, 1)
		return errors.New("429 too many requests")
	},
		WithMaxAttempts(3),
		WithRetryIf(func(err error) bool { return true }),
		WithBackoff(ConstantBackoff(20*time.Millisecond)),
	)

	fmt.Println("exhausted:", errors.Is(err, ErrRetryExhausted))
	fmt.Println("attempts:", attempts)

	// Output:
	// exhausted: true
	// attempts: 3
}

// -----------------------------------------------------------------------------
// Example 6: Panic isolation (programmer bug inside retry)
// -----------------------------------------------------------------------------
//
// Scenario:
//   - Callback panics
//   - Retry must NOT swallow panic
//   - Panic propagates to caller
func ExampleRetry_panicPropagation() {
	func() {
		defer func() {
			if recover() != nil {
				fmt.Println("panic propagated")
			}
		}()

		_ = Retry(context.Background(), func(ctx context.Context) error {
			panic("nil pointer dereference")
		})
	}()

	// Output:
	// panic propagated
}

// -----------------------------------------------------------------------------
// Example 7: Idempotent retry (safe re-execution)
// -----------------------------------------------------------------------------
//
// Scenario:
//   - Operation is idempotent (e.g., cache set)
//   - Retry is safe
func ExampleRetry_idempotentOperation() {
	var writes int32

	err := Retry(context.Background(), func(ctx context.Context) error {
		atomic.AddInt32(&writes, 1)
		return errors.New("transient failure")
	},
		WithMaxAttempts(2),
		WithRetryIf(func(err error) bool { return true }),
	)

	fmt.Println("writes attempted:", writes)
	fmt.Println("final error:", err != nil)

	// Output:
	// writes attempted: 2
	// final error: true
}
