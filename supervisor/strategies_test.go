package supervisor

import (
	"errors"
	"math/rand"
	"testing"
	"time"
)

// ---------------- OneForOne ----------------

func TestOneForOneStrategy(t *testing.T) {
	s := NewOneForOne()

	tests := []struct {
		name    string
		err     error
		attempt int
	}{
		{"nil_error_first", nil, 1},
		{"error_first", errors.New("boom"), 1},
		{"error_later", errors.New("boom"), 5},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			action, delay := s.OnFailure("child", tt.err, tt.attempt)
			if action != RestartOne {
				t.Fatalf("expected RestartOne, got %v", action)
			}
			if delay != 0 {
				t.Fatalf("expected zero delay, got %v", delay)
			}
		})
	}
}

// ---------------- AllForOne ----------------

func TestAllForOneStrategy(t *testing.T) {
	s := NewAllForOne()

	action, delay := s.OnFailure("child", errors.New("fail"), 3)

	if action != RestartAll {
		t.Fatalf("expected RestartAll, got %v", action)
	}
	if delay != 0 {
		t.Fatalf("expected zero delay, got %v", delay)
	}
}

// ---------------- FuncStrategy ----------------

func TestFuncStrategy(t *testing.T) {
	called := false

	fn := FuncStrategy(func(id string, err error, attempt int) (RestartAction, time.Duration) {
		called = true
		if attempt > 1 {
			return StopSupervisor, time.Second
		}
		return RestartOne, 0
	})

	action, delay := fn.OnFailure("child", errors.New("x"), 2)

	if !called {
		t.Fatalf("expected function to be called")
	}
	if action != StopSupervisor {
		t.Fatalf("expected StopSupervisor, got %v", action)
	}
	if delay != time.Second {
		t.Fatalf("unexpected delay %v", delay)
	}
}

func TestFuncStrategy_Nil(t *testing.T) {
	var fn FuncStrategy

	action, delay := fn.OnFailure("child", nil, 1)

	if action != RestartNone {
		t.Fatalf("expected RestartNone, got %v", action)
	}
	if delay != 0 {
		t.Fatalf("expected zero delay, got %v", delay)
	}
}

// ---------------- BackoffOneForOne ----------------

func TestBackoffOneForOne_NoJitter(t *testing.T) {
	b := NewBackoffOneForOne(50*time.Millisecond, time.Second, 2.0, 0)

	tests := []struct {
		attempt int
		want    time.Duration
	}{
		{1, 50 * time.Millisecond},
		{2, 100 * time.Millisecond},
		{3, 200 * time.Millisecond},
		{4, 400 * time.Millisecond},
	}

	for _, tt := range tests {
		t.Run("attempt_"+time.Duration(tt.attempt).String(), func(t *testing.T) {
			action, delay := b.OnFailure("child", errors.New("fail"), tt.attempt)
			if action != RestartOne {
				t.Fatalf("expected RestartOne, got %v", action)
			}
			if delay != tt.want {
				t.Fatalf("expected %v, got %v", tt.want, delay)
			}
		})
	}
}

func TestBackoffOneForOne_MaxClamp(t *testing.T) {
	b := NewBackoffOneForOne(100*time.Millisecond, 250*time.Millisecond, 2, 0)

	_, delay := b.OnFailure("child", errors.New("fail"), 4)
	if delay != 250*time.Millisecond {
		t.Fatalf("expected clamp to max, got %v", delay)
	}
}

func TestBackoffOneForOne_JitterBounds(t *testing.T) {
	rng := rand.New(rand.NewSource(1))
	b := NewBackoffOneForOne(100*time.Millisecond, 0, 2, 0.5).WithRand(rng)

	_, delay := b.OnFailure("child", errors.New("fail"), 2)

	base := 200 * time.Millisecond
	min := time.Duration(float64(base) * 0.5)
	max := time.Duration(float64(base) * 1.5)

	if delay < min || delay > max {
		t.Fatalf("delay %v outside jitter bounds [%v, %v]", delay, min, max)
	}
}

func TestBackoffOneForOne_NonNegative(t *testing.T) {
	b := NewBackoffOneForOne(-1, -1, -1, 1)

	_, delay := b.OnFailure("child", errors.New("fail"), 1)
	if delay < 0 {
		t.Fatalf("expected non-negative delay, got %v", delay)
	}
}
