package throttler

import (
	"context"
	"errors"
	"sync"
	"sync/atomic"
	"testing"
	"time"
)

//
// -----------------------------------------------------------------------------
// BASIC ADMISSION
// -----------------------------------------------------------------------------

func TestThrottler_Allow(t *testing.T) {
	policy := NewSimpleRatePolicy(1)
	th, err := NewThrottler(policy)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	called := false
	err = th.Execute(context.Background(), func(ctx context.Context) error {
		called = true
		return nil
	})

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if !called {
		t.Fatalf("function not executed")
	}
}

func TestThrottler_Reject(t *testing.T) {
	policy := NewSimpleRatePolicy(1)
	th, _ := NewThrottler(policy)

	block := make(chan struct{})

	go func() {
		_ = th.Execute(context.Background(), func(ctx context.Context) error {
			<-block
			return nil
		})
	}()

	time.Sleep(10 * time.Millisecond)

	err := th.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if !errors.Is(err, ErrThrottled) {
		t.Fatalf("expected throttled error")
	}

	close(block)
}

//
// -----------------------------------------------------------------------------
// DELAY SEMANTICS
// -----------------------------------------------------------------------------

type delayOncePolicy struct {
	once int32
}

func (p *delayOncePolicy) Decide(ctx context.Context) (ThrottleDecision, time.Duration) {
	if atomic.CompareAndSwapInt32(&p.once, 0, 1) {
		return ThrottleDelay, 20 * time.Millisecond
	}
	return ThrottleAllow, 0
}

func (p *delayOncePolicy) Observe(success bool, latency time.Duration) {}

func TestThrottler_DelayThenAllow(t *testing.T) {
	th, _ := NewThrottler(&delayOncePolicy{})

	start := time.Now()

	err := th.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if time.Since(start) < 20*time.Millisecond {
		t.Fatalf("delay not respected")
	}
}

//
// -----------------------------------------------------------------------------
// CONTEXT CANCELLATION
// -----------------------------------------------------------------------------

func TestThrottler_ContextCancelDuringDelay(t *testing.T) {
	policy := &delayOncePolicy{}
	th, _ := NewThrottler(policy)

	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	err := th.Execute(ctx, func(ctx context.Context) error {
		return nil
	})

	if !errors.Is(err, context.Canceled) {
		t.Fatalf("expected context cancellation")
	}
}

//
// -----------------------------------------------------------------------------
// PANIC ISOLATION
// -----------------------------------------------------------------------------

func TestThrottler_PanicIsolation(t *testing.T) {
	th, _ := NewThrottler(NewSimpleRatePolicy(1))

	err := th.Execute(context.Background(), func(ctx context.Context) error {
		panic("boom")
	})

	if !errors.Is(err, ErrThrottlePanic) {
		t.Fatalf("expected ErrThrottlePanic, got %v", err)
	}

	// Throttler must still work
	err = th.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if err != nil {
		t.Fatalf("throttler corrupted after panic")
	}
}

func TestThrottler_PolicyPanicDoesNotCrash(t *testing.T) {
	badPolicy := &panicPolicy{}
	th, _ := NewThrottler(badPolicy)

	err := th.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if !errors.Is(err, ErrThrottled) {
		t.Fatalf("expected rejection on policy panic")
	}
}

type panicPolicy struct{}

func (p *panicPolicy) Decide(ctx context.Context) (ThrottleDecision, time.Duration) {
	panic("policy panic")
}
func (p *panicPolicy) Observe(bool, time.Duration) {}

//
// -----------------------------------------------------------------------------
// OBSERVE SEMANTICS
// -----------------------------------------------------------------------------

func TestThrottler_ObserveCalledExactlyOnce(t *testing.T) {
	var observes int32

	policy := &observePolicy{
		onObserve: func() {
			atomic.AddInt32(&observes, 1)
		},
	}

	th, _ := NewThrottler(policy)

	_ = th.Execute(context.Background(), func(ctx context.Context) error {
		return nil
	})

	if atomic.LoadInt32(&observes) != 1 {
		t.Fatalf("observe called %d times", observes)
	}
}

type observePolicy struct {
	onObserve func()
}

func (p *observePolicy) Decide(ctx context.Context) (ThrottleDecision, time.Duration) {
	return ThrottleAllow, 0
}

func (p *observePolicy) Observe(success bool, latency time.Duration) {
	p.onObserve()
}

//
// -----------------------------------------------------------------------------
// CONCURRENCY STRESS
// -----------------------------------------------------------------------------

func TestThrottler_ConcurrentSafety(t *testing.T) {
	policy := NewSimpleRatePolicy(5)
	th, _ := NewThrottler(policy)

	var wg sync.WaitGroup

	for i := 0; i < 100; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = th.Execute(context.Background(), func(ctx context.Context) error {
				time.Sleep(1 * time.Millisecond)
				return nil
			})
		}()
	}

	wg.Wait()
}

//
// -----------------------------------------------------------------------------
// NIL / INVALID INPUTS
// -----------------------------------------------------------------------------

func TestThrottler_InvalidInputs(t *testing.T) {
	_, err := NewThrottler(nil)
	if err == nil {
		t.Fatalf("expected error for nil policy")
	}

	policy := NewSimpleRatePolicy(1)
	th, _ := NewThrottler(policy)

	err = th.Execute(context.Background(), nil)
	if err == nil {
		t.Fatalf("expected error for nil function")
	}
}
