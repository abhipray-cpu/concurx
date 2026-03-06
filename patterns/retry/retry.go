package retry

import "context"

// Retry executes fn until success or retry policy stops it.
func Retry(
	ctx context.Context,
	fn func(context.Context) error,
	opts ...RetryOption,
) error {

	if fn == nil {
		return ErrRetryInvalid
	}

	o := defaultRetryOptions()
	for _, opt := range opts {
		opt(&o)
	}

	if err := o.validate(); err != nil {
		return err
	}

	return runRetry(ctx, fn, o)
}
