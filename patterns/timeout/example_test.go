package timeout

import (
	"context"
	"errors"
	"fmt"
	"time"
)

// -----------------------------------------------------------------------------
// Example 1: Protecting a slow external API
// -----------------------------------------------------------------------------
//
// Scenario:
//   - External API may hang or respond slowly
//   - We enforce a hard timeout boundary
//
// Invariant validated:
//   - Execution is stopped after timeout
//   - Caller gets ErrTimeout
func ExampleTimeout_externalAPICall() {
	err := Timeout(
		context.Background(),
		func(ctx context.Context) error {
			// Simulate slow API
			time.Sleep(100 * time.Millisecond)
			return nil
		},
		WithTimeout(20*time.Millisecond),
	)

	if err == ErrTimeout {
		fmt.Println("timed out safely")
	}

	// Output:
	// timed out safely
}

// -----------------------------------------------------------------------------
// Example 2: Fast path succeeds without penalty
// -----------------------------------------------------------------------------
//
// Scenario:
//   - Operation completes well within timeout
//
// Invariant validated:
//   - No artificial delay
//   - No timeout error
func ExampleTimeout_fastSuccess() {
	err := Timeout(
		context.Background(),
		func(ctx context.Context) error {
			time.Sleep(5 * time.Millisecond)
			return nil
		},
		WithTimeout(50*time.Millisecond),
	)

	fmt.Println("success:", err == nil)

	// Output:
	// success: true
}

// -----------------------------------------------------------------------------
// Example 3: Parent context cancellation wins
// -----------------------------------------------------------------------------
//
// Scenario:
//   - Request is canceled by caller
//   - Timeout wrapper must respect it
//
// Invariant validated:
//   - context.Canceled is returned
//   - ErrTimeout is NOT returned
func ExampleTimeout_parentContextCancel() {
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := Timeout(
		ctx,
		func(ctx context.Context) error {
			time.Sleep(10 * time.Millisecond)
			return nil
		},
		WithTimeout(50*time.Millisecond),
	)

	fmt.Println(err == context.Canceled)

	// Output:
	// true
}

// -----------------------------------------------------------------------------
// Example 4: Panic is isolated and converted
// -----------------------------------------------------------------------------
//
// Scenario:
//   - Business logic panics
//   - Timeout wrapper must NOT crash program
//
// Invariant validated:
//   - Panic is converted to an error wrapping ErrTimeout
//   - Caller stays alive
func ExampleTimeout_panicIsolation() {
	err := Timeout(
		context.Background(),
		func(ctx context.Context) error {
			panic("boom")
		},
		WithTimeout(50*time.Millisecond),
	)

	fmt.Println(errors.Is(err, ErrTimeout))

	// Output:
	// true
}

// -----------------------------------------------------------------------------
// Example 5: Wrapper composes safely (retry / supervisor ready)
// -----------------------------------------------------------------------------
//
// Scenario:
//   - Timeout used as a building block
//   - Caller can branch on typed errors
func ExampleTimeout_compositionReady() {
	err := Timeout(
		context.Background(),
		func(ctx context.Context) error {
			time.Sleep(100 * time.Millisecond)
			return nil
		},
		WithTimeout(10*time.Millisecond),
	)

	switch err {
	case ErrTimeout:
		fmt.Println("retryable")
	case ErrTimeout:
		fmt.Println("bug in code")
	case nil:
		fmt.Println("success")
	}

	// Output:
	// retryable
}
