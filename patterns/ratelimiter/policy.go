package ratelimiter

import (
	"context"
	"time"
)

// Decision returned by a policy.
type Decision int

// Decision values returned by a rate limiting [Policy].
const (
	Allow  Decision = iota // request is admitted
	Reject                 // request is rejected
	Delay                  // request must wait
)

// Policy defines rate limit behavior.
type Policy interface {
	Allow(ctx context.Context, now time.Time) (Decision, time.Duration)
}

// test-only policy: always delays longer than any reasonable timeout
type alwaysDelayPolicy struct{}

func (alwaysDelayPolicy) Allow(
	_ context.Context,
	_ time.Time,
) (Decision, time.Duration) {
	return Delay, time.Second
}
