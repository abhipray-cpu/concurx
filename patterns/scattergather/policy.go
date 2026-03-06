package scatter

import "context"

// Policy defines how scatter-gather decides when to stop execution
// and how to determine the final result.
//
// Policies are stateful and are expected to be used by a single
// scatter-gather invocation.
type Policy interface {
	// Observe is called after each task finishes.
	// success indicates whether the task succeeded.
	//
	// Return stop=true to signal early termination.
	Observe(success bool) (stop bool)

	// Result is called after execution completes or stops early.
	// It determines the final outcome.
	Result(ctx context.Context) error
}

//
// ──────────────────────────────────────────────────────────────
// AllSuccessPolicy
// ──────────────────────────────────────────────────────────────
//
// Requires ALL tasks to succeed.
// Stops immediately on first failure.
//

type allSuccessPolicy struct {
	total   int
	success int
	failed  bool
}

// NewAllSuccessPolicy requires all branches to succeed.
func NewAllSuccessPolicy(total int) Policy {
	return &allSuccessPolicy{
		total: total,
	}
}

func (p *allSuccessPolicy) Observe(success bool) bool {
	if !success {
		p.failed = true
		return true // stop immediately
	}
	p.success++
	return false
}

func (p *allSuccessPolicy) Result(ctx context.Context) error {
	// Policy decision always wins over context
	if p.failed {
		return ErrTaskFailed
	}
	if p.success == p.total {
		return nil
	}

	// Only now consult context
	select {
	case <-ctx.Done():
		return ctx.Err()
	default:
	}

	return ErrTaskFailed
}

//
// ──────────────────────────────────────────────────────────────
// MinSuccessPolicy
// ──────────────────────────────────────────────────────────────
//
// Requires at least N successful tasks.
// Useful for quorum / partial availability patterns.
//

type minSuccessPolicy struct {
	required int
	success  int
	total    int
}

// NewMinSuccessPolicy requires at least the specified number of successes.
func NewMinSuccessPolicy(total, required int) Policy {
	return &minSuccessPolicy{
		required: required,
		total:    total,
	}
}

func (p *minSuccessPolicy) Observe(success bool) bool {
	if success {
		p.success++
	}
	// Stop once minimum success threshold is met
	return p.success >= p.required
}

func (p *minSuccessPolicy) Result(ctx context.Context) error {
	// Success condition wins
	if p.success >= p.required {
		return nil
	}

	// Otherwise, cancellation matters
	select {
	case <-ctx.Done():
		return ctx.Err()
	default:
	}

	return ErrInsufficientSuccess
}

//
// ──────────────────────────────────────────────────────────────
// FirstSuccessPolicy
// ──────────────────────────────────────────────────────────────
//
// Stops execution as soon as the FIRST task succeeds.
// Fails only if ALL tasks fail.
//

type firstSuccessPolicy struct {
	success bool
}

// NewFirstSuccessPolicy resolves as soon as the first branch succeeds.
func NewFirstSuccessPolicy() Policy {
	return &firstSuccessPolicy{}
}

func (p *firstSuccessPolicy) Observe(success bool) bool {
	if success {
		p.success = true
		return true // stop immediately
	}
	return false
}

func (p *firstSuccessPolicy) Result(ctx context.Context) error {
	// Success always wins
	if p.success {
		return nil
	}

	// Only now consult context
	select {
	case <-ctx.Done():
		return ctx.Err()
	default:
	}

	return ErrNoSuccessfulBranch
}
