package pipeline

import "context"

func runPipeline(
	ctx context.Context,
	cancel context.CancelFunc,
	in <-chan any,
	stages []Stage,
) <-chan any {

	out := in

	for _, stage := range stages {
		if stage == nil {
			cancel()
			return closedChan()
		}

		select {
		case <-ctx.Done():
			return closedChan()
		default:
		}

		out = stage(ctx, out)
	}

	return out
}

func closedChan() <-chan any {
	ch := make(chan any)
	close(ch)
	return ch
}
