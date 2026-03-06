package bulkhead

import "errors"

// Bulkhead semantic errors.
// These errors define stable, user-visible behavior.
// DO NOT change their meaning once released.

var (
	// ErrBulkheadClosed is returned when the bulkhead
	// has been shut down and no further work is accepted.
	ErrBulkheadClosed = errors.New("bulkhead: closed")

	// ErrBulkheadFull is returned when the bulkhead has
	// reached its maximum capacity and the admission
	// policy is Reject.
	ErrBulkheadFull = errors.New("bulkhead: capacity exceeded")

	// ErrBulkheadQueueFull is returned when the bulkhead
	// queue is enabled and the queue is full.
	ErrBulkheadQueueFull = errors.New("bulkhead: queue full")

	// ErrBulkheadTimeout is returned when a request
	// times out while waiting for capacity.
	ErrBulkheadTimeout = errors.New("bulkhead: timeout")

	// ErrBulkheadCanceled is returned when the caller's
	// context is canceled while waiting or executing.
	ErrBulkheadCanceled = errors.New("bulkhead: context canceled")

	// ErrBulkheadPanic indicates the executed function
	// panicked and was safely isolated.
	ErrBulkheadPanic = errors.New("bulkhead: panic")

	// ErrInvalidBulkheadOptions indicates invalid or
	// inconsistent configuration.
	ErrInvalidBulkheadOptions = errors.New("bulkhead: invalid options")
)
