package supervisor

import (
	"math/rand"
	"time"

	"github.com/abhipray-cpu/concurx/backoff"
)

// Strategy defines the policy used by the supervisor to decide
// how to react when a child process terminates with an error.
//
// The key design constraint is that all failure decisions are:
//   - deterministic
//   - serialized
//   - side-effect free
//
// The attempt parameter is 1-based:
//
//	attempt == 1 means the first observed failure for this child
//	since the supervisor was started.
//
// This allows strategies to implement:
//   - exponential backoff
//   - restart limits
//   - escalation (e.g. stop supervisor)
//   - circuit-breaker–like behavior
type Strategy interface {
	// OnFailure is invoked exactly once per observed child failure.
	//
	// It returns:
	//   - a RestartAction describing what the supervisor should do
	//   - an optional delay before the action is applied
	//
	// A delay of zero means the action is applied immediately.
	OnFailure(childID string, err error, attempt int) (RestartAction, time.Duration)
}

// FuncStrategy adapts a plain function to the Strategy interface.
//
// This is primarily intended for:
//   - small custom policies
//   - tests
//   - embedding supervisor logic into higher-level systems
//
// A nil FuncStrategy is treated as a no-op strategy that disables restarts.
type FuncStrategy func(childID string, err error, attempt int) (RestartAction, time.Duration)

// OnFailure delegates to the underlying function.
// If the function is nil, restarts are disabled explicitly.
func (f FuncStrategy) OnFailure(childID string, err error, attempt int) (RestartAction, time.Duration) {
	if f == nil {
		return RestartNone, 0
	}
	return f(childID, err, attempt)
}

// OneForOne is the simplest restart strategy.
//
// When a child fails:
//   - only that child is restarted
//   - no delay is applied
//
// This mirrors Erlang's one-for-one semantics and is the default strategy.
type OneForOne struct{}

// NewOneForOne returns a new OneForOne strategy instance.
func NewOneForOne() *OneForOne { return &OneForOne{} }

// OnFailure always restarts the failing child immediately.
func (s *OneForOne) OnFailure(childID string, err error, attempt int) (RestartAction, time.Duration) {
	return RestartOne, 0
}

// AllForOne restarts all children when any single child fails.
//
// This strategy is useful when children are tightly coupled
// and partial restarts would lead to inconsistent state.
type AllForOne struct{}

// NewAllForOne returns a new AllForOne strategy instance.
func NewAllForOne() *AllForOne { return &AllForOne{} }

// OnFailure escalates a single child failure into a full restart.
func (s *AllForOne) OnFailure(childID string, err error, attempt int) (RestartAction, time.Duration) {
	return RestartAll, 0
}

// BackoffOneForOne implements a one-for-one strategy with exponential backoff.
//
// The delay before restart grows exponentially with each failure attempt
// and is optionally jittered to avoid coordinated restarts.
//
// This strategy is intended to:
//   - protect downstream systems
//   - avoid tight crash loops
//   - stabilize flapping processes
type BackoffOneForOne struct {
	// Initial is the base delay applied to the first restart attempt.
	// If <= 0, a conservative default is used.
	Initial time.Duration

	// Max caps the maximum delay.
	// If <= 0, no upper bound is applied.
	Max time.Duration

	// Factor controls exponential growth between attempts.
	// Values <= 1 are coerced to a sane default.
	Factor float64

	// Jitter applies randomization to the computed delay.
	// Expressed as a fraction: 0.5 means ±50%.
	// Values outside [0,1) disable jitter.
	Jitter float64

	// rng is an optional random source.
	// When nil, the global math/rand source is used.
	rng *rand.Rand
}

// NewBackoffOneForOne constructs a BackoffOneForOne strategy
// while defensively normalizing invalid inputs.
//
// Defaults are intentionally conservative to avoid aggressive restarts.
func NewBackoffOneForOne(
	initial, maxDelay time.Duration,
	factor float64,
	jitter float64,
) *BackoffOneForOne {
	if initial <= 0 {
		initial = 50 * time.Millisecond
	}
	if factor <= 1.0 {
		factor = 2.0
	}
	if jitter < 0.0 || jitter >= 1.0 {
		jitter = 0.0
	}

	return &BackoffOneForOne{
		Initial: initial,
		Max:     maxDelay,
		Factor:  factor,
		Jitter:  jitter,
	}
}

// WithRand injects a custom RNG.
//
// This is primarily used for tests to make backoff behavior deterministic.
// It is safe to call at any time before the strategy is used.
func (b *BackoffOneForOne) WithRand(r *rand.Rand) *BackoffOneForOne {
	b.rng = r
	return b
}

// OnFailure computes an exponential backoff delay based on the attempt count.
//
// The formula is:
//
//	delay = Initial * Factor^(attempt-1)
//
// The delay is then:
//   - clamped to Max (if set)
//   - jittered (if enabled)
//   - forced to be non-negative
func (b *BackoffOneForOne) OnFailure(
	childID string,
	err error,
	attempt int,
) (RestartAction, time.Duration) {
	delay := backoff.Compute(
		backoff.Config{
			Initial: b.Initial,
			Max:     b.Max,
			Factor:  b.Factor,
			Jitter:  b.Jitter,
		},
		attempt,
		b.rng,
	)
	return RestartOne, delay
}
