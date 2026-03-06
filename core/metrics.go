package core

// Metrics is a very small surface for recording metrics.
type Metrics interface {
	IncCounter(name string, labels ...Label)
	AddCounter(name string, v float64, labels ...Label)
	ObserveHistogram(name string, value float64, labels ...Label)
}

// Label is a key-value pair attached to metric observations.
type Label struct {
	Key, Value string
}

// noopMetrics is a Metrics implementation that silently discards all output.
type noopMetrics struct{}

func (noopMetrics) IncCounter(string, ...Label)                {}
func (noopMetrics) AddCounter(string, float64, ...Label)       {}
func (noopMetrics) ObserveHistogram(string, float64, ...Label) {}

// NoopMetrics is a Metrics implementation that silently discards all output.
// Safe to call without nil checks.
var NoopMetrics Metrics = noopMetrics{}
