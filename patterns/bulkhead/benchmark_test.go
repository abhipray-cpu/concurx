package bulkhead

import (
	"context"
	"sync"
	"testing"
	"time"
)

func BenchmarkBulkhead_Execute_NoContention(b *testing.B) {
	bh, _ := NewBulkhead(
		WithCapacity(100),
	)

	b.ResetTimer()

	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			_ = bh.Execute(context.Background(), func(ctx context.Context) error {
				return nil
			})
		}
	})
}

func BenchmarkBulkhead_Execute_Contention_FailFast(b *testing.B) {
	bh, _ := NewBulkhead(
		WithCapacity(4),
		WithFailFast(),
	)

	b.ResetTimer()

	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			_ = bh.Execute(context.Background(), func(ctx context.Context) error {
				time.Sleep(100 * time.Microsecond)
				return nil
			})
		}
	})
}

func BenchmarkBulkhead_Execute_Contention_WithQueue(b *testing.B) {
	bh, _ := NewBulkhead(
		WithCapacity(4),
		WithQueueSize(16),
	)

	b.ResetTimer()

	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			_ = bh.Execute(context.Background(), func(ctx context.Context) error {
				time.Sleep(100 * time.Microsecond)
				return nil
			})
		}
	})
}

func BenchmarkBulkhead_Execute_WithTimeout(b *testing.B) {
	bh, _ := NewBulkhead(
		WithCapacity(1),
		WithTimeout(1*time.Millisecond),
	)

	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		_ = bh.Execute(context.Background(), func(ctx context.Context) error {
			time.Sleep(5 * time.Millisecond)
			return nil
		})
	}
}

func BenchmarkBulkhead_Saturation(b *testing.B) {
	bh, _ := NewBulkhead(
		WithCapacity(2),
		WithQueueSize(2),
	)

	b.ResetTimer()

	var wg sync.WaitGroup

	for i := 0; i < b.N; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			_ = bh.Execute(context.Background(), func(ctx context.Context) error {
				time.Sleep(1 * time.Millisecond)
				return nil
			})
		}()
	}

	wg.Wait()
}
