package bulkhead

import (
	"context"
	"time"
)

type bulkheadImpl struct {
	admit chan struct{} // capacity + queue
	sem   chan struct{} // execution only
	m     BulkheadMetrics
	to    time.Duration
}

func newBulkheadInternal(o Options) *bulkheadImpl {
	total := o.Capacity + o.QueueSize

	return &bulkheadImpl{
		admit: make(chan struct{}, total),
		sem:   make(chan struct{}, o.Capacity),
		m:     o.Metrics,
		to:    o.Timeout,
	}
}

func (b *bulkheadImpl) Execute(
	ctx context.Context,
	fn func(context.Context) error,
) (err error) {

	if fn == nil {
		return ErrInvalidBulkheadOptions
	}

	// Honor already-canceled context immediately
	if ctx.Err() != nil {
		return ctx.Err()
	}

	// Unified timeout
	var timeout <-chan time.Time
	if b.to > 0 {
		t := time.NewTimer(b.to)
		defer t.Stop()
		timeout = t.C
	}

	// -------------------------
	// Admission (capacity + queue)
	// -------------------------
	select {
	case b.admit <- struct{}{}:
		b.m.OnQueueAccepted()
	case <-ctx.Done():
		b.m.OnQueueRejected()
		return ctx.Err()
	case <-timeout:
		b.m.OnQueueRejected()
		return ErrBulkheadTimeout
	default:
		b.m.OnQueueRejected()
		return ErrBulkheadFull
	}

	// -------------------------
	// Execution slot
	// -------------------------
	select {
	case b.sem <- struct{}{}:
	case <-ctx.Done():
		<-b.admit
		return ctx.Err()
	case <-timeout:
		<-b.admit
		return ErrBulkheadTimeout
	}

	start := time.Now()
	b.m.OnExecutionStart()

	// -------------------------
	// Unified release & panic isolation
	// -------------------------
	defer func() {
		<-b.sem
		<-b.admit

		b.m.OnExecutionFinish(time.Since(start))

		if r := recover(); r != nil {
			b.m.OnExecutionPanic()
			err = ErrBulkheadPanic
		}

		if err != nil {
			b.m.OnExecutionError()
		}
	}()

	err = fn(ctx)
	return err
}
