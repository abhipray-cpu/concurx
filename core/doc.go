// Package core defines the contracts (interfaces) and shared types used
// across all concurx packages.
//
// It provides three core abstractions:
//   - [Logger]: structured logging contract with four severity levels.
//   - [Metrics]: minimal metrics surface for counters and histograms.
//   - [ErrorBoundary]: error classification and transformation contract.
//
// Default no-op implementations ([NoopLogger], [NoopMetrics]) are provided
// so callers can safely skip observability without nil checks.
package core
