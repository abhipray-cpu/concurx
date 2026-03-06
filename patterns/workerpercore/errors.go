package workerpercore

import "errors"

// Stable, user-visible errors
var (
	// ErrInvalidWorkerOptions indicates invalid configuration.
	ErrInvalidWorkerOptions = errors.New("workerpercore: invalid options")

	// ErrQueueFull indicates the task queue is full.
	ErrQueueFull = errors.New("workerpercore: task queue full")

	// ErrWorkerClosed indicates submit after shutdown.
	ErrWorkerClosed = errors.New("workerpercore: worker pool closed")

	// ErrWorkerPanic indicates a task panicked.
	ErrWorkerPanic = errors.New("workerpercore: task panic")

	ErrInvalidTask = errors.New("workerpercore: invalid task")
)
