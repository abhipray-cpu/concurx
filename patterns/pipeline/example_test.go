package pipeline

import (
	"context"
	"fmt"
	"time"
)

//
// -----------------------------------------------------------------------------
// Example 1: Basic pipeline (single stage)
// -----------------------------------------------------------------------------
//
// Demonstrates:
//   - Basic streaming
//   - Ordered output
//   - Stage closes output correctly
//

func ExamplePipeline_basic() {
	ctx := context.Background()

	in := make(chan int)

	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		return v.(int) * 2, nil
	})

	out, _ := Pipeline(ctx, in, []Stage{stage})

	go func() {
		defer close(in)
		in <- 1
		in <- 2
		in <- 3
	}()

	for v := range out {
		fmt.Println(v)
	}

	// Output:
	// 2
	// 4
	// 6
}

//
// -----------------------------------------------------------------------------
// Example 2: Multi-stage pipeline
// -----------------------------------------------------------------------------
//
// Demonstrates:
//   - Stage composition
//   - Data flowing stage-by-stage
//

func ExamplePipeline_multipleStages() {
	ctx := context.Background()

	in := make(chan int)

	double := NewStage(func(ctx context.Context, v any) (any, error) {
		return v.(int) * 2, nil
	})

	addOne := NewStage(func(ctx context.Context, v any) (any, error) {
		return v.(int) + 1, nil
	})

	out, _ := Pipeline(ctx, in, []Stage{double, addOne})

	go func() {
		defer close(in)
		in <- 1
		in <- 2
	}()

	for v := range out {
		fmt.Println(v)
	}

	// Output:
	// 3
	// 5
}

//
// -----------------------------------------------------------------------------
// Example 3: Streaming behavior (no batching)
// -----------------------------------------------------------------------------
//
// Demonstrates:
//   - Items flow immediately
//   - Downstream receives before upstream finishes
//

func ExamplePipeline_streaming() {
	ctx := context.Background()

	in := make(chan int)

	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		time.Sleep(20 * time.Millisecond)
		return v.(int), nil
	})

	out, _ := Pipeline(ctx, in, []Stage{stage})

	go func() {
		in <- 1
		time.Sleep(5 * time.Millisecond)
		in <- 2
		close(in)
	}()

	for v := range out {
		fmt.Println(v)
	}

	// Output:
	// 1
	// 2
}

//
// -----------------------------------------------------------------------------
// Example 4: Backpressure (observable, correct)
// -----------------------------------------------------------------------------
//
// Demonstrates:
//   - Producer blocks on channel send
//   - No buffering unless explicitly added
//

func ExamplePipeline_backpressure() {
	ctx := context.Background()

	in := make(chan int)

	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		return v, nil
	})

	out, _ := Pipeline(ctx, in, []Stage{stage})

	go func() {
		in <- 1
		in <- 2
		close(in)
	}()

	// Consume slowly
	fmt.Println(<-out)
	time.Sleep(20 * time.Millisecond)
	fmt.Println(<-out)

	// Output:
	// 1
	// 2
}

//
// -----------------------------------------------------------------------------
// Example 5: Fail-fast on stage error
// -----------------------------------------------------------------------------
//
// Demonstrates:
//   - Error cancels pipeline
//   - Output channel closes
//

func ExamplePipeline_failFast() {
	ctx := context.Background()

	in := make(chan int)

	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		if v.(int) == 2 {
			return nil, fmt.Errorf("boom")
		}
		return v, nil
	})

	out, _ := Pipeline(ctx, in, []Stage{stage})

	go func() {
		defer close(in)
		in <- 1
		in <- 2
		in <- 3
	}()

	for v := range out {
		fmt.Println(v)
	}

	// Output:
	// 1
}

//
// -----------------------------------------------------------------------------
// Example 6: Panic isolation
// -----------------------------------------------------------------------------
//
// Demonstrates:
//   - Panics do not crash the program
//   - Pipeline shuts down cleanly
//

func ExamplePipeline_panicIsolation() {
	ctx := context.Background()

	in := make(chan int)

	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		if v.(int) == 2 {
			panic("boom")
		}
		return v, nil
	})

	out, _ := Pipeline(ctx, in, []Stage{stage})

	go func() {
		defer close(in)
		in <- 1
		in <- 2
		in <- 3
	}()

	for v := range out {
		fmt.Println(v)
	}

	// Output:
	// 1
}

//
// -----------------------------------------------------------------------------
// Example 7: Timeout cancels pipeline
// -----------------------------------------------------------------------------
//
// Demonstrates:
//   - Global timeout
//   - Context cancellation propagation
//

func ExamplePipeline_timeout() {
	ctx := context.Background()

	in := make(chan int)

	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		time.Sleep(100 * time.Millisecond)
		return v, nil
	})

	out, _ := Pipeline(
		ctx,
		in,
		[]Stage{stage},
		WithTimeout(30*time.Millisecond),
	)

	go func() {
		defer close(in)
		in <- 1
		in <- 2
	}()

	for v := range out {
		fmt.Println(v)
	}

	// Output:
}

//
// -----------------------------------------------------------------------------
// Example 8: Pipeline naturally terminates
// -----------------------------------------------------------------------------
//
// Demonstrates:
//   - Input close propagates
//   - No goroutine leaks
//

func ExamplePipeline_gracefulShutdown() {
	ctx := context.Background()

	in := make(chan int)

	stage := NewStage(func(ctx context.Context, v any) (any, error) {
		return v, nil
	})

	out, _ := Pipeline(ctx, in, []Stage{stage})

	close(in)

	_, ok := <-out
	fmt.Println(ok)

	// Output:
	// false
}
