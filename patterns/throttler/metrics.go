package throttler

import "time"

// ThrottleMetrics defines observability hooks.
type ThrottleMetrics interface {
	OnAllowed()
	OnDelayed(d time.Duration)
	OnRejected()
	OnExecuted(latency time.Duration)
	OnPanic()
}

// NopThrottleMetrics is the default no-op implementation.
type NopThrottleMetrics struct{}

// OnAllowed is a no-op.
func (NopThrottleMetrics) OnAllowed() {}

// OnDelayed is a no-op.
func (NopThrottleMetrics) OnDelayed(time.Duration) {}

// OnRejected is a no-op.
func (NopThrottleMetrics) OnRejected() {}

// OnExecuted is a no-op.
func (NopThrottleMetrics) OnExecuted(time.Duration) {}

// OnPanic is a no-op.
func (NopThrottleMetrics) OnPanic() {}
