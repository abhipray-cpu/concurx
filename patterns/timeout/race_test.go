package timeout

import (
	"context"
	"sync"
	"testing"
	"time"
)

// -----------------------------------------------------------------------------
// Race 1: Concurrent timeouts
// Invariant:
//   - No data races
//   - No goroutine leaks
//
// -----------------------------------------------------------------------------
func TestTimeout_Race_ConcurrentTimeouts(t *testing.T) {
	var wg sync.WaitGroup

	for i := 0; i < 50; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()

			_ = Timeout(
				context.Background(),
				func(ctx context.Context) error {
					time.Sleep(5 * time.Millisecond)
					return nil
				},
				WithTimeout(1*time.Millisecond),
			)
		}()
	}

	wg.Wait()
}

// -----------------------------------------------------------------------------
// Race 2: Parent cancellation mid-execution
// -----------------------------------------------------------------------------
func TestTimeout_Race_ParentCancel(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())

	go func() {
		time.Sleep(2 * time.Millisecond)
		cancel()
	}()

	_ = Timeout(
		ctx,
		func(ctx context.Context) error {
			time.Sleep(50 * time.Millisecond)
			return nil
		},
		WithTimeout(100*time.Millisecond),
	)
}

// -----------------------------------------------------------------------------
// Race 3: Panic under concurrency
// -----------------------------------------------------------------------------
func TestTimeout_Race_PanicIsolation(t *testing.T) {
	var wg sync.WaitGroup

	for i := 0; i < 20; i++ {
		wg.Add(1)
		go func(i int) {
			defer wg.Done()

			_ = Timeout(
				context.Background(),
				func(ctx context.Context) error {
					if i%3 == 0 {
						panic("boom")
					}
					return nil
				},
				WithTimeout(10*time.Millisecond),
			)
		}(i)
	}

	wg.Wait()
}

// -----------------------------------------------------------------------------
// Race 4: Timeout wrapper reused heavily
// -----------------------------------------------------------------------------
func TestTimeout_Race_ReusedPattern(t *testing.T) {
	fn := func(ctx context.Context) error {
		time.Sleep(1 * time.Millisecond)
		return nil
	}

	var wg sync.WaitGroup

	for i := 0; i < 100; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()

			_ = Timeout(
				context.Background(),
				fn,
				WithTimeout(5*time.Millisecond),
			)
		}()
	}

	wg.Wait()
}
