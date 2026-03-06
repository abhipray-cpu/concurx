package workergroup

import (
	"context"
	"sync"
	"sync/atomic"
)

// WorkerGroup is a bounded worker pool with deterministic shutdown.
//
// Core guarantee:
// If Submit returns nil, the job will execute exactly once.
type WorkerGroup struct {
	cfg   Config
	queue *queue
	hooks Hooks

	ctx    context.Context
	cancel context.CancelFunc

	// workersWg tracks worker lifecycle.
	workersWg sync.WaitGroup

	// jobsWg tracks accepted job execution.
	jobsWg sync.WaitGroup

	// stopped guards admission and Stop idempotency.
	stopped atomic.Bool
}

// New constructs and starts a WorkerGroup.
//
// Workers are started eagerly. Failure to start indicates a
// configuration error, not a runtime condition.
func New(cfg Config, hooks Hooks) (*WorkerGroup, error) {
	if err := cfg.validate(); err != nil {
		return nil, err
	}

	ctx, cancel := context.WithCancel(context.Background())

	wg := &WorkerGroup{
		cfg:    cfg,
		hooks:  hooks.safe(),
		ctx:    ctx,
		cancel: cancel,
		queue:  newQueue(cfg.QueueSize),
	}

	for i := 0; i < cfg.Workers; i++ {
		w := &worker{
			id:     i,
			queue:  wg.queue,
			hooks:  wg.hooks,
			jobsWg: &wg.jobsWg,
		}

		wg.workersWg.Add(1)
		go func() {
			defer wg.workersWg.Done()
			wg.hooks.OnWorkerStart(w.id)
			w.run(ctx)
			wg.hooks.OnWorkerStop(w.id)
		}()
	}

	return wg, nil
}

// Submit attempts to admit a job.
//
// If Submit returns nil, the job is guaranteed to execute exactly once.
// Submit is race-safe with Stop.
func (wg *WorkerGroup) Submit(ctx context.Context, job Job) error {
	if wg.stopped.Load() {
		return ErrStopped
	}
	return wg.queue.submit(ctx, job, wg.cfg.SubmitBehavior)
}

// Stop initiates a deterministic shutdown.
//
// Stop semantics:
//  1. stop admission
//  2. drain queue
//  3. wait for all accepted jobs
//  4. exit workers
//
// Safe to call multiple times.
func (wg *WorkerGroup) Stop() {
	if wg.stopped.Swap(true) {
		return
	}

	wg.queue.close()    // stop accepting new jobs
	wg.workersWg.Wait() // workers drain queue
	wg.jobsWg.Wait()    // all accepted jobs executed
	wg.cancel()
}
