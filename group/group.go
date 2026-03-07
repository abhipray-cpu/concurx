package group

import (
	"context"
	"errors"
	"fmt"
	"sync"
	"sync/atomic"
	"time"

	"github.com/abhipray-cpu/concurx/core"
)

// ErrGroup defines the public contract for structured goroutine execution.
//
// Implementations must guarantee:
//   - accepted goroutines run exactly once
//   - deterministic error propagation
//   - race-safe Go / TryGo / Wait interaction
type ErrGroup interface {
	Go(fn func(ctx context.Context) error)
	TryGo(fn func(ctx context.Context) error) bool
	BlockingGo(fn func(ctx context.Context) error) error
	Wait() error
}

// groupImpl is the concrete implementation backing ErrGroup.
// It is intentionally not exported to allow strict control
// over lifecycle and invariants.
type groupImpl struct {
	cfg Config

	// Root context shared by all tasks.
	// Canceled on first non-ignored error.
	rootCtx context.Context
	cancel  context.CancelFunc

	// WaitGroup tracking accepted tasks.
	wg sync.WaitGroup

	// wgMu serializes wg.Add vs wg.Wait to avoid races.
	wgMu sync.Mutex

	// Optional semaphore enforcing max concurrency.
	sem chan struct{}

	// Tracks the first non-ignored error deterministically.
	first firstError

	// Ensures Wait() transition happens exactly once.
	startedWait atomic.Bool
}

// New constructs a new error group with optional configuration.
func New(opts ...Option) ErrGroup {
	cfg := Config{
		Logger:  core.NoopLogger,
		Metrics: core.NoopMetrics,
		Name:    "group",
	}

	for _, o := range opts {
		o(&cfg)
	}

	parentCtx := cfg.ParentContext
	if parentCtx == nil {
		parentCtx = context.Background()
	}
	ctx, cancel := context.WithCancel(parentCtx) //nolint:gosec // G118 false positive: cancel is stored in groupImpl.cancel and called in Wait() and Stop()

	g := &groupImpl{
		cfg:     cfg,
		rootCtx: ctx,
		cancel:  cancel,
	}

	// Initialize semaphore if concurrency is bounded.
	if cfg.MaxConcurrency > 0 {
		g.sem = make(chan struct{}, cfg.MaxConcurrency)
	}

	return g
}

// ------------------------------------------------------------
// Go
// ------------------------------------------------------------

// Go schedules a task for execution.
// If Wait() has started or the group is canceled, the task is rejected.
func (g *groupImpl) Go(fn func(ctx context.Context) error) {
	select {
	case <-g.rootCtx.Done():
		return
	default:
	}

	g.wgMu.Lock()
	if g.startedWait.Load() {
		g.wgMu.Unlock()
		return
	}
	g.wg.Add(1)
	g.wgMu.Unlock()

	go g.run(fn, false)
}

// ------------------------------------------------------------
// TryGo
// ------------------------------------------------------------

// TryGo attempts to schedule a task without blocking.
// It fails fast if:
//   - Wait() has started
//   - the group is canceled
//   - the concurrency limit is reached
func (g *groupImpl) TryGo(fn func(ctx context.Context) error) bool {
	if g.startedWait.Load() || g.rootCtx.Err() != nil {
		return false
	}

	// Acquire semaphore first (non-blocking).
	if g.sem != nil {
		select {
		case g.sem <- struct{}{}:
		default:
			return false
		}
	}

	g.wgMu.Lock()
	if g.startedWait.Load() {
		g.wgMu.Unlock()
		if g.sem != nil {
			<-g.sem
		}
		return false
	}
	g.wg.Add(1)
	g.wgMu.Unlock()

	// Semaphore was acquired non-blocking above; tell run() to skip acquisition.
	go g.run(fn, g.sem != nil)

	return true
}

// ------------------------------------------------------------
// BlockingGo
// ------------------------------------------------------------

// BlockingGo schedules a task and blocks until it is admitted
// (subject to concurrency limits).
func (g *groupImpl) BlockingGo(fn func(ctx context.Context) error) error {
	if g.rootCtx.Err() != nil {
		return g.rootCtx.Err()
	}

	g.wgMu.Lock()
	if g.startedWait.Load() {
		g.wgMu.Unlock()
		return errors.New("group closed")
	}
	g.wg.Add(1)
	g.wgMu.Unlock()

	go g.run(fn, false)
	return nil
}

// ------------------------------------------------------------
// Execution
// ------------------------------------------------------------

// run executes a task with optional semaphore acquisition.
// If semAcquired is true, the semaphore was already acquired by the caller
// (e.g. TryGo's non-blocking path) and run will skip acquisition.
func (g *groupImpl) run(fn func(ctx context.Context) error, semAcquired bool) {
	defer g.wg.Done()

	// Enforce max concurrency (skip if already acquired by TryGo).
	if g.sem != nil && !semAcquired {
		select {
		case g.sem <- struct{}{}:
		case <-g.rootCtx.Done():
			return
		}
		defer func() { <-g.sem }()
	} else if g.sem != nil && semAcquired {
		defer func() { <-g.sem }()
	}

	defer func() {
		if r := recover(); r != nil {
			g.handleTaskError(fmt.Errorf("panic: %v", r))
		}
	}()

	// Metrics are optional and non-blocking.
	if g.cfg.Metrics != nil {
		g.cfg.Metrics.IncCounter(
			"concurx_group_tasks_started_total",
			core.Label{Key: "group", Value: g.cfg.Name},
		)
		defer g.cfg.Metrics.IncCounter(
			"concurx_group_tasks_completed_total",
			core.Label{Key: "group", Value: g.cfg.Name},
		)
	}

	if err := fn(g.rootCtx); err != nil {
		g.handleTaskError(err)
	}
}

// ------------------------------------------------------------
// Error handling
// ------------------------------------------------------------

// handleTaskError processes task errors deterministically.
// Only the first non-ignored error is recorded.
func (g *groupImpl) handleTaskError(err error) {
	if err == nil {
		return
	}

	// Ignore context-driven cancellation errors.
	if errors.Is(err, context.Canceled) || errors.Is(err, context.DeadlineExceeded) {
		return
	}

	class := core.ClassCritical
	out := err

	// Apply error boundary if configured.
	if g.cfg.Boundary != nil {
		func() {
			defer func() {
				if r := recover(); r != nil {
					out = fmt.Errorf("boundary panic: %v", r)
					class = core.ClassCritical
				}
			}()
			class, out = g.cfg.Boundary.Capture(g.rootCtx, g.cfg.Name, err)
		}()
	}

	if class == core.ClassIgnored {
		return
	}

	g.first.set(out)
	g.cancel()
}

// ------------------------------------------------------------
// Wait
// ------------------------------------------------------------

// Wait blocks until all accepted tasks complete.
// It is safe to call concurrently with Go / TryGo.
func (g *groupImpl) Wait() error {
	g.wgMu.Lock()
	if g.startedWait.Load() {
		g.wgMu.Unlock()
		g.wg.Wait()
		return g.first.get()
	}

	g.startedWait.Store(true)
	g.wgMu.Unlock()

	done := make(chan struct{})
	go func() {
		g.wg.Wait()
		close(done)
	}()

	select {
	case <-done:
	case <-g.rootCtx.Done():
		if g.cfg.CancelTimeout > 0 {
			select {
			case <-done:
			case <-time.After(g.cfg.CancelTimeout):
			}
		} else {
			<-done
		}
	}

	return g.first.get()
}
