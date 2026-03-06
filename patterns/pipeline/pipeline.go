package pipeline

import "context"

// Pipeline runs a series of stages connected by channels.
// Data flows from the input channel through each stage sequentially.
func Pipeline[T any](
	ctx context.Context,
	input <-chan T,
	stages []Stage,
	opts ...Option,
) (<-chan T, error) {

	if len(stages) == 0 {
		return nil, ErrNoStages
	}

	o := defaultOptions()
	for _, opt := range opts {
		opt(&o)
	}
	o.applyDefaults()

	if err := o.validate(); err != nil {
		return nil, err
	}

	ctx, cancel := context.WithCancel(ctx)

	if o.Timeout > 0 {
		ctx, cancel = context.WithTimeout(ctx, o.Timeout)
	}

	// INTERNAL controlled input channel
	internalIn := make(chan any)

	// Copy input → internalIn safely
	go func() {
		defer close(internalIn)
		for {
			select {
			case <-ctx.Done():
				return
			case v, ok := <-input:
				if !ok {
					return
				}
				internalIn <- v
			}
		}
	}()

	anyOut := runPipeline(ctx, cancel, internalIn, stages)
	out := adaptOutput[T](anyOut, o.OnTypeMismatch)

	return out, nil
}
