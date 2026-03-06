package metrics

import (
	"testing"

	"github.com/abhipray-cpu/concurx/core"
	"github.com/prometheus/client_golang/prometheus"
	otelnoop "go.opentelemetry.io/otel/metric/noop"
)

// -------------------------------------------------------
// PrometheusMetrics
// -------------------------------------------------------

func TestPrometheusMetrics_NilRegisterer(t *testing.T) {
	m := NewPrometheusMetrics(nil)
	if m == nil {
		t.Fatal("expected non-nil (NoopMetrics)")
	}
	// Should not panic
	m.IncCounter("test_counter")
	m.AddCounter("test_counter", 5.0)
	m.ObserveHistogram("test_hist", 0.5)
}

func TestPrometheusMetrics_IncCounter(t *testing.T) {
	reg := prometheus.NewRegistry()
	m := NewPrometheusMetrics(reg)

	m.IncCounter("test_ops_total", core.Label{Key: "env", Value: "test"})
	m.IncCounter("test_ops_total", core.Label{Key: "env", Value: "test"})

	// Gather and verify
	families, err := reg.Gather()
	if err != nil {
		t.Fatalf("gather failed: %v", err)
	}

	found := false
	for _, f := range families {
		if f.GetName() == "test_ops_total" {
			found = true
			metrics := f.GetMetric()
			if len(metrics) == 0 {
				t.Fatal("expected at least one metric")
			}
			val := metrics[0].GetCounter().GetValue()
			if val != 2.0 {
				t.Fatalf("expected counter=2.0, got %f", val)
			}
		}
	}
	if !found {
		t.Fatal("metric test_ops_total not found")
	}
}

func TestPrometheusMetrics_AddCounter(t *testing.T) {
	reg := prometheus.NewRegistry()
	m := NewPrometheusMetrics(reg)

	m.AddCounter("bytes_total", 100.0)
	m.AddCounter("bytes_total", 50.0)

	families, _ := reg.Gather()
	for _, f := range families {
		if f.GetName() == "bytes_total" {
			val := f.GetMetric()[0].GetCounter().GetValue()
			if val != 150.0 {
				t.Fatalf("expected 150.0, got %f", val)
			}
			return
		}
	}
	t.Fatal("metric bytes_total not found")
}

func TestPrometheusMetrics_ObserveHistogram(t *testing.T) {
	reg := prometheus.NewRegistry()
	m := NewPrometheusMetrics(reg)

	m.ObserveHistogram("latency_seconds", 0.1)
	m.ObserveHistogram("latency_seconds", 0.5)
	m.ObserveHistogram("latency_seconds", 1.0)

	families, _ := reg.Gather()
	for _, f := range families {
		if f.GetName() == "latency_seconds" {
			h := f.GetMetric()[0].GetHistogram()
			if h.GetSampleCount() != 3 {
				t.Fatalf("expected 3 samples, got %d", h.GetSampleCount())
			}
			return
		}
	}
	t.Fatal("metric latency_seconds not found")
}

func TestPrometheusMetrics_WithLabels(t *testing.T) {
	reg := prometheus.NewRegistry()
	m := NewPrometheusMetrics(reg)

	m.IncCounter("requests_total",
		core.Label{Key: "method", Value: "GET"},
		core.Label{Key: "status", Value: "200"},
	)
	m.IncCounter("requests_total",
		core.Label{Key: "method", Value: "POST"},
		core.Label{Key: "status", Value: "201"},
	)

	families, _ := reg.Gather()
	for _, f := range families {
		if f.GetName() == "requests_total" {
			if len(f.GetMetric()) != 2 {
				t.Fatalf("expected 2 label combinations, got %d", len(f.GetMetric()))
			}
			return
		}
	}
	t.Fatal("metric requests_total not found")
}

func TestPrometheusMetrics_NoLabels(t *testing.T) {
	reg := prometheus.NewRegistry()
	m := NewPrometheusMetrics(reg)

	m.IncCounter("simple_counter")
	m.ObserveHistogram("simple_hist", 0.42)

	families, _ := reg.Gather()
	found := 0
	for _, f := range families {
		if f.GetName() == "simple_counter" || f.GetName() == "simple_hist" {
			found++
		}
	}
	if found != 2 {
		t.Fatalf("expected 2 metrics, found %d", found)
	}
}

// -------------------------------------------------------
// Label utilities
// -------------------------------------------------------

func TestLabelKeys(t *testing.T) {
	keys := labelKeys([]core.Label{
		{Key: "a", Value: "1"},
		{Key: "b", Value: "2"},
	})
	if len(keys) != 2 || keys[0] != "a" || keys[1] != "b" {
		t.Fatalf("unexpected keys: %v", keys)
	}
}

func TestLabelKeys_Empty(t *testing.T) {
	keys := labelKeys(nil)
	if keys != nil {
		t.Fatalf("expected nil for empty labels, got %v", keys)
	}
}

func TestConvertPromLabels(t *testing.T) {
	labels := convertPromLabels([]core.Label{
		{Key: "env", Value: "prod"},
		{Key: "region", Value: "us-east"},
	})
	if labels["env"] != "prod" || labels["region"] != "us-east" {
		t.Fatalf("unexpected labels: %v", labels)
	}
}

func TestConvertPromLabels_Empty(t *testing.T) {
	labels := convertPromLabels(nil)
	if labels != nil {
		t.Fatalf("expected nil for empty labels, got %v", labels)
	}
}

// -------------------------------------------------------
// OtelMetrics
// -------------------------------------------------------

func TestOtelMetrics_NilMeter(t *testing.T) {
	m := NewOtelMetrics(nil)
	if m == nil {
		t.Fatal("expected non-nil (NoopMetrics)")
	}
	// Should not panic
	m.IncCounter("test_counter")
	m.AddCounter("test_counter", 5.0)
	m.ObserveHistogram("test_hist", 0.5)
}

func TestOtelMetrics_NoopMeter(t *testing.T) {
	// Use a noop Meter (from otel package) to test the non-nil path.
	// The noop meter creates valid instruments that don't record anywhere.
	noopMeter := otelnoop.NewMeterProvider().Meter("")
	m := NewOtelMetrics(noopMeter)

	// These should not panic and should exercise the full code path
	m.IncCounter("otel_counter")
	m.AddCounter("otel_counter", 10.0)
	m.AddCounter("otel_counter_labeled", 5.0,
		core.Label{Key: "env", Value: "test"},
	)
	m.ObserveHistogram("otel_hist", 0.42)
	m.ObserveHistogram("otel_hist_labeled", 1.23,
		core.Label{Key: "region", Value: "us"},
	)
}

func TestConvertLabels(t *testing.T) {
	attrs := convertLabels([]core.Label{
		{Key: "a", Value: "1"},
		{Key: "b", Value: "2"},
	})
	if len(attrs) != 2 {
		t.Fatalf("expected 2 attrs, got %d", len(attrs))
	}
}

func TestConvertLabels_Empty(t *testing.T) {
	attrs := convertLabels(nil)
	if attrs != nil {
		t.Fatalf("expected nil for empty labels, got %v", attrs)
	}
}
