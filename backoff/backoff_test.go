package backoff

import (
	"math/rand"
	"testing"
	"time"
)

func TestCompute_DefaultInitial(t *testing.T) {
	d := Compute(Config{}, 1, nil)
	if d != 50*time.Millisecond {
		t.Errorf("expected 50ms default, got %v", d)
	}
}

func TestCompute_FirstAttempt(t *testing.T) {
	d := Compute(Config{Initial: 100 * time.Millisecond, Factor: 2.0}, 1, nil)
	if d != 100*time.Millisecond {
		t.Errorf("expected 100ms, got %v", d)
	}
}

func TestCompute_ExponentialGrowth(t *testing.T) {
	cfg := Config{Initial: 10 * time.Millisecond, Factor: 2.0}
	d1 := Compute(cfg, 1, nil)
	d2 := Compute(cfg, 2, nil)
	d3 := Compute(cfg, 3, nil)

	if d1 != 10*time.Millisecond {
		t.Errorf("attempt 1: expected 10ms, got %v", d1)
	}
	if d2 != 20*time.Millisecond {
		t.Errorf("attempt 2: expected 20ms, got %v", d2)
	}
	if d3 != 40*time.Millisecond {
		t.Errorf("attempt 3: expected 40ms, got %v", d3)
	}
}

func TestCompute_MaxClamp(t *testing.T) {
	cfg := Config{Initial: 100 * time.Millisecond, Factor: 2.0, Max: 250 * time.Millisecond}
	d := Compute(cfg, 10, nil) // 100ms * 2^9 = 51200ms — should be clamped
	if d != 250*time.Millisecond {
		t.Errorf("expected clamped to 250ms, got %v", d)
	}
}

func TestCompute_JitterApplied(t *testing.T) {
	rng := rand.New(rand.NewSource(42))
	cfg := Config{Initial: 100 * time.Millisecond, Factor: 2.0, Jitter: 0.5}

	// With jitter, result should vary from the base 100ms
	results := make(map[time.Duration]bool)
	for i := 0; i < 20; i++ {
		d := Compute(cfg, 1, rng)
		results[d] = true
		// Should be within [50ms, 150ms] for jitter 0.5
		if d < 50*time.Millisecond || d > 150*time.Millisecond {
			t.Errorf("jittered delay out of range: %v", d)
		}
	}

	if len(results) < 2 {
		t.Error("jitter should produce varying results")
	}
}

func TestCompute_JitterDisabledOutOfRange(t *testing.T) {
	cfg := Config{Initial: 100 * time.Millisecond, Factor: 2.0, Jitter: 1.5}
	d := Compute(cfg, 1, nil)
	// Jitter >= 1.0 is disabled, so result should be exact
	if d != 100*time.Millisecond {
		t.Errorf("expected exact 100ms with disabled jitter, got %v", d)
	}
}

func TestCompute_NegativeJitter(t *testing.T) {
	cfg := Config{Initial: 100 * time.Millisecond, Factor: 2.0, Jitter: -0.5}
	d := Compute(cfg, 1, nil)
	if d != 100*time.Millisecond {
		t.Errorf("expected exact 100ms with disabled jitter, got %v", d)
	}
}

func TestCompute_FactorDefaultsWhenTooLow(t *testing.T) {
	cfg := Config{Initial: 100 * time.Millisecond, Factor: 0.5}
	d := Compute(cfg, 2, nil)
	// Factor coerced to 2.0 → 100ms * 2^1 = 200ms
	if d != 200*time.Millisecond {
		t.Errorf("expected 200ms with default factor, got %v", d)
	}
}

func TestCompute_AttemptLessThanOne(t *testing.T) {
	cfg := Config{Initial: 100 * time.Millisecond, Factor: 2.0}
	d := Compute(cfg, 0, nil)
	// Should be treated as attempt 1
	if d != 100*time.Millisecond {
		t.Errorf("expected 100ms for attempt 0 (treated as 1), got %v", d)
	}
}

func TestCompute_NilRNG(t *testing.T) {
	cfg := Config{Initial: 100 * time.Millisecond, Factor: 2.0, Jitter: 0.3}
	// Should not panic with nil rng
	d := Compute(cfg, 1, nil)
	if d <= 0 {
		t.Errorf("expected positive delay, got %v", d)
	}
}

func TestClamp(t *testing.T) {
	tests := []struct {
		name     string
		d        time.Duration
		min, max time.Duration
		want     time.Duration
	}{
		{"within range", 100 * time.Millisecond, 50 * time.Millisecond, 200 * time.Millisecond, 100 * time.Millisecond},
		{"below min", 10 * time.Millisecond, 50 * time.Millisecond, 200 * time.Millisecond, 50 * time.Millisecond},
		{"above max", 300 * time.Millisecond, 50 * time.Millisecond, 200 * time.Millisecond, 200 * time.Millisecond},
		{"zero max (no upper bound)", 1 * time.Hour, 0, 0, 1 * time.Hour},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := clamp(tt.d, tt.min, tt.max)
			if got != tt.want {
				t.Errorf("clamp(%v, %v, %v) = %v, want %v", tt.d, tt.min, tt.max, got, tt.want)
			}
		})
	}
}
