// Package timeout provides deadline enforcement for function execution.
//
// [Timeout] wraps a function with a deadline. If the function does not
// complete before the deadline, it returns [ErrTimeout].
//
//	result, err := timeout.Timeout(ctx, operation,
//	    timeout.WithTimeout(500*time.Millisecond),
//	)
package timeout
