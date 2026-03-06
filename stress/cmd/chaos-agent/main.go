// Package main implements a chaos agent that disrupts downstream services
// to test concurx fault tolerance under realistic failure scenarios.
//
// The chaos agent uses the Docker API (via unix socket) to kill, pause,
// and unpause containers, simulating production infrastructure failures.
package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"math/rand"
	"net"
	"net/http"
	"os"
	"os/signal"
	"strings"
	"syscall"
	"time"
)

type config struct {
	TargetContainers []string
	ChaosInterval    time.Duration
	ChaosDuration    time.Duration
	ChaosTypes       []string
	DockerSocket     string
}

type chaosEvent struct {
	Timestamp time.Time `json:"timestamp"`
	Container string    `json:"container"`
	Action    string    `json:"action"`
	Duration  string    `json:"duration"`
	Error     string    `json:"error,omitempty"`
}

func main() {
	cfg := config{
		TargetContainers: strings.Split(envOr("TARGET_CONTAINERS", "inventory,payment,shipping"), ","),
		ChaosInterval:    envDuration("CHAOS_INTERVAL", 10*time.Second),
		ChaosDuration:    envDuration("CHAOS_DURATION", 5*time.Second),
		ChaosTypes:       strings.Split(envOr("CHAOS_TYPES", "kill,pause"), ","),
		DockerSocket:     envOr("DOCKER_SOCKET", "/var/run/docker.sock"),
	}

	log.Printf("chaos agent starting: targets=%v interval=%s duration=%s types=%v",
		cfg.TargetContainers, cfg.ChaosInterval, cfg.ChaosDuration, cfg.ChaosTypes)

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, syscall.SIGTERM, syscall.SIGINT)
	go func() {
		<-sigCh
		log.Println("received signal, stopping chaos agent")
		cancel()
	}()

	client := newDockerClient(cfg.DockerSocket)
	var events []chaosEvent

	ticker := time.NewTicker(cfg.ChaosInterval)
	defer ticker.Stop()

	for {
		select {
		case <-ctx.Done():
			log.Println("chaos agent stopped")
			printSummary(events)
			return
		case <-ticker.C:
			// Pick a random target and action
			target := cfg.TargetContainers[rand.Intn(len(cfg.TargetContainers))]
			action := cfg.ChaosTypes[rand.Intn(len(cfg.ChaosTypes))]

			ev := chaosEvent{
				Timestamp: time.Now(),
				Container: target,
				Action:    action,
				Duration:  cfg.ChaosDuration.String(),
			}

			log.Printf("CHAOS: %s -> %s for %s", action, target, cfg.ChaosDuration)

			containerID, err := findContainer(ctx, client, target)
			if err != nil {
				ev.Error = fmt.Sprintf("find container: %v", err)
				log.Printf("  error: %s", ev.Error)
				events = append(events, ev)
				continue
			}

			switch action {
			case "kill":
				err = killContainer(ctx, client, containerID)
				// Docker Compose will restart it automatically
			case "pause":
				err = pauseContainer(ctx, client, containerID)
				if err == nil {
					// Unpause after chaos duration
					go func(id string, dur time.Duration) {
						time.Sleep(dur)
						unpauseContainer(context.Background(), client, id)
						log.Printf("CHAOS: unpause -> %s", target)
					}(containerID, cfg.ChaosDuration)
				}
			case "stop":
				err = stopContainer(ctx, client, containerID)
				// Docker Compose will restart it
			}

			if err != nil {
				ev.Error = err.Error()
				log.Printf("  error: %s", err)
			}

			events = append(events, ev)
		}
	}
}

// ---------------------------------------------------------------------------
// Docker API (via unix socket, no external dependency)
// ---------------------------------------------------------------------------

func newDockerClient(socketPath string) *http.Client {
	return &http.Client{
		Transport: &http.Transport{
			DialContext: func(ctx context.Context, network, addr string) (net.Conn, error) {
				return net.Dial("unix", socketPath)
			},
		},
		Timeout: 10 * time.Second,
	}
}

func findContainer(ctx context.Context, client *http.Client, name string) (string, error) {
	req, _ := http.NewRequestWithContext(ctx, "GET",
		fmt.Sprintf("http://docker/containers/json?filters={\"name\":[\"%s\"]}", name),
		nil,
	)

	resp, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	var containers []struct {
		ID string `json:"Id"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&containers); err != nil {
		return "", err
	}
	if len(containers) == 0 {
		return "", fmt.Errorf("container %q not found", name)
	}
	return containers[0].ID, nil
}

func killContainer(ctx context.Context, client *http.Client, id string) error {
	return dockerPost(ctx, client, fmt.Sprintf("/containers/%s/kill", id))
}

func pauseContainer(ctx context.Context, client *http.Client, id string) error {
	return dockerPost(ctx, client, fmt.Sprintf("/containers/%s/pause", id))
}

func unpauseContainer(ctx context.Context, client *http.Client, id string) error {
	return dockerPost(ctx, client, fmt.Sprintf("/containers/%s/unpause", id))
}

func stopContainer(ctx context.Context, client *http.Client, id string) error {
	return dockerPost(ctx, client, fmt.Sprintf("/containers/%s/stop?t=1", id))
}

func dockerPost(ctx context.Context, client *http.Client, path string) error {
	req, _ := http.NewRequestWithContext(ctx, "POST", "http://docker"+path, nil)
	resp, err := client.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	if resp.StatusCode >= 400 {
		body, _ := io.ReadAll(resp.Body)
		return fmt.Errorf("docker API %s: HTTP %d: %s", path, resp.StatusCode, string(body))
	}
	return nil
}

func printSummary(events []chaosEvent) {
	fmt.Println("\n=== CHAOS AGENT REPORT ===")
	fmt.Printf("Total events: %d\n", len(events))

	byAction := map[string]int{}
	byContainer := map[string]int{}
	errors := 0
	for _, ev := range events {
		byAction[ev.Action]++
		byContainer[ev.Container]++
		if ev.Error != "" {
			errors++
		}
	}

	fmt.Println("\nEvents by action:")
	for action, count := range byAction {
		fmt.Printf("  %s: %d\n", action, count)
	}

	fmt.Println("\nEvents by container:")
	for container, count := range byContainer {
		fmt.Printf("  %s: %d\n", container, count)
	}

	fmt.Printf("\nErrors: %d\n", errors)
	fmt.Println("=== END CHAOS REPORT ===")
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
