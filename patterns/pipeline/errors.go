package pipeline

import "errors"

// Pipeline / Stage semantic errors.
var (
	ErrNoStages         = errors.New("pipeline: no stages defined")
	ErrInvalidStage     = errors.New("pipeline: invalid stage")
	ErrStageFailed      = errors.New("pipeline: stage execution failed")
	ErrPipelineCanceled = errors.New("pipeline: canceled")
	ErrInvalidOptions   = errors.New("pipeline: invalid options")
	ErrPanic            = errors.New("pipeline: stage panic")
	ErrTypeMismatch     = errors.New("pipeline: output type mismatch — stage emitted a value incompatible with Pipeline[T]")
)
