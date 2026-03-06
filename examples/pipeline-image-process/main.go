// Example: pipeline-image-process
//
// Demonstrates an image processing pipeline that combines:
//   - Pipeline for multi-stage transformation
//   - FanOut for parallel processing of a batch
//   - MapReduce for aggregating processing statistics
//   - WorkerPerCore for CPU-bound work distribution
//   - OnTypeMismatch callback for type safety observability
//
// Stress targets:
//   - Type mismatches in pipeline stages
//   - Pipeline cancellation mid-stream
//   - Large batch FanOut with bounded concurrency
//   - MapReduce with error injection
//   - WorkerPerCore panic recovery
package main

import (
	"context"
	"fmt"
	"math/rand"
	"strings"
	"sync/atomic"
	"time"

	fanout "github.com/abhipray-cpu/concurx/patterns/fanoutin"
	"github.com/abhipray-cpu/concurx/patterns/mapreduce"
	"github.com/abhipray-cpu/concurx/patterns/pipeline"
	"github.com/abhipray-cpu/concurx/patterns/workerpercore"
)

// Image represents an in-memory image being processed.
type Image struct {
	ID       int
	Name     string
	Width    int
	Height   int
	Format   string
	Data     []byte // simulated pixel data
	Metadata map[string]string
}

// ProcessingStats tracks pipeline performance.
type ProcessingStats struct {
	TotalImages   int
	TotalBytes    int64
	AvgLatencyMs  float64
	ErrorCount    int
	ResizedCount  int
	CompressCount int
}

func generateImages(n int) []Image {
	formats := []string{"png", "jpeg", "webp", "gif", "bmp"}
	images := make([]Image, n)
	for i := range images {
		w := rand.Intn(4000) + 100
		h := rand.Intn(4000) + 100
		images[i] = Image{
			ID:     i,
			Name:   fmt.Sprintf("photo_%04d.%s", i, formats[rand.Intn(len(formats))]),
			Width:  w,
			Height: h,
			Format: formats[rand.Intn(len(formats))],
			Data:   make([]byte, w*h/100), // simulated
			Metadata: map[string]string{
				"author": fmt.Sprintf("user_%d", rand.Intn(50)),
				"tag":    fmt.Sprintf("batch_%d", i/10),
			},
		}
	}
	return images
}

