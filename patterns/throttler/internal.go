package throttler

import (
	"context"
	"time"
)

type throttlerEngine struct {
	policy ThrottlePolicy
}

func newThrottlerEngine(policy ThrottlePolicy) *throttlerEngine {
	return &throttlerEngine{
		policy: policy,
	}
}

func (e *throttlerEngine) execute(
	ctx context.Context,
	fn func(context.Context) error,
) (err error) {

	if fn == nil {
		return ErrInvalidThrottle
	}

	// Honor canceled context immediately
	select {
	case <-ctx.Done():
		return ctx.Err()
	default:
	}

	start := time.Now()

	// -------------------------
	// Admission loop
	// -------------------------
	admitted := false
	for !admitted {
		decision, delay := e.safeDecide(ctx)

		switch decision {

		case ThrottleAllow:
			admitted = true

		case ThrottleReject:
			return ErrThrottled

		case ThrottleDelay:
			if delay <= 0 {
				return ErrThrottled
			}

			select {
			case <-time.After(delay):
			case <-ctx.Done():
				return ctx.Err()
			}
		}
	}

	// -------------------------
	// Execution
	// -------------------------
	defer func() {
		latency := time.Since(start)

		if r := recover(); r != nil {
			e.safeObserve(false, latency)
			err = ErrThrottlePanic
			return
		}

		e.safeObserve(err == nil, latency)
	}()

	err = fn(ctx)
	return err
}

// -------------------------
// Panic-safe wrappers
// -------------------------

func (e *throttlerEngine) safeDecide(
	ctx context.Context,
) (decision ThrottleDecision, delay time.Duration) {

	defer func() {
		if r := recover(); r != nil {
			decision = ThrottleReject
			delay = 0
		}
	}()

	return e.policy.Decide(ctx)
}

func (e *throttlerEngine) safeObserve(
	success bool,
	latency time.Duration,
) {
	defer func() {
		_ = recover()
	}()

	e.policy.Observe(success, latency)
}
