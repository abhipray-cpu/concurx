package retry

import "time"

// RetryOptions configures [Retry] behavior.
type RetryOptions struct {
	MaxAttempts int
	MaxDuration time.Duration
	Backoff     BackoffPolicy
	RetryIf     RetryPredicate
	Metrics     RetryMetrics
}

// RetryOption is a functional option for [Retry].
type RetryOption func(*RetryOptions)

func defaultRetryOptions() RetryOptions {
	return RetryOptions{
		MaxAttempts: 3,
		MaxDuration: 0,
		Backoff:     ConstantBackoff(0),
		RetryIf: func(err error) bool {
			return err != nil
		},
		Metrics: defaultRetryMetrics(),
	}
}

func (o *RetryOptions) validate() error {
	if o.MaxAttempts <= 0 {
		return ErrRetryInvalid
	}
	if o.Backoff == nil || o.RetryIf == nil {
		return ErrRetryInvalid
	}
	if o.Metrics == nil {
		o.Metrics = defaultRetryMetrics()
	}
	return nil
}

// -----------------------------------------------------------------------------
// Functional Options
// -----------------------------------------------------------------------------

// WithMaxAttempts sets the maximum number of retry attempts.
func WithMaxAttempts(n int) RetryOption {
	return func(o *RetryOptions) {
		o.MaxAttempts = n
	}
}

// WithMaxDuration sets the maximum total time for all attempts.
func WithMaxDuration(d time.Duration) RetryOption {
	return func(o *RetryOptions) {
		o.MaxDuration = d
	}
}

// WithBackoff sets the delay policy between retry attempts.
func WithBackoff(b BackoffPolicy) RetryOption {
	return func(o *RetryOptions) {
		o.Backoff = b
	}
}

// WithRetryIf sets a predicate to decide if a specific error is retryable.
func WithRetryIf(p RetryPredicate) RetryOption {
	return func(o *RetryOptions) {
		o.RetryIf = p
	}
}

// WithRetryMetrics attaches a metrics observer to retry operations.
func WithRetryMetrics(m RetryMetrics) RetryOption {
	return func(o *RetryOptions) {
		o.Metrics = m
	}
}

// WithJitter enables randomized jitter on backoff delays.
func WithJitter() RetryOption {
	return func(o *RetryOptions) {
		o.Backoff = Jitter{Inner: o.Backoff}
	}
}
