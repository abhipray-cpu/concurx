// Package supervisor provides Erlang-style fault-tolerant process
// supervision for Go services.
//
// A [Supervisor] manages a set of child processes ([ChildSpec]), automatically
// restarting them according to a configurable [Strategy] when they fail.
// Supported strategies include one-for-one, all-for-one, and
// backoff-based restart with exponential delay.
//
// Children declare a [RestartMode] (Permanent, Transient, Temporary) that
// controls whether and when they are restarted after termination.
//
//	sup := supervisor.New(
//	    supervisor.WithStrategy(supervisor.NewBackoffOneForOne(
//	        100*time.Millisecond, 5*time.Second, 2.0, 0.2,
//	    )),
//	)
//	sup.Add(supervisor.ChildSpec{ID: "worker", Run: runWorker})
//	sup.Start(ctx)
package supervisor
