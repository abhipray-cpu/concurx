package timeout

import "time"

// TimeoutOptions defines timeout wrapper behavior.
type TimeoutOptions struct {
	Timeout time.Duration
}

// TimeoutOption mutates TimeoutOptions.
type TimeoutOption func(*TimeoutOptions)

// WithTimeout sets the execution timeout.
// MUST be > 0.
func WithTimeout(d time.Duration) TimeoutOption {
	return func(o *TimeoutOptions) {
		o.Timeout = d
	}
}

// defaultTimeoutOptions returns safe defaults.
func defaultTimeoutOptions() TimeoutOptions {
	return TimeoutOptions{
		Timeout: 0,
	}
}

// applyDefaults normalizes values.
func (o *TimeoutOptions) applyDefaults() {
	// no-op for now
}

// validate ensures options are sane.
func (o *TimeoutOptions) validate() error {
	if o.Timeout <= 0 {
		return ErrInvalidTimeoutOptions
	}
	return nil
}
