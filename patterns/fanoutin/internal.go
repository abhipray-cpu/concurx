package fanout

import (
	"context"
	"sync"
	"sync/atomic"
)

type taskResult[T any] struct {
	index int
	value T
	err   error
}

func runFanOut[T any, R any](
	parent context.Context,
	inputs []T,
	fn func(context.Context, T) (R, error),
	opts Options,
) ([]R, error) {

	ctx := parent
	var cancel context.CancelFunc

	if opts.Timeout > 0 {
		ctx, cancel = context.WithTimeout(parent, opts.Timeout)
		defer cancel()
	} else {
		ctx, cancel = context.WithCancel(parent)
		defer cancel()
	}

	in := make(chan int)
	out := make(chan taskResult[R], opts.Concurrency)

	var wg sync.WaitGroup
	var stopped atomic.Bool // HARD gate

	// Workers
	for i := 0; i < opts.Concurrency; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for idx := range in {

				// 🚨 HARD FAIL-FAST CHECK
				if opts.FailFast && stopped.Load() {
					return
				}

				if ctx.Err() != nil {
					return
				}

				func() {
					defer func() {
						if r := recover(); r != nil {
							if opts.FailFast && stopped.CompareAndSwap(false, true) {
								cancel()
							}
							out <- taskResult[R]{index: idx, err: ErrPanic}
						}
					}()

					val, err := fn(ctx, inputs[idx])

					if err != nil && opts.FailFast {
						if stopped.CompareAndSwap(false, true) {
							cancel()
						}
					}

					out <- taskResult[R]{index: idx, value: val, err: err}
				}()
			}
		}()
	}

	// Admission (STRICT)
	go func() {
		defer close(in)
		for i := range inputs {
			if opts.FailFast && stopped.Load() {
				return
			}
			select {
			case in <- i:
			case <-ctx.Done():
				return
			}
		}
	}()

	go func() {
		wg.Wait()
		close(out)
	}()

	results := make([]R, len(inputs))
	var firstErr error
	var once sync.Once

	for res := range out {
		if res.err != nil {
			once.Do(func() {
				firstErr = res.err
			})
			continue
		}
		if opts.PreserveOrder {
			results[res.index] = res.value
		}
	}

	if firstErr != nil {
		return nil, firstErr
	}
	if err := ctx.Err(); err != nil {
		return nil, err
	}

	if !opts.PreserveOrder {
		unordered := make([]R, 0, len(inputs))
		unordered = append(unordered, results...)
		return unordered, nil
	}

	return results, nil
}
