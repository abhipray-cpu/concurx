// Package bulkhead provides resource isolation using the bulkhead pattern.
//
// A [Bulkhead] limits concurrent access to a resource, with an optional
// waiting queue for overflow. When both the active slots and queue are full,
// requests are rejected immediately (fail-fast) or block until a slot opens.
//
//	bh := bulkhead.NewBulkhead(bulkhead.WithCapacity(5), bulkhead.WithQueueSize(10))
//	result, err := bh.Execute(ctx, func(ctx context.Context) (any, error) { ... })
package bulkhead
