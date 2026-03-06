package workergroup

// Hooks provide optional lifecycle callbacks for observability.
//
// Hooks must be:
//   - non-blocking
//   - panic-safe
//   - race-safe
//
// Hooks are never required for correctness and are not allowed
// to influence execution or shutdown semantics.
type Hooks struct {
	OnWorkerStart func(id int)
	OnWorkerStop  func(id int)

	OnJobStart  func(workerID int)
	OnJobFinish func(workerID int)

	// OnJobError is invoked when a job returns a non-nil error.
	// Errors do not terminate the worker; this hook is for observability only.
	OnJobError func(workerID int, err error)

	// OnJobPanic is invoked when a job panics.
	// Panics are isolated and do not terminate workers.
	OnJobPanic func(workerID int, r any)

	// OnWorkerPanic is reserved for future use.
	OnWorkerPanic func(workerID int, r any)
}

// safe normalizes Hooks so all callbacks are non-nil.
// This avoids nil checks on hot paths.
func (h Hooks) safe() Hooks {
	if h.OnWorkerStart == nil {
		h.OnWorkerStart = func(int) {}
	}
	if h.OnWorkerStop == nil {
		h.OnWorkerStop = func(int) {}
	}
	if h.OnJobStart == nil {
		h.OnJobStart = func(int) {}
	}
	if h.OnJobFinish == nil {
		h.OnJobFinish = func(int) {}
	}
	if h.OnJobError == nil {
		h.OnJobError = func(int, error) {}
	}
	if h.OnJobPanic == nil {
		h.OnJobPanic = func(int, any) {}
	}
	if h.OnWorkerPanic == nil {
		h.OnWorkerPanic = func(int, any) {}
	}
	return h
}
