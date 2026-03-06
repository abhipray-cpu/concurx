// Package pipeline provides a streaming data pipeline with typed stages.
//
// [Pipeline] connects a series of stages via channels, streaming data from
// an input channel through each stage in sequence. Stages run concurrently
// and communicate through buffered channels.
//
//	out := pipeline.Pipeline(ctx, input, stages,
//	    pipeline.WithBufferSize(16),
//	    pipeline.WithFailFast(),
//	)
package pipeline
