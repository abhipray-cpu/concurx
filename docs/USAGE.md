# Usage Guide

A comprehensive guide to using **concurx** with emphasis on **strong execution guarantees**, **deterministic shutdown**, and **race-safe semantics**.

`concurx` is designed for production systems where **lost work is unacceptable**.

## Table of Contents

1. [Global Usage Rules](#global-usage-rules)
2. [Quick Start](#quick-start)
3. [Using `group`](#using-group)
4. [Using `workergroup`](#using-workergroup)
5. [Using `supervisor`](#using-supervisor)
6. [Using Patterns](#using-patterns)
7. [Error Handling](#error-handling)
8. [Best Practices](#best-practices)
9. [Common Pitfalls](#common-pitfalls)
10. [Mental Model](#mental-model)

---

## Global Usage Rules

These rules apply to **every package** in the library:

### The Five Core Guarantees

1. **Guaranteed Execution**: If an API accepts work, that work **will execute exactly once**
2. **Drain on Stop**: Stop means **drain**, never kill
3. **Cancellation Scope**: Cancellation affects **future admission**, not accepted work
4. **Panic Isolation**: Panics are **isolated**, not fatal
5. **Race Safety**: All APIs are safe under `-race -count=N`

> **If your mental model violates any of the above, you are using the library incorrectly.**

---

## Quick Start

### Initialize Components

```go
// Create a group for concurrent tasks
g := group.New()

// Create a worker pool
wg, _ := workergroup.New(workergroup.Config{
    Workers:   4,
    QueueSize: 100,
})

// Create a supervisor for long-lived processes
s := supervisor.New(supervisor.WithStrategy(supervisor.NewOneForOne()))
```

### Submit and Wait

```go
// Submit work to group
g.Go(func(ctx context.Context) error {
    return doWork(ctx)
})

// Wait for completion
err := g.Wait()

// Submit to worker pool
wg.Submit(ctx, func(ctx context.Context) {
    process(ctx)
})

// Stop and shutdown
wg.Stop()
```

---

## Using `group`

`group` provides **structured goroutine management** with deterministic error handling and cancellation.

### When to Use `group`

Use `group` when you need:

-  Concurrent goroutines with explicit lifecycle
-  Deterministic error propagation (first error stops all)
-  Context-based cancellation
-  Panic recovery and isolation
-  Race-safe concurrent `Go()` and `Wait()`

**Best for:** Short-lived tasks, parallel operations, fan-out patterns

### Basic Example

```go
package main

import (
    "context"
    "fmt"
    "github.com/abhipray-cpu/concurx/group"
)

func main() {
    g := group.New()
    
    g.Go(func(ctx context.Context) error {
        return taskA(ctx)
    })
    
    g.Go(func(ctx context.Context) error {
        return taskB(ctx)
    })
    
    if err := g.Wait(); err != nil {
        fmt.Printf("First error: %v\n", err)
    }
}
```

### Key Guarantees

| Guarantee | Explanation |
|-----------|-------------|
| **Execution** | If `Go()` returns `nil`, the function **will run** |
| **Concurrency** | `Go()` and `Wait()` may be called **concurrently** |
| **Waiting** | `Wait()` blocks **until all goroutines finish** |
| **Panics** | Panics are **recovered and returned as errors** |
| **Error Order** | **First error** is deterministic across runs |

### Cancellation Semantics

```go
g := group.New(group.WithCancelOnError())

g.Go(func(ctx context.Context) error {
    return fmt.Errorf("task failed")
})

g.Go(func(ctx context.Context) error {
    // This will receive ctx.Done() signal
    <-ctx.Done()
    return ctx.Err()
})

err := g.Wait() // Will have first error
```

**Important:** Cancellation propagates **after admission**, never during. All accepted goroutines will execute.

### Usage Patterns

#### Error Handling

```go
g := group.New()

for _, item := range items {
    g.Go(func(ctx context.Context) error {
        return processItem(ctx, item)
    })
}

if err := g.Wait(); err != nil {
    log.Printf("Processing failed: %v", err)
}
```

#### Timeout Handling

```go
ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
defer cancel()

g := group.New()

g.Go(func(ctx context.Context) error {
    return slowTask(ctx)
})

if err := g.Wait(); err != nil {
    if errors.Is(err, context.DeadlineExceeded) {
        log.Print("Timeout")
    }
}
```

---

## Using `workergroup`

## Using `workergroup`

`workergroup` is a **bounded worker pool** with backpressure and deterministic shutdown.

### When to Use `workergroup`

Use `workergroup` when you need:

-  Fixed number of workers (bounded concurrency)
-  Job queue with backpressure control
-  Blocking or rejecting submit behavior
-  Panic isolation per worker
-  Deterministic shutdown and draining

**Best for:** Long-running workers, task queuing, rate limiting

### Creating a WorkerGroup

```go
wg, err := workergroup.New(workergroup.Config{
    Workers:        4,              // Number of worker goroutines
    QueueSize:      100,            // Capacity of job queue
    SubmitBehavior: workergroup.SubmitBlock, // Block or Reject
})
if err != nil {
    panic(err)
}
defer wg.Stop()
```

### Configuration Options

| Option | Type | Description |
|--------|------|-------------|
| `Workers` | `int` | Number of concurrent worker goroutines |
| `QueueSize` | `int` | Capacity of the job queue (0 = unbuffered) |
| `SubmitBehavior` | `enum` | `SubmitBlock` or `SubmitReject` |

### Submitting Jobs

```go
// Submit a job
err := wg.Submit(ctx, func(ctx context.Context) {
    // Job logic here
    result := processData(ctx)
    saveResult(result)
})

if err != nil {
    if errors.Is(err, workergroup.ErrStopped) {
        log.Print("Worker pool is stopped")
    } else if errors.Is(err, workergroup.ErrQueueFull) {
        log.Print("Queue is full")
    }
}
```

### Backpressure Modes

#### Mode: SubmitBlock

- Caller **blocks** until queue space becomes available
- Context cancellation **unblocks** caller
- **Guarantees:** No job loss, bounded memory

```go
wg, _ := workergroup.New(workergroup.Config{
    Workers:        4,
    QueueSize:      100,
    SubmitBehavior: workergroup.SubmitBlock,
})

// This will block if queue is full
err := wg.Submit(ctx, job)
```

#### Mode: SubmitReject

- Immediate failure when queue is full
- **Useful for:** Load shedding, request rejection
- **Error:** `ErrQueueFull`

```go
wg, _ := workergroup.New(workergroup.Config{
    Workers:        4,
    QueueSize:      100,
    SubmitBehavior: workergroup.SubmitReject,
})

err := wg.Submit(ctx, job)
if errors.Is(err, workergroup.ErrQueueFull) {
    // Handle: return 429 Too Many Requests
    http.Error(w, "Service busy", http.StatusTooManyRequests)
}
```

### Shutdown

```go
// Stop accepting new jobs
wg.Stop()

// Shutdown is complete
```

#### Shutdown Semantics

| Step | Action |
|------|--------|
| 1 | Stop accepting new jobs |
| 2 | Drain the job queue |
| 3 | Wait for all accepted jobs to complete |
| 4 | Exit worker goroutines |
| 5 | Return from `Stop()` |

**Safe to call:** Multiple times (idempotent)

### Practical Example

```go
func processJobs(items []Item) error {
    wg, err := workergroup.New(workergroup.Config{
        Workers:        4,
        QueueSize:      100,
        SubmitBehavior: workergroup.SubmitBlock,
    })
    if err != nil {
        return err
    }
    defer wg.Stop()
    
    ctx := context.Background()
    
    for _, item := range items {
        if err := wg.Submit(ctx, func(ctx context.Context) {
            processItem(ctx, item)
        }); err != nil {
            return fmt.Errorf("submit failed: %w", err)
        }
    }
    
    // All jobs have been submitted
    // Stop() will wait for them to complete
    return nil
}
```

---

## Using `supervisor`

## Using `supervisor`

`supervisor` implements an **Erlang-style supervision tree** for fault-tolerant long-lived processes.

### When to Use `supervisor`

Use `supervisor` for:

-  Long-running background goroutines
-  Automatic restart on failure
-  Failure isolation and recovery
-  Lifecycle observability and hooks
-  Hierarchical process management

**Best for:** Daemons, background workers, resilient services

### Defining a Child Process

```go
spec := supervisor.ChildSpec{
    ID: "worker-1",
    Run: func(ctx context.Context) error {
        // Long-running task
        for {
            select {
            case <-ctx.Done():
                return ctx.Err()
            default:
                doWork()
            }
        }
    },
    Mode: supervisor.RestartModePermanent,
}
```

### Restart Modes

| Mode | Behavior | Use Case |
|------|----------|----------|
| **Permanent** | Always restart on exit | Critical services |
| **Temporary** | Never restart | One-time tasks |
| **Transient** | Restart only on error | Normal operations |

```go
// Always restart
spec1 := supervisor.ChildSpec{
    ID: "critical-service",
    Run: runService,
    Mode: supervisor.RestartModePermanent,
}

// Only restart on error
spec2 := supervisor.ChildSpec{
    ID: "background-job",
    Run: runJob,
    Mode: supervisor.RestartModeTransient,
}

// Never restart
spec3 := supervisor.ChildSpec{
    ID: "one-time-task",
    Run: runTask,
    Mode: supervisor.RestartModeTemporary,
}
```

### Restart Strategies

#### One-For-One (Default)

Restart only the failed child.

```go
s := supervisor.New(
    supervisor.WithStrategy(supervisor.NewOneForOne()),
)
```

#### All-For-One

Restart all children when one fails.

```go
s := supervisor.New(
    supervisor.WithStrategy(supervisor.NewAllForOne()),
)
```

#### Backoff Strategy

Restart with exponential backoff.

```go
s := supervisor.New(
    supervisor.WithStrategy(supervisor.NewBackoffStrategy(
        backoff.WithInitialInterval(100*time.Millisecond),
        backoff.WithMaxInterval(10*time.Second),
    )),
)
```

### Starting a Supervisor

```go
s := supervisor.New(
    supervisor.WithStrategy(supervisor.NewOneForOne()),
)

// Add children
s.Add(supervisor.ChildSpec{
    ID: "worker",
    Run: runWorker,
    Mode: supervisor.RestartModePermanent,
})

// Start in background
ctx, cancel := context.WithCancel(context.Background())
defer cancel()

go func() {
    if err := s.Start(ctx); err != nil {
        log.Printf("Supervisor error: %v", err)
    }
}()

// Allow time for startup
time.Sleep(100 * time.Millisecond)
```

### Shutdown

```go
// Stop all children gracefully
ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
defer cancel()

err := s.Stop(ctx)
if err != nil {
    log.Printf("Stop error: %v", err)
}

// Wait for completion
s.Wait()
```

#### Shutdown Guarantees

-  No new restarts after `Stop()`
-  Children drain deterministically
-  Hooks fire safely
-  `Stop()` is idempotent
-  All resources cleaned up

### Practical Example

```go
func setupSupervisor() *supervisor.Supervisor {
    s := supervisor.New(
        supervisor.WithStrategy(supervisor.NewOneForOne()),
    )
    
    // Add database connection pool
    s.Add(supervisor.ChildSpec{
        ID: "db-pool",
        Run: func(ctx context.Context) error {
            return manageDatabasePool(ctx)
        },
        Mode: supervisor.RestartModePermanent,
    })
    
    // Add API server
    s.Add(supervisor.ChildSpec{
        ID: "api-server",
        Run: func(ctx context.Context) error {
            return runAPIServer(ctx)
        },
        Mode: supervisor.RestartModePermanent,
    })
    
    // Add background workers
    s.Add(supervisor.ChildSpec{
        ID: "background-worker",
        Run: func(ctx context.Context) error {
            return processBackgroundJobs(ctx)
        },
        Mode: supervisor.RestartModeTransient,
    })
    
    return s
}
```

---

## Using Patterns
## Using Patterns

Patterns are **higher-level abstractions** built on top of core primitives. They handle common concurrency scenarios.

### Available Patterns

| Pattern | Use Case | Example |
|---------|----------|---------|
| **Pipeline** | Sequential processing stages | ETL, data transformation |
| **Fan-Out/Fan-In** | Parallel execution, aggregated results | Batch processing, parallel requests |
| **Map-Reduce** | Distributed computation | Analytics, aggregation |
| **Scatter-Gather** | Send requests, wait for responses | RPC calls, service queries |
| **Bulkhead** | Isolate resources | Prevent cascade failures |
| **Throttler** | Rate limiting | Backpressure control |
| **WorkerPerCore** | CPU-bound parallelism | CPU-intensive tasks |

### Fan-Out Example

Process multiple items in parallel, collect results.

```go
package main

import (
    "context"
    "fmt"
    "github.com/abhipray-cpu/concurx/patterns/fanoutin"
)

func main() {
    items := []int{1, 2, 3, 4, 5}
    
    results, err := fanoutin.Run(
        context.Background(),
        items,
        func(ctx context.Context, item int) (int, error) {
            return item * 2, nil
        },
    )
    
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    fmt.Println("Results:", results)
}
```

### Pattern Guarantees

All patterns share these guarantees:

-  No goroutine leaks
-  Deterministic termination
-  Panic isolation per branch
-  All admitted work completes
-  Errors are aggregated deterministically

---

## Error Handling

### Understanding Error Propagation

Errors propagate differently based on the component:

#### group: First Error Stops All

```go
g := group.New(group.WithCancelOnError())

g.Go(func(ctx context.Context) error {
    return fmt.Errorf("task 1 failed")
})

g.Go(func(ctx context.Context) error {
    <-ctx.Done()  // Receives cancellation
    return ctx.Err()
})

err := g.Wait() // Returns first error
```

#### workergroup: Job Isolation

```go
wg, _ := workergroup.New(workergroup.Config{
    Workers: 4,
    QueueSize: 100,
})

// Job failures don't affect other jobs
err := wg.Submit(ctx, func(ctx context.Context) {
    if err := process(ctx); err != nil {
        log.Printf("Job failed: %v", err) // Logged, not propagated
    }
})
```

#### supervisor: Restart on Error

```go
spec := supervisor.ChildSpec{
    ID: "worker",
    Run: func(ctx context.Context) error {
        // Returns error -> triggers restart
        return doWork(ctx)
    },
    Mode: supervisor.RestartModePermanent, // Restart on any exit
}
```

### Context Cancellation

```go
ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
defer cancel()

g := group.New()

g.Go(func(ctx context.Context) error {
    select {
    case <-ctx.Done():
        return ctx.Err()  // Timeout or explicit cancellation
    case result := <-workChan:
        return processResult(result)
    }
})

if err := g.Wait(); err != nil {
    if errors.Is(err, context.DeadlineExceeded) {
        log.Print("Work timed out")
    }
}
```

---

## Best Practices

### 1. Always Defer Stop/Wait

```go
// Good
wg, _ := workergroup.New(config)
defer wg.Stop()  // Ensures cleanup

s := supervisor.New()
defer func() {
    s.Stop(context.Background())
    s.Wait()
}()
```

### 2. Use Proper Context

```go
// Good: With timeout
ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
defer cancel()
err := wg.Submit(ctx, job)

// Avoid: Long-lived context without timeout
ctx := context.Background()
err := wg.Submit(ctx, job)  // No cancellation mechanism
```

### 3. Handle Backpressure

```go
// Good: Choose appropriate submit behavior
wg, _ := workergroup.New(workergroup.Config{
    SubmitBehavior: workergroup.SubmitReject,  // Fail fast
})

err := wg.Submit(ctx, job)
if errors.Is(err, workergroup.ErrQueueFull) {
    // Handle overload: reject, retry, or queue externally
}
```

### 4. Distinguish Restart Modes

```go
// Good: Permanent for critical services
s.Add(supervisor.ChildSpec{
    ID: "database",
    Run: db.Connect,
    Mode: supervisor.RestartModePermanent,
})

// Good: Transient for jobs
s.Add(supervisor.ChildSpec{
    ID: "job-processor",
    Run: processJob,
    Mode: supervisor.RestartModeTransient,
})
```

### 5. Leverage Patterns for Complex Workflows

```go
// Good: Use Pattern instead of manual group
results, err := fanoutin.Run(ctx, items, processFn)

// Avoid: Manual error aggregation
```

---

## Common Pitfalls

### Pitfall 1: Ignoring Returned Errors

```go
// Bad: Ignoring submit error
wg.Submit(ctx, job)  // Error is dropped

// Good: Handle or propagate
if err := wg.Submit(ctx, job); err != nil {
    return fmt.Errorf("submit failed: %w", err)
}
```

### Pitfall 2: Expecting Cancellation to Kill Accepted Work

```go
// Bad: Thinking cancellation prevents execution
g.Go(slowTask)
cancel()  // Does NOT kill slowTask

// Good: Cancellation only affects future admission
g.Go(func(ctx context.Context) error {
    <-ctx.Done()  // Task must check context
    return ctx.Err()
})
```

### Pitfall 3: Forgetting to Drain

```go
// Bad: Stopping without draining
wg.Stop()  // May lose pending jobs if not drained

// Good: Drain is automatic, but wait for completion
wg.Stop()  // Waits for all accepted jobs
```

### Pitfall 4: Not Handling Panics

```go
// Good: Panics are caught and returned as errors
g.Go(func(ctx context.Context) error {
    panic("oops")  // Caught and returned
})

err := g.Wait()  // err != nil
```

### Pitfall 5: Using Fire-and-Forget

```go
// Bad: Fire-and-forget style
go doWork()  // No tracking, no guarantees

// Good: Use concurx primitives
g.Go(func(ctx context.Context) error {
    return doWork(ctx)
})
err := g.Wait()
```

---

## Mental Model

### Admission vs. Execution

```
Timeline:
    Submit(job)  ─→  Job Accepted  ─→  Job Executes  ─→  Job Completes
    (Explicit)        (Guaranteed)      (Guaranteed)      (Guaranteed)
```

**Key:** If submit succeeds, execution is guaranteed.

### Cancellation Scope

```
Submit Phase: Cancellation stops admission
    ├─ No new submissions accepted
    └─ Existing submissions unaffected

Execution Phase: Cancellation is available via context
    ├─ Job must check ctx.Done()
    └─ Job can decide when to exit
```

### Shutdown Semantics

```
Stop Called
    ↓
1. Stop admission
    ↓
2. Signal workers
    ↓
3. Drain queue
    ↓
4. Wait for execution
    ↓
5. Exit cleanly
    ↓
Ready for GC
```

---

## The Final Contract

> **If a concurx API returns `nil`, the work will finish.**

That guarantee is **enforced by design**, not convention.

### This Means

No silent job loss  
No early worker exit  
No "submit but maybe run" semantics  
No best-effort behavior  
Deterministic across all runs

---

## Navigation

- [Architecture and Patterns](ARCHITECTURE.md) — Visual architecture, runtime flows, pattern catalog, and design decisions
- [Contributing](../CONTRIBUTING.md) — Contribution guidelines

---

**Document Version**: 4.0 (Consolidated)
**Last Updated**: February 2026
**Maintained By**: concurx contributors