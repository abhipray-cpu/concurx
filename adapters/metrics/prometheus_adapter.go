package metrics

import (
	"sync"

	"github.com/prometheus/client_golang/prometheus"

	"github.com/abhipray-cpu/concurx/core"
)

// PrometheusMetrics adapts Prometheus collectors to core.Metrics.
//
// Design guarantees:
//   - No global registry usage
//   - Parent service injects Registerer
//   - Lazy metric creation
//   - Concurrency-safe
//   - Stable label cardinality
type PrometheusMetrics struct {
	reg prometheus.Registerer

	counters   sync.Map // map[string]*prometheus.CounterVec
	histograms sync.Map // map[string]*prometheus.HistogramVec
}

// NewPrometheusMetrics constructs a Prometheus-backed Metrics adapter.
//
// The caller MUST provide a prometheus.Registerer.
// If nil is passed, NoopMetrics is returned.
func NewPrometheusMetrics(reg prometheus.Registerer) core.Metrics {
	if reg == nil {
		return core.NoopMetrics
	}

	return &PrometheusMetrics{
		reg: reg,
	}
}

// -----------------------------------------------------------------------------
// core.Metrics implementation
// -----------------------------------------------------------------------------

// IncCounter increments a named counter by 1.
func (p *PrometheusMetrics) IncCounter(
	name string,
	labels ...core.Label,
) {
	p.AddCounter(name, 1, labels...)
}

// AddCounter adds a value to a named counter.
func (p *PrometheusMetrics) AddCounter(
	name string,
	v float64,
	labels ...core.Label,
) {
	vec := p.getCounter(name, labels)
	vec.With(convertPromLabels(labels)).Add(v)
}

// ObserveHistogram records a value to a named histogram.
func (p *PrometheusMetrics) ObserveHistogram(
	name string,
	value float64,
	labels ...core.Label,
) {
	vec := p.getHistogram(name, labels)
	vec.With(convertPromLabels(labels)).Observe(value)
}

// -----------------------------------------------------------------------------
// Internal helpers
// -----------------------------------------------------------------------------

func (p *PrometheusMetrics) getCounter(
	name string,
	labels []core.Label,
) *prometheus.CounterVec {
	actual, _ := p.counters.LoadOrStore(name, func() any {
		vec := prometheus.NewCounterVec(
			prometheus.CounterOpts{
				Name: name,
				Help: name,
			},
			labelKeys(labels),
		)

		// Safe even if registered multiple times
		_ = p.reg.Register(vec)
		return vec
	}())

	return actual.(*prometheus.CounterVec) //nolint:errcheck // safe: LoadOrStore always stores CounterVec
}

func (p *PrometheusMetrics) getHistogram(
	name string,
	labels []core.Label,
) *prometheus.HistogramVec {
	actual, _ := p.histograms.LoadOrStore(name, func() any {
		vec := prometheus.NewHistogramVec(
			prometheus.HistogramOpts{
				Name: name,
				Help: name,
			},
			labelKeys(labels),
		)

		_ = p.reg.Register(vec)
		return vec
	}())

	return actual.(*prometheus.HistogramVec) //nolint:errcheck // safe: LoadOrStore always stores HistogramVec
}

// -----------------------------------------------------------------------------
// Label utilities
// -----------------------------------------------------------------------------

func labelKeys(labels []core.Label) []string {
	if len(labels) == 0 {
		return nil
	}

	keys := make([]string, 0, len(labels))
	for _, l := range labels {
		keys = append(keys, l.Key)
	}
	return keys
}

func convertPromLabels(labels []core.Label) prometheus.Labels {
	if len(labels) == 0 {
		return nil
	}

	m := make(prometheus.Labels, len(labels))
	for _, l := range labels {
		m[l.Key] = l.Value
	}
	return m
}
