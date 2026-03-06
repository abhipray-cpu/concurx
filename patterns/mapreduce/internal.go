package mapreduce

import (
	"context"
	"sync"
)

type mapResult[O any] struct {
	index int
	value O
	err   error
}

func runMapReduce[I any, O any, A any](
	ctx context.Context,
	inputs []I,
	mapper Mapper[I, O],
	reducer Reducer[A, O],
	initial A,
	o MapReduceOptions,
) (A, error) {

	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	jobs := make(chan int)
	results := make(chan mapResult[O])

	// -----------------------
	// Workers
	// -----------------------
	var wg sync.WaitGroup
	for i := 0; i < o.Parallelism; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()

			for idx := range jobs {
				select {
				case <-ctx.Done():
					return
				default:
				}

				var (
					val O
					err error
				)

				func() {
					defer func() {
						if r := recover(); r != nil {
							err = ErrMapReducePanic
						}
					}()

					val, err = mapper(ctx, inputs[idx])
				}()

				select {
				case results <- mapResult[O]{index: idx, value: val, err: err}:
				case <-ctx.Done():
					return
				}
			}
		}()
	}

	// -----------------------
	// Feed jobs
	// -----------------------
	go func() {
		defer close(jobs)
		for i := range inputs {
			select {
			case jobs <- i:
			case <-ctx.Done():
				return
			}
		}
	}()

	// -----------------------
	// Close results
	// -----------------------
	go func() {
		wg.Wait()
		close(results)
	}()

	// -----------------------
	// Collect
	// -----------------------
	acc := initial

	if o.Ordered {
		buffer := make([]*O, len(inputs))

		for r := range results {
			if r.err != nil {
				if o.FailFast {
					cancel()
					return acc, r.err
				}
				continue
			}
			buffer[r.index] = &r.value
		}

		for _, v := range buffer {
			if v != nil {
				acc = reducer(acc, *v)
			}
		}
		return acc, nil
	}

	// Unordered
	for r := range results {
		if r.err != nil {
			if o.FailFast {
				cancel()
				return acc, r.err
			}
			continue
		}
		acc = reducer(acc, r.value)
	}

	return acc, nil
}
