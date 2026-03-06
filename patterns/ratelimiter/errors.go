package ratelimiter

import "errors"

// Sentinel errors for the rate limiter.
var (
	// ErrRateLimited is returned when the rate limit is exceeded.
	ErrRateLimited = errors.New("ratelimiter: rate limit exceeded")

	// ErrRateLimitTimeout is returned when waiting for a token times out.
	ErrRateLimitTimeout = errors.New("ratelimiter: wait timeout")

	// ErrInvalidRateLimitOpts is returned when rate limiter options are invalid.
	ErrInvalidRateLimitOpts = errors.New("ratelimiter: invalid options")

	// ErrRateLimiterClosed is returned when the rate limiter has been closed.
	ErrRateLimiterClosed = errors.New("ratelimiter: closed")

	// ErrRateLimiterPanic is returned when a function executed through the rate limiter panics.
	ErrRateLimiterPanic = errors.New("ratelimiter: panic")
)
