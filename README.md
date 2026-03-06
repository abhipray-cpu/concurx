# concurx

<div align="center">
  <img src="./icon.png" alt="concurx logo" width="200" height="200"/>
  
  **Production-Grade Concurrency for Go**
  
  _Deterministic primitives and patterns for building reliable, scalable systems_
  
  [![Go Version](https://img.shields.io/badge/go-1.25+-blue)](https://golang.org/doc/devel/release)
  [![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
  [![CI/CD](https://github.com/abhipray-cpu/concurx/actions/workflows/ci.yml/badge.svg)](https://github.com/abhipray-cpu/concurx/actions)
  
</div>

---

## The Problem

Most Go concurrency libraries offer **best-effort semantics**:

> "Your work *probably* won't be dropped... unless load spikes, deadlines hit, or shutdown races occur."

This is **unacceptable for production systems** where correctness matters.

---

## The Solution

**concurx** provides **deterministic concurrency primitives** where correctness is guaranteed by design, not by developer discipline.

### Core Promise

> **If a concurx API returns `nil`, the accepted work will finish — exactly once.**

No silent drops. No flaky shutdowns. No surprises under load.

---

## Key Features

**Correctness by Design**
- Accepted work always executes exactly once
- Deterministic error propagation
- Race-safe concurrent operations
- Panic isolation (faults don't cascade)

**Production-Ready**
- Graceful shutdown with work draining
- Comprehensive metrics and observability
- Exhaustive race condition testing
- Stress-tested under extreme conditions

**Composable Primitives**
- Group — Structured concurrent task execution
- Supervisor — Erlang-style fault tolerance
- WorkerGroup — Bounded worker management
- 11+ battle-tested patterns

**Practical Design**
- Explicit APIs (no implicit retries or cancellations)
- Clear semantics (admission vs execution separated)
- Deterministic lifecycle (Idle → Running → Draining → Stopped)
- Thread-safe by default

---

## Quick Start

### Installation

```bash
go get github.com/abhipray-cpu/concurx
```

### Erlang-Style Fault Tolerance

The Supervisor is concurx's headline feature — an Erlang-inspired process supervisor
that automatically restarts failing children with configurable strategies and backoff:

```go
sup := supervisor.New(
    supervisor.WithStrategy(
        supervisor.NewBackoffOneForOne(
            100*time.Millisecond, // initial delay
            5*time.Second,        // max delay
            2.0,                  // exponential factor
            0.2,                  // ±20% jitter
        ),
    ),
)

// Register long-running children
sup.Add(supervisor.ChildSpec{
    ID:   "ingester",
    Run:  runIngester,
    Mode: supervisor.RestartModePermanent,
})
sup.Add(supervisor.ChildSpec{
    ID:   "flusher",
    Run:  runFlusher,
    Mode: supervisor.RestartModeTransient,
})

// Start supervision — children are automatically restarted on failure
sup.Start(ctx)
defer sup.Stop(ctx)
```

### Concurrent Task Execution

```go
package main

import (
    "context"
    "fmt"
    "github.com/abhipray-cpu/concurx/group"
)

func main() {
    ctx := context.Background()
    g := group.New()

    // Submit concurrent tasks
    g.Go(func(ctx context.Context) error {
        return doWork1(ctx)
    })
    g.Go(func(ctx context.Context) error {
        return doWork2(ctx)
    })

    // Wait for all tasks (first error is returned)
    if err := g.Wait(); err != nil {
        fmt.Println("Task failed:", err)
        return
    }
    fmt.Println("All tasks completed successfully!")
}
```

### Worker Pool with Backpressure

```go
// Create a bounded worker pool (5 workers, 10-item queue)
pool, err := workergroup.New(
    workergroup.Config{
        Workers:   5,
        QueueSize: 10,
    },
    workergroup.Hooks{},
)
if err != nil {
    panic(err)
}

// Submit jobs (blocks if queue is full)
err = pool.Submit(ctx, func(ctx context.Context) error {
    return processJob(ctx)
})

// Graceful shutdown: stop admission, drain queue, wait for all jobs
pool.Stop()
```

---

## Architecture

### Primitives (Core Components)

| Component | Purpose | Use Case |
|-----------|---------|----------|
| **Supervisor** | Erlang-style fault tolerance with restart strategies | Long-running workers, system resilience |
| **Group** | Structured concurrent task execution | Fan-out task execution, error propagation |
| **WorkerGroup** | Bounded worker management with backpressure | Job queues, rate-limited processing |

### Patterns (Higher-Level Abstractions)

| Pattern | Purpose |
|---------|---------|
| **Bulkhead** | Resource isolation and protection |
| **CircuitBreaker** | Fault prevention and fast-fail |
| **Fanout/Fanin** | Concurrent distribution and aggregation |
| **Pipeline** | Data streaming and transformation |
| **MapReduce** | Distributed computation |
| **ScatterGather** | Multi-branch aggregation |
| **Throttler** | Adaptive policy-driven admission control |
| **Retry** | Automatic failure recovery |
| **RateLimiter** | Fixed token-bucket rate control |
| **Timeout** | Deadline enforcement |
| **WorkerPerCore** | CPU-aware worker scaling |

---

## Guarantees

### Library-Wide Guarantees

These apply to **every component** in concurx:

1. **Accepted Work** — Work accepted by an API call will complete exactly once
2. **Graceful Shutdown** — Stop/cancel operations drain accepted work before returning
3. **Cancellation Semantics** — Context cancellation prevents future admission, not accepted work
4. **Panic Isolation** — Panics in user code don't kill workers or cascade failures
5. **Race Safety** — All public APIs are race-condition free
6. **Deterministic** — Behavior is predictable under stress and concurrent access

### Lifecycle Model

Every component follows the same lifecycle:

```
Idle → Running (admit work) → Draining (no new work, finish existing) → Stopped
```

Key properties:
- Transitions are one-way
- Shutdown is idempotent
- No work is silently dropped
- Race-safe state transitions

---

## Design Philosophy

### What concurx Does

- Provides deterministic guarantees by design
- Separates admission from execution
- Enables composable primitives
- Supports exhaustive observability
- Enforces correctness through architecture

### What concurx Does NOT Do

- No implicit retries (be explicit about failure handling)
- No silent cancellation (cancellation only affects admission)
- No best-effort semantics (all guarantees are hard)
- No fire-and-forget APIs (all work is traced)
- No magic (every behavior is designed and tested)  

---

## Real-World Examples

### 1. Email Queue System

Process emails with bounded concurrency and graceful shutdown:

```go
pool, _ := workergroup.New(
    workergroup.Config{Workers: 10, QueueSize: 100},
    workergroup.Hooks{},
)

// Load emails from queue
for email := range emailQueue {
    pool.Submit(ctx, func(ctx context.Context) error {
        return sendEmail(ctx, email)
    })
}

// Guaranteed: all queued emails are sent before returning
pool.Stop()
```

### 2. Batch HTTP Client

Fan-out HTTP requests, aggregate responses:

```go
results, err := scattergather.ScatterGather(
    ctx,
    []func(context.Context) (string, error){
        func(ctx context.Context) (string, error) { return fetchAPI(ctx, "https://api1.com") },
        func(ctx context.Context) (string, error) { return fetchAPI(ctx, "https://api2.com") },
        func(ctx context.Context) (string, error) { return fetchAPI(ctx, "https://api3.com") },
    },
    scattergather.NewAllSuccessPolicy(3),
)
// All requests complete before returning, or error on first failure
```

### 3. Data Processing Pipeline

Stream data through multi-stage transformations:

```go
input := make(chan int)
output, _ := pipeline.Pipeline(ctx, input,
    []pipeline.Stage{
        filterEven,      // Remove odd numbers
        multiplyByTwo,   // Double each value
        convertToString, // Convert to string
    },
)

for item := range output {
    fmt.Println(item)
}
```

---

## Observability

### Metrics

All components support optional **non-blocking metrics**:

```go
type MyMetrics struct{}

func (m *MyMetrics) IncCounter(name string, labels ...core.Label) {
    // Record metric (non-blocking)
}

// Integrate with Prometheus, OpenTelemetry, etc.
```

Adapters provided for:
- ✅ Prometheus
- ✅ OpenTelemetry
- ✅ Custom implementations

### Hooks

Components emit lifecycle events:

```go
hooks := workergroup.Hooks{
    OnJobStart:  func(workerID int) { log.Printf("worker %d: job started", workerID) },
    OnJobFinish: func(workerID int) { log.Printf("worker %d: job finished", workerID) },
    OnJobError:  func(workerID int, err error) { log.Printf("worker %d: job error: %v", workerID, err) },
    OnJobPanic:  func(workerID int, r any) { log.Printf("worker %d: job panicked: %v", workerID, r) },
}
pool, _ := workergroup.New(workergroup.Config{Workers: 4, QueueSize: 100}, hooks)
```

---

## Documentation

- **[Architecture and Patterns](./docs/ARCHITECTURE.md)** — Visual architecture, runtime flows, pattern catalog, and design decisions
- **[Usage Guide](./docs/USAGE.md)** — API reference, examples, and common pitfalls
- **[Contributing Guide](./CONTRIBUTING.md)** — How to contribute

---

## Testing

### Comprehensive Test Coverage

- Unit tests for every component
- Race condition tests (go test -race)
- Stress tests with high concurrency
- Panic isolation tests
- Shutdown draining verification
- Integration tests across components

Run tests locally:

```bash
# All tests
go test ./...

# With race detection
go test -race ./...

# With coverage
go test -cover ./...

# Run benchmarks
go test -bench=. -benchmem ./...
```

---

## Performance

concurx is designed for correctness first, with performance as a secondary optimization:

- Minimal allocation in hot paths
- Efficient synchronization primitives
- Non-blocking metrics and hooks
- Benchmarked and profiled

See [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) for pattern-specific performance characteristics and visual architecture diagrams.

---

## When to Use concurx

**Use concurx if you need:**
- Production-grade concurrency guarantees
- Reliable shutdown semantics
- Composable concurrency primitives
- Observable system behavior
- Stress-resistant architectures

**Don't use concurx if you need:**
- Simple goroutine helpers
- Convenience-first APIs
- Loose, "probably fine" semantics
- Minimal dependencies

---

## Community & Support

- **[GitHub Discussions](https://github.com/abhipray-cpu/concurx/discussions)** — Ask questions and share ideas
- **[Issue Tracker](https://github.com/abhipray-cpu/concurx/issues)** — Report bugs and request features
- **[Security Policy](./.github/SECURITY.md)** — Responsible disclosure
- **[Code of Conduct](./CODE_OF_CONDUCT.md)** — Community standards

---

## Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for:
- Development setup
- Testing guidelines
- Code style standards
- Review process

Key principles:
- All new code requires tests
- Race-condition free (verify with `-race` flag)
- Clear, documented design decisions
- Performance impact considered

---

## Benchmarks

Performance benchmarks are automated and run weekly:

```bash
go test -bench=. -benchmem ./patterns/pipeline/...
go test -bench=. -benchmem ./group/...
go test -bench=. -benchmem ./patterns/bulkhead/...
```

Results are tracked in GitHub Actions. See [`.github/workflows/benchmark.yml`](./.github/workflows/benchmark.yml).

---

## Roadmap

- Core primitives (Group, Supervisor, WorkerGroup)
- Concurrency patterns (11+ patterns)
- Adapter ecosystem (Prometheus, OpenTelemetry, Zap)
- Extended observability (distributed tracing) — in progress
- Additional patterns — in progress (based on community feedback)
- Kubernetes-aware workers — planned

See [Discussions](https://github.com/abhipray-cpu/concurx/discussions) for future direction.

---

## License

MIT License — see [LICENSE](LICENSE) for details.

**Copyright © 2025 Abhipray Dumka**

---

## The Guarantee

> **If a concurx API returns `nil`, your accepted work will finish.**
>
> This guarantee is enforced by:
> - Architecture and design
> - Synchronization primitives
> - Exhaustive race testing
> - Stress testing
> - Production validation
>
> It is not a suggestion. It is not best-effort. It is guaranteed.

---

**Made with care for production Go services**
