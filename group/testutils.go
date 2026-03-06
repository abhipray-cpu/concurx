package group

import (
	"context"
	"errors"
	"fmt"
	"sort"
	"strings"
	"sync"
	"sync/atomic"
	"testing"
	"time"

	"github.com/abhipray-cpu/concurx/core"
)

// ---------- Coordination helpers ----------

// coord helps tests coordinate multiple goroutines deterministically.
type coord struct {
	// closed by tests to tell tasks to start
	Start chan struct{}
	// closed by tests to let tasks proceed to finish
	Proceed chan struct{}
	// closed by tasks to signal they observed cancellation (ctx.Done)
	Canceled chan struct{}
	// used for tasks to signal they started
	Started chan int
	// used for tasks to signal they finished
	Done chan int
}

// newCoord returns a fresh coordinator.
func newCoord(n int) *coord {
	return &coord{
		Started:  make(chan int, n),
		Proceed:  make(chan struct{}),
		Canceled: make(chan struct{}, n),
		Done:     make(chan int, n),
	}
}

// waitForInt waits for an int value from ch or times out.
func waitForInt(t testing.TB, ch <-chan int, timeout time.Duration, msg string) {
	t.Helper()
	select {
	case <-ch:
		return
	case <-time.After(timeout):
		t.Fatalf("%s: timed out after %s", msg, timeout)
	}
}

// ---------- Atomic counter helper ----------

type atomicInt struct {
	v int64
}

func newAtomicInt() *atomicInt   { return &atomicInt{} }
func (a *atomicInt) Inc() int64  { return atomic.AddInt64(&a.v, 1) }
func (a *atomicInt) Dec() int64  { return atomic.AddInt64(&a.v, -1) }
func (a *atomicInt) Get() int64  { return atomic.LoadInt64(&a.v) }
func (a *atomicInt) Set(x int64) { atomic.StoreInt64(&a.v, x) }
func (a *atomicInt) Reset()      { a.Set(0) }

// ---------- Fake ErrorBoundary implementations ----------

// fakeBoundary returns a predefined classification (or panics if configured).
type fakeBoundary struct {
	mu    sync.Mutex
	calls []boundaryCall

	// behavior
	classify core.ErrorClassification
	panicOn  bool
}

type boundaryCall struct {
	Source string
	Err    error
}

func newFakeBoundary(c core.ErrorClassification, panicOn bool) *fakeBoundary {
	return &fakeBoundary{classify: c, panicOn: panicOn}
}

func (f *fakeBoundary) Capture(ctx context.Context, source string, err error) (core.ErrorClassification, error) {
	f.mu.Lock()
	f.calls = append(f.calls, boundaryCall{Source: source, Err: err})
	f.mu.Unlock()

	if f.panicOn {
		panic("fakeBoundary panicked")
	}
	// Return same error by default (no transformation)
	return f.classify, err
}

func (f *fakeBoundary) Calls() []boundaryCall {
	f.mu.Lock()
	defer f.mu.Unlock()
	c := make([]boundaryCall, len(f.calls))
	copy(c, f.calls)
	return c
}

// ---------- Fake Logger & Metrics ----------

// fakeLogger captures messages for assertions.
type fakeLogger struct {
	mu       sync.Mutex
	Warnings []string
	Errors   []string
	Debugs   []string
	Infos    []string
}

func newFakeLogger() *fakeLogger { return &fakeLogger{} }

func (l *fakeLogger) Debug(ctx context.Context, msg string, fields ...core.Field) {
	l.mu.Lock()
	defer l.mu.Unlock()
	l.Debugs = append(l.Debugs, fmt.Sprintf("%s %v", msg, fields))
}

func (l *fakeLogger) Warn(ctx context.Context, msg string, fields ...core.Field) {
	l.mu.Lock()
	defer l.mu.Unlock()
	l.Warnings = append(l.Warnings, fmt.Sprintf("%s %v", msg, fields))
}

func (l *fakeLogger) Info(ctx context.Context, msg string, fields ...core.Field) {
	l.mu.Lock()
	defer l.mu.Unlock()
	l.Infos = append(l.Infos, fmt.Sprintf("%s %v", msg, fields))
}

func (l *fakeLogger) Error(ctx context.Context, msg string, fields ...core.Field) {
	l.mu.Lock()
	defer l.mu.Unlock()
	l.Errors = append(l.Errors, fmt.Sprintf("%s %v", msg, fields))
}

func (l *fakeLogger) ContainsWarning(substr string) bool {
	l.mu.Lock()
	defer l.mu.Unlock()
	for _, s := range l.Warnings {
		if strings.Contains(s, substr) {
			return true
		}
	}
	return false
}

