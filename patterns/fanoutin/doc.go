// Package fanout provides concurrent fan-out/fan-in execution.
//
// [FanOut] distributes a slice of inputs across multiple goroutines,
// applies a function to each, and collects the results. Options control
// concurrency, ordering, fail-fast behavior, and timeouts.
//
//	results, err := fanout.FanOut(ctx, inputs, process,
//	    fanout.WithConcurrency(4),
//	    fanout.WithPreserveOrder(),
//	)
package fanout
