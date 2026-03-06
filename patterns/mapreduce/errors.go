package mapreduce

import "errors"

// Stable, user-visible errors
var (
	ErrMapReduceNoInputs   = errors.New("mapreduce: no inputs")
	ErrMapReduceCanceled   = errors.New("mapreduce: canceled")
	ErrMapReduceMapFailed  = errors.New("mapreduce: mapper failed")
	ErrMapReducePanic      = errors.New("mapreduce: mapper panic")
	ErrMapReduceInvalidOpt = errors.New("mapreduce: invalid options")
)
