package pipeline

import "context"

// Stage represents a single pipeline transformation.
//
// Stages operate on any-typed channels internally because Go's type system
// does not support heterogeneous generic chain composition (each stage may
// produce a different type). The top-level Pipeline[T] function handles
// type-safe input and output; intermediate stages are responsible for
// producing values compatible with downstream consumers.
//
// If the final stage emits a value that cannot be asserted to T, the
// pipeline will emit an ErrTypeMismatch and skip the value.
type Stage func(ctx context.Context, in <-chan any) <-chan any

// NewStage creates a stage function from a typed transformation.
// It handles type assertion and error propagation internally.
func NewStage(
	fn func(ctx context.Context, in any) (any, error),
) Stage {
	return func(ctx context.Context, in <-chan any) <-chan any {
		out := make(chan any)

		go func() {
			defer close(out)

			for {
				select {
				case <-ctx.Done():
					return

				case v, ok := <-in:
					if !ok {
						return
					}

					type result struct {
						val any
						err error
					}

					resCh := make(chan result, 1)

					// Run user function asynchronously so we can cancel it
					go func(v any) {
						var (
							r   any
							err error
						)
						defer func() {
							if recover() != nil {
								resCh <- result{nil, ErrPanic}
							}
						}()
						r, err = fn(ctx, v)
						resCh <- result{r, err}
					}(v)

					select {
					case <-ctx.Done():
						return

					case res := <-resCh:
						if res.err != nil {
							// Fail-fast: cancel pipeline
							return
						}

						select {
						case out <- res.val:
						case <-ctx.Done():
							return
						}
					}
				}
			}
		}()

		return out
	}
}
