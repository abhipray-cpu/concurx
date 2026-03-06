// Package ratelimiter provides fixed-rate admission control.
//
// A rate limiter controls the rate at which operations are permitted,
// using pluggable policies: [TokenBucket], [FixedWindow], or [SlidingWindow].
//
//	rl := ratelimiter.New(
//	    ratelimiter.WithPolicy(ratelimiter.NewTokenBucket(10, time.Second)),
//	)
//	if rl.Allow(ctx) { ... }
package ratelimiter
