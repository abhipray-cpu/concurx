package group

import (
	"sync"
)

// firstError captures the first error exactly once.
type firstError struct {
	once sync.Once
	err  error
}

func (f *firstError) set(err error) {
	f.once.Do(func() {
		f.err = err
	})
}

func (f *firstError) get() error {
	return f.err
}
