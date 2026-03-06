package scatter

import (
	"context"
	"sync"
)

type sgResult[T any] struct {
	index int
	value T
	err   error
}

func runScatterGather[T any](
	ctx context.Context,
	branches []func(context.Context) (T, error),
	policy Policy,
	opts Options,
) ([]T, error) {

	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	type task struct {
		index int
		fn    func(context.Context) (T, error)
	}

	tasks := make(chan task)
	resultsCh := make(chan sgResult[T])

	var wg sync.WaitGroup

	// -------------------------------------------------
	// Worker pool (true concurrency limit)
	// -------------------------------------------------
	for i := 0; i < opts.Concurrency; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for t := range tasks {
				var (
					val T
					err error
				)

				func() {
					defer func() {
						if r := recover(); r != nil {
							err = ErrPanic
						}
					}()
					val, err = t.fn(ctx)
				}()

				select {
				case resultsCh <- sgResult[T]{index: t.index, value: val, err: err}:
				case <-ctx.Done():
					return
				}
			}
		}()
	}

	// -------------------------------------------------
	// Feed tasks
	// -------------------------------------------------
	go func() {
		defer close(tasks)
		for i, fn := range branches {
			select {
			case tasks <- task{index: i, fn: fn}:
			case <-ctx.Done():
				return
			}
		}
	}()

	// -------------------------------------------------
	// Close results once workers exit
	// -------------------------------------------------
	go func() {
		wg.Wait()
		close(resultsCh)
	}()

	// -------------------------------------------------
	// Collect results + policy (SERIALIZED)
	// -------------------------------------------------
	ordered := make([]T, len(branches))
	unordered := make([]T, 0, len(branches))

	var (
		policyMu       sync.Mutex
		collectedOnce  bool
		isFirstSuccess bool
	)

	_, isFirstSuccess = policy.(*firstSuccessPolicy)

	for res := range resultsCh {
		success := res.err == nil

		policyMu.Lock()
		stop := policy.Observe(success)
		policyMu.Unlock()

		if success {
			// Strong guarantee: FirstSuccess returns EXACTLY one result
			if isFirstSuccess {
				if collectedOnce {
					continue
				}
				collectedOnce = true
			}

			if opts.PreserveOrder {
				ordered[res.index] = res.value
			} else {
				unordered = append(unordered, res.value)
			}
		}

		if stop {
			cancel()
			break
		}
	}

	// -------------------------------------------------
	// 🔥 GLOBAL TIMEOUT MUST WIN
	// -------------------------------------------------
	if opts.Timeout > 0 && ctx.Err() == context.DeadlineExceeded {
		return nil, ErrTimeout
	}

	// -------------------------------------------------
	// Final policy decision
	// -------------------------------------------------
	policyMu.Lock()
	err := policy.Result(ctx)
	policyMu.Unlock()

	if err != nil {
		return nil, err
	}

	if opts.PreserveOrder {
		return ordered, nil
	}

	return unordered, nil
}
