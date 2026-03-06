package supervisor

// Hooks provide optional lifecycle callbacks for observability.
//
// Hooks must:
//   - be non-blocking
//   - be panic-safe
//   - tolerate concurrent invocation
//
// Hooks are never allowed to influence restart or shutdown semantics.
type Hooks struct {
	OnChildStart     func(id string)
	OnChildStop      func(id string, err error)
	OnChildRestart   func(id string, restarts int, err error)
	OnSupervisorStop func(err error)
}

// Safe normalizes hooks so all callbacks are non-nil.
// This avoids nil checks on hot paths and simplifies internal logic.
func (h Hooks) Safe() Hooks {
	if h.OnChildStart == nil {
		h.OnChildStart = func(string) {}
	}
	if h.OnChildStop == nil {
		h.OnChildStop = func(string, error) {}
	}
	if h.OnChildRestart == nil {
		h.OnChildRestart = func(string, int, error) {}
	}
	if h.OnSupervisorStop == nil {
		h.OnSupervisorStop = func(error) {}
	}
	return h
}
