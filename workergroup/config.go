package workergroup

import (
	"fmt"
	"time"
)

// Config defines the immutable configuration of a WorkerGroup.
//
// Config is validated once at construction time and must not be mutated
// afterwards. All fields influence admission, execution, and shutdown
// semantics, so correctness depends on treating this as read-only.
type Config struct {
	// Workers is the fixed number of worker goroutines.
	// Must be > 0. Workers are created eagerly on New().
	Workers int

	// QueueSize controls buffering between submitters and workers.
	//
	//   0  => unbuffered (direct handoff)
	//  >0  => bounded buffer
	//
	// QueueSize only affects admission, never execution guarantees.
	QueueSize int

	// SubmitBehavior defines how Submit behaves when the queue is full.
	SubmitBehavior SubmitBehavior

	// ShutdownTimeout is reserved for future use.
	// Currently shutdown is drain-based and unbounded.
	ShutdownTimeout time.Duration
}

// SubmitBehavior defines backpressure behavior at submission time.
type SubmitBehavior int

const (
	// SubmitBlock blocks the caller until space is available or context cancels.
	SubmitBlock SubmitBehavior = iota

	// SubmitReject immediately rejects when the queue is full.
	SubmitReject
)

// validate ensures the configuration is internally consistent.
// It intentionally performs no normalization — invalid configs fail fast.
func (c Config) validate() error {
	if c.Workers <= 0 {
		return fmt.Errorf("workergroup: Workers must be > 0, got %d", c.Workers)
	}
	if c.QueueSize < 0 {
		return fmt.Errorf("workergroup: QueueSize must be >= 0, got %d", c.QueueSize)
	}
	switch c.SubmitBehavior {
	case SubmitBlock, SubmitReject:
	default:
		return fmt.Errorf("workergroup: SubmitBehavior must be SubmitBlock (0) or SubmitReject (1), got %d", c.SubmitBehavior)
	}
	return nil
}
