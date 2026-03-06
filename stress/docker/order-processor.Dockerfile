# Build context: repository root
FROM golang:1.23-alpine AS builder
WORKDIR /src

# Copy everything (library + stress module)
COPY . .

WORKDIR /src/stress
RUN CGO_ENABLED=0 go build -o /app ./cmd/order-processor

FROM alpine:3.21
RUN apk add --no-cache ca-certificates
COPY --from=builder /app /app
EXPOSE 8080
ENTRYPOINT ["/app"]
