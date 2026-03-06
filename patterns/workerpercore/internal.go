package workerpercore

import (
	"context"
	"sync"
	"sync/atomic"
	"time"
)

type task struct {
	ctx context.Context
	fn  func(context.Context) error
}

type workerEngine struct {
	opts    WorkerOptions
	metrics WorkerMetrics

	admit   chan struct{}
	queue   chan task
	closed  int32
	wg      sync.WaitGroup
	closeCh chan struct{}
}

func newWorkerEngine(
	opts WorkerOptions,
	metrics WorkerMetrics,
) *workerEngine {

	if metrics == nil {
		metrics = defaultWorkerMetrics()
	}

	total := opts.Workers + opts.QueueSize

	return &workerEngine{
		opts:    opts,
		metrics: metrics,
		admit:   make(chan struct{}, total),
		queue:   make(chan task, opts.QueueSize),
		closeCh: make(chan struct{}),
	}
}

func (e *workerEngine) start() {
	for i := 0; i < e.opts.Workers; i++ {
		e.wg.Add(1)
		go e.worker()
	}
}

func (e *workerEngine) submit(ctx context.Context, fn func(context.Context) error) error {
	if fn == nil {
		return ErrInvalidTask
	}

	if atomic.LoadInt32(&e.closed) == 1 {
		return ErrWorkerClosed
	}

	// Context must be honored BEFORE admission
	select {
	case <-ctx.Done():
		return ctx.Err()
	default:
	}

	// Admission
	if e.opts.FailFast {
		select {
		case e.admit <- struct{}{}:
		default:
			return ErrQueueFull
		}
	} else {
		select {
		case e.admit <- struct{}{}:
		case <-ctx.Done():
			return ctx.Err()
		case <-e.closeCh:
			return ErrWorkerClosed
		}
	}

	t := task{ctx: ctx, fn: fn}
	e.metrics.OnTaskQueued()

	select {
	case e.queue <- t:
		return nil

	case <-ctx.Done():
		<-e.admit
		return ctx.Err()

	case <-e.closeCh:
		<-e.admit
		return ErrWorkerClosed
	}
}

func (e *workerEngine) worker() {
	defer e.wg.Done()

	for {
		select {
		case <-e.closeCh:
			return

		case t := <-e.queue:
			select {
			case <-t.ctx.Done():
				<-e.admit
				continue
			default:
			}

			start := time.Now()
			e.metrics.OnTaskStart()

			func() {
				defer func() {
					if r := recover(); r != nil {
						e.metrics.OnTaskPanic()
					}
					<-e.admit
				}()

				_ = t.fn(t.ctx)
			}()

			e.metrics.OnTaskFinish(time.Since(start))
		}
	}
}

func (e *workerEngine) shutdown() {
	if atomic.CompareAndSwapInt32(&e.closed, 0, 1) {
		close(e.closeCh) // signal shutdown
		e.wg.Wait()      // wait workers
	}
}
