// Package main implements the order processing stress test application.
//
// This application exercises every concurx primitive and pattern under
// realistic production conditions:
//
//   - RateLimiter for admission control
//   - WorkerGroup for bounded processing
//   - Bulkhead for inventory service isolation
//   - CircuitBreaker for payment service protection
//   - Retry for shipping service resilience
//   - Timeout for per-operation deadlines
//   - Supervisor for lifecycle management
//   - Group for structured concurrent operations
package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"sync"
	"sync/atomic"
	"syscall"
	"time"

	"github.com/abhipray-cpu/concurx/group"
	"github.com/abhipray-cpu/concurx/patterns/bulkhead"
	breaker "github.com/abhipray-cpu/concurx/patterns/circuitbreaker"
	"github.com/abhipray-cpu/concurx/patterns/ratelimiter"
	"github.com/abhipray-cpu/concurx/patterns/retry"
	"github.com/abhipray-cpu/concurx/patterns/timeout"
	"github.com/abhipray-cpu/concurx/supervisor"
	"github.com/abhipray-cpu/concurx/workergroup"
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promhttp"
)

// ---------------------------------------------------------------------------
// Metrics
// ---------------------------------------------------------------------------

var (
	ordersReceived = prometheus.NewCounter(prometheus.CounterOpts{
		Name: "orders_received_total",
		Help: "Total orders received via HTTP",
	})
	ordersProcessed = prometheus.NewCounter(prometheus.CounterOpts{
		Name: "orders_processed_total",
		Help: "Total orders successfully processed",
	})
	ordersFailed = prometheus.NewCounter(prometheus.CounterOpts{
		Name: "orders_failed_total",
		Help: "Total orders that failed processing",
	})
	ordersRateLimited = prometheus.NewCounter(prometheus.CounterOpts{
		Name: "orders_rate_limited_total",
		Help: "Total orders rejected by rate limiter",
	})
	ordersQueued = prometheus.NewGauge(prometheus.GaugeOpts{
		Name: "orders_queued",
		Help: "Current orders in the worker queue",
	})
	orderLatency = prometheus.NewHistogram(prometheus.HistogramOpts{
		Name:    "order_latency_seconds",
		Help:    "Order processing latency",
		Buckets: prometheus.ExponentialBuckets(0.001, 2, 15),
	})
	serviceCalls = prometheus.NewCounterVec(prometheus.CounterOpts{
		Name: "service_calls_total",
		Help: "Calls to downstream services",
	}, []string{"service", "status"})
	goroutineCount = prometheus.NewGauge(prometheus.GaugeOpts{
		Name: "goroutine_count",
		Help: "Current number of goroutines",
	})
	activeWorkers = prometheus.NewGauge(prometheus.GaugeOpts{
		Name: "active_workers",
		Help: "Number of active workers",
	})
)

