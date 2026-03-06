package timeout

import "context"

// Timeout executes fn with a strict upper time bound.
//
// Semantics:
//   - Parent context cancellation wins
//   - Timeout returns ErrTimeout
//   - Panic propagates
//   - No goroutine leaks
func Timeout(
	ctx context.Context,
	fn func(context.Context) error,
	opts ...TimeoutOption,
) error {

	if fn == nil {
		return ErrInvalidTimeoutOptions
	}

	o := defaultTimeoutOptions()
	for _, opt := range opts {
		opt(&o)
	}
	o.applyDefaults()

	if err := o.validate(); err != nil {
		return err
	}

	return runTimeout(ctx, fn, o)
}
