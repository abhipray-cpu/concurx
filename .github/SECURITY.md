# Security Policy

## Supported Versions

We actively support the following versions of concurx with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | ✅ Yes             |
| 0.x.x   | ❌ No (Pre-release) |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security vulnerability in concurx, please report it responsibly.

### How to Report

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report security vulnerabilities by emailing us directly at:
- **Security Email**: [security@concurx.dev](mailto:dumkaabhipray@gmail.com)
- **Alternative**: Send a private message to [@abhipray-cpu](https://github.com/abhipray-cpu)

### What to Include

When reporting a vulnerability, please include:

1. **Description**: A clear description of the vulnerability
2. **Impact**: The potential impact and severity
3. **Reproduction**: Detailed steps to reproduce the vulnerability
4. **Proof of Concept**: If possible, include a minimal proof of concept
5. **Environment**: Go version, concurx version, OS, etc.
6. **Timeline**: Any timeline constraints for disclosure

### Response Timeline

We will acknowledge receipt of your vulnerability report within **48 hours** and will strive to:

- Provide an initial response within **72 hours**
- Keep you informed of our progress
- Work with you to understand and resolve the issue
- Coordinate disclosure timing

### Security Update Process

Once a security vulnerability is confirmed:

1. We will develop and test a fix
2. We will prepare a security advisory
3. We will release a patch version
4. We will publish the security advisory
5. We will update this security policy if needed

## Security Best Practices

When using concurx in your applications:

### General Guidelines

- **Keep Updated**: Always use the latest stable version
- **Review Dependencies**: Regularly audit your dependencies
- **Monitor Advisories**: Watch for security advisories
- **Report Issues**: Report any suspicious behavior

### Concurrency Security

- **Resource Limits**: Always set appropriate limits (timeouts, worker counts, etc.)
- **Error Handling**: Implement robust error handling to prevent information leakage
- **Context Cancellation**: Use context.Context for proper cancellation and timeouts
- **Race Conditions**: Be aware of race conditions in your application code

### Configuration Security

```go
// Example: Secure configuration
cfg := workergroup.Config{
    Workers:   100,  // Prevent resource exhaustion
    QueueSize: 1000, // Limit queue size
}
```

### Common Pitfalls to Avoid

1. **Unbounded Goroutines**: Always limit concurrent operations
2. **Resource Leaks**: Ensure proper cleanup in error scenarios
3. **Panic Propagation**: Handle panics appropriately
4. **Context Leaks**: Always cancel contexts when done
5. **Deadlocks**: Be careful with nested locking scenarios

## Vulnerability Disclosure Policy

We believe in responsible disclosure and will work with security researchers to:

- Acknowledge and validate reported vulnerabilities
- Develop fixes in a timely manner
- Coordinate disclosure to protect users
- Provide credit to researchers (with their permission)

## Security-Related Resources

- **Go Security**: https://golang.org/security
- **OWASP Go Secure Coding**: https://owasp.org/www-project-go-secure-coding-practices-guide/
- **Concurrency Security**: https://github.com/golang/go/wiki/CodeReviewComments#synchronous-functions

## Contact

For security-related questions or concerns:

- **Email**: security@concurx.dev
- **Maintainer**: [@abhipray-cpu](https://github.com/abhipray-cpu)

---

**Thank you for helping keep concurx and its users safe!**