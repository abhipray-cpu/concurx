# concurx Stress Test Suite

Dockerized stress test application that exercises every concurx primitive and pattern under realistic production conditions.

## Architecture

```
                    ┌──────────────────┐
                    │  Load Generator  │
                    │  (configurable   │
                    │   request rate)  │
                    └────────┬─────────┘
                             │ HTTP
                    ┌────────▼─────────┐
                    │  Order Processor │ ◄── Prometheus scrapes :9090/metrics
                    │  (concurx app)   │
                    └──┬─────┬─────┬───┘
                       │     │     │
              ┌────────┘     │     └────────┐
              │              │              │
       ┌──────▼──────┐ ┌────▼────┐ ┌───────▼──────┐
       │  Inventory  │ │ Payment │ │   Shipping   │
       │  (mock svc) │ │ (mock)  │ │   (mock svc) │
       └─────────────┘ └─────────┘ └──────────────┘

       ┌──────────────┐     ┌──────────────┐
       │  Prometheus   │────▶│   Grafana    │ :3000
       └──────────────┘     └──────────────┘

       ┌──────────────┐
       │  Chaos Agent │ (optional profile)
       └──────────────┘
```

## Quick Start

```bash
# Build and start all services
docker compose up --build -d

# Run load test (default: 1000 req/s for 60s)
docker compose --profile test up load-generator

# Run chaos test
docker compose --profile chaos up chaos-agent

# View metrics dashboard
open http://localhost:3000

# View Prometheus
open http://localhost:9090

# Tear down
docker compose --profile test --profile chaos down -v
```

## Configuration

### Order Processor

| Env Var | Default | Description |
|---------|---------|-------------|
| `PORT` | `8080` | HTTP listen port |
| `WORKERS` | `50` | WorkerGroup pool size |
| `QUEUE_SIZE` | `1000` | WorkerGroup queue depth |
| `RATE_LIMIT_RPS` | `500` | Rate limiter requests/sec |
| `BULKHEAD_CONCURRENCY` | `10` | Inventory bulkhead slots |
| `CB_FAILURE_THRESHOLD` | `5` | Circuit breaker failure threshold |
| `CB_RECOVERY_TIMEOUT` | `30s` | Circuit breaker recovery timeout |
| `RETRY_MAX_ATTEMPTS` | `3` | Retry max attempts |
| `TIMEOUT_DURATION` | `5s` | Per-operation timeout |

### Mock Services

| Env Var | Default | Description |
|---------|---------|-------------|
| `PORT` | `8080` | Listen port |
| `SERVICE_NAME` | `mock` | Service identifier |
| `FAILURE_RATE` | `0.05` | Fraction of requests that fail (0.0-1.0) |
| `LATENCY_P50` | `10ms` | Median latency |
| `LATENCY_P99` | `200ms` | 99th percentile latency |

### Load Generator

| Env Var | Default | Description |
|---------|---------|-------------|
| `TARGET_URL` | `http://order-processor:8080` | Target base URL |
| `RPS` | `1000` | Requests per second |
| `DURATION` | `60s` | Test duration |
| `RAMP_UP` | `5s` | Ramp-up period |

### Chaos Agent

| Env Var | Default | Description |
|---------|---------|-------------|
| `TARGET_CONTAINERS` | `inventory,payment,shipping` | Containers to target |
| `CHAOS_INTERVAL` | `10s` | Time between chaos events |
| `CHAOS_DURATION` | `5s` | Duration of each disruption |
| `CHAOS_TYPES` | `kill,pause,latency` | Types of chaos to inject |

## What This Proves

After running the full suite, the stress test report answers:

1. **Throughput** — Can it sustain >10,000 ops/sec?
2. **Stability** — Does memory/goroutine count stay bounded over 10 minutes?
3. **Fault tolerance** — What happens when downstream services die?
4. **Panic isolation** — What happens when 50% of jobs panic?
5. **Graceful shutdown** — How long to drain under peak load?
6. **Breaking point** — At what load does latency degrade >10x?
