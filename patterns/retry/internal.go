package retry

import (
	"context"
	"time"
)

// runRetry contains all retry mechanics.
// Guarantees:
//   - context always wins
//   - panic propagates
//   - no goroutine leaks
//   - bounded retries
func runRetry(
	ctx context.Context,
	fn func(context.Context) error,
	o RetryOptions,
) error {

	start := time.Now()
	attempt := 0

	for {
		if ctx.Err() != nil {
			return ErrRetryCanceled
		}

		o.Metrics.OnAttempt(attempt)

		err := func() (err error) {
			defer func() {
				if r := recover(); r != nil {
					panic(r)
				}
			}()
			return fn(ctx)
		}()

		if err == nil {
			o.Metrics.OnSuccess(attempt)
			return nil
		}

		if !o.RetryIf(err) {
			o.Metrics.OnFailure(err)
			return err
		}

		attempt++
		if attempt >= o.MaxAttempts {
			o.Metrics.OnFailure(err)
			return ErrRetryExhausted
		}

		if o.MaxDuration > 0 && time.Since(start) >= o.MaxDuration {
			o.Metrics.OnFailure(err)
			return ErrRetryTimeout
		}

		delay := o.Backoff.Next(attempt)
		o.Metrics.OnRetry(attempt, err, delay)

		if delay > 0 {
			select {
			case <-time.After(delay):
			case <-ctx.Done():
				return ErrRetryCanceled
			}
		}
	}
}
