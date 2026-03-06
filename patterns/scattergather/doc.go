// Package scatter provides scatter-gather concurrent execution.
//
// [ScatterGather] dispatches work to multiple branches concurrently and
// gathers results according to a [Policy]. Built-in policies include
// [NewAllSuccessPolicy], [NewMinSuccessPolicy], and [NewFirstSuccessPolicy].
//
//	results, err := scatter.ScatterGather(ctx, branches, policy,
//	    scatter.WithConcurrency(3),
//	)
package scatter
