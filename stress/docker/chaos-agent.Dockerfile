# Build context: repository root
FROM golang:1.23-alpine AS builder
WORKDIR /src

COPY . .

WORKDIR /src/stress
RUN CGO_ENABLED=0 go build -o /app ./cmd/chaos-agent

FROM alpine:3.21
COPY --from=builder /app /app
ENTRYPOINT ["/app"]
