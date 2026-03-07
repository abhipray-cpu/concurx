// Package concurx provides production-grade concurrency primitives and
// patterns for Go.
//
// concurx offers deterministic lifecycle management, structured error
// propagation, and composable concurrency building blocks. Every
// primitive guarantees that accepted work is never silently dropped,
// cancellation is always respected, and shutdown is orderly.
//
// # Primitives
//
// The three core primitives handle common concurrency needs:
//
//   - [group] — structured task groups with bounded concurrency
//   - [supervisor] — Erlang-style fault-tolerant process supervision
//   - [workergroup] — bounded worker pools with backpressure
//
// # Patterns
//
// Higher-level patterns compose on top of the primitives:
//
//   - [bulkhead] — resource isolation
//   - [circuitbreaker] — fault prevention with fast-fail
//   - [fanoutin] — parallel fan-out/fan-in
//   - [mapreduce] — parallel map-reduce
//   - [pipeline] — streaming data pipelines
//   - [ratelimiter] — fixed-rate admission control
//   - [retry] — automatic failure recovery
//   - [scattergather] — scatter-gather execution
//   - [throttler] — adaptive admission control
//   - [timeout] — deadline enforcement
//   - [workerpercore] — CPU-aware worker scaling
//
// # Adapters
//
// Pluggable adapters connect concurx to your observability stack:
//
//   - [logger] — stdlib log and zap adapters
//   - [metrics] — Prometheus and OpenTelemetry adapters
//
// See the project README and docs/ directory for architecture details,
// usage guides, and examples.
package concurx
