package mapreduce

import (
	"context"
	"fmt"
	"sync/atomic"
	"time"
)

// Example: Fan-out compute + aggregation
func ExampleMapReduce_analytics() {
	ctx := context.Background()

	out, _ := MapReduce(
		ctx,
		[]int{1, 2, 3, 4, 5},
		func(ctx context.Context, v int) (int, error) {
			time.Sleep(10 * time.Millisecond)
			return v * v, nil
		},
		func(acc int, v int) int {
			return acc + v
		},
		0,
		WithParallelism(3),
	)

	fmt.Println(out >= 55)

	// Output:
	// true
}

// Example: protecting downstream capacity
func ExampleMapReduce_capacityProtection() {
	ctx := context.Background()

	var active int32

	_, _ = MapReduce(
		ctx,
		make([]int, 20),
		func(ctx context.Context, _ int) (int, error) {
			n := atomic.AddInt32(&active, 1)
			defer atomic.AddInt32(&active, -1)

			if n > 3 {
				panic("capacity violated")
			}
			time.Sleep(10 * time.Millisecond)
			return 1, nil
		},
		func(acc int, v int) int {
			return acc + v
		},
		0,
		WithParallelism(3),
	)

	fmt.Println("capacity respected")

	// Output:
	// capacity respected
}
