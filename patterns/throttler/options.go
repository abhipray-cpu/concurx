package throttler

import "time"

// ThrottleOptions define throttler behavior.
// Immutable after construction.
type ThrottleOptions struct {
	// MaxDelay is the maximum delay allowed before execution.
	// 0 means no delay allowed (reject immediately).
	MaxDelay time.Duration

	// Timeout is the total time allowed for Execute (delay + execution).
	// 0 means no timeout.
	Timeout time.Duration

	// FailFast determines behavior when throttled.
	// true  → reject immediately
	// false → delay up to MaxDelay
	FailFast bool

	// Metrics hooks (optional)
	Metrics ThrottleMetrics
}

// ThrottleOption is a functional option for [Throttler.Execute].
type ThrottleOption func(*ThrottleOptions)

// WithMaxDelay caps the delay the policy may impose.
func WithMaxDelay(d time.Duration) ThrottleOption {
	return func(o *ThrottleOptions) {
		o.MaxDelay = d
	}
}

// WithThrottleTimeout sets the maximum time to wait for admission.
func WithThrottleTimeout(d time.Duration) ThrottleOption {
	return func(o *ThrottleOptions) {
		o.Timeout = d
	}
}

// WithThrottleFailFast rejects immediately instead of delaying.
func WithThrottleFailFast() ThrottleOption {
	return func(o *ThrottleOptions) {
		o.FailFast = true
	}
}

// WithThrottleMetrics attaches a metrics observer.
func WithThrottleMetrics(m ThrottleMetrics) ThrottleOption {
	return func(o *ThrottleOptions) {
		o.Metrics = m
	}
}
