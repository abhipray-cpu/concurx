// Package throttler provides adaptive, policy-driven admission control.
//
// Unlike a fixed rate limiter, a [Throttler] uses a [ThrottlePolicy] to
// make dynamic admit/delay/reject decisions based on system state.
// Built-in policies include [SimpleRatePolicy] and [ThrottlePolicyFunc].
//
//	t, _ := throttler.NewThrottler(throttler.NewSimpleRatePolicy(10))
//	result, err := t.Execute(ctx, func(ctx context.Context) (any, error) { ... })
package throttler
