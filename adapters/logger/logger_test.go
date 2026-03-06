package logger

import (
	"bytes"
	"context"
	"log"
	"strings"
	"testing"

	"github.com/abhipray-cpu/concurx/core"
	"go.uber.org/zap"
	"go.uber.org/zap/zaptest/observer"
)

// -------------------------------------------------------
// StdLoggerAdapter
// -------------------------------------------------------

func TestStdLoggerAdapter_NilLogger(t *testing.T) {
	a := NewStdLoggerAdapter(nil)
	if a == nil {
		t.Fatal("expected non-nil adapter")
	}
	// Should not panic
	a.Info(context.Background(), "hello")
}

func TestStdLoggerAdapter_AllLevels(t *testing.T) {
	var buf bytes.Buffer
	l := log.New(&buf, "", 0)
	a := NewStdLoggerAdapter(l)
	ctx := context.Background()

	a.Debug(ctx, "debug message")
	a.Info(ctx, "info message")
	a.Warn(ctx, "warn message")
	a.Error(ctx, "error message")

	output := buf.String()
	for _, want := range []string{"DEBUG debug message", "INFO info message", "WARN warn message", "ERROR error message"} {
		if !strings.Contains(output, want) {
			t.Errorf("output missing %q; got:\n%s", want, output)
		}
	}
}

func TestStdLoggerAdapter_WithFields(t *testing.T) {
	var buf bytes.Buffer
	l := log.New(&buf, "", 0)
	a := NewStdLoggerAdapter(l)

	a.Info(context.Background(), "user action",
		core.Field{Key: "user_id", Val: 42},
		core.Field{Key: "action", Val: "login"},
	)

	output := buf.String()
	if !strings.Contains(output, "user_id=42") {
		t.Errorf("expected user_id=42 in output, got: %s", output)
	}
	if !strings.Contains(output, "action=login") {
		t.Errorf("expected action=login in output, got: %s", output)
	}
}

func TestStdLoggerAdapter_NoFields(t *testing.T) {
	var buf bytes.Buffer
	l := log.New(&buf, "", 0)
	a := NewStdLoggerAdapter(l)

	a.Info(context.Background(), "simple message")

	output := buf.String()
	if !strings.Contains(output, "INFO simple message") {
		t.Errorf("expected 'INFO simple message', got: %s", output)
	}
	// Should NOT contain the "|" separator when no fields
	if strings.Contains(output, "|") {
		t.Errorf("unexpected field separator in output without fields: %s", output)
	}
}

// -------------------------------------------------------
// ZapLogger
// -------------------------------------------------------

func TestZapLogger_NilReturnsNoop(t *testing.T) {
	l := NewZapLogger(nil)
	if l == nil {
		t.Fatal("expected non-nil logger (NoopLogger)")
	}
	// Should not panic
	l.Info(context.Background(), "test")
}

func TestZapLogger_AllLevels(t *testing.T) {
	obs, logs := observer.New(zap.DebugLevel)
	zl := zap.New(obs)
	l := NewZapLogger(zl)
	ctx := context.Background()

	l.Debug(ctx, "debug msg")
	l.Info(ctx, "info msg")
	l.Warn(ctx, "warn msg")
	l.Error(ctx, "error msg")

	entries := logs.All()
	if len(entries) != 4 {
		t.Fatalf("expected 4 log entries, got %d", len(entries))
	}

	expected := []struct {
		level   string
		message string
	}{
		{"DEBUG", "debug msg"},
		{"INFO", "info msg"},
		{"WARN", "warn msg"},
		{"ERROR", "error msg"},
	}

	for i, e := range expected {
		if entries[i].Message != e.message {
			t.Errorf("entry %d: expected message %q, got %q", i, e.message, entries[i].Message)
		}
	}
}

func TestZapLogger_WithFields(t *testing.T) {
	obs, logs := observer.New(zap.InfoLevel)
	zl := zap.New(obs)
	l := NewZapLogger(zl)

	l.Info(context.Background(), "event",
		core.Field{Key: "user", Val: "alice"},
		core.Field{Key: "count", Val: 5},
	)

	entries := logs.All()
	if len(entries) != 1 {
		t.Fatalf("expected 1 entry, got %d", len(entries))
	}

	fields := entries[0].ContextMap()
	if fields["user"] != "alice" {
		t.Errorf("expected user=alice, got %v", fields["user"])
	}
}

func TestZapLogger_NoFields(t *testing.T) {
	obs, logs := observer.New(zap.InfoLevel)
	zl := zap.New(obs)
	l := NewZapLogger(zl)

	l.Info(context.Background(), "no fields")

	entries := logs.All()
	if len(entries) != 1 {
		t.Fatalf("expected 1 entry, got %d", len(entries))
	}
	if len(entries[0].ContextMap()) != 0 {
		t.Errorf("expected no fields, got %v", entries[0].ContextMap())
	}
}
