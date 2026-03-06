package supervisor

import (
	"context"
	"fmt"
	"math/rand"
	"sync"
	"time"

	"github.com/abhipray-cpu/concurx/backoff"
	"github.com/abhipray-cpu/concurx/core"
)

// Supervisor manages the lifecycle of a set of long-running child processes.
//
// It implements an Erlang-style supervision model with the following guarantees:
//   - deterministic restarts
//   - serialized failure handling
//   - race-safe Start / Stop / Add / Wait
//   - idempotent shutdown
//
// A Supervisor is intended to live for the duration of a subsystem and
// must be explicitly started before children begin execution.
type Supervisor struct {
	// mu protects all mutable supervisor state:
	// children, info, ctx, cancel, and stopped.
	mu sync.Mutex

	// wgMu serializes wg.Add against wg.Wait.
	// This avoids the classic race where a goroutine is added
	// while another goroutine is already waiting.
	wgMu sync.Mutex

	// immutable options resolved at construction time
	opts *options

	// registered child specifications (immutable after Add)
	children map[string]ChildSpec

	// runtime metadata for each child
	info map[string]*ChildInfo

	// supervisor context used to control child lifetimes
	parentCtx context.Context
	ctx       context.Context
	cancel    context.CancelFunc

	// tracks all launched child goroutines
	wg sync.WaitGroup

	// eventDone is closed when the eventLoop goroutine exits.
	// It is separate from wg because RestartAll calls wg.Wait()
	// from inside the event loop — including the loop in wg
	// would deadlock.
	eventDone chan struct{}

	// channel used to serialize child failure handling
	failCh chan FailureEvent

	// indicates whether Stop() has been invoked
	stopped bool

	// observability hooks and integrations
	logger  core.Logger
	metrics core.Metrics
	hooks   Hooks

	// random source for backoff jitter
	rng *rand.Rand
}

// New constructs a Supervisor with the provided options.
// The supervisor is inert until Start is called.
func New(opts ...Option) *Supervisor {
	o := defaultOptions()
	for _, fn := range opts {
		fn(o)
	}

	return &Supervisor{
		opts:     o,
		children: make(map[string]ChildSpec),
		info:     make(map[string]*ChildInfo),
		failCh:   make(chan FailureEvent, 128),
		logger:   safeLogger(o.logger),
		metrics:  safeMetrics(o.metrics),
		hooks:    o.hooks.Safe(),
		rng:      rand.New(rand.NewSource(time.Now().UnixNano())), //nolint:gosec // backoff jitter does not need crypto-strength randomness
	}
}

// ----------------------------------------------------
// Child registration
// ----------------------------------------------------

// Add registers a child with the supervisor.
//
// This does not start execution; children begin running only
// after Start is called.
func (s *Supervisor) Add(spec ChildSpec) error {
	if spec.ID == "" || spec.Run == nil {
		return ErrInvalidSpec
	}

	s.mu.Lock()
	defer s.mu.Unlock()

	if _, ok := s.children[spec.ID]; ok {
		return ErrChildExists
	}

	// defensively copy labels to avoid external mutation
	labels := map[string]string{}
	for k, v := range spec.Labels {
		labels[k] = v
	}
	spec.Labels = labels

	// default restart mode
	if spec.Mode == 0 {
		spec.Mode = RestartModePermanent
	}

	s.children[spec.ID] = spec
	s.info[spec.ID] = &ChildInfo{ID: spec.ID}
	return nil
}

// ----------------------------------------------------
// Lifecycle
// ----------------------------------------------------

// Start activates the supervisor and launches all registered children.
func (s *Supervisor) Start(ctx context.Context) error {
	s.mu.Lock()
	if s.ctx != nil {
		s.mu.Unlock()
		return ErrAlreadyRunning
	}

	s.parentCtx = ctx
	s.ctx, s.cancel = context.WithCancel(ctx)
	s.stopped = false
	s.wg = sync.WaitGroup{}
	s.eventDone = make(chan struct{})
	s.mu.Unlock()

	// start failure handling loop (tracked separately from wg because
	// RestartAll calls wg.Wait() from inside the event loop)
	go func() {
		defer close(s.eventDone)
		s.eventLoop()
	}()

	// launch all registered children
	s.mu.Lock()
	for _, spec := range s.children {
		s.launchChild(spec)
	}
	s.mu.Unlock()

	return nil
}

