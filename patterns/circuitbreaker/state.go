package breaker

import (
	"sync"
	"time"
)

// State represents the current state of a circuit breaker.
type State int

// Circuit breaker states.
const (
	Closed   State = iota // accepting requests
	Open                  // rejecting requests
	HalfOpen              // probing for recovery
)

type stateMachine struct {
	mu sync.Mutex

	state State

	failures int
	success  int

	openedAt time.Time
	opts     Options
}

func newStateMachine(o Options) *stateMachine {
	return &stateMachine{
		state: Closed,
		opts:  o,
	}
}

func (s *stateMachine) allow() bool {
	s.mu.Lock()
	defer s.mu.Unlock()

	switch s.state {

	case Closed:
		return true

	case Open:
		if time.Since(s.openedAt) >= s.opts.OpenTimeout {
			s.state = HalfOpen
			s.success = 0
			s.opts.Metrics.OnHalfOpen()
			return true
		}
		return false

	case HalfOpen:
		return true
	}

	return false
}

func (s *stateMachine) onSuccess() {
	s.mu.Lock()
	defer s.mu.Unlock()

	switch s.state {

	case Closed:
		s.failures = 0

	case Open:
		// no-op: successes during open state are unexpected

	case HalfOpen:
		s.success++
		if s.success >= s.opts.SuccessThreshold {
			s.state = Closed
			s.failures = 0
			s.opts.Metrics.OnClose()
		}
	}
}

func (s *stateMachine) onFailure() {
	s.mu.Lock()
	defer s.mu.Unlock()

	switch s.state {

	case Closed:
		s.failures++
		if s.failures >= s.opts.FailureThreshold {
			s.state = Open
			s.openedAt = time.Now()
			s.opts.Metrics.OnOpen()
		}

	case Open:
		// no-op: already open

	case HalfOpen:
		s.state = Open
		s.openedAt = time.Now()
		s.opts.Metrics.OnOpen()
	}
}
