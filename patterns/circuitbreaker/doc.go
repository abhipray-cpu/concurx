// Package breaker provides a circuit breaker for fault prevention and fast-fail.
//
// A [CircuitBreaker] monitors failures and transitions between Closed, Open,
// and HalfOpen states. When the failure threshold is exceeded, the circuit
// opens and subsequent calls fail immediately with [ErrCircuitOpen] until
// the recovery timeout elapses.
//
//	cb, _ := breaker.New(breaker.WithFailureThreshold(5), breaker.WithOpenTimeout(10*time.Second))
//	result, err := cb.Execute(ctx, func(ctx context.Context) (any, error) { ... })
package breaker
