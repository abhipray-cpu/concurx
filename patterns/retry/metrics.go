package retry

import "time"

// RetryMetrics receives callbacks for retry lifecycle events.
type RetryMetrics interface {
	OnAttempt(attempt int)
	OnRetry(attempt int, err error, delay time.Duration)
	OnSuccess(attempt int)
	OnFailure(err error)
}

type noopRetryMetrics struct{}

func (noopRetryMetrics) OnAttempt(int)                     {}
func (noopRetryMetrics) OnRetry(int, error, time.Duration) {}
func (noopRetryMetrics) OnSuccess(int)                     {}
func (noopRetryMetrics) OnFailure(error)                   {}

func defaultRetryMetrics() RetryMetrics {
	return noopRetryMetrics{}
}
