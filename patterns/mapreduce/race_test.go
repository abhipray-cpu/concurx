package mapreduce

import (
	"context"
	"sync"
	"testing"
)

func TestMapReduce_Race(t *testing.T) {
	ctx := context.Background()

	var wg sync.WaitGroup
	for i := 0; i < 100; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_, _ = MapReduce(
				ctx,
				[]int{1, 2, 3},
				func(ctx context.Context, v int) (int, error) {
					return v, nil
				},
				func(acc int, v int) int {
					return acc + v
				},
				0,
				WithParallelism(4),
			)
		}()
	}
	wg.Wait()
}
