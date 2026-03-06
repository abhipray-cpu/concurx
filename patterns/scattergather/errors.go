package scatter

import "errors"

// Scatter–Gather specific errors.
// These are semantic errors, not implementation leaks.

var (
	// ErrNoResults is returned when no branch
	// produced a successful result.
	ErrNoResults = errors.New("scattergather: no successful results")

	// ErrAllFailed is returned when all branches
	// completed but every one failed.
	ErrAllFailed = errors.New("scattergather: all branches failed")

	// ErrTimeout indicates the scatter–gather operation
	// exceeded the configured timeout.
	ErrTimeout = errors.New("scattergather: timeout exceeded")

	// ErrContextCanceled indicates the parent context
	// was canceled before completion.
	ErrContextCanceled = errors.New("scattergather: context canceled")

	// ErrInvalidOptions indicates invalid configuration.
	ErrInvalidOptions = errors.New("scattergather: invalid options")

	// ErrPanic indicates a panic occurred inside a branch
	// and was safely recovered.
	ErrPanic = errors.New("scattergather: panic recovered")

	// ErrInsufficientSuccess is returned when fewer branches succeeded
	// than the policy requires.
	ErrInsufficientSuccess = errors.New("scattergather: insufficient successful branches")

	// ErrNoBranches is returned when ScatterGather is called with no branches.
	ErrNoBranches = errors.New("scattergather: no branches provided")

	// ErrTaskFailed is a sentinel used by policies to indicate a branch failed.
	ErrTaskFailed = errors.New("scattergather: task failed")

	// ErrNoSuccessfulBranch is returned by [NewFirstSuccessPolicy] when no
	// branch produces a successful result.
	ErrNoSuccessfulBranch = errors.New("scattergather: no successful branches")
)
