package ratelimiter

import "time"

// Metrics receives rate limiter event callbacks.
type Metrics interface {
	OnAllow()
	OnReject()
	OnDelay(time.Duration)
	OnPanic()
}

type noopMetrics struct{}

func (noopMetrics) OnAllow()              {}
func (noopMetrics) OnReject()             {}
func (noopMetrics) OnDelay(time.Duration) {}
func (noopMetrics) OnPanic()              {}

func defaultMetrics() Metrics {
	return noopMetrics{}
}
