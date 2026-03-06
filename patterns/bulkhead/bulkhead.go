package bulkhead

import "context"

// Bulkhead provides isolation by limiting concurrent execution.
// It is safe for concurrent use.
type Bulkhead interface {
	// Execute runs fn inside the bulkhead.
	//
	// Semantics:
	// - Honors context cancellation
	// - Enforces capacity + queue limits
	// - Is panic-safe (panics are isolated)
	// - Metrics are recorded but never affect behavior
	Execute(ctx context.Context, fn func(context.Context) error) error
}

// NewBulkhead constructs a new bulkhead with the given options.
//
// Guarantees:
// - Immutable configuration after creation
// - No goroutine leaks
// - No global state
// - Race-safe under heavy concurrency
func NewBulkhead(opts ...Option) (Bulkhead, error) {
	o := defaultOptions()

	for _, opt := range opts {
		opt(&o)
	}

	o.applyDefaults()

	if err := o.validate(); err != nil {
		return nil, err
	}

	// Ensure metrics is always non-nil
	o.Metrics = defaultMetrics(o.Metrics)

	return newBulkheadInternal(o), nil
}
