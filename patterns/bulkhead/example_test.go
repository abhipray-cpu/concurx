package bulkhead

import (
	"context"
	"fmt"
	"sync/atomic"
	"testing"
	"time"
)

// -----------------------------------------------------------------------------
// Example 1: Protecting a Database Connection Pool
// -----------------------------------------------------------------------------
func TestBulkhead_DatabaseProtection(t *testing.T) {
	bh, _ := NewBulkhead(
		WithCapacity(2),
		WithQueueSize(1),
	)

	var active int32
	var maxActive int32
	var rejected int32

	run := func() {
		err := bh.Execute(context.Background(), func(ctx context.Context) error {
			cur := atomic.AddInt32(&active, 1)

			// CAS loop to update maxActive safely
			for {
				prev := atomic.LoadInt32(&maxActive)
				if cur <= prev {
					break
				}
				if atomic.CompareAndSwapInt32(&maxActive, prev, cur) {
					break
				}
			}

			time.Sleep(20 * time.Millisecond)
			atomic.AddInt32(&active, -1)
			return nil
		})

		if err != nil {
			atomic.AddInt32(&rejected, 1)
		}
	}

	for i := 0; i < 4; i++ {
		go run()
	}

	time.Sleep(200 * time.Millisecond)

	if atomic.LoadInt32(&maxActive) > 2 {
		t.Fatalf("capacity violated: %d", maxActive)
	}

	if atomic.LoadInt32(&rejected) == 0 {
		t.Fatalf("expected at least one rejection")
	}
}

// -----------------------------------------------------------------------------
// Example 2: Fail-Fast Protection for External API
// -----------------------------------------------------------------------------
func ExampleBulkhead_failFastAPI() {
	bh, _ := NewBulkhead(
		WithCapacity(1),
		WithFailFast(),
	)

	block := make(chan struct{})

	go func() {
		_ = bh.Execute(context.Background(), func(ctx context.Context) error {
			<-block
			return nil
		})
	}()

	time.Sleep(10 * time.Millisecond)

	err := bh.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if err != nil {
		fmt.Println("fast reject")
	}

	close(block)

	// Output:
	// fast reject
}

// -----------------------------------------------------------------------------
// Example 3: Timeout Prevents Request Pile-Up
// -----------------------------------------------------------------------------
func ExampleBulkhead_timeout() {
	bh, _ := NewBulkhead(
		WithCapacity(1),
		WithTimeout(20*time.Millisecond),
	)

	block := make(chan struct{})

	go func() {
		_ = bh.Execute(context.Background(), func(ctx context.Context) error {
			<-block
			return nil
		})
	}()

	time.Sleep(5 * time.Millisecond)

	err := bh.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if err != nil {
		fmt.Println("timed out")
	}

	close(block)

	// Output:
	// timed out
}

// -----------------------------------------------------------------------------
// Example 4: Context Cancellation Propagates Immediately
// -----------------------------------------------------------------------------
func ExampleBulkhead_contextCancel() {
	bh, _ := NewBulkhead(
		WithCapacity(1),
	)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := bh.Execute(ctx, func(ctx context.Context) error {
		return nil
	})

	if err != nil {
		fmt.Println("canceled")
	}

	// Output:
	// canceled
}

// -----------------------------------------------------------------------------
// Example 5: Panic Isolation (System Safety)
// -----------------------------------------------------------------------------
func ExampleBulkhead_panicIsolation() {
	bh, _ := NewBulkhead(
		WithCapacity(1),
	)

	err := bh.Execute(context.Background(), func(ctx context.Context) error {
		panic("boom")
	})

	if err != nil {
		fmt.Println("panic isolated")
	}

	err = bh.Execute(context.Background(), func(ctx context.Context) error {
		fmt.Println("still works")
		return nil
	})

	if err == nil {
		fmt.Println("recovered")
	}

	// Output:
	// panic isolated
	// still works
	// recovered
}
