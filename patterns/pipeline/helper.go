package pipeline

// adaptOutput converts an any-typed channel to a typed channel.
// Values that cannot be asserted to T are reported via onMismatch
// (if non-nil) and skipped to prevent panics from type mismatches
// in stage chains.
func adaptOutput[T any](in <-chan any, onMismatch func(any)) <-chan T {
	out := make(chan T)
	go func() {
		defer close(out)
		for v := range in {
			typed, ok := v.(T)
			if !ok {
				if onMismatch != nil {
					onMismatch(v)
				}
				continue
			}
			out <- typed
		}
	}()
	return out
}
