package supervisor

import "github.com/abhipray-cpu/concurx/core"

// Option mutates supervisor configuration.
// Options are applied once during construction.
type Option func(*options)

// Internal options container.
// This is intentionally not exported to preserve invariants.
type options struct {
	strategy Strategy
	runner   ChildRunner
	hooks    Hooks
	logger   core.Logger
	metrics  core.Metrics
}

// defaultOptions establishes conservative defaults:
//
// - OneForOne restart strategy
// - Direct child execution
// - No-op hooks
// - No-op logging and metrics
func defaultOptions() *options {
	return &options{
		strategy: NewOneForOne(),
		runner:   DefaultRunner,
		logger:   nil,
		metrics:  nil,
		hooks:    Hooks{}.Safe(),
	}
}

// WithStrategy configures the restart strategy.
//
// Nil strategies are ignored to prevent accidental misconfiguration.
func WithStrategy(s Strategy) Option {
	return func(o *options) {
		if s == nil {
			return
		}
		// Guard against typed nil (FuncStrategy(nil))
		if fs, ok := s.(FuncStrategy); ok && fs == nil {
			return
		}
		o.strategy = s
	}
}

// WithChildRunner allows overriding how children are executed.
// Used to integrate with group or custom schedulers.
func WithChildRunner(r ChildRunner) Option {
	return func(o *options) {
		if r != nil {
			o.runner = r
		}
	}
}

// WithHooks installs lifecycle hooks.
func WithHooks(h Hooks) Option {
	return func(o *options) {
		o.hooks = h.Safe()
	}
}

// WithLogger installs a logger.
// Nil is normalized to a no-op logger.
func WithLogger(l core.Logger) Option {
	return func(o *options) {
		if l != nil {
			o.logger = l
		}
	}
}

// WithMetrics installs a metrics collector.
// Nil is normalized to a no-op implementation.
func WithMetrics(m core.Metrics) Option {
	return func(o *options) {
		if m != nil {
			o.metrics = m
		}
	}
}

// safeLogger ensures logging calls never panic.
func safeLogger(l core.Logger) core.Logger {
	if l == nil {
		return core.NoopLogger
	}
	return l
}

// safeMetrics ensures metrics calls never panic.
func safeMetrics(m core.Metrics) core.Metrics {
	if m == nil {
		return core.NoopMetrics
	}
	return m
}
