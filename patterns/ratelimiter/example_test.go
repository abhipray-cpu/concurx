package ratelimiter

import (
	"context"
	"errors"
	"fmt"
	"time"
)

/*
REAL WORLD SCENARIO 1
---------------------
Protecting an external API with a Token Bucket.

Goal:
- Allow short bursts
- Smooth traffic over time
- Do NOT hard-reject immediately
*/
func ExampleRateLimiter_tokenBucket_apiClient() {
	limiter, _ := New(
		WithPolicy(NewTokenBucket(5, 10)), // smoothing, not hard cap
	)

	ctx := context.Background()

	if err := limiter.Allow(ctx); err == nil {
		fmt.Println("API call allowed")
	}

	// Output:
	// API call allowed
}

/*
REAL WORLD SCENARIO 2
---------------------
Login endpoint protection (FailFast + Sliding Window).

Goal:
- Hard limit brute-force attempts
- Reject immediately
*/
func ExampleRateLimiter_slidingWindow_loginProtection() {
	limiter, _ := New(
		WithPolicy(NewSlidingWindow(3, time.Minute)),
		WithFailFast(),
	)

	ctx := context.Background()

	for i := 0; i < 4; i++ {
		err := limiter.Allow(ctx)
		if err != nil {
			fmt.Println("blocked")
			continue
		}
		fmt.Println("login attempt allowed")
	}

	// Output:
	// login attempt allowed
	// login attempt allowed
	// login attempt allowed
	// blocked
}

/*
REAL WORLD SCENARIO 3
---------------------
Queue worker with backpressure (Delay + Timeout).

Goal:
- Block until capacity frees up
- But never wait forever
*/
func ExampleRateLimiter_timeoutBackpressure() {
	limiter, _ := New(
		WithPolicy(alwaysDelayPolicy{}),
		WithTimeout(20*time.Millisecond),
	)

	err := limiter.Allow(context.Background())
	if errors.Is(err, ErrRateLimitTimeout) {
		fmt.Println("job dropped due to timeout")
	}

	// Output:
	// job dropped due to timeout
}

/*
REAL WORLD SCENARIO 4
---------------------
Wrapping business logic safely using Execute.

Goal:
- Centralized rate limiting
- Panic isolation
*/
func ExampleRateLimiter_executeWrapper() {
	limiter, _ := New(
		WithPolicy(NewSlidingWindow(1, time.Second)),
		WithFailFast(),
	)

	ctx := context.Background()

	err := limiter.Execute(ctx, func(ctx context.Context) error {
		fmt.Println("critical section executed")
		return nil
	})

	if err != nil {
		fmt.Println("rejected")
	}

	// Output:
	// critical section executed
}

/*
REAL WORLD SCENARIO 5
---------------------
System shutdown safety.

Goal:
- Prevent new work after shutdown
*/
func ExampleRateLimiter_shutdown() {
	limiter, _ := New(
		WithPolicy(NewTokenBucket(10, 10)),
	)

	limiter.Close()

	err := limiter.Allow(context.Background())
	if errors.Is(err, ErrRateLimiterClosed) {
		fmt.Println("system shutting down")
	}

	// Output:
	// system shutting down
}
