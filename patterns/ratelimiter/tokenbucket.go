package ratelimiter

import (
	"context"
	"sync"
	"time"
)

// TokenBucket implements a token-bucket rate limiting [Policy].
type TokenBucket struct {
	mu     sync.Mutex
	rate   float64 // tokens per second
	burst  float64 // max tokens
	tokens float64
	last   time.Time
}

// NewTokenBucket creates a token bucket limiter.
// capacity = max burst size
// refillEvery = duration to add 1 token
func NewTokenBucket(capacity int, refillEvery time.Duration) *TokenBucket {
	if capacity <= 0 {
		panic("token bucket capacity must be > 0")
	}
	if refillEvery <= 0 {
		panic("token bucket refillEvery must be > 0")
	}

	now := time.Now()

	return &TokenBucket{
		rate:   1 / refillEvery.Seconds(), // tokens per second
		burst:  float64(capacity),
		tokens: float64(capacity),
		last:   now,
	}
}

// Allow evaluates whether a request should be allowed or delayed.
func (t *TokenBucket) Allow(
	_ context.Context,
	now time.Time,
) (Decision, time.Duration) {

	t.mu.Lock()
	defer t.mu.Unlock()

	elapsed := now.Sub(t.last).Seconds()
	if elapsed > 0 {
		t.tokens += elapsed * t.rate
		if t.tokens > t.burst {
			t.tokens = t.burst
		}
		t.last = now
	}

	if t.tokens >= 1 {
		t.tokens--
		return Allow, 0
	}

	// Calculate wait time until next token is available
	waitSeconds := (1 - t.tokens) / t.rate
	wait := time.Duration(waitSeconds * float64(time.Second))

	return Delay, wait
}
