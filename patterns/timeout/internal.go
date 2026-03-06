package timeout

import (
	"context"
	"fmt"
)

// runTimeout contains all execution mechanics.
// Guarantees:
//   - no goroutine leaks
//   - correct cancellation ordering
//   - panic converted to a descriptive error preserving the panic value
func runTimeout(
	parent context.Context,
	fn func(context.Context) error,
	o TimeoutOptions,
) error {

	// Derived context with timeout
	ctx, cancel := context.WithTimeout(parent, o.Timeout)
	defer cancel()

	done := make(chan error, 1)

	// Execute function
	go func() {
		defer func() {
			if r := recover(); r != nil {
				done <- fmt.Errorf("timeout: panic: %v: %w", r, ErrTimeout)
			}
		}()

		done <- fn(ctx)
	}()

	select {
	case err := <-done:
		return err

	case <-ctx.Done():
		// Parent cancellation has priority
		if parent.Err() != nil {
			return parent.Err()
		}
		return ErrTimeout
	}
}
