package throttler

import "context"

// Throttler is a policy-driven adaptive admission controller.
//
// Unlike a fixed-rate limiter, a Throttler delegates admission decisions to
// a pluggable ThrottlePolicy that receives execution feedback via Observe().
// This enables adaptive strategies such as AIMD, latency percentile gates,
// or circuit-breaker–style load shedding.
//
// Use Throttler when:
//   - admission should adapt to downstream health or latency
//   - you need a feedback loop between execution outcomes and admission
//   - the policy may change its behavior at runtime
//
// Use ratelimiter.RateLimiter when:
//   - you need a fixed tokens-per-interval rate limit
//   - no feedback loop is required
type Throttler struct {
	engine *throttlerEngine
}

// NewThrottler creates a new [Throttler] with the given policy.
// Returns an error if the policy is nil.
func NewThrottler(policy ThrottlePolicy) (*Throttler, error) {
	if policy == nil {
		return nil, ErrInvalidThrottle
	}

	return &Throttler{
		engine: newThrottlerEngine(policy),
	}, nil
}

// Execute runs fn under throttling control.
func (t *Throttler) Execute(
	ctx context.Context,
	fn func(context.Context) error,
) error {
	if ctx == nil {
		ctx = context.Background()
	}
	return t.engine.execute(ctx, fn)
}
