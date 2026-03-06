package fanout

import "context"

// FanOut applies fn concurrently over inputs and collects results.
func FanOut[T any, R any](
	ctx context.Context,
	inputs []T,
	fn func(context.Context, T) (R, error),
	options ...Option,
) ([]R, error) {

	opts := defaultOptions()
	for _, opt := range options {
		opt(&opts)
	}

	opts.applyDefaults(len(inputs))

	if err := opts.validate(); err != nil {
		return nil, err
	}

	return runFanOut(ctx, inputs, fn, opts)
}
