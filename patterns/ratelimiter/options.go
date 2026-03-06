package ratelimiter

import "time"

// Options configures a rate limiter.
type Options struct {
	Policy   Policy
	FailFast bool
	Timeout  time.Duration
	Metrics  Metrics
}

// Option is a functional option for [New].
type Option func(*Options)

// WithPolicy sets the rate limiting policy (e.g., [TokenBucket], [FixedWindow]).
func WithPolicy(p Policy) Option {
	return func(o *Options) {
		o.Policy = p
	}
}

// WithFailFast causes the limiter to reject immediately instead of waiting.
func WithFailFast() Option {
	return func(o *Options) {
		o.FailFast = true
	}
}

// WithTimeout sets the maximum time to wait for permission.
func WithTimeout(d time.Duration) Option {
	return func(o *Options) {
		o.Timeout = d
	}
}

// WithMetrics attaches a [Metrics] observer to the rate limiter.
func WithMetrics(m Metrics) Option {
	return func(o *Options) {
		o.Metrics = m
	}
}

func defaultOptions() Options {
	return Options{
		FailFast: false,
		Timeout:  0,
		Metrics:  noopMetrics{},
	}
}

func (o *Options) validate() error {
	if o.Policy == nil {
		return ErrInvalidRateLimitOpts
	}
	if o.Timeout < 0 {
		return ErrInvalidRateLimitOpts
	}
	if o.Metrics == nil {
		o.Metrics = noopMetrics{}
	}
	return nil
}
