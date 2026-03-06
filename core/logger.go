package core

import "context"

// Logger is the minimal logging contract used across concurx.
//
// Keep this small; adapters will convert structured fields as needed.
type Logger interface {
	Debug(ctx context.Context, msg string, fields ...Field)
	Info(ctx context.Context, msg string, fields ...Field)
	Warn(ctx context.Context, msg string, fields ...Field)
	Error(ctx context.Context, msg string, fields ...Field)
}

// Field is a simple key/value pair for structured logs.
type Field struct {
	Key string
	Val any
}

// noopLogger is a Logger that silently discards all output.
type noopLogger struct{}

func (noopLogger) Debug(context.Context, string, ...Field) {}
func (noopLogger) Info(context.Context, string, ...Field)  {}
func (noopLogger) Warn(context.Context, string, ...Field)  {}
func (noopLogger) Error(context.Context, string, ...Field) {}

// NoopLogger is a Logger that silently discards all output.
// Safe to call without nil checks.
var NoopLogger Logger = noopLogger{}