// Stop initiates a graceful shutdown.
//
// It is safe to call Stop multiple times.
func (s *Supervisor) Stop(ctx context.Context) error {
	s.mu.Lock()
	if !s.stopped {
		s.stopped = true
		if s.cancel != nil {
			s.cancel()
		}
	}
	s.mu.Unlock()

	done := make(chan struct{})
	go func() {
		s.Wait()
		close(done)
	}()

	select {
	case <-done:
		return nil
	case <-ctx.Done():
		return ctx.Err()
	}
}

// Wait blocks until all child goroutines and the event loop have exited.
//
// It is safe to call concurrently with Add and Stop.
func (s *Supervisor) Wait() {
	// prevent Add() racing with Wait() — barrier pattern
	s.wgMu.Lock()
	s.wgMu.Unlock() //nolint:staticcheck,gocritic // intentional barrier: lock+unlock serializes with Add

	s.wg.Wait()

	// Also wait for the event loop goroutine which is tracked
	// separately to avoid deadlock in RestartAll.
	if s.eventDone != nil {
		<-s.eventDone
	}
}

// ----------------------------------------------------
// Child execution
// ----------------------------------------------------

// launchChild schedules a child goroutine if the supervisor
// has not been stopped.
func (s *Supervisor) launchChild(spec ChildSpec) {
	s.wgMu.Lock()
	if s.stopped {
		s.wgMu.Unlock()
		return
	}
	s.wg.Add(1)
	s.wgMu.Unlock()

	go func() {
		defer s.wg.Done()
		s.runChildOnce(spec)
	}()
}

// runChildOnce executes a child and manages its restart loop.
func (s *Supervisor) runChildOnce(spec ChildSpec) {
	id := spec.ID

	for {
		select {
		case <-s.ctx.Done():
			return
		default:
		}

		var stopped bool
		s.withInfo(id, func(ci *ChildInfo) {
			stopped = ci.Stopped
			if !stopped {
				ci.Running = true
				ci.LastStart = time.Now()
			}
		})
		if stopped {
			return
		}

		if spec.Announce {
			s.hooks.OnChildStart(id)
		}

		childCtx, cancel := context.WithCancel(s.ctx)
		err := s.opts.runner(childCtx, spec)
		cancel()

		s.withInfo(id, func(ci *ChildInfo) {
			ci.Running = false
			ci.LastExit = time.Now()
			if err != nil {
				ci.LastError = err
				ci.RecentFailures = append(ci.RecentFailures, time.Now())
			}
		})

		// temporary children never restart
		if spec.Mode == RestartModeTemporary {
			s.withInfo(id, func(ci *ChildInfo) {
				ci.Stopped = true
			})
			s.hooks.OnChildStop(id, err)
			return
		}

		// notify failure handler
		select {
		case s.failCh <- FailureEvent{
			ChildID: id,
			Err:     err,
			When:    time.Now(),
		}:
		case <-s.ctx.Done():
			return
		}

		// small delay to avoid tight crash loops
		select {
		case <-time.After(10 * time.Millisecond):
		case <-s.ctx.Done():
			return
		}
	}
}

// ----------------------------------------------------
// Failure handling
// ----------------------------------------------------

// eventLoop serializes all failure handling decisions.
func (s *Supervisor) eventLoop() {
	for {
		select {
		case ev := <-s.failCh:
			s.handleFailure(ev)
		case <-s.ctx.Done():
			s.hooks.OnSupervisorStop(s.ctx.Err())
			return
		}
	}
}

