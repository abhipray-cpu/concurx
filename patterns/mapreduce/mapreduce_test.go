package mapreduce

import (
	"context"
	"errors"
	"sync/atomic"
	"testing"
	"time"
)

func TestMapReduce_Basic(t *testing.T) {
	ctx := context.Background()

	out, err := MapReduce(
		ctx,
		[]int{1, 2, 3},
		func(ctx context.Context, v int) (int, error) {
			return v * 2, nil
		},
		func(acc int, v int) int {
			return acc + v
		},
		0,
	)

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if out != 12 {
		t.Fatalf("expected 12, got %d", out)
	}
}

func TestMapReduce_ParallelismRespected(t *testing.T) {
	ctx := context.Background()

	var active int32
	var maxSeen int32

	_, _ = MapReduce(
		ctx,
		make([]int, 50),
		func(ctx context.Context, _ int) (int, error) {
			n := atomic.AddInt32(&active, 1)
			defer atomic.AddInt32(&active, -1)

			for {
				old := atomic.LoadInt32(&maxSeen)
				if n <= old || atomic.CompareAndSwapInt32(&maxSeen, old, n) {
					break
				}
			}

			time.Sleep(5 * time.Millisecond)
			return 1, nil
		},
		func(acc int, v int) int {
			return acc + v
		},
		0,
		WithParallelism(4),
	)

	if maxSeen > 4 {
		t.Fatalf("parallelism exceeded: %d", maxSeen)
	}
}

func TestMapReduce_FailFast(t *testing.T) {
	ctx := context.Background()

	started := int32(0)

	_, err := MapReduce(
		ctx,
		[]int{1, 2, 3, 4},
		func(ctx context.Context, v int) (int, error) {
			atomic.AddInt32(&started, 1)
			if v == 2 {
				return 0, errors.New("boom")
			}
			time.Sleep(20 * time.Millisecond)
			return v, nil
		},
		func(acc int, v int) int {
			return acc + v
		},
		0,
		WithFailFast(),
	)

	if err == nil {
		t.Fatalf("expected error")
	}

	if atomic.LoadInt32(&started) >= 4 {
		t.Fatalf("fail-fast violated")
	}
}

func TestMapReduce_ContextCancel(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	_, err := MapReduce(
		ctx,
		[]int{1, 2, 3},
		func(ctx context.Context, v int) (int, error) {
			time.Sleep(10 * time.Millisecond)
			return v, nil
		},
		func(acc int, v int) int {
			return acc + v
		},
		0,
	)

	if err == nil {
		t.Fatalf("expected cancellation error")
	}
}

func TestMapReduce_PanicIsolation(t *testing.T) {
	ctx := context.Background()

	defer func() {
		if r := recover(); r != nil {
			t.Fatalf("panic leaked from MapReduce")
		}
	}()

	_, err := MapReduce(
		ctx,
		[]int{1, 2, 3},
		func(ctx context.Context, v int) (int, error) {
			if v == 2 {
				panic("boom")
			}
			return v, nil
		},
		func(acc int, v int) int {
			return acc + v
		},
		0,
	)

	if err == nil {
		t.Fatalf("expected panic error")
	}
}