func (l *fakeLogger) ContainsError(substr string) bool {
	l.mu.Lock()
	defer l.mu.Unlock()
	for _, s := range l.Errors {
		if strings.Contains(s, substr) {
			return true
		}
	}
	return false
}

// fakeMetrics captures simple counters (thread-safe).
// ---------- Fake Metrics (revised for full core.Metrics compatibility) ----------

// metricKey uniquely identifies a metric by name + sorted label set.
type metricKey struct {
	name   string
	labels string // canonical string form of labels (sorted)
}

// fakeMetrics implements core.Metrics for testing.
// It is safe for concurrent use.
type fakeMetrics struct {
	mu        sync.Mutex
	Counters  map[metricKey]float64
	Histogram map[metricKey][]float64
}

func newFakeMetrics() *fakeMetrics {
	return &fakeMetrics{
		Counters:  make(map[metricKey]float64),
		Histogram: make(map[metricKey][]float64),
	}
}

// canonicalize labels: convert to stable string for consistent map keys.
func labelsKey(labels ...core.Label) string {
	if len(labels) == 0 {
		return ""
	}
	// copy & sort to ensure deterministic ordering
	cp := make([]core.Label, len(labels))
	copy(cp, labels)
	sort.Slice(cp, func(i, j int) bool {
		if cp[i].Key == cp[j].Key {
			return cp[i].Value < cp[j].Value
		}
		return cp[i].Key < cp[j].Key
	})
	var sb strings.Builder
	for _, l := range cp {
		sb.WriteString(l.Key)
		sb.WriteByte('=')
		sb.WriteString(l.Value)
		sb.WriteByte(',')
	}
	return sb.String()
}

func (m *fakeMetrics) IncCounter(name string, labels ...core.Label) {
	m.AddCounter(name, 1.0, labels...)
}

func (m *fakeMetrics) AddCounter(name string, v float64, labels ...core.Label) {
	key := metricKey{name: name, labels: labelsKey(labels...)}

	m.mu.Lock()
	defer m.mu.Unlock()
	m.Counters[key] += v
}

func (m *fakeMetrics) ObserveHistogram(name string, value float64, labels ...core.Label) {
	key := metricKey{name: name, labels: labelsKey(labels...)}

	m.mu.Lock()
	defer m.mu.Unlock()
	m.Histogram[key] = append(m.Histogram[key], value)
}

// Helper accessors for tests

func (m *fakeMetrics) GetCounter(name string, labels ...core.Label) float64 {
	key := metricKey{name: name, labels: labelsKey(labels...)}

	m.mu.Lock()
	defer m.mu.Unlock()
	return m.Counters[key]
}

func (m *fakeMetrics) GetHistogram(name string, labels ...core.Label) []float64 {
	key := metricKey{name: name, labels: labelsKey(labels...)}

	m.mu.Lock()
	defer m.mu.Unlock()

	// return a copy to avoid test mutation side effects
	cp := make([]float64, len(m.Histogram[key]))
	copy(cp, m.Histogram[key])
	return cp
}

// ---------- Task factories ----------

// successTask returns a task that records start and waits to be released, then returns nil.
func successTask(i int, c *coord) func(ctx context.Context) error {
	return func(ctx context.Context) error {
		// signal started
		select {
		case c.Started <- i:
		default:
		}
		// wait until proceed is closed or ctx canceled
		select {
		case <-c.Proceed:
		case <-ctx.Done():
			// signal canceled (from test perspective)
			select {
			case c.Canceled <- struct{}{}:
			default:
			}
			return ctx.Err()
		}
		// signal done
		select {
		case c.Done <- i:
		default:
		}
		return nil
	}
}

// errorTask returns a task that immediately returns the provided error.
func errorTask(err error) func(ctx context.Context) error {
	return func(ctx context.Context) error {
		return err
	}
}

// panicTask panics immediately.
func panicTask(panicMsg string) func(ctx context.Context) error {
	return func(ctx context.Context) error {
		panic(panicMsg)
	}
}

// hangingTask ignores ctx and blocks forever (for deterministic tests use a never channel).
func hangingTask() func(ctx context.Context) error {
	never := make(chan struct{})
	return func(ctx context.Context) error {
		<-never
		return nil
	}
}

// observeCtxDoneTask blocks until ctx.Done, then records cancellation channel and returns ctx.Err.
func observeCtxDoneTask(c *coord) func(ctx context.Context) error {
	return func(ctx context.Context) error {
		<-ctx.Done()
		// signal canceled
		select {
		case c.Canceled <- struct{}{}:
		default:
		}
		return ctx.Err()
	}
}

// ---------- small test errors ----------
var (
	ErrBoom = errors.New("boom")
)
