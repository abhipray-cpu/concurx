package ratelimiter

import (
	"context"
	"sync"
	"time"
)

// FixedWindow implements a fixed-window rate limiting [Policy].
type FixedWindow struct {
	limit     int
	window    time.Duration
	count     int
	windowEnd time.Time
	mu        sync.Mutex
}

// NewFixedWindow creates a fixed-window policy allowing limit requests per window.
func NewFixedWindow(limit int, window time.Duration) *FixedWindow {
	now := time.Now()
	return &FixedWindow{
		limit:     limit,
		window:    window,
		count:     0,
		windowEnd: now.Add(window),
	}
}

// Decide evaluates whether a request should be allowed, rejected, or delayed.
func (f *FixedWindow) Decide(
	ctx context.Context,
) (Decision, time.Duration) {

	f.mu.Lock()
	defer f.mu.Unlock()

	now := time.Now()

	// Reset window
	if now.After(f.windowEnd) {
		f.count = 0
		f.windowEnd = now.Add(f.window)
	}

	if f.count < f.limit {
		f.count++
		return Allow, 0
	}

	// Window exhausted → must wait
	wait := time.Until(f.windowEnd)
	if wait < 0 {
		wait = 0
	}

	return Delay, wait
}

// Observe is called after execution (no-op for fixed window).
func (f *FixedWindow) Observe(success bool, _ time.Duration) {
	// No adaptive behavior for fixed window
}
