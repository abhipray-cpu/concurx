package workerpercore

import "runtime"

// WorkerOptions defines Worker-Per-Core behavior.
type WorkerOptions struct {
	// Workers overrides GOMAXPROCS if > 0.
	Workers int

	// QueueSize controls pending tasks.
	// 0  → unbuffered (strict backpressure)
	// >0 → bounded queue
	QueueSize int

	// FailFast determines behavior when queue is full.
	// true  → reject immediately
	// false → block until space or ctx cancels
	FailFast bool
}

// WorkerOption mutates WorkerOptions.
type WorkerOption func(*WorkerOptions)

// WithWorkers sets the number of workers (default: runtime.NumCPU).
func WithWorkers(n int) WorkerOption {
	return func(o *WorkerOptions) {
		o.Workers = n
	}
}

// WithQueueSize sets the task queue buffer size per worker.
func WithQueueSize(n int) WorkerOption {
	return func(o *WorkerOptions) {
		o.QueueSize = n
	}
}

// WithFailFast causes Submit to return an error if the queue is full.
func WithFailFast() WorkerOption {
	return func(o *WorkerOptions) {
		o.FailFast = true
	}
}

func defaultWorkerOptions() WorkerOptions {
	return WorkerOptions{
		Workers:   runtime.GOMAXPROCS(0),
		QueueSize: 0,
		FailFast:  false,
	}
}

func (o *WorkerOptions) applyDefaults() {
	if o.Workers <= 0 {
		o.Workers = runtime.GOMAXPROCS(0)
	}
	if o.QueueSize < 0 {
		o.QueueSize = 0
	}
}

func (o *WorkerOptions) validate() error {
	if o.Workers <= 0 {
		return ErrInvalidWorkerOptions
	}
	if o.QueueSize < 0 {
		return ErrInvalidWorkerOptions
	}
	return nil
}