func init() {
	prometheus.MustRegister(
		ordersReceived, ordersProcessed, ordersFailed,
		ordersRateLimited, ordersQueued, orderLatency,
		serviceCalls, goroutineCount, activeWorkers,
	)
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

type appConfig struct {
	Port                string
	Workers             int
	QueueSize           int
	RateLimitRPS        int
	BulkheadConcurrency int
	CBFailureThreshold  int
	CBRecoveryTimeout   time.Duration
	RetryMaxAttempts    int
	TimeoutDuration     time.Duration
	InventoryURL        string
	PaymentURL          string
	ShippingURL         string
}

func loadAppConfig() appConfig {
	return appConfig{
		Port:                envOr("PORT", "8080"),
		Workers:             envInt("WORKERS", 50),
		QueueSize:           envInt("QUEUE_SIZE", 1000),
		RateLimitRPS:        envInt("RATE_LIMIT_RPS", 500),
		BulkheadConcurrency: envInt("BULKHEAD_CONCURRENCY", 10),
		CBFailureThreshold:  envInt("CB_FAILURE_THRESHOLD", 5),
		CBRecoveryTimeout:   envDuration("CB_RECOVERY_TIMEOUT", 30*time.Second),
		RetryMaxAttempts:    envInt("RETRY_MAX_ATTEMPTS", 3),
		TimeoutDuration:     envDuration("TIMEOUT_DURATION", 5*time.Second),
		InventoryURL:        envOr("INVENTORY_URL", "http://inventory:8080"),
		PaymentURL:          envOr("PAYMENT_URL", "http://payment:8080"),
		ShippingURL:         envOr("SHIPPING_URL", "http://shipping:8080"),
	}
}

// ---------------------------------------------------------------------------
// Order Processing
// ---------------------------------------------------------------------------

type Order struct {
	ID       string `json:"id"`
	Customer string `json:"customer"`
	Amount   int    `json:"amount"`
	Items    int    `json:"items"`
}

type OrderResult struct {
	OrderID   string `json:"order_id"`
	Status    string `json:"status"`
	Error     string `json:"error,omitempty"`
	Inventory string `json:"inventory,omitempty"`
	Payment   string `json:"payment,omitempty"`
	Shipping  string `json:"shipping,omitempty"`
	Duration  string `json:"duration"`
}

type processor struct {
	cfg appConfig

	rl  *ratelimiter.RateLimiter
	wg  *workergroup.WorkerGroup
	bh  bulkhead.Bulkhead
	cb  *breaker.CircuitBreaker
	sup *supervisor.Supervisor

	client *http.Client

	// Stats
	inFlight   atomic.Int64
	totalOps   atomic.Int64
	successOps atomic.Int64
	failedOps  atomic.Int64
}

func newProcessor(cfg appConfig) (*processor, error) {
	// Rate limiter: token bucket at configured RPS
	rl, err := ratelimiter.New(
		ratelimiter.WithPolicy(ratelimiter.NewTokenBucket(
			cfg.RateLimitRPS,
			time.Second/time.Duration(cfg.RateLimitRPS),
		)),
		ratelimiter.WithFailFast(),
	)
	if err != nil {
		return nil, fmt.Errorf("rate limiter: %w", err)
	}

	// WorkerGroup: bounded worker pool
	wg, err := workergroup.New(workergroup.Config{
		Workers:        cfg.Workers,
		QueueSize:      cfg.QueueSize,
		SubmitBehavior: workergroup.SubmitReject,
	}, workergroup.Hooks{
		OnJobStart: func(workerID int) {
			activeWorkers.Inc()
		},
		OnJobFinish: func(workerID int) {
			activeWorkers.Dec()
			ordersQueued.Dec()
		},
	})
	if err != nil {
		return nil, fmt.Errorf("worker group: %w", err)
	}

	// Bulkhead: isolate inventory calls
	bh, err := bulkhead.NewBulkhead(
		bulkhead.WithCapacity(cfg.BulkheadConcurrency),
		bulkhead.WithQueueSize(cfg.BulkheadConcurrency*2),
		bulkhead.WithTimeout(cfg.TimeoutDuration),
	)
	if err != nil {
		return nil, fmt.Errorf("bulkhead: %w", err)
	}

	// Circuit breaker: protect payment calls
	cb, err := breaker.New(
		breaker.WithFailureThreshold(cfg.CBFailureThreshold),
		breaker.WithOpenTimeout(cfg.CBRecoveryTimeout),
	)
	if err != nil {
		return nil, fmt.Errorf("circuit breaker: %w", err)
	}

	p := &processor{
		cfg:    cfg,
		rl:     rl,
		wg:     wg,
		bh:     bh,
		cb:     cb,
		client: &http.Client{Timeout: cfg.TimeoutDuration * 2},
	}

	// Supervisor: manage the worker group lifecycle
	sup := supervisor.New()
	sup.Add(supervisor.ChildSpec{
		ID: "worker-group",
		Run: func(ctx context.Context) error {
			<-ctx.Done()
			wg.Stop()
			return ctx.Err()
		},
		Mode: supervisor.RestartModePermanent,
	})
	p.sup = sup

	return p, nil
}

func (p *processor) processOrder(ctx context.Context, order Order) OrderResult {
	start := time.Now()
	p.totalOps.Add(1)
	p.inFlight.Add(1)
	defer p.inFlight.Add(-1)

	result := OrderResult{OrderID: order.ID}

	// Use a group for structured parallel downstream calls
	g := group.New(
		group.WithContext(ctx),
		group.WithMaxConcurrency(3),
	)

	var invResp, payResp, shipResp string
	var mu sync.Mutex

	// 1. Inventory check via Bulkhead + Timeout
	g.Go(func(ctx context.Context) error {
		return timeout.Timeout(ctx, func(ctx context.Context) error {
			return p.bh.Execute(ctx, func(ctx context.Context) error {
				resp, err := p.callService(ctx, p.cfg.InventoryURL, "inventory", order)
				if err != nil {
					return err
				}
				mu.Lock()
				invResp = resp
				mu.Unlock()
				return nil
			})
		}, timeout.WithTimeout(p.cfg.TimeoutDuration))
	})

	// 2. Payment via CircuitBreaker + Timeout
	g.Go(func(ctx context.Context) error {
		return timeout.Timeout(ctx, func(ctx context.Context) error {
			return p.cb.Execute(ctx, func(ctx context.Context) error {
				resp, err := p.callService(ctx, p.cfg.PaymentURL, "payment", order)
				if err != nil {
					return err
				}
				mu.Lock()
				payResp = resp
				mu.Unlock()
				return nil
			})
		}, timeout.WithTimeout(p.cfg.TimeoutDuration))
	})

	// 3. Shipping via Retry + Timeout
	g.Go(func(ctx context.Context) error {
		return retry.Retry(ctx, func(ctx context.Context) error {
			return timeout.Timeout(ctx, func(ctx context.Context) error {
				resp, err := p.callService(ctx, p.cfg.ShippingURL, "shipping", order)
				if err != nil {
					return err
				}
				mu.Lock()
				shipResp = resp
				mu.Unlock()
				return nil
			}, timeout.WithTimeout(p.cfg.TimeoutDuration))
		},
			retry.WithMaxAttempts(p.cfg.RetryMaxAttempts),
			retry.WithBackoff(retry.ExponentialBackoff{
				Base: 100 * time.Millisecond,
				Max:  2 * time.Second,
			}),
		)
	})

	if err := g.Wait(); err != nil {
		p.failedOps.Add(1)
		ordersFailed.Inc()
		result.Status = "failed"
		result.Error = err.Error()
	} else {
		p.successOps.Add(1)
		ordersProcessed.Inc()
		result.Status = "completed"
		result.Inventory = invResp
		result.Payment = payResp
		result.Shipping = shipResp
	}

	dur := time.Since(start)
	result.Duration = dur.String()
	orderLatency.Observe(dur.Seconds())

	return result
}

func (p *processor) callService(ctx context.Context, baseURL, name string, order Order) (string, error) {
	body, _ := json.Marshal(order)
	req, err := http.NewRequestWithContext(ctx, "POST", baseURL+"/process", nil)
	if err != nil {
		serviceCalls.WithLabelValues(name, "error").Inc()
		return "", fmt.Errorf("%s: request creation failed: %w", name, err)
	}
	req.Header.Set("Content-Type", "application/json")
	_ = body // In a real app, we'd set the body

	resp, err := p.client.Do(req)
	if err != nil {
		serviceCalls.WithLabelValues(name, "error").Inc()
		return "", fmt.Errorf("%s: %w", name, err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		serviceCalls.WithLabelValues(name, "failure").Inc()
		return "", fmt.Errorf("%s: HTTP %d", name, resp.StatusCode)
	}

	serviceCalls.WithLabelValues(name, "success").Inc()

	var result map[string]interface{}
	json.NewDecoder(resp.Body).Decode(&result)
	return fmt.Sprintf("%v", result["status"]), nil
}

func (p *processor) submitOrder(ctx context.Context, order Order) (OrderResult, error) {
	// Rate limit admission
	if err := p.rl.Allow(ctx); err != nil {
		ordersRateLimited.Inc()
		return OrderResult{
			OrderID: order.ID,
			Status:  "rate_limited",
			Error:   "rate limit exceeded",
		}, nil
	}

	// Submit to worker pool
	resultCh := make(chan OrderResult, 1)
	ordersQueued.Inc()

	err := p.wg.Submit(ctx, func(ctx context.Context) error {
		resultCh <- p.processOrder(ctx, order)
		return nil
	})
	if err != nil {
		ordersQueued.Dec()
		return OrderResult{
			OrderID: order.ID,
			Status:  "queue_full",
			Error:   err.Error(),
		}, nil
	}

	select {
	case r := <-resultCh:
		return r, nil
	case <-ctx.Done():
		return OrderResult{
			OrderID: order.ID,
			Status:  "timeout",
			Error:   ctx.Err().Error(),
		}, nil
	}
}

func (p *processor) stop() {
	p.rl.Close()
	p.wg.Stop()
	if p.sup != nil {
		p.sup.Stop(context.Background())
	}
}

// ---------------------------------------------------------------------------
// HTTP Server
// ---------------------------------------------------------------------------

func main() {
	cfg := loadAppConfig()

	proc, err := newProcessor(cfg)
	if err != nil {
		log.Fatalf("failed to create processor: %v", err)
	}

	// Start supervisor
	supCtx, supCancel := context.WithCancel(context.Background())
	defer supCancel()
	proc.sup.Start(supCtx)

	mux := http.NewServeMux()

	// Order submission endpoint
	mux.HandleFunc("/orders", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "POST only", http.StatusMethodNotAllowed)
			return
		}

		ordersReceived.Inc()

		var order Order
		if err := json.NewDecoder(r.Body).Decode(&order); err != nil {
			http.Error(w, "invalid JSON: "+err.Error(), http.StatusBadRequest)
			return
		}

		if order.ID == "" {
			order.ID = fmt.Sprintf("ord-%d", time.Now().UnixNano())
		}

		result, _ := proc.submitOrder(r.Context(), order)

		w.Header().Set("Content-Type", "application/json")
		if result.Status == "completed" {
			w.WriteHeader(http.StatusOK)
		} else if result.Status == "rate_limited" || result.Status == "queue_full" {
			w.WriteHeader(http.StatusTooManyRequests)
		} else {
			w.WriteHeader(http.StatusInternalServerError)
		}
		json.NewEncoder(w).Encode(result)
	})

	// Health check
	mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		json.NewEncoder(w).Encode(map[string]interface{}{
			"status":    "healthy",
			"in_flight": proc.inFlight.Load(),
			"total":     proc.totalOps.Load(),
			"success":   proc.successOps.Load(),
			"failed":    proc.failedOps.Load(),
		})
	})

	// Stats
	mux.HandleFunc("/stats", func(w http.ResponseWriter, r *http.Request) {
		json.NewEncoder(w).Encode(map[string]interface{}{
			"in_flight":  proc.inFlight.Load(),
			"total":      proc.totalOps.Load(),
			"success":    proc.successOps.Load(),
			"failed":     proc.failedOps.Load(),
			"workers":    cfg.Workers,
			"queue_size": cfg.QueueSize,
			"rate_limit": cfg.RateLimitRPS,
		})
	})

	// Prometheus metrics
	mux.Handle("/metrics", promhttp.Handler())

	addr := fmt.Sprintf(":%s", cfg.Port)
	server := &http.Server{Addr: addr, Handler: mux}

	// Graceful shutdown
	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, syscall.SIGTERM, syscall.SIGINT)

	go func() {
		sig := <-sigCh
		log.Printf("received signal %v, shutting down", sig)

		shutCtx, shutCancel := context.WithTimeout(context.Background(), 30*time.Second)
		defer shutCancel()

		server.Shutdown(shutCtx)
		proc.stop()
	}()

	log.Printf("order-processor starting on %s (workers=%d, queue=%d, rps=%d)",
		addr, cfg.Workers, cfg.QueueSize, cfg.RateLimitRPS)

	if err := server.ListenAndServe(); err != http.ErrServerClosed {
		log.Fatalf("server error: %v", err)
	}

	log.Printf("shutdown complete (total=%d, success=%d, failed=%d)",
		proc.totalOps.Load(), proc.successOps.Load(), proc.failedOps.Load())
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

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
