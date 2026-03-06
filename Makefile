.PHONY: help test test-verbose test-race test-coverage test-count bench lint format clean install-tools mod-tidy doc examples all

# ============================================================================
# Variables
# ============================================================================

GO := go
GOFLAGS := -v
COVERAGE_FILE := coverage.out
COVERAGE_HTML := coverage.html
MIN_COVERAGE := 80

# Colors for output
BLUE := \033[0;34m
GREEN := \033[0;32m
YELLOW := \033[0;33m
RED := \033[0;31m
NC := \033[0m # No Color

# ============================================================================
# Help
# ============================================================================

help:
	@echo "$(BLUE)concurx - Development Makefile$(NC)"
	@echo ""
	@echo "$(GREEN)Testing targets:$(NC)"
	@echo "  make test              - Run all tests"
	@echo "  make test-verbose      - Run tests with verbose output"
	@echo "  make test-race         - Run tests with race detector"
	@echo "  make test-coverage     - Run tests with coverage report"
	@echo "  make test-count N=40   - Run tests N times (stress test)"
	@echo ""
	@echo "$(GREEN)Quality targets:$(NC)"
	@echo "  make lint              - Run linter"
	@echo "  make format            - Format and fix code style"
	@echo "  make vet               - Run go vet"
	@echo "  make tidy              - Remove unused dependencies"
	@echo ""
	@echo "$(GREEN)Build & Performance:$(NC)"
	@echo "  make bench             - Run benchmarks"
	@echo "  make build             - Build the library"
	@echo ""
	@echo "$(GREEN)Documentation:$(NC)"
	@echo "  make doc               - Generate documentation"
	@echo "  make examples          - Run example programs"
	@echo ""
	@echo "$(GREEN)Comprehensive targets:$(NC)"
	@echo "  make check             - Run tests + lint + vet"
	@echo "  make all               - Full CI pipeline (tests, race, coverage, lint, vet, fmt)"
	@echo "  make clean             - Clean generated files"
	@echo "  make install-tools     - Install development tools"
	@echo ""

# ============================================================================
# Testing Targets
# ============================================================================

test:
	@echo "$(BLUE)Running tests...$(NC)"
	@$(GO) test ./... $(GOFLAGS)

test-verbose:
	@echo "$(BLUE)Running tests (verbose)...$(NC)"
	@$(GO) test ./... -v

test-race:
	@echo "$(BLUE)Running tests with race detector...$(NC)"
	@$(GO) test ./... -race -v

test-coverage:
	@echo "$(BLUE)Running tests with coverage...$(NC)"
	@$(GO) test ./... -coverprofile=$(COVERAGE_FILE) -cover $(GOFLAGS)
	@echo ""
	@echo "$(GREEN)Coverage Summary:$(NC)"
	@$(GO) tool cover -func=$(COVERAGE_FILE) | tail -1
	@echo ""
	@echo "$(YELLOW)Generating HTML coverage report to $(COVERAGE_HTML)...$(NC)"
	@$(GO) tool cover -html=$(COVERAGE_FILE) -o $(COVERAGE_HTML)
	@echo "$(GREEN)✓ Coverage report: $(COVERAGE_HTML)$(NC)"

test-count:
	@if [ -z "$(N)" ]; then \
		echo "$(RED)Error: Please specify N parameter (e.g., make test-count N=40)$(NC)"; \
		exit 1; \
	fi
	@echo "$(BLUE)Running tests $(N) times (stress test)...$(NC)"
	@$(GO) test ./... -count=$(N) -v

# Full test suite: unit + race + coverage
test-full: test-race test-coverage
	@echo "$(GREEN)✓ Full test suite passed$(NC)"

# ============================================================================
# Quality & Linting Targets
# ============================================================================

lint:
	@echo "$(BLUE)Running golangci-lint...$(NC)"
	@if ! command -v golangci-lint &> /dev/null; then \
		echo "$(YELLOW)golangci-lint not found. Installing...$(NC)"; \
		go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest; \
	fi
	@golangci-lint run ./... --timeout=5m || true
	@echo "$(GREEN)✓ Linting complete$(NC)"

format:
	@echo "$(BLUE)Formatting code...$(NC)"
	@$(GO) fmt ./...
	@echo "$(YELLOW)Running goimports...$(NC)"
	@if ! command -v goimports &> /dev/null; then \
		echo "$(YELLOW)goimports not found. Installing...$(NC)"; \
		go install golang.org/x/tools/cmd/goimports@latest; \
	fi
	@goimports -w .
	@echo "$(GREEN)✓ Code formatted$(NC)"

vet:
	@echo "$(BLUE)Running go vet...$(NC)"
	@$(GO) vet ./...
	@echo "$(GREEN)✓ No vet issues found$(NC)"

tidy:
	@echo "$(BLUE)Tidying dependencies...$(NC)"
	@$(GO) mod tidy
	@echo "$(GREEN)✓ Dependencies tidied$(NC)"

# ============================================================================
# Build & Performance Targets
# ============================================================================

build:
	@echo "$(BLUE)Building library...$(NC)"
	@$(GO) build ./...
	@echo "$(GREEN)✓ Build successful$(NC)"

bench:
	@echo "$(BLUE)Running benchmarks...$(NC)"
	@$(GO) test ./... -bench=. -benchmem -run=^$

# ============================================================================
# Documentation Targets
# ============================================================================

doc:
	@echo "$(BLUE)Generating documentation...$(NC)"
	@$(GO) doc -all github.com/abhipray-cpu/concurx/group
	@$(GO) doc -all github.com/abhipray-cpu/concurx/supervisor
	@$(GO) doc -all github.com/abhipray-cpu/concurx/workergroup

examples:
	@echo "$(BLUE)Running example programs...$(NC)"
	@for example in $$(find examples -name "main.go" -type f); do \
		dir=$$(dirname $$example); \
		echo "$(YELLOW)Running $$dir...$(NC)"; \
		$(GO) run $$example; \
		echo ""; \
	done

# ============================================================================
# Comprehensive Targets
# ============================================================================

check: test lint vet
	@echo "$(GREEN)✓ All checks passed$(NC)"

all: clean tidy format vet test-race test-coverage lint
	@echo ""
	@echo "$(GREEN)╔════════════════════════════════════════╗$(NC)"
	@echo "$(GREEN)║  ✓ All checks passed successfully!    ║$(NC)"
	@echo "$(GREEN)╚════════════════════════════════════════╝$(NC)"
	@echo ""

# ============================================================================
# Cleanup & Maintenance
# ============================================================================

clean:
	@echo "$(BLUE)Cleaning generated files...$(NC)"
	@$(GO) clean ./...
	@rm -f $(COVERAGE_FILE) $(COVERAGE_HTML)
	@echo "$(GREEN)✓ Cleanup complete$(NC)"

install-tools:
	@echo "$(BLUE)Installing development tools...$(NC)"
	@echo "$(YELLOW)• Installing golangci-lint...$(NC)"
	@go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest
	@echo "$(YELLOW)• Installing goimports...$(NC)"
	@go install golang.org/x/tools/cmd/goimports@latest
	@echo "$(YELLOW)• Installing govulncheck...$(NC)"
	@go install golang.org/x/vuln/cmd/govulncheck@latest
	@echo "$(YELLOW)• Installing staticcheck...$(NC)"
	@go install honnef.co/go/tools/cmd/staticcheck@latest
	@echo "$(GREEN)✓ Tools installed successfully$(NC)"

# ============================================================================
# Advanced Targets
# ============================================================================

vuln-check:
	@echo "$(BLUE)Checking for vulnerabilities...$(NC)"
	@if ! command -v govulncheck &> /dev/null; then \
		echo "$(YELLOW)govulncheck not found. Installing...$(NC)"; \
		go install golang.org/x/vuln/cmd/govulncheck@latest; \
	fi
	@govulncheck ./...
	@echo "$(GREEN)✓ No vulnerabilities found$(NC)"

staticcheck:
	@echo "$(BLUE)Running staticcheck...$(NC)"
	@if ! command -v staticcheck &> /dev/null; then \
		echo "$(YELLOW)staticcheck not found. Installing...$(NC)"; \
		go install honnef.co/go/tools/cmd/staticcheck@latest; \
	fi
	@staticcheck ./...
	@echo "$(GREEN)✓ No staticcheck issues found$(NC)"

mod-download:
	@echo "$(BLUE)Downloading modules...$(NC)"
	@$(GO) mod download
	@echo "$(GREEN)✓ Modules downloaded$(NC)"

mod-verify:
	@echo "$(BLUE)Verifying modules...$(NC)"
	@$(GO) mod verify
	@echo "$(GREEN)✓ Modules verified$(NC)"

# Full security check
security: vuln-check staticcheck
	@echo "$(GREEN)✓ Security checks passed$(NC)"

# Pre-commit hook target
pre-commit: format vet tidy test lint
	@echo "$(GREEN)✓ Pre-commit checks passed$(NC)"

# Show test summary
test-summary:
	@echo "$(BLUE)Test Summary:$(NC)"
	@$(GO) test ./... -v 2>&1 | grep -E "^(ok|FAIL|PASS|RUN)" | head -50

# ============================================================================
# Info & Debug
# ============================================================================

info:
	@echo "$(BLUE)Project Information:$(NC)"
	@echo "Go Version: $$($(GO) version)"
	@echo "Module: $$($(GO) mod edit -json | $(GO) run -mod=readonly -eval 'print(inputs{}.Module.Path)')"
	@$(GO) list -m all | wc -l | xargs -I {} echo "Dependencies: {}"
	@find . -name "*_test.go" | wc -l | xargs -I {} echo "Test files: {}"

# ============================================================================
# Default target
# ============================================================================

.DEFAULT_GOAL := help
