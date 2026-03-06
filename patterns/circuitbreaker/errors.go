package breaker

import "errors"

// Sentinel errors for the circuit breaker pattern.
var (
	// ErrCircuitOpen is returned when the circuit is open and requests are rejected.
	ErrCircuitOpen = errors.New("circuitbreaker: circuit open")

	// ErrInvalidOptions is returned when circuit breaker configuration is invalid.
	ErrInvalidOptions = errors.New("circuitbreaker: invalid options")

	// ErrCircuitPanic is returned when a guarded function panics.
	ErrCircuitPanic = errors.New("circuitbreaker: panic")
)
