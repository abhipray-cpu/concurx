package fanout

import "errors"

// ErrInvalidOptions is returned when FanOut receives invalid configuration.
var ErrInvalidOptions = errors.New("fanout: invalid options")

// ErrPanic is returned when a FanOut worker recovers a panic.
var ErrPanic = errors.New("fanout: panic recovered")
