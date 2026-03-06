package workergroup

import (
	"context"
	"sync"
)

// worker executes jobs from the shared queue.
//
// Workers:
//   - never exit early
//   - isolate panics per job
//   - participate in coordinated shutdown
type worker struct {
	id     int
	queue  *queue
	hooks  Hooks
	jobsWg *sync.WaitGroup
}

func (w *worker) run(ctx context.Context) {
	for {
		job, ok := w.queue.pop()
		if !ok {
			return
		}

		// Track accepted job execution.
		w.jobsWg.Add(1)

		func() {
			defer w.jobsWg.Done()

			w.hooks.OnJobStart(w.id)

			defer func() {
				if r := recover(); r != nil {
					// Panic is isolated to this job.
					w.hooks.OnJobPanic(w.id, r)
				}
				w.hooks.OnJobFinish(w.id)
			}()

			if err := job(ctx); err != nil {
				w.hooks.OnJobError(w.id, err)
			}
		}()
	}
}
