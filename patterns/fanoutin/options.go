package fanout

import "time"

// Options configures [FanOut] behavior.
type Options struct {
	Concurrency   int
	FailFast      bool
	Timeout       time.Duration
	PreserveOrder bool
}

// Option is a functional option for [FanOut].
type Option func(*Options)

func defaultOptions() Options {
	return Options{
		Concurrency:   0,     // resolved later
		FailFast:      false, // IMPORTANT: default is NO fail-fast
		Timeout:       0,
		PreserveOrder: true,
	}
}

// WithConcurrency sets maximum parallelism.
func WithConcurrency(n int) Option {
	return func(o *Options) {
		o.Concurrency = n
	}
}

// WithFailFast enables fail-fast behavior.
func WithFailFast() Option {
	return func(o *Options) {
		o.FailFast = true
	}
}

// WithTimeout sets a global execution timeout.
func WithTimeout(d time.Duration) Option {
	return func(o *Options) {
		o.Timeout = d
	}
}

// WithPreserveOrder forces ordered output.
func WithPreserveOrder() Option {
	return func(o *Options) {
		o.PreserveOrder = true
	}
}

func (o *Options) applyDefaults(inputLen int) {
	if o.Concurrency <= 0 || o.Concurrency > inputLen {
		o.Concurrency = inputLen
	}
}

func (o *Options) validate() error {
	if o.Concurrency < 0 || o.Timeout < 0 {
		return ErrInvalidOptions
	}
	return nil
}
