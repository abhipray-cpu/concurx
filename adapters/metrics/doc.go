// Package metrics provides concrete implementations of [core.Metrics].
//
// Adapters:
//   - [NewPrometheusMetrics]: wraps Prometheus client counters and histograms.
//   - [NewOtelMetrics]: wraps OpenTelemetry metric instruments.
package metrics
