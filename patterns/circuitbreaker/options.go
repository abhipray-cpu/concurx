package breaker

import "time"

// Options configures a [CircuitBreaker].
type Options struct {
	FailureThreshold int
	SuccessThreshold int
	OpenTimeout      time.Duration
	Metrics          Metrics
}

// Option is a functional option for [New].
type Option func(*Options)

// WithFailureThreshold sets consecutive failures required to open the circuit.
func WithFailureThreshold(n int) Option {
	return func(o *Options) { o.FailureThreshold = n }
}

// WithSuccessThreshold sets consecutive successes in half-open state required to close the circuit.
func WithSuccessThreshold(n int) Option {
	return func(o *Options) { o.SuccessThreshold = n }
}

// WithOpenTimeout sets how long the circuit stays open before transitioning to half-open.
func WithOpenTimeout(d time.Duration) Option {
	return func(o *Options) { o.OpenTimeout = d }
}

// WithMetrics attaches a [Metrics] observer to the circuit breaker.
func WithMetrics(m Metrics) Option {
	return func(o *Options) { o.Metrics = m }
}

func defaultOptions() Options {
	return Options{
		FailureThreshold: 5,
		SuccessThreshold: 2,
		OpenTimeout:      5 * time.Second,
		Metrics:          defaultMetrics(),
	}
}

func (o *Options) validate() error {
	if o.FailureThreshold <= 0 {
		return ErrInvalidOptions
	}
	if o.SuccessThreshold <= 0 {
		return ErrInvalidOptions
	}
	if o.OpenTimeout <= 0 {
		return ErrInvalidOptions
	}
	if o.Metrics == nil {
		o.Metrics = defaultMetrics()
	}
	return nil
}
