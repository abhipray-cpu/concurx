package group

import (
	"context"
	"time"

	"github.com/abhipray-cpu/concurx/core"
)

// Config holds the configuration for a [Group].
type Config struct {
	MaxConcurrency int
	CancelTimeout  time.Duration
	Boundary       core.ErrorBoundary
	Logger         core.Logger
	Metrics        core.Metrics
	Name           string
	ParentContext  context.Context
}

// Option configures a [Group] via functional options passed to [New].
type Option func(*Config)

// WithMaxConcurrency sets the maximum number of goroutines that
// may run simultaneously. Zero (default) means unlimited.
func WithMaxConcurrency(n int) Option {
	return func(c *Config) {
		if n < 0 {
			n = 0
		}
		c.MaxConcurrency = n
	}
}

// WithCancelTimeout sets a grace period after the first error before
// the group context is canceled, allowing in-flight tasks to finish.
func WithCancelTimeout(d time.Duration) Option {
	return func(c *Config) {
		if d < 0 {
			d = 0
		}
		c.CancelTimeout = d
	}
}

// WithErrorBoundary attaches an [core.ErrorBoundary] to classify errors
// returned by tasks (ignore, transient, permanent, critical).
func WithErrorBoundary(b core.ErrorBoundary) Option {
	return func(c *Config) {
		if b != nil {
			c.Boundary = b
		}
	}
}

// WithLogger sets the structured logger for the group.
func WithLogger(l core.Logger) Option {
	return func(c *Config) {
		if l != nil {
			c.Logger = l
		}
	}
}

// WithMetrics sets the metrics recorder for the group.
func WithMetrics(m core.Metrics) Option {
	return func(c *Config) {
		if m != nil {
			c.Metrics = m
		}
	}
}

// WithName assigns a human-readable name to the group, used in
// log messages and metric labels.
func WithName(name string) Option {
	return func(c *Config) {
		if name != "" {
			c.Name = name
		}
	}
}

// WithContext sets a parent context for the group.
// The group's internal context will be derived from this parent,
// allowing callers to tie the group's lifetime to a request,
// server, or any other lifecycle.
//
// If ctx is nil, context.Background() is used (the default).
func WithContext(ctx context.Context) Option {
	return func(c *Config) {
		if ctx != nil {
			c.ParentContext = ctx
		}
	}
}
