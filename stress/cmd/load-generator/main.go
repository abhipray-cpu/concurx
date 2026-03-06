// Package main implements a configurable HTTP load generator for stress testing.
//
// It sends orders at a configurable rate, tracks results, and prints
// a summary report at the end.
package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"math"
	"net/http"
	"os"
	"os/signal"
	"sort"
	"sync"
	"sync/atomic"
	"syscall"
	"time"
)

type config struct {
	TargetURL string
	RPS       int
	Duration  time.Duration
	RampUp    time.Duration
}

type stats struct {
	mu        sync.Mutex
	total     atomic.Int64
	success   atomic.Int64
	failed    atomic.Int64
	rateLimit atomic.Int64
	queueFull atomic.Int64
	latencies []time.Duration
}

func (s *stats) addLatency(d time.Duration) {
	s.mu.Lock()
	s.latencies = append(s.latencies, d)
	s.mu.Unlock()
}

type order struct {
	ID       string `json:"id"`
	Customer string `json:"customer"`
	Amount   int    `json:"amount"`
	Items    int    `json:"items"`
}

func main() {
	cfg := config{
		TargetURL: envOr("TARGET_URL", "http://order-processor:8080"),
		RPS:       envInt("RPS", 1000),
		Duration:  envDuration("DURATION", 60*time.Second),
		RampUp:    envDuration("RAMP_UP", 5*time.Second),
	}

	log.Printf("load generator starting: target=%s rps=%d duration=%s ramp_up=%s",
		cfg.TargetURL, cfg.RPS, cfg.Duration, cfg.RampUp)

	ctx, cancel := context.WithTimeout(context.Background(), cfg.Duration+cfg.RampUp+10*time.Second)
	defer cancel()

	// Handle signals
	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, syscall.SIGTERM, syscall.SIGINT)
	go func() {
		<-sigCh
		log.Println("received signal, stopping")
		cancel()
	}()

	s := &stats{}
	client := &http.Client{Timeout: 10 * time.Second}
	start := time.Now()

	// Report goroutine
	done := make(chan struct{})
	go func() {
		ticker := time.NewTicker(5 * time.Second)
		defer ticker.Stop()
		for {
			select {
			case <-ticker.C:
				elapsed := time.Since(start).Seconds()
				total := s.total.Load()
				success := s.success.Load()
				failed := s.failed.Load()
				rate := float64(total) / elapsed
				log.Printf("[%.0fs] total=%d success=%d failed=%d rate_limited=%d queue_full=%d actual_rps=%.0f",
					elapsed, total, success, failed, s.rateLimit.Load(), s.queueFull.Load(), rate)
			case <-done:
				return
			}
		}
	}()

	// Main load loop
	testStart := time.Now()
	var wg sync.WaitGroup
	orderID := atomic.Int64{}

	for time.Since(testStart) < cfg.Duration+cfg.RampUp {
		if ctx.Err() != nil {
			break
		}

		// Calculate current target RPS (ramp up)
		elapsed := time.Since(testStart)
		currentRPS := cfg.RPS
		if elapsed < cfg.RampUp && cfg.RampUp > 0 {
			frac := float64(elapsed) / float64(cfg.RampUp)
			currentRPS = int(math.Max(1, float64(cfg.RPS)*frac))
		}

		// Send a batch for this tick
		interval := time.Second / time.Duration(currentRPS)
		batchStart := time.Now()

		for i := 0; i < currentRPS && time.Since(batchStart) < time.Second; i++ {
			if ctx.Err() != nil {
				break
			}

			id := orderID.Add(1)
			o := order{
				ID:       fmt.Sprintf("load-%d", id),
				Customer: fmt.Sprintf("customer-%d", id%100),
				Amount:   int(id%1000) + 1,
				Items:    int(id%10) + 1,
			}

			wg.Add(1)
			go func(o order) {
				defer wg.Done()
				sendOrder(ctx, client, cfg.TargetURL, o, s)
			}(o)

			// Pace the sends
			time.Sleep(interval)
		}
	}

	// Wait for in-flight requests
	log.Println("waiting for in-flight requests...")
	wg.Wait()
	close(done)

	// Print report
	printReport(s, time.Since(testStart))
}