func main() {
	fmt.Println("=== pipeline-image-process example ===")
	fmt.Println("Exercising: Pipeline + FanOut + MapReduce + WorkerPerCore")
	fmt.Println()

	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()

	var typeMismatches int64

	// ─── Stage 1: Validate ───
	validate := pipeline.NewStage(func(ctx context.Context, in any) (any, error) {
		img, ok := in.(Image)
		if !ok {
			return nil, fmt.Errorf("validate: expected Image, got %T", in)
		}
		if img.Width <= 0 || img.Height <= 0 {
			return nil, fmt.Errorf("validate: invalid dimensions %dx%d", img.Width, img.Height)
		}
		// Simulate validation work
		time.Sleep(time.Duration(rand.Intn(5)) * time.Millisecond)
		img.Metadata["validated"] = "true"
		return img, nil
	})

	// ─── Stage 2: Resize (may inject type mismatch for stress) ───
	resize := pipeline.NewStage(func(ctx context.Context, in any) (any, error) {
		img, ok := in.(Image)
		if !ok {
			return nil, fmt.Errorf("resize: expected Image, got %T", in)
		}

		// 5% chance of returning wrong type (stress test type safety)
		if rand.Float64() < 0.05 {
			return "not-an-image", nil // intentional type mismatch
		}

		// Resize to max 1920x1080
		if img.Width > 1920 {
			img.Height = img.Height * 1920 / img.Width
			img.Width = 1920
		}
		if img.Height > 1080 {
			img.Width = img.Width * 1080 / img.Height
			img.Height = 1080
		}
		img.Metadata["resized"] = "true"
		time.Sleep(time.Duration(rand.Intn(10)) * time.Millisecond)
		return img, nil
	})

	// ─── Stage 3: Compress ───
	compress := pipeline.NewStage(func(ctx context.Context, in any) (any, error) {
		img, ok := in.(Image)
		if !ok {
			return nil, fmt.Errorf("compress: expected Image, got %T", in)
		}
		// Simulate compression
		img.Data = img.Data[:len(img.Data)/2]
		img.Format = "webp"
		img.Metadata["compressed"] = "true"
		time.Sleep(time.Duration(rand.Intn(8)) * time.Millisecond)
		return img, nil
	})

	// ─── Run Pipeline ───
	fmt.Println("Phase 1: Pipeline processing (30 images)...")
	images := generateImages(30)
	input := make(chan Image, len(images))
	for _, img := range images {
		input <- img
	}
	close(input)

	output, err := pipeline.Pipeline[Image](
		ctx, input,
		[]pipeline.Stage{validate, resize, compress},
		pipeline.WithBufferSize(5),
		pipeline.WithOnTypeMismatch(func(v any) {
			atomic.AddInt64(&typeMismatches, 1)
			fmt.Printf("  [pipeline] TYPE MISMATCH: got %T = %v\n", v, v)
		}),
	)
	if err != nil {
		panic(fmt.Sprintf("pipeline: %v", err))
	}

	var processed []Image
	for img := range output {
		processed = append(processed, img)
	}

	fmt.Printf("  Pipeline complete: %d/%d images processed\n", len(processed), len(images))
	fmt.Printf("  Type mismatches caught: %d\n", atomic.LoadInt64(&typeMismatches))

	// ─── Phase 2: FanOut for batch thumbnails ───
	fmt.Println("\nPhase 2: FanOut thumbnail generation...")
	thumbnails, err := fanout.FanOut[Image, string](
		ctx,
		processed,
		func(ctx context.Context, img Image) (string, error) {
			// Simulate thumbnail generation
			time.Sleep(time.Duration(rand.Intn(20)+5) * time.Millisecond)

			// 10% error rate
			if rand.Float64() < 0.10 {
				return "", fmt.Errorf("thumbnail failed for %s", img.Name)
			}
			return fmt.Sprintf("thumb_%s", img.Name), nil
		},
		fanout.WithConcurrency(4),
		fanout.WithPreserveOrder(),
	)
	if err != nil {
		fmt.Printf("  FanOut completed with error: %v\n", err)
	} else {
		fmt.Printf("  Generated %d thumbnails\n", len(thumbnails))
	}

	// ─── Phase 3: MapReduce for statistics ───
	fmt.Println("\nPhase 3: MapReduce statistics aggregation...")
	stats, err := mapreduce.MapReduce[Image, ProcessingStats, ProcessingStats](
		ctx,
		processed,
		// Mapper: extract stats from each image
		func(ctx context.Context, img Image) (ProcessingStats, error) {
			s := ProcessingStats{
				TotalImages: 1,
				TotalBytes:  int64(len(img.Data)),
			}
			if img.Metadata["resized"] == "true" {
				s.ResizedCount = 1
			}
			if img.Metadata["compressed"] == "true" {
				s.CompressCount = 1
			}
			return s, nil
		},
		// Reducer: merge stats
		func(acc ProcessingStats, s ProcessingStats) ProcessingStats {
			acc.TotalImages += s.TotalImages
			acc.TotalBytes += s.TotalBytes
			acc.ResizedCount += s.ResizedCount
			acc.CompressCount += s.CompressCount
			return acc
		},
		ProcessingStats{},
		mapreduce.WithParallelism(4),
	)
	if err != nil {
		fmt.Printf("  MapReduce error: %v\n", err)
	} else {
		fmt.Printf("  Stats: images=%d bytes=%d resized=%d compressed=%d\n",
			stats.TotalImages, stats.TotalBytes, stats.ResizedCount, stats.CompressCount)
	}

	// ─── Phase 4: WorkerPerCore for final writes ───
	fmt.Println("\nPhase 4: WorkerPerCore simulated disk writes...")
	wpc, err := workerpercore.NewWorkerPerCore(
		workerpercore.WithWorkers(4),
		workerpercore.WithQueueSize(10),
		workerpercore.WithFailFast(),
	)
	if err != nil {
		panic(fmt.Sprintf("workerpercore: %v", err))
	}

	var written int64
	var writeErrors int64
	for _, img := range processed {
		img := img
		if submitErr := wpc.Submit(func(ctx context.Context) error {
			// Simulate disk write
			time.Sleep(time.Duration(rand.Intn(10)+2) * time.Millisecond)

			// 3% panic for stress
			if rand.Float64() < 0.03 {
				panic(fmt.Sprintf("disk write panic for %s", img.Name))
			}

			if rand.Float64() < 0.05 {
				return fmt.Errorf("write failed: %s", img.Name)
			}

			atomic.AddInt64(&written, 1)
			return nil
		}); submitErr != nil {
			atomic.AddInt64(&writeErrors, 1)
		}
	}
	wpc.Shutdown()

	fmt.Printf("  Written: %d, Errors: %d\n",
		atomic.LoadInt64(&written), atomic.LoadInt64(&writeErrors))

	// ─── Summary ───
	fmt.Println("\n=== Processing Summary ===")
	fmt.Printf("  Input images:      %d\n", len(images))
	fmt.Printf("  Pipeline output:   %d\n", len(processed))
	fmt.Printf("  Type mismatches:   %d\n", atomic.LoadInt64(&typeMismatches))

	var thumbCount int
	for _, t := range thumbnails {
		if strings.HasPrefix(t, "thumb_") {
			thumbCount++
		}
	}
	fmt.Printf("  Thumbnails:        %d\n", thumbCount)
	fmt.Printf("  Disk writes:       %d\n", atomic.LoadInt64(&written))

	fmt.Println("\npipeline-image-process example complete.")
}
