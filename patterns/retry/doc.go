// Package retry provides automatic failure recovery with configurable
// backoff and retry policies.
//
// [Retry] executes a function repeatedly until it succeeds or the retry
// budget is exhausted. Backoff policies ([ConstantBackoff],
// [ExponentialBackoff]) control delay between attempts.
//
//	result, err := retry.Retry(ctx, operation,
//	    retry.WithMaxAttempts(3),
//	    retry.WithBackoff(retry.ExponentialBackoff(100*time.Millisecond)),
//	)
package retry
