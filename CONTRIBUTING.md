# Contributing to concurx

Thank you for your interest in contributing to concurx! This document provides guidelines and instructions for contributing.

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md).
Be respectful, inclusive, and professional in all interactions.

## Getting Started

### Prerequisites

- Go 1.25.1 or later
- `make` command-line tool
- Git

### Setup Your Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/concurx.git
   cd concurx
   ```

3. **Add upstream remote:**
   ```bash
   git remote add upstream https://github.com/abhipray-cpu/concurx.git
   ```

4. **Install development tools:**
   ```bash
   make install-tools
   ```

5. **Verify setup:**
   ```bash
   make build
   make test
   ```

## Development Workflow

### Creating a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or for bug fixes
git checkout -b fix/your-bug-fix
# or for documentation
git checkout -b docs/your-doc-update
```

Use descriptive branch names that reflect the work you're doing.

### Making Changes

1. **Write your code** following the style guidelines (see below)
2. **Add tests** for new functionality:
   - Unit tests in `*_test.go` files
   - Race condition tests if dealing with concurrency
   - Example tests for public APIs

3. **Update documentation** if you change public APIs:
   - Update doc comments on exported types/functions
   - Update `docs/USAGE.md` for API changes
   - Update `docs/ARCHITECTURE.md` for design changes

### Running Quality Checks

Before committing, run:

```bash
# Pre-commit validation
make pre-commit

# Or if you want to skip linting temporarily
make format
make vet
make test
make test-race
```

### Committing Your Changes

```bash
git add .
git commit -m "Brief description of changes

Longer explanation if needed, wrapped to 72 characters.
Reference issues: Fixes #123

- Bullet point for multiple changes
- Another important change"
```

**Commit message guidelines:**
- First line: ~50 characters, clear summary
- Body: wrapped to 72 characters, explain the "why"
- Reference related issues with `Fixes #123` or `Relates to #456`
- Use clear, descriptive language

### Pushing and Creating a Pull Request

1. **Keep your branch updated:**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request** on GitHub:
   - Use a clear title describing the changes
   - Reference any related issues
   - Describe what you changed and why
   - Link to relevant documentation

## Code Style Guide

### Formatting

- Run `make format` before committing
- All Go code must be formatted with `gofmt`
- Imports are automatically sorted by `goimports`

### Naming Conventions

- **Packages:** lowercase, single word when possible
- **Exported types/functions:** PascalCase
- **Unexported items:** camelCase
- **Constants:** PascalCase or ALL_CAPS

### Comments

All exported types and functions must have documentation comments:

```go
// NewGroup constructs a new ErrGroup with optional configuration.
// The group is inert until the first Go() call.
func New(opts ...Option) ErrGroup {
    // ...
}
```

**Guidelines:**
- Start with the name being documented
- Explain the purpose and behavior
- Document error cases if applicable
- Keep comments clear and concise

### Code Structure

- Keep functions focused and single-purpose
- Use meaningful variable names
- Avoid deep nesting
- Break complex logic into helper functions
- Use constants for magic numbers

## Testing Requirements

### Unit Tests

- Create `*_test.go` files in the same package
- Test both success and failure cases
- Test edge cases and boundary conditions

Example:
```go
func TestNewGroup_WithMaxConcurrency(t *testing.T) {
    g := New(WithMaxConcurrency(2))
    // ... test implementation
}
```

### Race Condition Tests

For concurrent code, add race condition tests:

```go
func TestGroupRace_ConcurrentGoAndWait(t *testing.T) {
    // Test that concurrent Go() and Wait() don't race
    // This will be run with -race flag
}
```

### Coverage

- Aim for >80% coverage on new code
- Check coverage: `make test-coverage && open coverage.html`
- Coverage is important but not the only metric

### Running Tests

```bash
# Run all tests
make test

# Run with race detector (CRITICAL)
make test-race

# Run tests N times (stress test)
make test-count N=40

# Generate coverage report
make test-coverage
```

## Documentation

### Code Documentation

- All exported types must have doc comments
- All exported functions must have doc comments
- Doc comments should be clear and concise
- Include examples in comments when helpful

### File Documentation

Update documentation files when making changes:

- `docs/ARCHITECTURE.md` - For design/architectural changes
- `docs/USAGE.md` - For API changes or new usage patterns
- `README.md` - For major feature additions
- Example code should be runnable and well-commented

### Commit Documentation

Good commit messages help future maintainers:
- Explain the "why", not just the "what"
- Reference related issues
- Keep lines to 72 characters
- Use imperative mood: "Add feature" not "Added feature"

