// Package workerpercore provides CPU-aware worker scaling.
//
// A [WorkerPerCore] pool creates one worker per available CPU core
// (configurable), distributing submitted tasks across them. It supports
// fail-fast and blocking submit modes.
//
//	pool := workerpercore.NewWorkerPerCore(workerpercore.WithWorkers(4))
//	pool.Submit(func() error { return process() })
//	pool.Shutdown()
package workerpercore
