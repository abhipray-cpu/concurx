package ratelimiter

import (
	"context"
	"fmt"
)

// RateLimiter is a reusable concurrency-safe rate limiter.
//
// It enforces a fixed tokens-per-interval rate using a token bucket.
// No feedback loop exists between execution outcomes and admission;
// the rate is constant regardless of downstream health.
//
// Use RateLimiter when:
//   - you need a fixed, predictable rate ceiling
//   - no runtime adaptation is required
//
// Use throttler.Throttler when:
//   - admission should adapt to downstream latency or error rates
//   - you need an Observe() feedback loop between execution and admission
type RateLimiter struct {
	engine *engine
}

// New constructs a RateLimiter using the supplied options.
func New(opts ...Option) (*RateLimiter, error) {
	o := defaultOptions()
	for _, opt := range opts {
		opt(&o)
	}
	if err := o.validate(); err != nil {
		return nil, err
	}

	return &RateLimiter{
		engine: newEngine(o),
	}, nil
}

// Allow blocks or rejects based on the configured rate policy.
func (r *RateLimiter) Allow(ctx context.Context) error {
	return r.engine.acquire(ctx)
}

// Execute runs fn only if rate limiting allows it.
//
// Guarantees:
//   - panic inside fn propagates as ErrRateLimiterPanic
//   - limiter remains usable after panic
func (r *RateLimiter) Execute(
	ctx context.Context,
	fn func(context.Context) error,
) error {

	if fn == nil {
		return ErrInvalidRateLimitOpts
	}

	if err := r.engine.acquire(ctx); err != nil {
		return err
	}

	defer func() {
		if rec := recover(); rec != nil {
			r.engine.metrics.OnPanic()
			panic(fmt.Errorf("ratelimiter: panic: %v", rec))
		}
	}()

	return fn(ctx)
}

// Close permanently shuts down the rate limiter.
func (r *RateLimiter) Close() {
	r.engine.close()
}
