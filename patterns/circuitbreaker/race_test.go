package breaker

import (
	"context"
	"errors"
	"sync"
	"testing"
	"time"
)

// -----------------------------------------------------------------------------
// Race test: concurrent failures and fast-fail
// -----------------------------------------------------------------------------

func TestCircuitBreaker_Race_ConcurrentFailures(t *testing.T) {
	breaker, err := New(
		WithFailureThreshold(5),
		WithOpenTimeout(50*time.Millisecond),
	)
	if err != nil {
		t.Fatal(err)
	}

	var wg sync.WaitGroup

	failFn := func(ctx context.Context) error {
		return errors.New("downstream failure")
	}

	for i := 0; i < 50; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = breaker.Execute(context.Background(), failFn)
		}()
	}

	wg.Wait()
}

// -----------------------------------------------------------------------------
// Race test: mixed success + failure + panic
// -----------------------------------------------------------------------------

func TestCircuitBreaker_Race_MixedExecution(t *testing.T) {
	breaker, err := New(
		WithFailureThreshold(3),
		WithSuccessThreshold(2),
		WithOpenTimeout(30*time.Millisecond),
	)
	if err != nil {
		t.Fatal(err)
	}

	var wg sync.WaitGroup

	success := func(ctx context.Context) error {
		return nil
	}

	fail := func(ctx context.Context) error {
		return errors.New("fail")
	}

	panicFn := func(ctx context.Context) error {
		panic("boom")
	}

	for i := 0; i < 100; i++ {
		wg.Add(1)
		go func(i int) {
			defer wg.Done()

			switch i % 3 {
			case 0:
				_ = breaker.Execute(context.Background(), success)
			case 1:
				_ = breaker.Execute(context.Background(), fail)
			case 2:
				func() {
					defer func() { _ = recover() }()
					_ = breaker.Execute(context.Background(), panicFn)
				}()
			}
		}(i)
	}

	wg.Wait()
}

// -----------------------------------------------------------------------------
// Race test: OPEN → HALF-OPEN → CLOSED transitions under concurrency
// -----------------------------------------------------------------------------

func TestCircuitBreaker_Race_StateTransitions(t *testing.T) {
	breaker, err := New(
		WithFailureThreshold(1),
		WithSuccessThreshold(1),
		WithOpenTimeout(20*time.Millisecond),
	)
	if err != nil {
		t.Fatal(err)
	}

	// force OPEN
	_ = breaker.Execute(context.Background(), func(ctx context.Context) error {
		return errors.New("fail")
	})

	time.Sleep(25 * time.Millisecond)

	var wg sync.WaitGroup

	for i := 0; i < 20; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = breaker.Execute(context.Background(), func(ctx context.Context) error {
				return nil
			})
		}()
	}

	wg.Wait()
}

// -----------------------------------------------------------------------------
// Race test: breaker remains usable after panic storms
// -----------------------------------------------------------------------------

func TestCircuitBreaker_Race_PanicStorm(t *testing.T) {
	breaker, err := New(
		WithFailureThreshold(5),
		WithOpenTimeout(30*time.Millisecond),
	)
	if err != nil {
		t.Fatal(err)
	}

	var wg sync.WaitGroup

	panicFn := func(ctx context.Context) error {
		panic("boom")
	}

	for i := 0; i < 20; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			defer func() { _ = recover() }()
			_ = breaker.Execute(context.Background(), panicFn)
		}()
	}

	wg.Wait()

	// breaker MUST be open now
	err = breaker.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})
	if !errors.Is(err, ErrCircuitOpen) {
		t.Fatalf("expected circuit open, got %v", err)
	}

	// wait for recovery window
	time.Sleep(40 * time.Millisecond)

	// breaker must recover
	err = breaker.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})
	if err != nil {
		t.Fatalf("breaker did not recover after panic storm: %v", err)
	}
}
