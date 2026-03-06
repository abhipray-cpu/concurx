package breaker

// Metrics receives lifecycle callbacks from a [CircuitBreaker].
type Metrics interface {
	OnSuccess()
	OnFailure()
	OnOpen()
	OnHalfOpen()
	OnClose()
	OnPanic()
}

type noopMetrics struct{}

func (noopMetrics) OnSuccess()  {}
func (noopMetrics) OnFailure()  {}
func (noopMetrics) OnOpen()     {}
func (noopMetrics) OnHalfOpen() {}
func (noopMetrics) OnClose()    {}
func (noopMetrics) OnPanic()    {}

func defaultMetrics() Metrics {
	return noopMetrics{}
}
