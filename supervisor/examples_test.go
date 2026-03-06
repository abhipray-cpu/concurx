package supervisor

import (
	"context"
	"errors"
	"fmt"
	"sync"
	"sync/atomic"
	"time"
)

// ------------------------------------------------------------
// Example 1: Basic permanent child restart
// ------------------------------------------------------------

func Example_basic() {
	var runs int32
	done := make(chan struct{})

	spec := ChildSpec{
		ID: "basic",
		Run: func(ctx context.Context) error {
			n := atomic.AddInt32(&runs, 1)
			if n == 2 {
				close(done)
			}
			return errors.New("boom")
		},
		Mode: RestartModePermanent,
	}

	s := New()
	_ = s.Add(spec)

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	_ = s.Start(ctx)

	<-done
	_ = s.Stop(context.Background())

	fmt.Printf("runs=%d\n", atomic.LoadInt32(&runs))
	// Output:
	// runs=2
}

// ------------------------------------------------------------
// Example 2: Temporary child (no restart)
// ------------------------------------------------------------

func Example_temporaryChild() {
	var runs int32
	done := make(chan struct{})

	spec := ChildSpec{
		ID: "temp",
		Run: func(ctx context.Context) error {
			atomic.AddInt32(&runs, 1)
			close(done)
			return errors.New("fail")
		},
		Mode: RestartModeTemporary,
	}

	s := New()
	_ = s.Add(spec)

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	_ = s.Start(ctx)

	<-done
	_ = s.Stop(context.Background())

	fmt.Printf("runs=%d\n", atomic.LoadInt32(&runs))
	// Output:
	// runs=1
}

// ------------------------------------------------------------
// Example 3: Custom strategy (limit restarts)
// ------------------------------------------------------------

func Example_customStrategy() {
	var runs int32
	done := make(chan struct{})

	strategy := FuncStrategy(func(id string, err error, attempt int) (RestartAction, time.Duration) {
		if attempt >= 3 {
			return RestartNone, 0
		}
		return RestartOne, 0
	})

	spec := ChildSpec{
		ID: "custom",
		Run: func(ctx context.Context) error {
			n := atomic.AddInt32(&runs, 1)
			if n == 3 {
				close(done)
			}
			return errors.New("boom")
		},
		Mode: RestartModePermanent,
	}

	s := New(WithStrategy(strategy))
	_ = s.Add(spec)

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	_ = s.Start(ctx)

	<-done
	_ = s.Stop(context.Background())

	fmt.Printf("runs=%d\n", atomic.LoadInt32(&runs))
	// Output:
	// runs=3
}

// ------------------------------------------------------------
// Example 4: Backoff strategy (restart happens more than once)
// ------------------------------------------------------------

func Example_backoffStrategy() {
	var runs int32
	done := make(chan struct{})
	var once sync.Once

	strategy := FuncStrategy(func(id string, err error, attempt int) (RestartAction, time.Duration) {
		if attempt >= 2 {
			once.Do(func() {
				close(done)
			})
		}
		return RestartOne, 0
	})

	spec := ChildSpec{
		ID: "backoff",
		Run: func(ctx context.Context) error {
			atomic.AddInt32(&runs, 1)
			return errors.New("fail")
		},
		Mode: RestartModePermanent,
	}

	s := New(WithStrategy(strategy))
	_ = s.Add(spec)

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	_ = s.Start(ctx)

	<-done
	_ = s.Stop(context.Background())

	fmt.Printf("runs>1=%v\n", atomic.LoadInt32(&runs) > 1)
	// Output:
	// runs>1=true
}

// ------------------------------------------------------------
// Example 5: Hooks
// ------------------------------------------------------------

func Example_hooks() {
	var starts int32
	var restarts int32
	done := make(chan struct{})

	hooks := Hooks{
		OnChildStart: func(id string) {
			atomic.AddInt32(&starts, 1)
		},
		OnChildRestart: func(id string, n int, err error) {
			if n == 1 {
				atomic.AddInt32(&restarts, 1)
				close(done)
			}
		},
	}

	spec := ChildSpec{
		ID: "hooks",
		Run: func(ctx context.Context) error {
			return errors.New("boom")
		},
		Mode:     RestartModePermanent,
		Announce: true,
	}

	s := New(WithHooks(hooks))
	_ = s.Add(spec)

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	_ = s.Start(ctx)

	<-done
	_ = s.Stop(context.Background())

	fmt.Printf("starts=%d restarts=%d\n",
		atomic.LoadInt32(&starts),
		atomic.LoadInt32(&restarts),
	)
	// Output:
	// starts=1 restarts=1
}
