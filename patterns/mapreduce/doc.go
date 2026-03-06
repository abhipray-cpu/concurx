// Package mapreduce provides a parallel map-reduce computation pattern.
//
// [MapReduce] applies a mapper function to each input in parallel, then
// folds the results through a reducer with an initial accumulator value.
// Options control parallelism, ordering, and fail-fast behavior.
//
//	result, err := mapreduce.MapReduce(ctx, inputs, mapper, reducer, initial,
//	    mapreduce.WithParallelism(4),
//	)
package mapreduce
