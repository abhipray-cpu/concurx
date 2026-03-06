package core

import "context"

// ErrorClassification instructs callers how to handle an error.
type ErrorClassification int

// ErrorClassification values used by [ErrorBoundary] implementations.
const (
	ClassIgnored   ErrorClassification = iota // treat as success / swallow
	ClassTransient                            // retryable error
	ClassPermanent                            // not retryable; surface
	ClassCritical                             // escalate / restart
)

// ErrorBoundary is a contract for capturing and classifying errors produced by tasks.
type ErrorBoundary interface {
	// Capture is called with the source identifier and original error.
	// Returns the classification and optionally a transformed error.
	Capture(ctx context.Context, source string, err error) (ErrorClassification, error)
}
