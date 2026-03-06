package pipeline

import "time"

// Options configures a [Pipeline].
type Options struct {
	BufferSize int
	Timeout    time.Duration
	FailFast   bool

	// OnTypeMismatch is called when adaptOutput encounters a value whose
	// concrete type does not match the Pipeline[T] type parameter.
	// The callback receives the value that could not be asserted.
	// If nil, mismatched values are silently dropped.
	OnTypeMismatch func(value any)
}

// Option is a functional option for [Pipeline].
type Option func(*Options)

// WithBufferSize sets the channel buffer size between stages.
func WithBufferSize(n int) Option {
	return func(o *Options) { o.BufferSize = n }
}

// WithTimeout sets a deadline for the entire pipeline.
func WithTimeout(d time.Duration) Option {
	return func(o *Options) { o.Timeout = d }
}

// WithFailFast causes the pipeline to stop on the first stage error.
func WithFailFast() Option {
	return func(o *Options) { o.FailFast = true }
}

// WithOnTypeMismatch registers a callback invoked when a stage emits a
// value whose type is incompatible with the Pipeline[T] output type.
// This is useful for logging or metrics when stages produce unexpected types.
func WithOnTypeMismatch(fn func(value any)) Option {
	return func(o *Options) { o.OnTypeMismatch = fn }
}

func defaultOptions() Options {
	return Options{
		BufferSize: 0, // strict backpressure
		Timeout:    0,
		FailFast:   true,
	}
}

func (o *Options) applyDefaults() {
	if o.BufferSize < 0 {
		o.BufferSize = 0
	}
}

func (o *Options) validate() error {
	if o.Timeout < 0 || o.BufferSize < 0 {
		return ErrInvalidOptions
	}
	return nil
}
