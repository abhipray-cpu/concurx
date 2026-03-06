package supervisor

import "errors"

var (
	// ErrAlreadyRunning is returned when Start is called
	// on a supervisor that is already active.
	ErrAlreadyRunning = errors.New("supervisor: already running")

	// ErrChildExists indicates a child with the same ID
	// has already been registered.
	ErrChildExists = errors.New("supervisor: child already exists")

	// ErrNotRunning is returned when operations requiring
	// a running supervisor are invoked before Start().
	ErrNotRunning = errors.New("supervisor: not running")

	// ErrInvalidSpec indicates a malformed ChildSpec.
	// Validation is intentionally strict to avoid undefined behavior.
	ErrInvalidSpec = errors.New("supervisor: invalid child spec")
)
