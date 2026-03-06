package supervisor

import (
	"context"

	"github.com/abhipray-cpu/concurx/group"
)

// ChildRunner defines how a child is executed.
// It must block until the child terminates.
type ChildRunner func(ctx context.Context, spec ChildSpec) error

// DefaultRunner executes the child directly in the caller goroutine.
func DefaultRunner(ctx context.Context, spec ChildSpec) error {
	return spec.Run(ctx)
}

// RunnerFromGroup adapts a group.ErrGroup into a ChildRunner.
//
// This allows supervisors to share structured concurrency
// and error handling with other parts of the system.
func RunnerFromGroup(g group.ErrGroup) ChildRunner {
	return func(ctx context.Context, spec ChildSpec) error {
		done := make(chan error, 1)

		g.Go(func(_ context.Context) error {
			done <- spec.Run(ctx)
			return nil
		})

		return <-done
	}
}