func sendOrder(ctx context.Context, client *http.Client, baseURL string, o order, s *stats) {
	s.total.Add(1)
	start := time.Now()

	body, _ := json.Marshal(o)
	req, err := http.NewRequestWithContext(ctx, "POST", baseURL+"/orders", bytes.NewReader(body))
	if err != nil {
		s.failed.Add(1)
		return
	}
	req.Header.Set("Content-Type", "application/json")

	resp, err := client.Do(req)
	if err != nil {
		s.failed.Add(1)
		return
	}
	defer resp.Body.Close()
	io.ReadAll(resp.Body)

	dur := time.Since(start)
	s.addLatency(dur)

	switch resp.StatusCode {
	case http.StatusOK:
		s.success.Add(1)
	case http.StatusTooManyRequests:
		s.rateLimit.Add(1)
	default:
		s.failed.Add(1)
	}
}

func printReport(s *stats, totalDuration time.Duration) {
	s.mu.Lock()
	latencies := make([]time.Duration, len(s.latencies))
	copy(latencies, s.latencies)
	s.mu.Unlock()

	sort.Slice(latencies, func(i, j int) bool { return latencies[i] < latencies[j] })

	total := s.total.Load()
	success := s.success.Load()
	failed := s.failed.Load()
	rateLimited := s.rateLimit.Load()
	queueFull := s.queueFull.Load()

	fmt.Println("\n" + "=== LOAD TEST REPORT ===")
	fmt.Println()
	fmt.Printf("Duration:       %s\n", totalDuration.Round(time.Second))
	fmt.Printf("Total Requests: %d\n", total)
	fmt.Printf("Successful:     %d (%.1f%%)\n", success, pct(success, total))
	fmt.Printf("Failed:         %d (%.1f%%)\n", failed, pct(failed, total))
	fmt.Printf("Rate Limited:   %d (%.1f%%)\n", rateLimited, pct(rateLimited, total))
	fmt.Printf("Queue Full:     %d (%.1f%%)\n", queueFull, pct(queueFull, total))
	fmt.Printf("Throughput:     %.0f req/s\n", float64(total)/totalDuration.Seconds())
	fmt.Println()

	if len(latencies) > 0 {
		fmt.Println("Latency Distribution:")
		fmt.Printf("  p50:  %s\n", percentile(latencies, 0.50))
		fmt.Printf("  p90:  %s\n", percentile(latencies, 0.90))
		fmt.Printf("  p95:  %s\n", percentile(latencies, 0.95))
		fmt.Printf("  p99:  %s\n", percentile(latencies, 0.99))
		fmt.Printf("  max:  %s\n", latencies[len(latencies)-1])
	}

	fmt.Println()
	fmt.Println("=== END REPORT ===")
}

func percentile(sorted []time.Duration, p float64) time.Duration {
	idx := int(float64(len(sorted)-1) * p)
	if idx >= len(sorted) {
		idx = len(sorted) - 1
	}
	return sorted[idx]
}

func pct(part, total int64) float64 {
	if total == 0 {
		return 0
	}
	return float64(part) / float64(total) * 100
}

func envOr(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}

func envInt(key string, fallback int) int {
	if v := os.Getenv(key); v != "" {
		var n int
		if _, err := fmt.Sscanf(v, "%d", &n); err == nil {
			return n
		}
	}
	return fallback
}

func envDuration(key string, fallback time.Duration) time.Duration {
	if v := os.Getenv(key); v != "" {
		if d, err := time.ParseDuration(v); err == nil {
			return d
		}
	}
	return fallback
}
