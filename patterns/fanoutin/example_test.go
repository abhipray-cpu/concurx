package fanout

import (
	"context"
	"errors"
	"fmt"
	"time"
)

// ExampleFanOut_basic demonstrates the simplest usage of FanOut.
//
// What it shows:
// - Parallel execution over a slice
// - Ordered output by default
// - No special options required
func ExampleFanOut_basic() {
	ctx := context.Background()

	inputs := []int{1, 2, 3, 4}

	out, err := FanOut(ctx, inputs, func(_ context.Context, v int) (int, error) {
		return v * 2, nil
	})
	if err != nil {
		fmt.Println("error:", err)
		return
	}

	fmt.Println(out)
	// Output:
	// [2 4 6 8]
}

// ExampleFanOut_failFast demonstrates fail-fast semantics.
//
// What it shows:
// - First error cancels remaining work
// - No reliance on timing or goroutine order
// - Suitable when partial results are meaningless
func ExampleFanOut_failFast() {
	ctx := context.Background()

	inputs := []int{1, 2, 3}

	_, err := FanOut(
		ctx,
		inputs,
		func(_ context.Context, v int) (int, error) {
			if v == 2 {
				return 0, errors.New("boom")
			}
			return v, nil
		},
		WithConcurrency(3),
		WithFailFast(),
	)

	fmt.Println(err != nil)
	// Output:
	// true
}

// ExampleFanOut_preserveOrder demonstrates explicit order preservation.
//
// What it shows:
// - Output matches input order
// - Useful when mapping positional data
// - Explicit option improves readability
func ExampleFanOut_preserveOrder() {
	ctx := context.Background()

	inputs := []int{3, 1, 2}

	out, err := FanOut(
		ctx,
		inputs,
		func(_ context.Context, v int) (int, error) {
			return v, nil
		},
		WithPreserveOrder(),
	)
	if err != nil {
		fmt.Println("error:", err)
		return
	}

	fmt.Println(out)
	// Output:
	// [3 1 2]
}

// ExampleFanOut_timeout demonstrates global timeout behavior.
//
// What it shows:
// - Timeout applies to the whole operation
// - All workers are canceled together
// - Cancellation happens promptly
func ExampleFanOut_timeout() {
	ctx := context.Background()

	inputs := []int{1, 2}

	_, err := FanOut(
		ctx,
		inputs,
		func(_ context.Context, v int) (int, error) {
			time.Sleep(100 * time.Millisecond)
			return v, nil
		},
		WithTimeout(10*time.Millisecond),
	)

	fmt.Println(err == context.DeadlineExceeded)
	// Output:
	// true
}

// ExampleFanOut_contextCancel demonstrates external context cancellation.
//
// What it shows:
// - FanOut respects parent context cancellation
// - Workers observe ctx.Done()
// - No goroutine leaks after cancel
func ExampleFanOut_contextCancel() {
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	inputs := []int{1, 2, 3}

	_, err := FanOut(
		ctx,
		inputs,
		func(ctx context.Context, v int) (int, error) {
			select {
			case <-ctx.Done():
				return 0, ctx.Err()
			default:
				return v, nil
			}
		},
	)

	fmt.Println(err == context.Canceled)
	// Output:
	// true
}
