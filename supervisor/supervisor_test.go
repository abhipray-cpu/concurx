package supervisor

import (
	"context"
	"errors"
	"sync/atomic"
	"testing"
	"time"
)

// ---------- test helpers ----------

func shortCtx() (context.Context, context.CancelFunc) {
	return context.WithTimeout(context.Background(), 2*time.Second)
}

func blockingChild(started *int32) ChildSpec {
	return ChildSpec{
		ID: "child",
		Run: func(ctx context.Context) error {
			atomic.StoreInt32(started, 1)
			<-ctx.Done()
			return ctx.Err()
		},
	}
}

func errorChild(err error) ChildSpec {
	return ChildSpec{
		ID: "child",
		Run: func(ctx context.Context) error {
			return err
		},
	}
}

// ---------- core supervisor tests ----------

func TestSupervisor_AddAndStart_Lifecycle(t *testing.T) {
	ctx, cancel := shortCtx()
	defer cancel()

	s := New(
		WithStrategy(NewOneForOne()),
	)

	started := int32(0)
	if err := s.Add(blockingChild(&started)); err != nil {
		t.Fatalf("unexpected add error: %v", err)
	}

	if err := s.Start(ctx); err != nil {
		t.Fatalf("unexpected start error: %v", err)
	}

	time.Sleep(20 * time.Millisecond)
	if atomic.LoadInt32(&started) != 1 {
		t.Fatalf("expected child to start")
	}

	stopCtx, stopCancel := shortCtx()
	defer stopCancel()
	if err := s.Stop(stopCtx); err != nil {
		t.Fatalf("unexpected stop error: %v", err)
	}
}

func TestSupervisor_Add_InvalidSpec(t *testing.T) {
	s := New()

	tests := []struct {
		name string
		spec ChildSpec
	}{
		{"empty_id", ChildSpec{Run: func(ctx context.Context) error { return nil }}},
		{"nil_run", ChildSpec{ID: "x"}},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := s.Add(tt.spec); err == nil {
				t.Fatalf("expected error, got nil")
			}
		})
	}
}

func TestSupervisor_Add_Duplicate(t *testing.T) {
	s := New()

	spec := ChildSpec{
		ID:  "dup",
		Run: func(ctx context.Context) error { return nil },
	}

	if err := s.Add(spec); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if err := s.Add(spec); err == nil {
		t.Fatalf("expected duplicate error")
	}
}

func TestSupervisor_Start_Twice(t *testing.T) {
	ctx, cancel := shortCtx()
	defer cancel()

	s := New()
	_ = s.Add(errorChild(nil))

	if err := s.Start(ctx); err != nil {
		t.Fatalf("unexpected start error: %v", err)
	}
	if err := s.Start(ctx); err == nil {
		t.Fatalf("expected ErrAlreadyRunning")
	}
}

func TestSupervisor_PermanentRestart(t *testing.T) {
	ctx, cancel := shortCtx()
	defer cancel()

	var runs int32

	spec := ChildSpec{
		ID: "perm",
		Run: func(ctx context.Context) error {
			atomic.AddInt32(&runs, 1)
			return errors.New("boom")
		},
		Mode: RestartModePermanent,
	}

	s := New(
		WithStrategy(NewOneForOne()),
	)
	_ = s.Add(spec)

	if err := s.Start(ctx); err != nil {
		t.Fatalf("start failed: %v", err)
	}

	time.Sleep(100 * time.Millisecond)

	stopCtx, stopCancel := shortCtx()
	defer stopCancel()
	_ = s.Stop(stopCtx)

	if atomic.LoadInt32(&runs) < 2 {
		t.Fatalf("expected child to restart at least once")
	}
}

func TestSupervisor_Temporary_NoRestart(t *testing.T) {
	ctx, cancel := shortCtx()
	defer cancel()

	var runs int32

	spec := ChildSpec{
		ID: "temp",
		Run: func(ctx context.Context) error {
			atomic.AddInt32(&runs, 1)
			return errors.New("fail")
		},
		Mode: RestartModeTemporary,
	}

	s := New(
		WithStrategy(NewOneForOne()),
	)
	_ = s.Add(spec)

	if err := s.Start(ctx); err != nil {
		t.Fatalf("start failed: %v", err)
	}

	time.Sleep(50 * time.Millisecond)
	_ = s.Stop(context.Background())

	if atomic.LoadInt32(&runs) != 1 {
		t.Fatalf("expected no restart for temporary child")
	}
}

func TestSupervisor_InfoAndList(t *testing.T) {
	s := New()

	_ = s.Add(ChildSpec{
		ID:  "a",
		Run: func(ctx context.Context) error { return nil },
	})
	_ = s.Add(ChildSpec{
		ID:  "b",
		Run: func(ctx context.Context) error { return nil },
	})

	ids := s.ListChildren()
	if len(ids) != 2 {
		t.Fatalf("expected 2 children, got %d", len(ids))
	}

	info := s.Info("a")
	if info == nil || info.ID != "a" {
		t.Fatalf("unexpected info result")
	}
}

func TestSupervisor_Stop_Idempotent(t *testing.T) {
	ctx, cancel := shortCtx()
	defer cancel()

	s := New(
		WithStrategy(NewOneForOne()),
	)
	_ = s.Add(blockingChild(new(int32)))

	_ = s.Start(ctx)

	stopCtx, stopCancel := shortCtx()
	defer stopCancel()

	if err := s.Stop(stopCtx); err != nil {
		t.Fatalf("stop failed: %v", err)
	}
	if err := s.Stop(stopCtx); err != nil {
		t.Fatalf("stop should be idempotent")
	}
}

func TestSupervisor_ExternalCancel(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())

	s := New(
		WithStrategy(NewOneForOne()),
	)

	_ = s.Add(blockingChild(new(int32)))
	_ = s.Start(ctx)

	cancel()

	time.Sleep(20 * time.Millisecond)
	s.Wait()
}
