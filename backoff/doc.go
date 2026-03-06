// Package backoff provides reusable exponential backoff computation.
//
// This package consolidates backoff logic used across the library
// (supervisor strategies, retry policies). It is intentionally minimal:
// one exported function, no goroutines, no state.
//
//	delay := backoff.Compute(backoff.Config{
//	    Initial: 100 * time.Millisecond,
//	    Max:     5 * time.Second,
//	    Factor:  2.0,
//	    Jitter:  0.2,
//	}, attempt, nil)
package backoff
