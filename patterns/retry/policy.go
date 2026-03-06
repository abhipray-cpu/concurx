package retry

import (
	"math/rand"
	"time"
)

// RetryPredicate decides whether an error is retryable.
type RetryPredicate func(error) bool

// BackoffPolicy defines delay strategy between attempts.
type BackoffPolicy interface {
	Next(attempt int) time.Duration
}

// -----------------------------------------------------------------------------
// Built-in Backoff Policies
// -----------------------------------------------------------------------------

// ConstantBackoff returns a fixed delay.
type ConstantBackoff time.Duration

// Next returns the constant delay.
func (c ConstantBackoff) Next(int) time.Duration {
	return time.Duration(c)
}

// ExponentialBackoff doubles delay each attempt.
type ExponentialBackoff struct {
	Base time.Duration
	Max  time.Duration
}

// Next returns the exponential delay for the given attempt.
func (e ExponentialBackoff) Next(attempt int) time.Duration {
	d := e.Base * (1 << attempt)
	if d > e.Max {
		return e.Max
	}
	return d
}

// Jitter wraps a backoff policy with randomness.
type Jitter struct {
	Inner BackoffPolicy
}

// Next returns a jittered delay based on the inner policy.
func (j Jitter) Next(attempt int) time.Duration {
	d := j.Inner.Next(attempt)
	if d <= 0 {
		return 0
	}
	return time.Duration(rand.Int63n(int64(d))) //nolint:gosec // jitter does not need crypto-strength randomness
}
