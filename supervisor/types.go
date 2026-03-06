package supervisor

import (
	"context"
	"time"
)

// RestartAction defines what the supervisor should do
// when a child terminates with an error.
type RestartAction int

const (
	// RestartNone indicates that the child should not be restarted.
	// The child is marked as stopped and removed from supervision.
	RestartNone RestartAction = iota

	// RestartOne indicates that only the failing child
	// should be restarted.
	RestartOne

	// RestartAll indicates that all children under the supervisor
	// should be restarted.
	RestartAll

	// StopSupervisor indicates that the supervisor itself
	// should shut down.
	StopSupervisor
)

// RestartMode defines how a child behaves after termination.
type RestartMode int

const (
	// RestartModePermanent means the child is always restarted,
	// regardless of exit reason.
	RestartModePermanent RestartMode = iota

	// RestartModeTransient means the child is restarted
	// only if it exits with an error.
	RestartModeTransient

	// RestartModeTemporary means the child is never restarted.
	// Once it exits, it is permanently stopped.
	RestartModeTemporary
)

// BackoffPolicy controls restart delays for a child.
//
// All values are optional; zero values result in sensible defaults
// being applied by the supervisor.
type BackoffPolicy struct {
	// Initial is the base delay before the first restart.
	Initial time.Duration

	// Max is the upper bound for restart delay.
	// A zero value means no maximum.
	Max time.Duration

	// Multiplier controls exponential growth of the delay.
	Multiplier float64

	// Jitter introduces randomness to the delay to avoid
	// synchronized restarts across multiple children.
	Jitter float64
}

// RestartLimit optionally constrains how often a child
// may be restarted within a time window.
type RestartLimit struct {
	// MaxAttempts is the maximum number of restarts allowed.
	MaxAttempts int

	// Window defines the rolling time window for MaxAttempts.
	Window time.Duration
}

// ChildSpec describes a supervised child process.
//
// It is immutable once registered with the supervisor.
type ChildSpec struct {
	// ID uniquely identifies the child within the supervisor.
	ID string

	// Run is the function executed for the child.
	// It should block until the child exits.
	Run func(context.Context) error

	// Mode defines the restart semantics for this child.
	Mode RestartMode

	// Backoff controls restart delay behavior.
	Backoff BackoffPolicy

	// Limit optionally caps restart frequency.
	Limit RestartLimit

	// Labels provide metadata for observability and metrics.
	Labels map[string]string

	// Announce controls whether lifecycle hooks
	// are invoked for this child.
	Announce bool

	// Metadata is opaque user-defined data associated with the child.
	Metadata any
}

// ChildInfo captures runtime state and history for a child.
//
// It is managed internally by the supervisor and exposed
// via read-only snapshots.
type ChildInfo struct {
	// ID matches the child specification ID.
	ID string

	// Restarts counts how many times the child has been restarted.
	Restarts int

	// LastError is the most recent error returned by the child.
	LastError error

	// LastStart records the last time the child began execution.
	LastStart time.Time

	// LastExit records the last time the child exited.
	LastExit time.Time

	// Running indicates whether the child is currently executing.
	Running bool

	// RecentFailures tracks failure timestamps for restart limits.
	RecentFailures []time.Time

	// Stopped indicates the child is permanently stopped.
	Stopped bool
}

// FailureEvent represents a single child failure
// emitted into the supervisor's failure handling loop.
type FailureEvent struct {
	// ChildID identifies the failing child.
	ChildID string

	// Err is the error returned by the child.
	Err error

	// Attempt is the restart attempt number (1-based).
	Attempt int

	// When records when the failure occurred.
	When time.Time
}
