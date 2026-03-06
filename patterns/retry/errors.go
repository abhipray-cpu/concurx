package retry

import "errors"

// Sentinel errors for the retry pattern.
var (
	// ErrRetryExhausted is returned when all retry attempts have been used.
	ErrRetryExhausted = errors.New("retry: attempts exhausted")

	// ErrRetryTimeout is returned when the retry deadline is exceeded.
	ErrRetryTimeout = errors.New("retry: timeout exceeded")

	// ErrRetryCanceled is returned when the context is canceled during retry.
	ErrRetryCanceled = errors.New("retry: context canceled")

	// ErrRetryInvalid is returned when retry options are invalid.
	ErrRetryInvalid = errors.New("retry: invalid options")
)
