package metrics

import (
	"context"
	"sync"

	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/metric"

	"github.com/abhipray-cpu/concurx/core"
)

// OtelMetrics adapts OpenTelemetry metrics to core.Metrics.
//
// Design principles:
//   - No global meter usage
//   - Parent service injects Meter
//   - Lazy instrument creation
//   - Safe under concurrency
type OtelMetrics struct {
	meter metric.Meter

	counters   sync.Map // map[string]metric.Float64Counter
	histograms sync.Map // map[string]metric.Float64Histogram
}

// NewOtelMetrics constructs a Metrics adapter backed by OpenTelemetry.
//
// The caller MUST provide a configured metric.Meter.
// If nil is passed, NoopMetrics is returned.
func NewOtelMetrics(meter metric.Meter) core.Metrics {
	if meter == nil {
		return core.NoopMetrics
	}

	return &OtelMetrics{
		meter: meter,
	}
}

// -----------------------------------------------------------------------------
// core.Metrics implementation
// -----------------------------------------------------------------------------

// IncCounter increments a named counter by 1.
func (o *OtelMetrics) IncCounter(name string, labels ...core.Label) {
	o.AddCounter(name, 1, labels...)
}

// AddCounter adds a value to a named counter.
func (o *OtelMetrics) AddCounter(
	name string,
	v float64,
	labels ...core.Label,
) {
	counter := o.getCounter(name)
	counter.Add(
		context.Background(),
		v,
		metric.WithAttributes(convertLabels(labels)...),
	)
}

// ObserveHistogram records a value to a named histogram.
func (o *OtelMetrics) ObserveHistogram(
	name string,
	value float64,
	labels ...core.Label,
) {
	h := o.getHistogram(name)
	h.Record(
		context.Background(),
		value,
		metric.WithAttributes(convertLabels(labels)...),
	)
}

// -----------------------------------------------------------------------------
// Internal helpers
// -----------------------------------------------------------------------------

func (o *OtelMetrics) getCounter(name string) metric.Float64Counter {
	actual, _ := o.counters.LoadOrStore(name, func() any {
		c, err := o.meter.Float64Counter(
			name,
			metric.WithDescription(name),
		)
		if err != nil {
			// OTel guarantees no panic, but be defensive
			return noopCounter{}
		}
		return c
	}())

	return actual.(metric.Float64Counter) //nolint:errcheck // safe: LoadOrStore always stores Float64Counter
}

func (o *OtelMetrics) getHistogram(name string) metric.Float64Histogram {
	actual, _ := o.histograms.LoadOrStore(name, func() any {
		h, err := o.meter.Float64Histogram(
			name,
			metric.WithDescription(name),
		)
		if err != nil {
			return noopHistogram{}
		}
		return h
	}())

	return actual.(metric.Float64Histogram) //nolint:errcheck // safe: LoadOrStore always stores Float64Histogram
}

// -----------------------------------------------------------------------------
// Utilities
// -----------------------------------------------------------------------------

func convertLabels(labels []core.Label) []attribute.KeyValue {
	if len(labels) == 0 {
		return nil
	}

	attrs := make([]attribute.KeyValue, 0, len(labels))
	for _, l := range labels {
		attrs = append(attrs, attribute.String(l.Key, l.Value))
	}
	return attrs
}

// -----------------------------------------------------------------------------
// No-op fallbacks (defensive)
// -----------------------------------------------------------------------------

type noopCounter struct{}

func (noopCounter) Add(context.Context, float64, ...metric.AddOption) {}

type noopHistogram struct{}

func (noopHistogram) Record(context.Context, float64, ...metric.RecordOption) {}
