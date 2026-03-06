package breaker

import (
	"context"
	"errors"
	"fmt"
	"time"
)

//
// REAL-WORLD USAGE EXAMPLES FOR CIRCUIT BREAKER
//

// -----------------------------------------------------------------------------
// 1. Downstream service outage — circuit opens and skips calls
// -----------------------------------------------------------------------------

func ExampleCircuitBreaker_downstreamOutage() {
	breaker, _ := New(
		WithFailureThreshold(2),
		WithOpenTimeout(100*time.Millisecond),
	)

	callService := func(ctx context.Context) error {
		return errors.New("service unavailable")
	}

	// two failures → circuit opens
	_ = breaker.Execute(context.Background(), callService)
	_ = breaker.Execute(context.Background(), callService)

	// third call is short-circuited
	err := breaker.Execute(context.Background(), callService)
	if errors.Is(err, ErrCircuitOpen) {
		fmt.Println("circuit open, request skipped")
	}

	// Output:
	// circuit open, request skipped
}

// -----------------------------------------------------------------------------
// 2. Fast-fail behavior (no blocking when open)
// -----------------------------------------------------------------------------

func ExampleCircuitBreaker_fastFail() {
	breaker, _ := New(
		WithFailureThreshold(1),
	)

	_ = breaker.Execute(context.Background(), func(ctx context.Context) error {
		return errors.New("db down")
	})

	start := time.Now()
	err := breaker.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if errors.Is(err, ErrCircuitOpen) {
		fmt.Println("failed fast")
	}

	if time.Since(start) < time.Millisecond {
		fmt.Println("no blocking")
	}

	// Output:
	// failed fast
	// no blocking
}

// -----------------------------------------------------------------------------
// 3. Automatic recovery after open timeout (HALF-OPEN → CLOSED)
// -----------------------------------------------------------------------------

func ExampleCircuitBreaker_recovery() {
	breaker, _ := New(
		WithFailureThreshold(1),
		WithSuccessThreshold(1),
		WithOpenTimeout(50*time.Millisecond),
	)

	// force open
	_ = breaker.Execute(context.Background(), func(ctx context.Context) error {
		return errors.New("fail")
	})

	time.Sleep(60 * time.Millisecond)

	// successful probe closes circuit
	err := breaker.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if err == nil {
		fmt.Println("service recovered")
	}

	// Output:
	// service recovered
}

// -----------------------------------------------------------------------------
// 4. Half-open failure reopens circuit
// -----------------------------------------------------------------------------

func ExampleCircuitBreaker_halfOpenFailure() {
	breaker, _ := New(
		WithFailureThreshold(1),
		WithOpenTimeout(50*time.Millisecond),
	)

	_ = breaker.Execute(context.Background(), func(ctx context.Context) error {
		return errors.New("fail")
	})

	time.Sleep(60 * time.Millisecond)

	// probe fails → circuit reopens
	_ = breaker.Execute(context.Background(), func(ctx context.Context) error {
		return errors.New("still broken")
	})

	err := breaker.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if errors.Is(err, ErrCircuitOpen) {
		fmt.Println("reopened after probe failure")
	}

	// Output:
	// reopened after probe failure
}

// -----------------------------------------------------------------------------
// 5. Panic isolation — breaker remains usable
// -----------------------------------------------------------------------------

func ExampleCircuitBreaker_panicIsolation() {
	breaker, _ := New()

	func() {
		defer func() {
			if recover() != nil {
				fmt.Println("panic captured")
			}
		}()

		_ = breaker.Execute(context.Background(), func(ctx context.Context) error {
			panic("nil pointer")
		})
	}()

	err := breaker.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if err == nil {
		fmt.Println("breaker still usable")
	}

	// Output:
	// panic captured
	// breaker still usable
}

// -----------------------------------------------------------------------------
// 6. Typical HTTP / API client protection
// -----------------------------------------------------------------------------

func ExampleCircuitBreaker_httpClient() {
	breaker, _ := New(
		WithFailureThreshold(3),
		WithOpenTimeout(100*time.Millisecond),
	)

	callAPI := func(ctx context.Context) error {
		return errors.New("503")
	}

	for i := 0; i < 10; i++ {
		err := breaker.Execute(context.Background(), callAPI)
		if errors.Is(err, ErrCircuitOpen) {
			fmt.Println("http call skipped")
			break
		}
	}

	// Output:
	// http call skipped
}
