package breaker

import "context"

func run(
	ctx context.Context,
	sm *stateMachine,
	fn func(context.Context) error,
) error {

	if !sm.allow() {
		return ErrCircuitOpen
	}

	defer func() {
		if r := recover(); r != nil {
			sm.opts.Metrics.OnPanic()
			sm.onFailure()
			panic(ErrCircuitPanic)
		}
	}()

	err := fn(ctx)
	if err != nil {
		sm.opts.Metrics.OnFailure()
		sm.onFailure()
		return err
	}

	sm.opts.Metrics.OnSuccess()
	sm.onSuccess()
	return nil
}
