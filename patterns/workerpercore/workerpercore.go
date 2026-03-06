package workerpercore

import "context"

// WorkerPerCore represents a fixed-size worker pool
// with bounded queue and fail-fast semantics.
type WorkerPerCore struct {
	engine *workerEngine
}

// NewWorkerPerCore constructs a worker-per-core executor.
//
// Guarantees:
//   - At most N workers execute concurrently
//   - Queue is bounded
//   - FailFast enforced at submission time
//   - Panic inside task does NOT kill workers
func NewWorkerPerCore(opts ...WorkerOption) (*WorkerPerCore, error) {
	o := defaultWorkerOptions()
	for _, opt := range opts {
		opt(&o)
	}
	o.applyDefaults()

	if err := o.validate(); err != nil {
		return nil, err
	}

	// metrics are optional — engine handles nil safely
	engine := newWorkerEngine(o, nil)
	engine.start()

	return &WorkerPerCore{
		engine: engine,
	}, nil
}

// Submit schedules a task for execution using background context.
func (w *WorkerPerCore) Submit(fn func(context.Context) error) error {
	return w.SubmitContext(context.Background(), fn)
}

// SubmitContext schedules a task with context awareness.
func (w *WorkerPerCore) SubmitContext(
	ctx context.Context,
	fn func(context.Context) error,
) error {
	if w == nil || w.engine == nil {
		return ErrWorkerClosed
	}
	return w.engine.submit(ctx, fn)
}

// Shutdown gracefully stops the worker pool.
// Blocks until all workers exit.
func (w *WorkerPerCore) Shutdown() {
	if w == nil || w.engine == nil {
		return
	}
	w.engine.shutdown()
}
