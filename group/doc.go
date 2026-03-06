// Package group provides structured concurrent task execution with
// deterministic error propagation and lifecycle management.
//
// A [Group] schedules goroutines via [ErrGroup.Go], [ErrGroup.TryGo], or
// [ErrGroup.BlockingGo], and waits for completion with [ErrGroup.Wait].
// The first non-ignored error cancels the group context and is returned
// by Wait.
//
// Optional features include bounded concurrency, cancel timeouts,
// error boundaries, and pluggable logging/metrics.
//
//	g := group.New(group.WithMaxConcurrency(4))
//	g.Go(func(ctx context.Context) error { return doWork(ctx) })
//	if err := g.Wait(); err != nil { ... }
package group
