package workergroup

import "errors"

var (
	// ErrQueueFull is returned when SubmitReject is configured
	// and no capacity is available.
	ErrQueueFull = errors.New("workergroup: queue full")

	// ErrStopped indicates Submit was called after Stop completed.
	ErrStopped = errors.New("workergroup: worker group stopped")

	// ErrQueueClosed indicates internal shutdown has begun and
	// no further submissions are accepted.
	ErrQueueClosed = errors.New("workergroup: queue closed")
)
