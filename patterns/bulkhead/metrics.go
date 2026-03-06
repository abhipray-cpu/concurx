package bulkhead

import "time"

// BulkheadMetrics observes bulkhead behavior.
// All methods MUST be non-blocking.
type BulkheadMetrics interface {
	// Queue events
	OnQueueAccepted()
	OnQueueRejected()

	// Execution lifecycle
	OnExecutionStart()
	OnExecutionFinish(duration time.Duration)

	// Outcomes
	OnExecutionError()
	OnExecutionPanic()
}

type noopBulkheadMetrics struct{}

func (noopBulkheadMetrics) OnQueueAccepted()                {}
func (noopBulkheadMetrics) OnQueueRejected()                {}
func (noopBulkheadMetrics) OnExecutionStart()               {}
func (noopBulkheadMetrics) OnExecutionFinish(time.Duration) {}
func (noopBulkheadMetrics) OnExecutionError()               {}
func (noopBulkheadMetrics) OnExecutionPanic()               {}

func defaultMetrics(m BulkheadMetrics) BulkheadMetrics {
	if m == nil {
		return noopBulkheadMetrics{}
	}
	return m
}
