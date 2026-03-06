// Package workergroup provides a bounded worker pool with deterministic
// shutdown semantics and backpressure support.
//
// A [WorkerGroup] eagerly starts a fixed number of workers that pull jobs
// from a bounded queue. Callers submit work via [WorkerGroup.Submit]; the
// submit behavior (block, reject, or drop) is configurable.
//
// Core guarantee: if Submit returns nil, the job will execute exactly once.
//
//	pool, _ := workergroup.New(
//	    workergroup.Config{Workers: 5, QueueSize: 10},
//	    workergroup.Hooks{},
//	)
//	pool.Submit(ctx, func(ctx context.Context) error { return process(ctx) })
//	pool.Stop()
package workergroup
