package core

import (
	"context"
	"testing"
)

// -------------------------------------------------------
// NoopLogger
// -------------------------------------------------------

func TestNoopLogger_IsNotNil(t *testing.T) {
	if NoopLogger == nil {
		t.Fatal("NoopLogger must not be nil")
	}
}

func TestNoopLogger_DoesNotPanic(t *testing.T) {
	ctx := context.Background()

	// All methods must be callable without panic.
	NoopLogger.Debug(ctx, "msg")
	NoopLogger.Info(ctx, "msg", Field{Key: "k", Val: "v"})
	NoopLogger.Warn(ctx, "msg")
	NoopLogger.Error(ctx, "msg", Field{Key: "a", Val: 1}, Field{Key: "b", Val: true})
}

// -------------------------------------------------------
// NoopMetrics
// -------------------------------------------------------

func TestNoopMetrics_IsNotNil(t *testing.T) {
	if NoopMetrics == nil {
		t.Fatal("NoopMetrics must not be nil")
	}
}

func TestNoopMetrics_DoesNotPanic(t *testing.T) {
	NoopMetrics.IncCounter("counter")
	NoopMetrics.IncCounter("counter", Label{Key: "env", Value: "test"})
	NoopMetrics.AddCounter("counter", 5.0)
	NoopMetrics.AddCounter("counter", 1.0, Label{Key: "a", Value: "b"})
	NoopMetrics.ObserveHistogram("histogram", 0.5)
	NoopMetrics.ObserveHistogram("histogram", 1.23, Label{Key: "x", Value: "y"})
}

// -------------------------------------------------------
// ErrorClassification
// -------------------------------------------------------

func TestErrorClassification_Values(t *testing.T) {
	// Verify enum values are distinct and ordered.
	if ClassIgnored >= ClassTransient {
		t.Fatal("ClassIgnored must be less than ClassTransient")
	}
	if ClassTransient >= ClassPermanent {
		t.Fatal("ClassTransient must be less than ClassPermanent")
	}
	if ClassPermanent >= ClassCritical {
		t.Fatal("ClassPermanent must be less than ClassCritical")
	}
}

// -------------------------------------------------------
// Field
// -------------------------------------------------------

func TestField_Struct(t *testing.T) {
	f := Field{Key: "user_id", Val: 42}
	if f.Key != "user_id" {
		t.Fatalf("expected key 'user_id', got %q", f.Key)
	}
	if f.Val != 42 {
		t.Fatalf("expected val 42, got %v", f.Val)
	}
}

// -------------------------------------------------------
// Label
// -------------------------------------------------------

func TestLabel_Struct(t *testing.T) {
	l := Label{Key: "env", Value: "prod"}
	if l.Key != "env" {
		t.Fatalf("expected key 'env', got %q", l.Key)
	}
	if l.Value != "prod" {
		t.Fatalf("expected value 'prod', got %q", l.Value)
	}
}