// handleFailure applies the configured restart strategy.
func (s *Supervisor) handleFailure(ev FailureEvent) {
	spec, ok := s.getSpec(ev.ChildID)
	if !ok {
		return
	}

	var attempt int
	s.withInfo(ev.ChildID, func(ci *ChildInfo) {
		attempt = ci.Restarts + 1
	})

	strategy := s.opts.strategy
	if strategy == nil {
		strategy = NewOneForOne()
	}

	action, stratDelay := strategy.OnFailure(ev.ChildID, ev.Err, attempt)

	delay := stratDelay
	if delay <= 0 {
		delay = computeBackoffForSpec(spec, attempt, s.rng)
	}

	switch action {
	case RestartNone:
		s.withInfo(ev.ChildID, func(ci *ChildInfo) {
			ci.Stopped = true
			ci.LastError = ev.Err
		})
		s.hooks.OnChildStop(ev.ChildID, ev.Err)

	case RestartOne:
		var restarts int
		s.withInfo(ev.ChildID, func(ci *ChildInfo) {
			ci.Restarts++
			restarts = ci.Restarts
			ci.LastError = ev.Err
		})
		s.hooks.OnChildRestart(ev.ChildID, restarts, ev.Err)

		if delay > 0 {
			select {
			case <-time.After(delay):
			case <-s.ctx.Done():
			}
		}

	case RestartAll:
		// Stop all children by canceling context, then relaunch all.
		s.mu.Lock()
		prevCancel := s.cancel
		specs := make([]ChildSpec, 0, len(s.children))
		for _, spec := range s.children {
			specs = append(specs, spec)
		}
		s.mu.Unlock()

		// Cancel current generation to stop all running children.
		prevCancel()

		// Wait for all current children to exit.
		s.wg.Wait()

		// Check if supervisor was stopped during the wait.
		s.mu.Lock()
		if s.stopped {
			s.mu.Unlock()
			return
		}

		// Create a new context for the next generation
		// derived from the original parent context.
		s.ctx, s.cancel = context.WithCancel(s.parentCtx)

		// Reset child info for all children.
		for _, spec := range specs {
			s.info[spec.ID] = &ChildInfo{ID: spec.ID}
		}
		s.wg = sync.WaitGroup{}
		s.mu.Unlock()

		s.hooks.OnChildRestart(ev.ChildID, 0, ev.Err)

		if delay > 0 {
			select {
			case <-time.After(delay):
			case <-s.ctx.Done():
				return
			}
		}

		// Relaunch all children.
		s.mu.Lock()
		for _, spec := range specs {
			s.launchChild(spec)
		}
		s.mu.Unlock()

	case StopSupervisor:
		s.mu.Lock()
		if !s.stopped {
			s.stopped = true
			if s.cancel != nil {
				s.cancel()
			}
		}
		s.mu.Unlock()
		s.hooks.OnSupervisorStop(ev.Err)
	}
}

// ----------------------------------------------------
// Helpers
// ----------------------------------------------------

func (s *Supervisor) withInfo(id string, fn func(ci *ChildInfo)) {
	s.mu.Lock()
	defer s.mu.Unlock()

	ci, ok := s.info[id]
	if !ok {
		ci = &ChildInfo{ID: id}
		s.info[id] = ci
	}
	fn(ci)
}

func (s *Supervisor) getSpec(id string) (ChildSpec, bool) {
	s.mu.Lock()
	defer s.mu.Unlock()
	spec, ok := s.children[id]
	return spec, ok
}

// ListChildren returns the IDs of all registered children.
func (s *Supervisor) ListChildren() []string {
	s.mu.Lock()
	defer s.mu.Unlock()

	out := make([]string, 0, len(s.children))
	for id := range s.children {
		out = append(out, id)
	}
	return out
}

// Info returns a snapshot of the child's runtime information.
// Returns nil if the child does not exist.
func (s *Supervisor) Info(id string) *ChildInfo {
	s.mu.Lock()
	defer s.mu.Unlock()

	if ci, ok := s.info[id]; ok {
		snapshot := *ci
		return &snapshot
	}
	return nil
}

// AddAndStart registers and immediately launches a child.
// The supervisor must already be running.
func (s *Supervisor) AddAndStart(spec ChildSpec) error {
	if spec.ID == "" || spec.Run == nil {
		return ErrInvalidSpec
	}

	s.mu.Lock()
	if s.ctx == nil {
		s.mu.Unlock()
		return ErrNotRunning
	}

	if _, ok := s.children[spec.ID]; ok {
		s.mu.Unlock()
		return ErrChildExists
	}

	labels := map[string]string{}
	for k, v := range spec.Labels {
		labels[k] = v
	}
	spec.Labels = labels

	if spec.Mode == 0 {
		spec.Mode = RestartModePermanent
	}

	s.children[spec.ID] = spec
	s.info[spec.ID] = &ChildInfo{ID: spec.ID}
	s.mu.Unlock()

	s.launchChild(spec)
	return nil
}

// String returns a short debug representation.
func (s *Supervisor) String() string {
	return fmt.Sprintf("Supervisor{children=%d}", len(s.children))
}

// ----------------------------------------------------
// Backoff
// ----------------------------------------------------

// computeBackoffForSpec applies per-child backoff configuration.
func computeBackoffForSpec(spec ChildSpec, attempt int, rng *rand.Rand) time.Duration {
	return backoff.Compute(
		backoff.Config{
			Initial: spec.Backoff.Initial,
			Max:     spec.Backoff.Max,
			Factor:  spec.Backoff.Multiplier,
			Jitter:  spec.Backoff.Jitter,
		},
		attempt,
		rng,
	)
}
