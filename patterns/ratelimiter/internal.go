package ratelimiter

import (
	"context"
	"errors"
	"time"
)

// engine drives rate-limit decisions.
type engine struct {
	policy   Policy
	failFast bool
	timeout  time.Duration
	metrics  Metrics

	closed chan struct{}
}

// newEngine builds the internal engine.
func newEngine(o Options) *engine {
	if o.Metrics == nil {
		o.Metrics = defaultMetrics()
	}

	return &engine{
		policy:   o.Policy,
		failFast: o.FailFast,
		timeout:  o.Timeout,
		metrics:  o.Metrics,
		closed:   make(chan struct{}),
	}
}

// acquire blocks, delays, or rejects according to policy.
func (e *engine) acquire(parent context.Context) error {
	start := time.Now()
	ctx := parent

	// Apply global timeout if configured
	if e.timeout > 0 {
		var cancel context.CancelFunc
		ctx, cancel = context.WithTimeout(parent, e.timeout)
		defer cancel()
	}

	for {
		select {
		case <-ctx.Done():
			if errors.Is(ctx.Err(), context.DeadlineExceeded) {
				return ErrRateLimitTimeout
			}
			return ctx.Err()

		case <-e.closed:
			return ErrRateLimiterClosed

		default:
		}

		decision, delay := e.policy.Allow(ctx, time.Now())

		switch decision {

		case Allow:
			e.metrics.OnAllow()
			return nil

		case Reject:
			e.metrics.OnReject()
			return ErrRateLimited

		case Delay:
			// FailFast only when explicitly enabled
			if e.failFast {
				e.metrics.OnReject()
				return ErrRateLimited
			}

			// Enforce remaining timeout
			if e.timeout > 0 {
				elapsed := time.Since(start)
				remaining := e.timeout - elapsed
				if remaining <= 0 {
					return ErrRateLimitTimeout
				}
				if delay > remaining {
					delay = remaining
				}
			}

			e.metrics.OnDelay(delay)

			select {
			case <-time.After(delay):
				// retry policy
			case <-ctx.Done():
				if errors.Is(ctx.Err(), context.DeadlineExceeded) {
					return ErrRateLimitTimeout
				}
				return ctx.Err()
			}
		}
	}
}

// close permanently disables the engine.
func (e *engine) close() {
	select {
	case <-e.closed:
		// already closed
	default:
		close(e.closed)
	}
}
