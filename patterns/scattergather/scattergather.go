package scatter

import "context"

// ScatterGather runs multiple independent branches in parallel
// and aggregates their results based on a Policy.
func ScatterGather[T any](
	ctx context.Context,
	branches []func(context.Context) (T, error),
	policy Policy,
	opts ...Option,
) ([]T, error) {
	if len(branches) == 0 {
		return nil, ErrNoBranches
	}

	// Apply options
	o := defaultOptions()
	for _, opt := range opts {
		opt(&o)
	}
	o.applyDefaults(len(branches))

	if err := o.validate(); err != nil {
		return nil, err
	}

	// Apply timeout if configured
	if o.Timeout > 0 {
		var cancel context.CancelFunc
		ctx, cancel = context.WithTimeout(ctx, o.Timeout)
		defer cancel()
	}

	// Defensive default: all branches must succeed
	if policy == nil {
		policy = NewAllSuccessPolicy(len(branches))
	}

	return runScatterGather(ctx, branches, policy, o)
}
