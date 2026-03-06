package logger

import (
	"context"

	"go.uber.org/zap"

	"github.com/abhipray-cpu/concurx/core"
)

// ZapLogger adapts zap.Logger to core.Logger.
type ZapLogger struct {
	logger *zap.Logger
}

// NewZapLogger creates a new Zap-based core.Logger.
//
// The caller owns zap.Logger lifecycle (Sync, config, etc).
func NewZapLogger(l *zap.Logger) core.Logger {
	if l == nil {
		return core.NoopLogger
	}
	return &ZapLogger{logger: l}
}

// Debug logs at DEBUG level using zap.
func (z *ZapLogger) Debug(ctx context.Context, msg string, fields ...core.Field) {
	z.logger.Debug(msg, zapFields(fields)...)
}

// Info logs at INFO level using zap.
func (z *ZapLogger) Info(ctx context.Context, msg string, fields ...core.Field) {
	z.logger.Info(msg, zapFields(fields)...)
}

// Warn logs at WARN level using zap.
func (z *ZapLogger) Warn(ctx context.Context, msg string, fields ...core.Field) {
	z.logger.Warn(msg, zapFields(fields)...)
}

// Error logs at ERROR level using zap.
func (z *ZapLogger) Error(ctx context.Context, msg string, fields ...core.Field) {
	z.logger.Error(msg, zapFields(fields)...)
}

// zapFields converts core.Field → zap.Field.
func zapFields(fields []core.Field) []zap.Field {
	if len(fields) == 0 {
		return nil
	}

	zf := make([]zap.Field, 0, len(fields))
	for _, f := range fields {
		zf = append(zf, zap.Any(f.Key, f.Val))
	}
	return zf
}
