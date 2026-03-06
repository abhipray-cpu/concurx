package mapreduce

import "context"

// Mapper transforms an input element.
type Mapper[I any, O any] func(context.Context, I) (O, error)

// Reducer combines mapped outputs.
type Reducer[A any, O any] func(A, O) A

// MapReduce applies mapper to each input in parallel, then folds
// the mapped outputs through reducer starting from initial.
func MapReduce[I any, O any, A any](
	ctx context.Context,
	inputs []I,
	mapper Mapper[I, O],
	reducer Reducer[A, O],
	initial A,
	opts ...MapReduceOption,
) (A, error) {

	// Fail fast if context already canceled
	select {
	case <-ctx.Done():
		return initial, ctx.Err()
	default:
	}

	if len(inputs) == 0 {
		return initial, ErrMapReduceNoInputs
	}
	if mapper == nil || reducer == nil {
		return initial, ErrMapReduceInvalidOpt
	}

	o := defaultMapReduceOptions()
	for _, opt := range opts {
		opt(&o)
	}
	o.apply()

	if err := o.validate(); err != nil {
		return initial, err
	}

	return runMapReduce(ctx, inputs, mapper, reducer, initial, o)
}
