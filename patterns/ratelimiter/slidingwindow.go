package ratelimiter

import (
	"context"
	"sync"
	"time"
)

// SlidingWindow implements a sliding-window rate limiting [Policy].
type SlidingWindow struct {
	mu     sync.Mutex
	limit  int
	window time.Duration
	hits   []time.Time
}

// NewSlidingWindow creates a sliding-window policy allowing limit requests per window.
func NewSlidingWindow(limit int, window time.Duration) *SlidingWindow {
	return &SlidingWindow{
		limit:  limit,
		window: window,
	}
}

// Allow evaluates whether a request should be allowed or delayed.
func (s *SlidingWindow) Allow(_ context.Context, now time.Time) (Decision, time.Duration) {
	s.mu.Lock()
	defer s.mu.Unlock()

	cutoff := now.Add(-s.window)
	i := 0
	for _, t := range s.hits {
		if t.After(cutoff) {
			s.hits[i] = t
			i++
		}
	}
	s.hits = s.hits[:i]

	if len(s.hits) < s.limit {
		s.hits = append(s.hits, now)
		return Allow, 0
	}

	wait := s.hits[0].Add(s.window).Sub(now)
	return Delay, wait
}
