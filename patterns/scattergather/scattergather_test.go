package scatter

import (
	"context"
	"errors"
	"sync/atomic"
	"testing"
	"time"
)

//
// -----------------------------------------------------------------------------
// POLICY SEMANTICS
// -----------------------------------------------------------------------------

func TestScatterGather_Policies(t *testing.T) {
	tests := []struct {
		name     string
		policy   Policy
		branches []func(context.Context) (int, error)
		wantErr  bool
	}{
		{
			name:   "AllSuccess_AllOK",
			policy: NewAllSuccessPolicy(3),
			branches: []func(context.Context) (int, error){
				ok(1), ok(2), ok(3),
			},
			wantErr: false,
		},
		{
			name:   "AllSuccess_OneFail",
			policy: NewAllSuccessPolicy(3),
			branches: []func(context.Context) (int, error){
				ok(1), fail(), ok(3),
			},
			wantErr: true,
		},
		{
			name:   "FirstSuccess_StopsEarly",
			policy: NewFirstSuccessPolicy(),
			branches: []func(context.Context) (int, error){
				fail(),
				slowOK(50*time.Millisecond, 42),
				slowOK(100*time.Millisecond, 99),
			},
			wantErr: false,
		},
		{
			name:   "MinSuccess_Met",
			policy: NewMinSuccessPolicy(3, 2),
			branches: []func(context.Context) (int, error){
				ok(1), fail(), ok(3),
			},
			wantErr: false,
		},
		{
			name:   "MinSuccess_NotMet",
			policy: NewMinSuccessPolicy(3, 3),
			branches: []func(context.Context) (int, error){
				ok(1), fail(), ok(3),
			},
			wantErr: true,
		},
		{
			name:   "PanicCountsAsFailure",
			policy: NewAllSuccessPolicy(2),
			branches: []func(context.Context) (int, error){
				panicFn(), ok(1),
			},
			wantErr: true,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			_, err := ScatterGather(context.Background(), tt.branches, tt.policy)

			if tt.wantErr && err == nil {
				t.Fatalf("expected error, got nil")
			}
			if !tt.wantErr && err != nil {
				t.Fatalf("unexpected error: %v", err)
			}
		})
	}
}

//
// -----------------------------------------------------------------------------
// CONTEXT CANCELLATION
// -----------------------------------------------------------------------------

func TestScatterGather_ContextCanceledBeforeStart(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	cancel()

	_, err := ScatterGather(
		ctx,
		[]func(context.Context) (int, error){slowOK(50*time.Millisecond, 1)},
		NewAllSuccessPolicy(1),
	)

	if err == nil {
		t.Fatalf("expected context error")
	}
}

func TestScatterGather_ContextCanceledMidExecution(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())

	go func() {
		time.Sleep(30 * time.Millisecond)
		cancel()
	}()

	_, err := ScatterGather(
		ctx,
		[]func(context.Context) (int, error){
			slowOK(100*time.Millisecond, 1),
			slowOK(100*time.Millisecond, 2),
		},
		NewAllSuccessPolicy(2),
	)

	if err == nil {
		t.Fatalf("expected cancellation error")
	}
}

//
// -----------------------------------------------------------------------------
// TIMEOUT SEMANTICS
// -----------------------------------------------------------------------------

func TestScatterGather_Timeout_AllSlow(t *testing.T) {
	start := time.Now()

	_, err := ScatterGather(
		context.Background(),
		[]func(context.Context) (int, error){
			slowOK(200*time.Millisecond, 1),
			slowOK(200*time.Millisecond, 2),
		},
		NewAllSuccessPolicy(2),
		WithTimeout(50*time.Millisecond),
	)

	if err == nil {
		t.Fatalf("expected timeout error")
	}

	if time.Since(start) > 150*time.Millisecond {
		t.Fatalf("timeout did not cancel promptly")
	}
}

func TestScatterGather_Timeout_PartialCompletion(t *testing.T) {
	_, err := ScatterGather(
		context.Background(),
		[]func(context.Context) (int, error){
			ok(1),
			slowOK(200*time.Millisecond, 2),
		},
		NewAllSuccessPolicy(2),
		WithTimeout(50*time.Millisecond),
	)

	if err == nil {
		t.Fatalf("expected timeout error")
	}
}

//
// -----------------------------------------------------------------------------
// CONCURRENCY LIMITS (FIXED — RACE SAFE)
// -----------------------------------------------------------------------------

func TestScatterGather_ConcurrencyLimit(t *testing.T) {
	var running int32
	var maxRunning int32

	branches := make([]func(context.Context) (int, error), 10)
	for i := range branches {
		branches[i] = func(ctx context.Context) (int, error) {
			cur := atomic.AddInt32(&running, 1)

			// ATOMIC max update (CAS loop)
			for {
				prev := atomic.LoadInt32(&maxRunning)
				if cur <= prev {
					break
				}
				if atomic.CompareAndSwapInt32(&maxRunning, prev, cur) {
					break
				}
			}

			time.Sleep(20 * time.Millisecond)
			atomic.AddInt32(&running, -1)
			return 1, nil
		}
	}

	_, err := ScatterGather(
		context.Background(),
		branches,
		NewAllSuccessPolicy(len(branches)),
		WithConcurrency(3),
	)

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if atomic.LoadInt32(&maxRunning) > 3 {
		t.Fatalf("concurrency exceeded limit: %d", maxRunning)
	}
}

//
// -----------------------------------------------------------------------------
// EDGE CASES
// -----------------------------------------------------------------------------

func TestScatterGather_NoBranches(t *testing.T) {
	_, err := ScatterGather[int](
		context.Background(),
		nil,
		NewAllSuccessPolicy(0),
	)
	if err == nil {
		t.Fatalf("expected error for no branches")
	}
}

func TestScatterGather_NilPolicyDefaults(t *testing.T) {
	_, err := ScatterGather(
		context.Background(),
		[]func(context.Context) (int, error){ok(1)},
		nil,
	)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
}

//
// -----------------------------------------------------------------------------
// HELPERS
// -----------------------------------------------------------------------------

func ok(v int) func(context.Context) (int, error) {
	return func(ctx context.Context) (int, error) {
		return v, nil
	}
}

func slowOK(d time.Duration, v int) func(context.Context) (int, error) {
	return func(ctx context.Context) (int, error) {
		select {
		case <-time.After(d):
			return v, nil
		case <-ctx.Done():
			return 0, ctx.Err()
		}
	}
}

func fail() func(context.Context) (int, error) {
	return func(ctx context.Context) (int, error) {
		return 0, errors.New("fail")
	}
}

func panicFn() func(context.Context) (int, error) {
	return func(ctx context.Context) (int, error) {
		panic("boom")
	}
}
