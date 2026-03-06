package fanout

import (
	"context"
	"errors"
	"sync/atomic"
	"testing"
	"time"
)

func TestFanOut_Basic(t *testing.T) {
	ctx := context.Background()

	inputs := []int{1, 2, 3, 4, 5}

	out, err := FanOut(ctx, inputs, func(_ context.Context, v int) (int, error) {
		return v * 2, nil
	})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if len(out) != len(inputs) {
		t.Fatalf("expected %d results, got %d", len(inputs), len(out))
	}

	for i, v := range out {
		if v != inputs[i]*2 {
			t.Fatalf("unexpected value at %d: %d", i, v)
		}
	}
}

func TestFanOut_PreserveOrder(t *testing.T) {
	ctx := context.Background()

	inputs := []int{1, 2, 3, 4}

	out, err := FanOut(
		ctx,
		inputs,
		func(_ context.Context, v int) (int, error) {
			time.Sleep(time.Duration(5-v) * 10 * time.Millisecond)
			return v, nil
		},
		WithConcurrency(4),
		WithPreserveOrder(),
	)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	for i := range inputs {
		if out[i] != inputs[i] {
			t.Fatalf("order not preserved at index %d", i)
		}
	}
}

func TestFanOut_Unordered(t *testing.T) {
	ctx := context.Background()

	inputs := []int{1, 2, 3, 4}

	out, err := FanOut(
		ctx,
		inputs,
		func(_ context.Context, v int) (int, error) {
			return v, nil
		},
		WithConcurrency(4),
	)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if len(out) != len(inputs) {
		t.Fatalf("expected %d results", len(inputs))
	}
}

func TestFanOut_ConcurrencyLimit(t *testing.T) {
	ctx := context.Background()

	var running int32
	var maxRunning int32

	inputs := make([]int, 20)

	_, err := FanOut(
		ctx,
		inputs,
		func(_ context.Context, v int) (int, error) {
			n := atomic.AddInt32(&running, 1)
			defer atomic.AddInt32(&running, -1)

			for {
				m := atomic.LoadInt32(&maxRunning)
				if n > m && atomic.CompareAndSwapInt32(&maxRunning, m, n) {
					break
				}
				if n <= m {
					break
				}
			}

			time.Sleep(10 * time.Millisecond)
			return v, nil
		},
		WithConcurrency(3),
	)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if maxRunning > 3 {
		t.Fatalf("concurrency limit exceeded: %d", maxRunning)
	}
}

func TestFanOut_FailFast(t *testing.T) {
	ctx := context.Background()

	inputs := []int{1, 2, 3, 4}

	var calls int32

	_, err := FanOut(
		ctx,
		inputs,
		func(_ context.Context, v int) (int, error) {
			atomic.AddInt32(&calls, 1)
			if v == 2 {
				return 0, errors.New("boom")
			}
			time.Sleep(20 * time.Millisecond)
			return v, nil
		},
		WithConcurrency(4),
		WithFailFast(),
	)

	// Must return error
	if err == nil {
		t.Fatalf("expected error")
	}

	c := atomic.LoadInt32(&calls)

	// At least one task ran
	if c == 0 {
		t.Fatalf("expected some tasks to execute")
	}

	// Admission must have stopped early
	if c > int32(len(inputs)) {
		t.Fatalf("invalid call count: %d", c)
	}
}

func TestFanOut_NoFailFast(t *testing.T) {
	ctx := context.Background()

	inputs := []int{1, 2, 3}

	var calls int32

	_, err := FanOut(
		ctx,
		inputs,
		func(_ context.Context, v int) (int, error) {
			atomic.AddInt32(&calls, 1)
			if v == 2 {
				return 0, errors.New("err")
			}
			return v, nil
		},
	)
	if err == nil {
		t.Fatalf("expected error")
	}

	if atomic.LoadInt32(&calls) != int32(len(inputs)) {
		t.Fatalf("expected all tasks to run")
	}
}

func TestFanOut_ContextCancel(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	inputs := []int{1, 2, 3}

	_, err := FanOut(ctx, inputs, func(ctx context.Context, v int) (int, error) {
		select {
		case <-ctx.Done():
			return 0, ctx.Err()
		default:
			return v, nil
		}
	})
	if err == nil {
		t.Fatalf("expected context error")
	}
}

func TestFanOut_Timeout(t *testing.T) {
	ctx := context.Background()

	inputs := []int{1, 2}

	start := time.Now()

	_, err := FanOut(
		ctx,
		inputs,
		func(_ context.Context, v int) (int, error) {
			time.Sleep(100 * time.Millisecond)
			return v, nil
		},
		WithTimeout(20*time.Millisecond),
	)
	if err == nil {
		t.Fatalf("expected timeout error")
	}

	if time.Since(start) > 200*time.Millisecond {
		t.Fatalf("timeout did not cancel promptly")
	}
}

func TestFanOut_PanicRecovery(t *testing.T) {
	ctx := context.Background()

	inputs := []int{1, 2}

	_, err := FanOut(
		ctx,
		inputs,
		func(_ context.Context, v int) (int, error) {
			if v == 1 {
				panic("boom")
			}
			return v, nil
		},
	)
	if err == nil {
		t.Fatalf("expected panic error")
	}
}
