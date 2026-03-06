package logger

import (
	"context"
	"fmt"
	"log"
	"strings"

	"github.com/abhipray-cpu/concurx/core"
)

// StdLoggerAdapter adapts Go's standard log.Logger
// to the concurx core.Logger interface.
//
// Design goals:
//   - Zero external dependencies
//   - Safe default for small services & CLIs
//   - Structured fields rendered as key=value pairs
//   - Context accepted (not inspected)
//
// This adapter is NOT intended for high-volume structured logging.
// For that, use zap_adapter.go.
type StdLoggerAdapter struct {
	logger *log.Logger
}

// NewStdLoggerAdapter creates a new stdlib-backed logger adapter.
//
// If logger is nil, log.Default() is used.
func NewStdLoggerAdapter(l *log.Logger) *StdLoggerAdapter {
	if l == nil {
		l = log.Default()
	}
	return &StdLoggerAdapter{logger: l}
}

// ---- core.Logger implementation ----

// Debug logs at DEBUG level.
func (l *StdLoggerAdapter) Debug(ctx context.Context, msg string, fields ...core.Field) {
	l.log("DEBUG", msg, fields...)
}

// Info logs at INFO level.
func (l *StdLoggerAdapter) Info(ctx context.Context, msg string, fields ...core.Field) {
	l.log("INFO", msg, fields...)
}

// Warn logs at WARN level.
func (l *StdLoggerAdapter) Warn(ctx context.Context, msg string, fields ...core.Field) {
	l.log("WARN", msg, fields...)
}

// Error logs at ERROR level.
func (l *StdLoggerAdapter) Error(ctx context.Context, msg string, fields ...core.Field) {
	l.log("ERROR", msg, fields...)
}

// ---- internal helpers ----

func (l *StdLoggerAdapter) log(level, msg string, fields ...core.Field) {
	var b strings.Builder

	b.WriteString(level)
	b.WriteString(" ")
	b.WriteString(msg)

	if len(fields) > 0 {
		b.WriteString(" | ")
		for i, f := range fields {
			if i > 0 {
				b.WriteString(" ")
			}
			b.WriteString(f.Key)
			b.WriteString("=")
			b.WriteString(fmt.Sprint(f.Val))
		}
	}

	l.logger.Println(b.String())
}
