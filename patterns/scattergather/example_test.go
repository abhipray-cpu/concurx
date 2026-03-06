package scatter

import (
	"context"
	"fmt"
	"time"
)

//
// -----------------------------------------------------------------------------
// Example 1: Basic Scatter-Gather (All branches succeed)
// -----------------------------------------------------------------------------
//
// Demonstrates:
//   - Parallel execution
//   - Ordered result collection
//   - Default behavior (AllSuccessPolicy)
//

func ExampleScatterGather_basic() {
	ctx := context.Background()

	branches := []func(context.Context) (int, error){
		func(ctx context.Context) (int, error) { return 1, nil },
		func(ctx context.Context) (int, error) { return 2, nil },
		func(ctx context.Context) (int, error) { return 3, nil },
	}

	results, err := ScatterGather(
		ctx,
		branches,
		NewAllSuccessPolicy(len(branches)),
		WithPreserveOrder(),
	)
	if err != nil {
		fmt.Println("error:", err)
		return
	}

	fmt.Println(results)
	// Output:
	// [1 2 3]
}

//
// -----------------------------------------------------------------------------
// Example 2: Explicit AllSuccessPolicy (fail-fast semantics)
// -----------------------------------------------------------------------------
//
// Demonstrates:
//   - Explicit policy construction
//   - Immediate failure on first error
//

func ExampleScatterGather_allSuccessFailFast() {
	ctx := context.Background()

	branches := []func(context.Context) (int, error){
		func(ctx context.Context) (int, error) { return 1, nil },
		func(ctx context.Context) (int, error) { return 0, ErrTaskFailed },
		func(ctx context.Context) (int, error) { return 3, nil },
	}

	_, err := ScatterGather(ctx, branches, NewAllSuccessPolicy(len(branches)))
	fmt.Println(err != nil)
	// Output:
	// true
}

//
// -----------------------------------------------------------------------------
// Example 3: MinSuccessPolicy (quorum-based success)
// -----------------------------------------------------------------------------
//
// Demonstrates:
//   - Partial availability
//   - Early stopping once quorum is met
//   - Useful for replicated backends
//

func ExampleScatterGather_minSuccess() {
	ctx := context.Background()

	branches := []func(context.Context) (int, error){
		func(ctx context.Context) (int, error) { return 1, nil },
		func(ctx context.Context) (int, error) { return 0, ErrTaskFailed },
		func(ctx context.Context) (int, error) { return 3, nil },
	}

	results, err := ScatterGather(
		ctx,
		branches,
		NewMinSuccessPolicy(len(branches), 2),
	)

	if err != nil {
		fmt.Println("error")
		return
	}

	fmt.Println(len(results) >= 2)
	// Output:
	// true
}

//
// -----------------------------------------------------------------------------
// Example 4: FirstSuccessPolicy (fastest response wins)
// -----------------------------------------------------------------------------
//
// Demonstrates:
//   - Racing multiple backends
//   - Early cancellation of slower branches
//   - Lowest-latency result selection
//

func ExampleScatterGather_firstSuccess() {
	ctx := context.Background()

	branches := []func(context.Context) (int, error){
		func(ctx context.Context) (int, error) {
			time.Sleep(100 * time.Millisecond)
			return 1, nil
		},
		func(ctx context.Context) (int, error) {
			time.Sleep(20 * time.Millisecond)
			return 42, nil
		},
	}

	results, err := ScatterGather(ctx, branches, NewFirstSuccessPolicy())
	if err != nil {
		fmt.Println("error")
		return
	}

	// We only guarantee that ONE successful result exists
	fmt.Println(len(results) == 1)
	// Output:
	// true
}

//
// -----------------------------------------------------------------------------
// Example 5: Global Timeout
// -----------------------------------------------------------------------------
//
// Demonstrates:
//   - Timeout enforcement
//   - Automatic cancellation
//   - Safety against slow branches
//

func ExampleScatterGather_timeout() {
	ctx := context.Background()

	branches := []func(context.Context) (int, error){
		func(ctx context.Context) (int, error) {
			time.Sleep(200 * time.Millisecond)
			return 1, nil
		},
	}

	_, err := ScatterGather(
		ctx,
		branches,
		NewAllSuccessPolicy(1),
		WithTimeout(50*time.Millisecond),
	)

	fmt.Println(err != nil)
	// Output:
	// true
}

//
// -----------------------------------------------------------------------------
// Example 6: Concurrency Limiting
// -----------------------------------------------------------------------------
//
// Demonstrates:
//   - Limiting parallelism
//   - Preventing resource exhaustion
//

func ExampleScatterGather_concurrencyLimit() {
	ctx := context.Background()

	branches := make([]func(context.Context) (int, error), 5)
	for i := range branches {
		branches[i] = func(ctx context.Context) (int, error) {
			time.Sleep(20 * time.Millisecond)
			return 1, nil
		}
	}

	results, err := ScatterGather(
		ctx,
		branches,
		NewAllSuccessPolicy(len(branches)),
		WithConcurrency(2),
	)

	if err != nil {
		fmt.Println("error")
		return
	}

	fmt.Println(len(results))
	// Output:
	// 5
}

//
// -----------------------------------------------------------------------------
// Example 7: Panic Isolation
// -----------------------------------------------------------------------------
//
// Demonstrates:
//   - Panic treated as failure
//   - System stability
//   - No goroutine leaks
//

func ExampleScatterGather_panicIsolation() {
	ctx := context.Background()

	branches := []func(context.Context) (int, error){
		func(ctx context.Context) (int, error) {
			panic("boom")
		},
		func(ctx context.Context) (int, error) {
			return 1, nil
		},
	}

	_, err := ScatterGather(ctx, branches, NewAllSuccessPolicy(2))
	fmt.Println(err != nil)
	// Output:
	// true
}

//
// -----------------------------------------------------------------------------
// Example 8: Nil Policy (safe default)
// -----------------------------------------------------------------------------
//
// Demonstrates:
//   - Optional policy parameter
//   - Sane defaults for beginners
//

func ExampleScatterGather_nilPolicy() {
	ctx := context.Background()

	branches := []func(context.Context) (int, error){
		func(ctx context.Context) (int, error) { return 1, nil },
	}

	results, err := ScatterGather(ctx, branches, nil)
	if err != nil {
		fmt.Println("error")
		return
	}

	fmt.Println(results)
	// Output:
	// [1]
}
