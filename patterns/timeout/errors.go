package timeout

import "errors"

// Stable, user-visible timeout errors.

var (
	// ErrTimeout is returned when execution exceeds the configured timeout.
	ErrTimeout = errors.New("timeout: execution exceeded deadline")

	// ErrInvalidTimeoutOptions is returned when options are misconfigured.
	ErrInvalidTimeoutOptions = errors.New("timeout: invalid options")
)
