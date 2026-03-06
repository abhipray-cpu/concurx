package supervisor

import (
	"context"
	"errors"
	"sync"
	"sync/atomic"
	"testing"
	"time"
)

// NOTE:
// These tests are meant to be run with:
//   go test -race ./supervisor
// They intentionally avoid strict assertions.

func TestSupervisor_Race_ConcurrentFailures(t *testing.T) {
	s := New()

	const children = 20

	for i := 0; i < children; i++ {
		id := i
		_ = s.Add(ChildSpec{
			ID: "child-" + string(rune(id)),
			Run: func(ctx context.Context) error {
				return errors.New("fail")
			},
			Mode: RestartModePermanent,
		})
	}

	ctx, cancel := context.WithCancel(context.Background())
	_ = s.Start(ctx)

	time.Sleep(50 * time.Millisecond)
	cancel()
	s.Wait()
}

func TestSupervisor_Race_StartStop(t *testing.T) {
	s := New()

	_ = s.Add(ChildSpec{
		ID: "x",
		Run: func(ctx context.Context) error {
			<-ctx.Done()
			return nil
		},
	})

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	var wg sync.WaitGroup
	wg.Add(2)

	go func() {
		defer wg.Done()
		_ = s.Start(ctx)
	}()

	go func() {
		defer wg.Done()
		time.Sleep(10 * time.Millisecond)
		_ = s.Stop(context.Background())
	}()

	wg.Wait()
}

func TestSupervisor_Race_ExternalCancel(t *testing.T) {
	s := New()

	_ = s.Add(ChildSpec{
		ID: "x",
		Run: func(ctx context.Context) error {
			<-ctx.Done()
			return ctx.Err()
		},
	})

	ctx, cancel := context.WithCancel(context.Background())
	_ = s.Start(ctx)

	go func() {
		time.Sleep(10 * time.Millisecond)
		cancel()
	}()

	s.Wait()
}

func TestSupervisor_Race_InfoAndList(t *testing.T) {
	s := New()

	for i := 0; i < 5; i++ {
		id := i
		_ = s.Add(ChildSpec{
			ID: "child-" + string(rune(id)),
			Run: func(ctx context.Context) error {
				return errors.New("fail")
			},
			Mode: RestartModePermanent,
		})
	}

	ctx, cancel := context.WithCancel(context.Background())
	_ = s.Start(ctx)

	var wg sync.WaitGroup
	wg.Add(2)

	go func() {
		defer wg.Done()
		for i := 0; i < 100; i++ {
			_ = s.ListChildren()
			time.Sleep(time.Millisecond)
		}
	}()

	go func() {
		defer wg.Done()
		for i := 0; i < 100; i++ {
			_ = s.Info("child-1")
			time.Sleep(time.Millisecond)
		}
	}()

	time.Sleep(50 * time.Millisecond)
	cancel()
	wg.Wait()
	s.Wait()
}

func TestSupervisor_Race_AddAndStartVsStop(t *testing.T) {
	s := New()

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	_ = s.Start(ctx)

	go func() {
		for i := 0; i < 10; i++ {
			_ = s.AddAndStart(ChildSpec{
				ID: "dyn-" + string(rune(i)),
				Run: func(ctx context.Context) error {
					<-ctx.Done()
					return nil
				},
			})
			time.Sleep(time.Millisecond)
		}
	}()

	time.Sleep(20 * time.Millisecond)
	_ = s.Stop(context.Background())
}

func TestSupervisor_Race_Hooks(t *testing.T) {
	var starts int32
	var restarts int32

	hooks := Hooks{
		OnChildStart: func(string) {
			atomic.AddInt32(&starts, 1)
		},
		OnChildRestart: func(string, int, error) {
			atomic.AddInt32(&restarts, 1)
		},
	}

	s := New(WithHooks(hooks))

	_ = s.Add(ChildSpec{
		ID: "x",
		Run: func(ctx context.Context) error {
			return errors.New("boom")
		},
		Mode: RestartModePermanent,
	})

	ctx, cancel := context.WithCancel(context.Background())
	_ = s.Start(ctx)

	time.Sleep(50 * time.Millisecond)
	cancel()
	s.Wait()
}