## Before You Submit

### Pre-Submission Checklist

- [ ] Code passes all tests: `make test`
- [ ] No race conditions: `make test-race`
- [ ] Code is formatted: `make format`
- [ ] All checks pass: `make check`
- [ ] Coverage is adequate: `make test-coverage`
- [ ] Doc comments are present for exported items
- [ ] Tests are included for new functionality
- [ ] Commit messages are clear and descriptive
- [ ] Branch is up-to-date with upstream/main

### Full Validation

```bash
# Run the complete CI pipeline locally
make all
```

This ensures your changes will pass CI/CD.

## Types of Contributions

### Bug Fixes

1. **Create an issue** describing the bug (if none exists)
2. **Create a fix branch** referencing the issue
3. **Add a test** that reproduces the bug
4. **Fix the bug** with minimal changes
5. **Verify tests pass** with the fix

### New Features

1. **Discuss first** - Open an issue to discuss the feature
2. **Design review** - Get feedback on the approach
3. **Implement** with comprehensive tests
4. **Document** the feature thoroughly
5. **Add examples** if appropriate

### Documentation

1. **Identify gaps** in current documentation
2. **Write clear, accurate documentation**
3. **Add examples** where helpful
4. **Test examples** to ensure they work
5. **Review for clarity** and completeness

### Performance Improvements

1. **Benchmark first** - Establish baseline: `make bench`
2. **Identify bottleneck** with profiling
3. **Make minimal changes** for improvement
4. **Verify with benchmarks** - Show improvement
5. **Add regression tests** to prevent reversion

## Review Process

### What to Expect

1. **Automated checks** run on all PRs
2. **Code review** by maintainers
3. **Feedback** on code, tests, and documentation
4. **Iteration** - You may need to make changes
5. **Approval** and merge

### Responding to Feedback

- Take feedback constructively
- Ask clarifying questions if needed
- Make requested changes promptly
- Re-request review after making changes
- It's okay to discuss and propose alternatives

### Collaboration

- Comment on PRs you're interested in
- Help review other contributors' PRs
- Share knowledge and best practices
- Be respectful and supportive

## Important Guidelines

### Do's

- ✅ Write tests for all new code
- ✅ Run `make test-race` before submitting
- ✅ Keep commits focused and atomic
- ✅ Write clear commit messages
- ✅ Reference related issues
- ✅ Update documentation
- ✅ Ask questions if unsure
- ✅ Be respectful and professional

### Don'ts

- ❌ Don't mix unrelated changes in one PR
- ❌ Don't skip tests or linting
- ❌ Don't ignore race condition warnings
- ❌ Don't modify test files unnecessarily
- ❌ Don't commit without running checks
- ❌ Don't make unnecessary style changes
- ❌ Don't force-push after review starts
- ❌ Don't engage in heated discussions

## Common Issues & Solutions

### Tests Fail Locally

```bash
# Run verbose output
make test-verbose

# Check for race conditions
make test-race

# Run specific test
go test ./package -run TestName -v
```

### Code Formatting Issues

```bash
# Auto-format all code
make format

# Then commit the changes
git add .
git commit -m "Run gofmt/goimports"
```

### Import Issues

```bash
# Let goimports handle imports
make format

# If still issues, manually organize imports
```

### Race Conditions Detected

- Use proper synchronization (mutexes, channels, etc.)
- Review the race detector output carefully
- Test with `-race -count=40` for stress testing
- Check concurx documentation on concurrency patterns

## Resources

- [Go Code Review Comments](https://github.com/golang/go/wiki/CodeReviewComments)
- [Effective Go](https://golang.org/doc/effective_go)
- [concurx Architecture](docs/ARCHITECTURE.md)
- [concurx Usage](docs/USAGE.md)
- [Makefile Reference](MAKEFILE_REFERENCE.md)

## Getting Help

- **Questions:** Open an issue with the "question" label
- **Bug Reports:** Use the "bug" label with clear reproduction steps
- **Feature Requests:** Use the "enhancement" label with detailed description
- **Discussions:** Use GitHub Discussions for general topics

## Recognition

Contributors will be recognized in:
- Pull request merge messages
- Release notes (for significant contributions)
- Contributors section (when established)

We appreciate all contributions, big and small!

## License

By contributing to concurx, you agree that your contributions will be licensed under the same license as the project (see LICENSE file).

---

Thank you for contributing to concurx! 🎉

Questions? Open an issue or start a discussion.
