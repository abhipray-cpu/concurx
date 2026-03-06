package workerpercore

import "time"

// WorkerMetrics provides observability hooks.
type WorkerMetrics interface {
	OnTaskQueued()
	OnTaskStart()
	OnTaskFinish(duration time.Duration)
	OnTaskPanic()
}

// No-op metrics (default)
type noopWorkerMetrics struct{}

func (noopWorkerMetrics) OnTaskQueued()              {}
func (noopWorkerMetrics) OnTaskStart()               {}
func (noopWorkerMetrics) OnTaskFinish(time.Duration) {}
func (noopWorkerMetrics) OnTaskPanic()               {}

func defaultWorkerMetrics() WorkerMetrics {
	return noopWorkerMetrics{}
}
