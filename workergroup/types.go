package workergroup

import "context"

// Job is a unit of work executed by a worker.
//
// Jobs must respect context cancellation but must not assume
// cancellation implies abandonment. Accepted jobs always run.
//
// If a Job returns a non-nil error, the OnJobError hook is invoked
// (if configured). Errors do not terminate the worker.
type Job func(ctx context.Context) error
