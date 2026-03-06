package breaker

import "context"

// CircuitBreaker implements the circuit breaker pattern.
// Use [New] to construct and [CircuitBreaker.Execute] to run guarded operations.
type CircuitBreaker struct {
	sm *stateMachine
}

// New constructs a [CircuitBreaker] with the given options.
// Returns an error if configuration is invalid.
func New(opts ...Option) (*CircuitBreaker, error) {
	o := defaultOptions()
	for _, opt := range opts {
		opt(&o)
	}
	if err := o.validate(); err != nil {
		return nil, err
	}

	return &CircuitBreaker{
		sm: newStateMachine(o),
	}, nil
}

// Execute runs fn through the circuit breaker.
// Returns [ErrCircuitOpen] if the circuit is currently open.
func (cb *CircuitBreaker) Execute(
	ctx context.Context,
	fn func(context.Context) error,
) error {

	if fn == nil {
		return ErrInvalidOptions
	}

	return run(ctx, cb.sm, fn)
}
