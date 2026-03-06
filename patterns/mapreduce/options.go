package mapreduce

// MapReduceOptions controls MapReduce execution behavior.
type MapReduceOptions struct {
	Parallelism int
	FailFast    bool
	Ordered     bool
}

// MapReduceOption mutates [MapReduceOptions].
type MapReduceOption func(*MapReduceOptions)

// WithParallelism sets the number of concurrent mappers.
func WithParallelism(n int) MapReduceOption {
	return func(o *MapReduceOptions) {
		o.Parallelism = n
	}
}

// WithFailFast causes the operation to abort on the first mapper error.
func WithFailFast() MapReduceOption {
	return func(o *MapReduceOptions) {
		o.FailFast = true
	}
}

// WithOrdered ensures map results are reduced in input order.
func WithOrdered() MapReduceOption {
	return func(o *MapReduceOptions) {
		o.Ordered = true
	}
}

func defaultMapReduceOptions() MapReduceOptions {
	return MapReduceOptions{
		Parallelism: 1,
		FailFast:    true,
		Ordered:     false,
	}
}

func (o *MapReduceOptions) apply() {
	if o.Parallelism <= 0 {
		o.Parallelism = 1
	}
}

func (o *MapReduceOptions) validate() error {
	if o.Parallelism <= 0 {
		return ErrMapReduceInvalidOpt
	}
	return nil
}
