// Package backoff provides reusable exponential backoff computation.
//
// This package consolidates backoff logic used across the library:
//   - supervisor strategies (BackoffOneForOne, per-child backoff)
//   - retry policies (ExponentialBackoff)
//
// It is intentionally minimal: one exported function, no goroutines, no state.
package backoff

import (
	"math"
	"math/rand"
	"time"
)

// Config describes the parameters for exponential backoff computation.
type Config struct {
	// Initial is the base delay for the first attempt.
	// Defaults to 50ms if <= 0.
	Initial time.Duration

	// Max caps the maximum delay. Zero means no upper bound.
	Max time.Duration

	// Factor controls exponential growth between attempts.
	// Values <= 1 are coerced to 2.0.
	Factor float64

	// Jitter applies randomization to the delay.
	// Expressed as a fraction: 0.5 means plus/minus that percentage.
	// Values outside [0, 1) disable jitter.
	Jitter float64
}

// Compute calculates the backoff delay for the given attempt (1-based).
//
// The formula is:
//
//	delay = Initial * Factor^(attempt-1)
//
// The result is clamped to [0, Max] and optionally jittered.
// Parameters are defensively normalized so invalid inputs never panic.
//
// If rng is nil, the global math/rand source is used for jitter.
func Compute(cfg Config, attempt int, rng *rand.Rand) time.Duration {
	if cfg.Initial <= 0 {
		cfg.Initial = 50 * time.Millisecond
	}
	if cfg.Factor <= 1.0 {
		cfg.Factor = 2.0
	}
	if cfg.Jitter < 0.0 || cfg.Jitter >= 1.0 {
		cfg.Jitter = 0.0
	}
	if attempt < 1 {
		attempt = 1
	}

	delay := time.Duration(float64(cfg.Initial) * math.Pow(cfg.Factor, float64(attempt-1)))

	if cfg.Max > 0 && delay > cfg.Max {
		delay = cfg.Max
	}

	if cfg.Jitter > 0 {
		r := rand.Float64() //nolint:gosec // jitter does not need crypto-strength randomness
		if rng != nil {
			r = rng.Float64()
		}
		delay = time.Duration(float64(delay) * (1 + ((r*2 - 1) * cfg.Jitter)))
		if delay < 0 {
			delay = 0
		}
	}

	return clamp(delay, 0, cfg.Max)
}

// clamp constrains d to the interval [lower, upper].
// If upper is 0, no upper bound is enforced.
func clamp(d, lower, upper time.Duration) time.Duration {
	if d < lower {
		return lower
	}
	if upper > 0 && d > upper {
		return upper
	}
	return d
}
