package scatter

import "time"

// Options configures [ScatterGather] behavior.
type Options struct {
	Concurrency   int
	Timeout       time.Duration
	MinSuccess    int
	FailFast      bool
	PreserveOrder bool
}

// Option is a functional option for [ScatterGather].
type Option func(*Options)

// WithConcurrency sets maximum parallelism.
func WithConcurrency(n int) Option {
	return func(o *Options) {
		o.Concurrency = n
	}
}

// WithTimeout sets a global execution timeout.
func WithTimeout(d time.Duration) Option {
	return func(o *Options) {
		o.Timeout = d
	}
}

// WithMinSuccess requires at least n successful branches.
func WithMinSuccess(n int) Option {
	return func(o *Options) {
		o.MinSuccess = n
	}
}

// WithFailFast cancels remaining branches
// once MinSuccess is satisfied.
func WithFailFast() Option {
	return func(o *Options) {
		o.FailFast = true
	}
}

// WithPreserveOrder forces ordered results.
func WithPreserveOrder() Option {
	return func(o *Options) {
		o.PreserveOrder = true
	}
}

// defaultOptions returns safe defaults.
func defaultOptions() Options {
	return Options{
		Concurrency:   0,    // resolved based on input
		Timeout:       0,    // no timeout unless specified
		MinSuccess:    1,    // classic scatter–gather
		FailFast:      true, // stop once goal reached
		PreserveOrder: false,
	}
}

// applyDefaults normalizes options.
func (o *Options) applyDefaults(branches int) {
	if o.Concurrency <= 0 || o.Concurrency > branches {
		o.Concurrency = branches
	}
	if o.MinSuccess <= 0 {
		o.MinSuccess = 1
	}
	if o.MinSuccess > branches {
		o.MinSuccess = branches
	}
}

// validate ensures options are sane.
func (o *Options) validate() error {
	if o.Concurrency < 0 {
		return ErrInvalidOptions
	}
	if o.Timeout < 0 {
		return ErrInvalidOptions
	}
	if o.MinSuccess < 0 {
		return ErrInvalidOptions
	}
	return nil
}
