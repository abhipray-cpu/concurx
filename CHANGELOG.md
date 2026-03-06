# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-03-06

This is the first production-ready release of concurx — a structured concurrency
library for Go. It includes three core primitives (Group, Supervisor, WorkerGroup),
eleven composable patterns, pluggable adapters, and comprehensive documentation.

### Added

#### Phase 1 — Code & API Cleanup
- `group.WithContext(ctx)` option — groups can now be tied to a parent context (request, server lifecycle, etc.)
- `workergroup.Job` now returns `error` — jobs can report errors via the `OnJobError` hook
- `workergroup.Hooks.OnJobError` callback — observe job failures without blocking execution
- `core.NoopLogger` and `core.NoopMetrics` — proper no-op implementations (previously `nil`)
- `core/core_test.go` — tests for NoopLogger, NoopMetrics, ErrorClassification, Field, Label
- `adapters/logger/logger_test.go` — tests for StdLoggerAdapter and ZapLogger (100% coverage)
- `adapters/metrics/metrics_test.go` — tests for PrometheusMetrics and OtelMetrics (96.4% coverage)
- Additional group tests: `WithName`, `WithContext`, `TryGo` edge cases, `BlockingGo` after Wait, `handleTaskError(nil)`
- `integration_test.go` — 10 integration tests verifying component composition:
  - Group inside Supervisor (restart + fresh Group recreation)
  - Group context propagation from Supervisor (cascade cancellation)
  - WorkerGroup consuming Pipeline output (end-to-end data flow)
  - CircuitBreaker inside Bulkhead (failure isolation + recovery)
  - Bulkhead capacity isolation with FailFast
  - Group error propagation cancels all concurrent tasks
  - Supervisor AllForOne strategy (one fails → all restart)
  - WorkerGroup error hooks (OnJobError observability)
  - Pipeline feeding Group (transform → parallel side-effects)
  - Supervisor BackoffOneForOne with exponential restart delays
- `CHANGELOG.md` — this file
- `.gitignore` — standard Go/IDE/OS ignores

#### Phase 1.5 — Code Quality
- `supervisor.RestartAll` — implemented in `handleFailure`; `AllForOne` strategy now works correctly
- `workerpercore.Submit` / `SubmitContext` now accept `func(context.Context) error` (was `func()`)
- `backoff` package — reusable exponential backoff computation (95.8% coverage) with `Config` struct and `Compute()` function, consolidating duplicate math from `supervisor/strategies.go` and `supervisor/supervisor.go`
- `pipeline.ErrTypeMismatch` — new sentinel error for type assertion failures in pipeline output
- `pipeline.WithOnTypeMismatch(fn)` — optional callback to observe values dropped due to type mismatches in `adaptOutput`

#### Examples
- `examples/batch-http` — WorkerGroup + Retry + CircuitBreaker + Timeout + Group (HTTP batch processor with 40% failure rate, panic injection, concurrent submitters)
- `examples/email-worker` — Supervisor + WorkerGroup + Bulkhead + RateLimiter (supervised email sending with dynamic child registration via `AddAndStart`)
- `examples/pipeline-image-process` — Pipeline + FanOut + MapReduce + WorkerPerCore (image processing pipeline with type mismatch injection, bounded concurrency)
- `examples/supervised-stream` — Supervisor (AllForOne) + Group + Throttler + ScatterGather (stream processor with adaptive throttling, multi-backend quorum queries)

#### Phase 3 — Stress Test Application
- `stress/` directory — complete Dockerized stress test application
- `stress/cmd/order-processor` — order processing app exercising RateLimiter, WorkerGroup, Bulkhead, CircuitBreaker, Retry, Timeout, Supervisor, and Group
- `stress/cmd/mock-service` — configurable downstream service simulator with tunable failure rate and latency
- `stress/cmd/load-generator` — HTTP load generator with ramp-up, latency percentiles, and summary reports
- `stress/cmd/chaos-agent` — chaos testing agent using Docker API (kill, pause, stop containers)
- `stress/docker-compose.yml` — 7 services + 2 profiled test runners
- `stress/config/` — Prometheus scrape config, Grafana provisioning, pre-built dashboard (7 panels)
- `stress/README.md` — architecture diagram, quick start, full configuration reference

### Changed

#### Phase 1 — Code & API Cleanup
- `workergroup.Config.validate()` now returns descriptive error messages with field names and values
- Removed `workergroup.ErrInvalidConfig` sentinel — replaced with `fmt.Errorf` for specific messages
- Removed `type Context = context.Context` alias from API facade

#### Phase 1.5 — Code Quality
- Removed dead code from `group/group_internal.go`: 6 unused state methods, 3 state constants, `state` field
- Refactored `group.TryGo` to use `run()` instead of duplicating goroutine logic
- Removed unused `_ bool` parameter from `group.run()`; added `semAcquired bool` for TryGo flow
- Stripped emoji (`✅`) from 7 production `.go` files
- Replaced `goto EXECUTE` in `patterns/throttler/internal.go` with structured flow
- Consolidated duplicate backoff math into `backoff` package; `supervisor/backoff.go` deleted, `supervisor/strategies.go` and `supervisor/supervisor.go` now import `backoff.Compute`
- Differentiated Throttler (adaptive, closed-loop with `Observe`) from RateLimiter (open-loop, token bucket) in documentation
- README narrative now leads with Supervisor (unique in Go ecosystem), then WorkerGroup, then Group — patterns positioned as "also includes"
- Pipeline `adaptOutput` now reports type mismatches via `OnTypeMismatch` callback instead of silently dropping values

#### Phase 2 — Architecture Documentation
- Unified `docs/ARCHITECTURE.md` and `docs/PATTERNS.md` into single `docs/ARCHITECTURE.md` (1037 lines, 25 native Mermaid diagrams)
- Updated all cross-references in README, USAGE.md, PR template, CI workflows, issue templates

### Fixed

#### Phase 1 — Code & API Cleanup
- Renamed `patterns/pipeline/errrors.go` → `errors.go` (filename typo)
- Renamed `patterns/retry/mertrics.go` → `metrics.go` (filename typo)
- Renamed `patterns/retry/bechamark_test.go` → `benchmark_test.go` (filename typo)
- Renamed `patterns/circuitbreaker/bencmark_test.go` → `benchmark_test.go` (filename typo)
- Fixed README examples to match actual API signatures (`Workers` not `MaxWorkers`, `Stop()` not `Stop(ctx)`, correct Supervisor usage)
- Fixed README references to `WorkerPool` → `WorkerGroup`

#### Phase 1.5 — Code Quality
- Fixed panic value loss in `group.TryGo` (`"panic: unexpected"` → `fmt.Errorf("panic: %v", r)`)
- Fixed panic value loss in `patterns/timeout/internal.go` — now distinguishes panic from timeout
- Fixed panic value loss in `patterns/ratelimiter/ratelimiter.go` — preserves original panic value
- Fixed `supervisor.RestartAll` — previously fell through silently when `AllForOne` strategy returned it
- Fixed supervisor event loop goroutine leak — `eventLoop` goroutine was not tracked by `Wait()`, causing `Stop()` to return while the event loop was still processing failure events; now tracked via dedicated `eventDone` channel

### Removed
- `api/` package (facade) — users now import sub-packages directly (`group`, `supervisor`, `workergroup`, etc.)
- `supervisor/backoff.go` — logic moved to reusable `backoff` package
- `docs/PATTERNS.md` — merged into `docs/ARCHITECTURE.md`
- `docs/primitives/` directory (1,218 lines) — merged into `docs/USAGE.md`
