package throttler

import (
	"context"
	"time"
)

//
// ──────────────────────────────────────────────────────────────
// Throttle Decision
// ──────────────────────────────────────────────────────────────
//

// ThrottleDecision is the outcome of a policy evaluation.
type ThrottleDecision int

const (
	// ThrottleAllow means execution may proceed immediately.
	ThrottleAllow ThrottleDecision = iota

	// ThrottleDelay means execution should be delayed
	// for the returned duration before retrying.
	ThrottleDelay

	// ThrottleReject means execution must be rejected.
	ThrottleReject
)

//
// ──────────────────────────────────────────────────────────────
// ThrottlePolicy Contract
// ──────────────────────────────────────────────────────────────
//
// ThrottlePolicy controls admission into a throttled section.
//
// STRICT CONTRACT:
//   - Decide MUST be non-blocking
//   - Decide MUST be fast (no I/O, no sleeps)
//   - Decide MUST respect ctx.Done()
//   - Observe MUST NOT block
//   - Observe MUST NOT panic
//   - Implementations MUST be goroutine-safe
//
// The throttler engine will sandbox panics defensively,
// but policy authors must still follow the contract.
//

// ThrottlePolicy is the contract for adaptive admission control.
// Implementations decide whether to admit, delay, or reject requests.
type ThrottlePolicy interface {
	// Decide determines whether execution is allowed.
	//
	// It may return:
	//   - ThrottleAllow  → execute immediately
	//   - ThrottleDelay  → retry after returned duration
	//   - ThrottleReject → fail immediately
	//
	// The returned duration is only meaningful for ThrottleDelay.
	Decide(ctx context.Context) (ThrottleDecision, time.Duration)

	// Observe is called after execution finishes.
	//
	// success  → whether execution succeeded
	// latency → execution duration
	Observe(success bool, latency time.Duration)
}

//
// ──────────────────────────────────────────────────────────────
// Functional Policy Adapter
// ──────────────────────────────────────────────────────────────
//
// Allows users to define custom policies without structs.
//

// ThrottlePolicyFunc adapts two functions into a [ThrottlePolicy].
type ThrottlePolicyFunc struct {
	DecideFn  func(context.Context) (ThrottleDecision, time.Duration)
	ObserveFn func(success bool, latency time.Duration)
}

// Decide delegates to the DecideFn function.
func (p ThrottlePolicyFunc) Decide(ctx context.Context) (ThrottleDecision, time.Duration) {
	return p.DecideFn(ctx)
}

// Observe delegates to the ObserveFn function, if set.
func (p ThrottlePolicyFunc) Observe(success bool, latency time.Duration) {
	if p.ObserveFn != nil {
		p.ObserveFn(success, latency)
	}
}

//
// ──────────────────────────────────────────────────────────────
// SimpleRatePolicy (Reference Implementation)
// ──────────────────────────────────────────────────────────────
//
// A basic token-based concurrent throttler.
//

// SimpleRatePolicy limits concurrent executions to a fixed maximum.
type SimpleRatePolicy struct {
	tokens chan struct{}
}

// NewSimpleRatePolicy creates a policy allowing at most maxConcurrent executions.
func NewSimpleRatePolicy(maxConcurrent int) *SimpleRatePolicy {
	if maxConcurrent <= 0 {
		maxConcurrent = 1
	}

	ch := make(chan struct{}, maxConcurrent)
	for i := 0; i < maxConcurrent; i++ {
		ch <- struct{}{}
	}

	return &SimpleRatePolicy{tokens: ch}
}

// Decide acquires a token or rejects if none are available.
func (p *SimpleRatePolicy) Decide(ctx context.Context) (ThrottleDecision, time.Duration) {
	select {
	case <-ctx.Done():
		return ThrottleReject, 0
	case <-p.tokens:
		return ThrottleAllow, 0
	default:
		return ThrottleReject, 0
	}
}

// Observe releases a token back to the pool.
func (p *SimpleRatePolicy) Observe(success bool, _ time.Duration) {
	// Always release token; never block.
	select {
	case p.tokens <- struct{}{}:
	default:
	}
}
