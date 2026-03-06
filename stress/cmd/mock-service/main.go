// Package mockservice provides a configurable HTTP service that simulates
// downstream dependencies with tunable latency and failure rates.
package main

import (
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"os"
	"sync/atomic"
	"time"
)

type config struct {
	Port        string
	ServiceName string
	FailureRate float64
	LatencyP50  time.Duration
	LatencyP99  time.Duration
}

type stats struct {
	total   atomic.Int64
	success atomic.Int64
	failed  atomic.Int64
}

func main() {
	cfg := loadConfig()
	s := &stats{}

	mux := http.NewServeMux()
	mux.HandleFunc("/process", func(w http.ResponseWriter, r *http.Request) {
		s.total.Add(1)

		// Simulate latency using log-normal distribution between p50 and p99
		latency := simulateLatency(cfg.LatencyP50, cfg.LatencyP99)
		time.Sleep(latency)

		// Simulate failures
		if rand.Float64() < cfg.FailureRate {
			s.failed.Add(1)
			w.WriteHeader(http.StatusInternalServerError)
			json.NewEncoder(w).Encode(map[string]string{
				"error":   "service_unavailable",
				"service": cfg.ServiceName,
			})
			return
		}

		s.success.Add(1)
		json.NewEncoder(w).Encode(map[string]interface{}{
			"service":    cfg.ServiceName,
			"status":     "ok",
			"latency_ms": latency.Milliseconds(),
		})
	})

	mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		json.NewEncoder(w).Encode(map[string]string{"status": "healthy", "service": cfg.ServiceName})
	})

	mux.HandleFunc("/stats", func(w http.ResponseWriter, r *http.Request) {
		json.NewEncoder(w).Encode(map[string]int64{
			"total":   s.total.Load(),
			"success": s.success.Load(),
			"failed":  s.failed.Load(),
		})
	})

	// Allow runtime reconfiguration
	mux.HandleFunc("/config", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPost {
			var update struct {
				FailureRate *float64 `json:"failure_rate,omitempty"`
				LatencyP50  *string  `json:"latency_p50,omitempty"`
				LatencyP99  *string  `json:"latency_p99,omitempty"`
			}
			if err := json.NewDecoder(r.Body).Decode(&update); err != nil {
				http.Error(w, err.Error(), http.StatusBadRequest)
				return
			}
			if update.FailureRate != nil {
				cfg.FailureRate = *update.FailureRate
			}
			if update.LatencyP50 != nil {
				if d, err := time.ParseDuration(*update.LatencyP50); err == nil {
					cfg.LatencyP50 = d
				}
			}
			if update.LatencyP99 != nil {
				if d, err := time.ParseDuration(*update.LatencyP99); err == nil {
					cfg.LatencyP99 = d
				}
			}
		}
		json.NewEncoder(w).Encode(map[string]interface{}{
			"failure_rate": cfg.FailureRate,
			"latency_p50":  cfg.LatencyP50.String(),
			"latency_p99":  cfg.LatencyP99.String(),
		})
	})

	addr := fmt.Sprintf(":%s", cfg.Port)
	log.Printf("[%s] listening on %s (failure_rate=%.2f, p50=%s, p99=%s)",
		cfg.ServiceName, addr, cfg.FailureRate, cfg.LatencyP50, cfg.LatencyP99)
	log.Fatal(http.ListenAndServe(addr, mux))
}

func loadConfig() *config {
	return &config{
		Port:        envOr("PORT", "8080"),
		ServiceName: envOr("SERVICE_NAME", "mock"),
		FailureRate: envDurationFloat("FAILURE_RATE", 0.05),
		LatencyP50:  envDuration("LATENCY_P50", 10*time.Millisecond),
		LatencyP99:  envDuration("LATENCY_P99", 200*time.Millisecond),
	}
}

func simulateLatency(p50, p99 time.Duration) time.Duration {
	// Use exponential distribution to approximate the tail
	// Most requests near p50, occasional spikes toward p99
	r := rand.Float64()
	if r < 0.5 {
		// Below median: uniform between 0.5*p50 and p50
		frac := 0.5 + rand.Float64()*0.5
		return time.Duration(float64(p50) * frac)
	}
	if r < 0.99 {
		// Between p50 and p99: linear interpolation
		frac := (r - 0.5) / 0.49
		return p50 + time.Duration(float64(p99-p50)*frac)
	}
	// Tail: p99 to 2*p99
	return p99 + time.Duration(float64(p99)*rand.Float64())
}

func envOr(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
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

func envDurationFloat(key string, fallback float64) float64 {
	if v := os.Getenv(key); v != "" {
		var f float64
		if _, err := fmt.Sscanf(v, "%f", &f); err == nil {
			return f
		}
	}
	return fallback
}
