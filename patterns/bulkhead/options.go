package bulkhead

import "time"

// Options defines bulkhead behavior.
// These options are immutable after construction.
type Options struct {
	// Capacity is the maximum number of concurrent executions
	// allowed inside the bulkhead.
	//
	// MUST be > 0.
	Capacity int

	// QueueSize is the maximum number of requests waiting
	// for capacity.
	//
	// QueueSize == 0  → no queue (immediate reject)
	// QueueSize > 0   → bounded queue
	QueueSize int

	// Timeout is the maximum time a request is allowed to wait
	// (queue wait + execution).
	//
	// 0 means no timeout.
	Timeout time.Duration

	// FailFast determines behavior when the bulkhead is full.
	//
	// true  → reject immediately when capacity/queue is full
	// false → block until space is available or ctx cancels
	FailFast bool

	Metrics BulkheadMetrics
}

// Option mutates Options.
type Option func(*Options)

// WithCapacity sets max concurrent executions.
func WithCapacity(n int) Option {
	return func(o *Options) {
		o.Capacity = n
	}
}

// WithQueueSize sets the queue length.
func WithQueueSize(n int) Option {
	return func(o *Options) {
		o.QueueSize = n
	}
}

// WithTimeout sets a global timeout.
func WithTimeout(d time.Duration) Option {
	return func(o *Options) {
		o.Timeout = d
	}
}

// WithFailFast enables immediate rejection
// when the bulkhead is saturated.
func WithFailFast() Option {
	return func(o *Options) {
		o.FailFast = true
	}
}

// defaultOptions returns safe, conservative defaults.
func defaultOptions() Options {
	return Options{
		Capacity:  1,
		QueueSize: 0,
		Timeout:   0,
		FailFast:  true,
		Metrics:   noopBulkheadMetrics{},
	}
}

// applyDefaults normalizes options.
func (o *Options) applyDefaults() {
	if o.Capacity <= 0 {
		o.Capacity = 1
	}
	if o.QueueSize < 0 {
		o.QueueSize = 0
	}
}

// validate ensures options are sane.
func (o *Options) validate() error {
	if o.Capacity <= 0 {
		return ErrInvalidBulkheadOptions
	}
	if o.QueueSize < 0 {
		return ErrInvalidBulkheadOptions
	}
	if o.Timeout < 0 {
		return ErrInvalidBulkheadOptions
	}
	return nil
}
