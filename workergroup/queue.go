package workergroup

import (
	"context"
	"sync"
	"sync/atomic"
)

// queue is an admission + drain-aware job queue.
//
// Key invariants:
//   - once a job is accepted, it will be delivered exactly once
//   - stop never drops accepted jobs
//   - workers drain fully before exit
//
// Shutdown signaling is decoupled from the job channel to avoid
// send/close races and partial drains.
type queue struct {
	ch   chan Job
	done chan struct{}

	once sync.Once

	queueSize int

	// inflight tracks accepted-but-not-yet-consumed jobs.
	// Used for backpressure decisions only.
	inflight atomic.Int32
}

func newQueue(size int) *queue {
	var ch chan Job
	if size == 0 {
		ch = make(chan Job)
	} else {
		ch = make(chan Job, size)
	}

	return &queue{
		ch:        ch,
		done:      make(chan struct{}),
		queueSize: size,
	}
}

// submit attempts to admit a job based on configured behavior.
// If submit returns nil, the job is guaranteed to execute exactly once.
func (q *queue) submit(ctx context.Context, job Job, behavior SubmitBehavior) error {
	select {
	case <-q.done:
		return ErrQueueClosed
	default:
	}

	switch behavior {
	case SubmitReject:
		if q.queueSize > 0 && q.inflight.Load() >= int32(q.queueSize) { //nolint:gosec // queue size is always small and positive
			return ErrQueueFull
		}

		select {
		case q.ch <- job:
			q.inflight.Add(1)
			return nil
		case <-q.done:
			return ErrQueueClosed
		default:
			return ErrQueueFull
		}

	case SubmitBlock:
		select {
		case q.ch <- job:
			q.inflight.Add(1)
			return nil
		case <-q.done:
			return ErrQueueClosed
		case <-ctx.Done():
			return ctx.Err()
		}
	}

	return ErrQueueFull
}

// pop delivers jobs to workers.
//
// IMPORTANT:
// Workers continue draining even after stop is requested.
// Exit only occurs when stop is requested AND the queue is empty.
func (q *queue) pop() (Job, bool) {
	select {
	case job := <-q.ch:
		q.inflight.Add(-1)
		return job, true

	case <-q.done:
		// Stop requested — only exit once queue is fully drained.
		select {
		case job := <-q.ch:
			q.inflight.Add(-1)
			return job, true
		default:
			return nil, false
		}
	}
}

// close signals shutdown and prevents further admission.
// Safe to call multiple times.
func (q *queue) close() {
	q.once.Do(func() {
		close(q.done)
	})
}
