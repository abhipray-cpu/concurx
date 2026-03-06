package throttler

import "errors"

// Stable, user-visible throttler errors.
// These MUST NOT change once released.

var (
	// ErrThrottled is returned when execution is rejected by the throttler.
	ErrThrottled = errors.New("throttler: request rejected")

	// ErrThrottleTimeout is returned when a delayed request exceeds timeout.
	ErrThrottleTimeout = errors.New("throttler: timeout while throttling")

	// ErrInvalidThrottleOptions indicates misconfiguration.
	ErrInvalidThrottleOptions = errors.New("throttler: invalid options")

	// ErrThrottlePanic is raised when a throttled function panics.
	ErrThrottlePanic = errors.New("throttler: panic")

	// ErrInvalidThrottle indicates the throttler itself is invalid.
	ErrInvalidThrottle = errors.New("throttler: invalid throttler")
)
