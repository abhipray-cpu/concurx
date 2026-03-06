// Package logger provides concrete implementations of [core.Logger].
//
// Adapters:
//   - [StdLoggerAdapter]: wraps Go's standard library [log.Logger].
//   - [NewZapLogger]: wraps [go.uber.org/zap.Logger].
package logger
