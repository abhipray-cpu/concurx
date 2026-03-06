package fanout

import (
	"context"
	"errors"
	"sync/atomic"
	"testing"
	"time"
)

// --------------------
// 1. Concurrent FanOut calls
// --------------------

func TestFanOut_Race_ConcurrentInvocations(t *testing.T) {
	ctx := context.Background()

	inputs := make([]int, 100)
	for i := range inputs {
		inputs[i] = i
	}

	work := func(_ context.Context, v int) (int, error) {
		return v * 2, nil
	}

	done := make(chan struct{})

	for i := 0; i < 10; i++ {
		go func() {
			defer func() { done <- struct{}{} }()
			_, err := FanOut(
				ctx,
				inputs,
				work,
				WithConcurrency(8),
			)
			if err != nil {
				t.Errorf("unexpected error: %v", err)
			}
		}()
	}

	for i := 0; i < 10; i++ {
		<-done
	}
}

// --------------------
// 2. Shared state inside worker function
// --------------------

func TestFanOut_Race_SharedState(t *testing.T) {
	ctx := context.Background()

	inputs := make([]int, 100)
	for i := range inputs {
		inputs[i] = i
	}

	var counter int32

	work := func(_ context.Context, _ int) (int, error) {
		atomic.AddInt32(&counter, 1)
		return 1, nil
	}

	_, err := FanOut(
		ctx,
		inputs,
		work,
		WithConcurrency(16),
	)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if atomic.LoadInt32(&counter) != int32(len(inputs)) {
		t.Fatalf("counter mismatch")
	}
}

// --------------------
// 3. Context cancellation race
// --------------------

func TestFanOut_Race_ContextCancel(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())

	inputs := make([]int, 100)
	for i := range inputs {
		inputs[i] = i
	}

	work := func(ctx context.Context, v int) (int, error) {
		select {
		case <-ctx.Done():
			return 0, ctx.Err()
		case <-time.After(1 * time.Millisecond):
			return v, nil
		}
	}

	go func() {
		time.Sleep(2 * time.Millisecond)
		cancel()
	}()

	_, _ = FanOut(
		ctx,
		inputs,
		work,
		WithConcurrency(8),
		WithFailFast(),
	)
}

// --------------------
// 4. Fail-fast error race
// --------------------

func TestFanOut_Race_FailFast(t *testing.T) {
	ctx := context.Background()

	inputs := make([]int, 50)
	for i := range inputs {
		inputs[i] = i
	}

	work := func(_ context.Context, v int) (int, error) {
		if v == 10 {
			return 0, errors.New("boom")
		}
		time.Sleep(1 * time.Millisecond)
		return v, nil
	}

	_, _ = FanOut(
		ctx,
		inputs,
		work,
		WithConcurrency(10),
		WithFailFast(),
	)
}

// --------------------
// 5. Timeout cancellation race
// --------------------

func TestFanOut_Race_Timeout(t *testing.T) {
	ctx := context.Background()

	inputs := make([]int, 100)
	for i := range inputs {
		inputs[i] = i
	}

	work := func(_ context.Context, v int) (int, error) {
		time.Sleep(5 * time.Millisecond)
		return v, nil
	}

	_, _ = FanOut(
		ctx,
		inputs,
		work,
		WithConcurrency(8),
		WithTimeout(2*time.Millisecond),
	)
}
