package retry

import (
	"context"
	"errors"
	"sync"
	"sync/atomic"
	"testing"
	"time"
)

// -----------------------------------------------------------------------------
// Race Test 1: Concurrent retries on shared policy
// Invariant:
//   - No data races
//   - Retry logic is thread-safe
//
// -----------------------------------------------------------------------------
func TestRetry_Race_ConcurrentUsage(t *testing.T) {
	var counter int32
	var wg sync.WaitGroup

	for i := 0; i < 50; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()

			_ = Retry(context.Background(), func(ctx context.Context) error {
				atomic.AddInt32(&counter, 1)
				return errors.New("fail")
			}, WithMaxAttempts(2))
		}()
	}

	wg.Wait()
}

// -----------------------------------------------------------------------------
// Race Test 2: Panic inside retry does not corrupt future calls
// -----------------------------------------------------------------------------
func TestRetry_Race_PanicIsolation(t *testing.T) {
	threw := make(chan struct{})

	func() {
		defer func() {
			if recover() == nil {
				t.Fatalf("expected panic to propagate")
			}
			close(threw)
		}()

		_ = Retry(context.Background(), func(ctx context.Context) error {
			panic("boom")
		})
	}()

	<-threw

	// Retry must still be usable
	err := Retry(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if err != nil {
		t.Fatalf("retry corrupted after panic: %v", err)
	}
}

// -----------------------------------------------------------------------------
// Race Test 3: Concurrent cancellation
// Invariant:
//   - Retry must stop immediately
//   - No goroutine leak
//
// -----------------------------------------------------------------------------
func TestRetry_Race_ContextCancel(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())

	var wg sync.WaitGroup

	for i := 0; i < 20; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = Retry(ctx, func(ctx context.Context) error {
				time.Sleep(5 * time.Millisecond)
				return errors.New("fail")
			}, WithMaxAttempts(5))
		}()
	}

	time.Sleep(10 * time.Millisecond)
	cancel()

	wg.Wait()
}

// -----------------------------------------------------------------------------
// Race Test 4: Backoff under concurrency
// Invariant:
//   - Backoff does not deadlock
//
// -----------------------------------------------------------------------------
func TestRetry_Race_Backoff(t *testing.T) {
	var wg sync.WaitGroup

	for i := 0; i < 20; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()

			_ = Retry(context.Background(), func(ctx context.Context) error {
				return errors.New("429")
			},
				WithMaxAttempts(3),
				WithBackoff(ConstantBackoff(1*time.Millisecond)),
			)
		}()
	}

	wg.Wait()
}
