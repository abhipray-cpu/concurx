package ratelimiter

import (
	"context"
	"sync"
	"testing"
	"time"
)

// -----------------------------------------------------------------------------
// Race: Concurrent Allow() (TokenBucket smoothing)
// -----------------------------------------------------------------------------

func TestRateLimiter_Race_TokenBucketConcurrent(t *testing.T) {
	rl, err := New(
		WithPolicy(NewTokenBucket(50, 50)),
	)
	if err != nil {
		t.Fatal(err)
	}
	defer rl.Close()

	ctx := context.Background()
	var wg sync.WaitGroup

	for i := 0; i < 100; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = rl.Allow(ctx)
		}()
	}

	wg.Wait()
}

// -----------------------------------------------------------------------------
// Race: Concurrent Execute()
// -----------------------------------------------------------------------------

func TestRateLimiter_Race_ExecuteConcurrent(t *testing.T) {
	rl, err := New(
		WithPolicy(NewTokenBucket(100, 100)),
	)
	if err != nil {
		t.Fatal(err)
	}
	defer rl.Close()

	ctx := context.Background()
	var wg sync.WaitGroup

	for i := 0; i < 100; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = rl.Execute(ctx, func(context.Context) error {
				time.Sleep(time.Microsecond)
				return nil
			})
		}()
	}

	wg.Wait()
}

// -----------------------------------------------------------------------------
// Race: Panic isolation
// -----------------------------------------------------------------------------

func TestRateLimiter_Race_PanicIsolation(t *testing.T) {
	rl, err := New(
		WithPolicy(NewTokenBucket(10, 10)),
	)
	if err != nil {
		t.Fatal(err)
	}
	defer rl.Close()

	ctx := context.Background()
	var wg sync.WaitGroup

	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func(i int) {
			defer wg.Done()
			if i%2 == 0 {
				defer func() { _ = recover() }()
				_ = rl.Execute(ctx, func(context.Context) error {
					panic("boom")
				})
			} else {
				_ = rl.Execute(ctx, func(context.Context) error {
					return nil
				})
			}
		}(i)
	}

	wg.Wait()
}

// -----------------------------------------------------------------------------
// Race: Close while in-flight
// -----------------------------------------------------------------------------

func TestRateLimiter_Race_CloseWhileActive(t *testing.T) {
	rl, err := New(
		WithPolicy(NewTokenBucket(10, 10)),
	)
	if err != nil {
		t.Fatal(err)
	}

	ctx := context.Background()
	var wg sync.WaitGroup

	for i := 0; i < 20; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = rl.Allow(ctx)
		}()
	}

	go rl.Close()

	wg.Wait()
}
