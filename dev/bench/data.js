window.BENCHMARK_DATA = {
  "lastUpdate": 1773025553788,
  "repoUrl": "https://github.com/abhipray-cpu/concurx",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "puttanpal@Abhiprays-MacBook-Air.local",
            "name": "Abhipray Dumka"
          },
          "committer": {
            "email": "puttanpal@Abhiprays-MacBook-Air.local",
            "name": "Abhipray Dumka"
          },
          "distinct": true,
          "id": "0b9591ff978b9c2ae848a85780af91f2d80a4716",
          "message": "fix: grant contents:write permission to benchmarks job\n\ngithub-actions[bot] was getting 403 when pushing benchmark results to\ngh-pages.  The GITHUB_TOKEN defaults to read-only in restricted repos;\nadding 'permissions: contents: write' to the job scope grants the\nminimum permission needed for benchmark-action to push data.js.",
          "timestamp": "2026-03-07T17:09:23+05:30",
          "tree_id": "1c299fc09eae8b371d16ecaf342cde3be5db26f4",
          "url": "https://github.com/abhipray-cpu/Concurrx/commit/0b9591ff978b9c2ae848a85780af91f2d80a4716"
        },
        "date": 1772884040241,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 1729,
            "unit": "ns/op\t     720 B/op\t      10 allocs/op",
            "extra": "188889 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1729,
            "unit": "ns/op",
            "extra": "188889 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 720,
            "unit": "B/op",
            "extra": "188889 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "188889 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 3979,
            "unit": "ns/op\t    1176 B/op\t      25 allocs/op",
            "extra": "84063 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 3979,
            "unit": "ns/op",
            "extra": "84063 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 1176,
            "unit": "B/op",
            "extra": "84063 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "84063 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 1083161,
            "unit": "ns/op\t    2164 B/op\t      36 allocs/op",
            "extra": "332 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1083161,
            "unit": "ns/op",
            "extra": "332 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 2164,
            "unit": "B/op",
            "extra": "332 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 36,
            "unit": "allocs/op",
            "extra": "332 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group)",
            "value": 1716,
            "unit": "ns/op\t     728 B/op\t      10 allocs/op",
            "extra": "185161 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1716,
            "unit": "ns/op",
            "extra": "185161 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 728,
            "unit": "B/op",
            "extra": "185161 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "185161 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group)",
            "value": 1121192,
            "unit": "ns/op\t    6312 B/op\t     222 allocs/op",
            "extra": "324 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1121192,
            "unit": "ns/op",
            "extra": "324 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 6312,
            "unit": "B/op",
            "extra": "324 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 222,
            "unit": "allocs/op",
            "extra": "324 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group)",
            "value": 1089320,
            "unit": "ns/op\t    2662 B/op\t      54 allocs/op",
            "extra": "328 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1089320,
            "unit": "ns/op",
            "extra": "328 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 2662,
            "unit": "B/op",
            "extra": "328 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "328 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group)",
            "value": 20609,
            "unit": "ns/op\t    6963 B/op\t     215 allocs/op",
            "extra": "17727 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 20609,
            "unit": "ns/op",
            "extra": "17727 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 6963,
            "unit": "B/op",
            "extra": "17727 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 215,
            "unit": "allocs/op",
            "extra": "17727 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 259.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1387166 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 259.4,
            "unit": "ns/op",
            "extra": "1387166 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1387166 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1387166 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 267244,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 267244,
            "unit": "ns/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 267790,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1396 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 267790,
            "unit": "ns/op",
            "extra": "1396 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1396 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1396 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 5149525,
            "unit": "ns/op\t     249 B/op\t       3 allocs/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 5149525,
            "unit": "ns/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 249,
            "unit": "B/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 248.4,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "1539402 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 248.4,
            "unit": "ns/op",
            "extra": "1539402 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "1539402 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1539402 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 17.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20682546 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 17.39,
            "unit": "ns/op",
            "extra": "20682546 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20682546 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20682546 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 18.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19445745 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 18.59,
            "unit": "ns/op",
            "extra": "19445745 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19445745 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19445745 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 38.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9298717 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 38.56,
            "unit": "ns/op",
            "extra": "9298717 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9298717 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9298717 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 17.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20556346 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 17.36,
            "unit": "ns/op",
            "extra": "20556346 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20556346 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20556346 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 58.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6164936 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 58.91,
            "unit": "ns/op",
            "extra": "6164936 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6164936 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6164936 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 600307,
            "unit": "ns/op\t   10205 B/op\t      23 allocs/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 600307,
            "unit": "ns/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10205,
            "unit": "B/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 516810,
            "unit": "ns/op\t   10138 B/op\t      23 allocs/op",
            "extra": "675 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 516810,
            "unit": "ns/op",
            "extra": "675 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10138,
            "unit": "B/op",
            "extra": "675 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "675 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 531459,
            "unit": "ns/op\t   10129 B/op\t      23 allocs/op",
            "extra": "678 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 531459,
            "unit": "ns/op",
            "extra": "678 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10129,
            "unit": "B/op",
            "extra": "678 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "678 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 1029669,
            "unit": "ns/op\t    4389 B/op\t      28 allocs/op",
            "extra": "352 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 1029669,
            "unit": "ns/op",
            "extra": "352 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 4389,
            "unit": "B/op",
            "extra": "352 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "352 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 2123061,
            "unit": "ns/op\t    2884 B/op\t      25 allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 2123061,
            "unit": "ns/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 2884,
            "unit": "B/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce)",
            "value": 747824,
            "unit": "ns/op\t    1294 B/op\t      18 allocs/op",
            "extra": "471 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - ns/op",
            "value": 747824,
            "unit": "ns/op",
            "extra": "471 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - B/op",
            "value": 1294,
            "unit": "B/op",
            "extra": "471 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "471 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce)",
            "value": 8322756,
            "unit": "ns/op\t    2244 B/op\t      29 allocs/op",
            "extra": "44 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - ns/op",
            "value": 8322756,
            "unit": "ns/op",
            "extra": "44 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - B/op",
            "value": 2244,
            "unit": "B/op",
            "extra": "44 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "44 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 2029279,
            "unit": "ns/op\t  239597 B/op\t    4107 allocs/op",
            "extra": "171 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 2029279,
            "unit": "ns/op",
            "extra": "171 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239597,
            "unit": "B/op",
            "extra": "171 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "171 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 5005347,
            "unit": "ns/op\t  698773 B/op\t   12303 allocs/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 5005347,
            "unit": "ns/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 698773,
            "unit": "B/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 12303,
            "unit": "allocs/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 152259579,
            "unit": "ns/op\t   86672 B/op\t    1298 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 152259579,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 86672,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 1298,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 20069420,
            "unit": "ns/op\t 2322768 B/op\t   40011 allocs/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 20069420,
            "unit": "ns/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 2322768,
            "unit": "B/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 40011,
            "unit": "allocs/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 2064604,
            "unit": "ns/op\t  239573 B/op\t    4107 allocs/op",
            "extra": "171 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 2064604,
            "unit": "ns/op",
            "extra": "171 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239573,
            "unit": "B/op",
            "extra": "171 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "171 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 7427,
            "unit": "ns/op\t    2375 B/op\t      25 allocs/op",
            "extra": "47576 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 7427,
            "unit": "ns/op",
            "extra": "47576 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 2375,
            "unit": "B/op",
            "extra": "47576 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "47576 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 3771,
            "unit": "ns/op\t    1072 B/op\t      15 allocs/op",
            "extra": "97568 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 3771,
            "unit": "ns/op",
            "extra": "97568 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 1072,
            "unit": "B/op",
            "extra": "97568 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "97568 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 2003070,
            "unit": "ns/op\t  239568 B/op\t    4107 allocs/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 2003070,
            "unit": "ns/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239568,
            "unit": "B/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 1012,
            "unit": "ns/op\t      12 B/op\t       0 allocs/op",
            "extra": "396855 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 1012,
            "unit": "ns/op",
            "extra": "396855 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 12,
            "unit": "B/op",
            "extra": "396855 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "396855 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 1028,
            "unit": "ns/op\t       5 B/op\t       0 allocs/op",
            "extra": "386841 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 1028,
            "unit": "ns/op",
            "extra": "386841 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 5,
            "unit": "B/op",
            "extra": "386841 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "386841 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 5357,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "69145 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 5357,
            "unit": "ns/op",
            "extra": "69145 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "69145 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "69145 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 10179504,
            "unit": "ns/op\t     680 B/op\t       8 allocs/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 10179504,
            "unit": "ns/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 680,
            "unit": "B/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 104,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "3484371 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 104,
            "unit": "ns/op",
            "extra": "3484371 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "3484371 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3484371 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 140.7,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "2511793 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 140.7,
            "unit": "ns/op",
            "extra": "2511793 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2511793 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2511793 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 270,
            "unit": "ns/op\t     144 B/op\t       6 allocs/op",
            "extra": "1318383 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 270,
            "unit": "ns/op",
            "extra": "1318383 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "1318383 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1318383 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 2145037,
            "unit": "ns/op\t     608 B/op\t      10 allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 2145037,
            "unit": "ns/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 608,
            "unit": "B/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 111.4,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "3199712 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 111.4,
            "unit": "ns/op",
            "extra": "3199712 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "3199712 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3199712 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 30019,
            "unit": "ns/op\t    1521 B/op\t      22 allocs/op",
            "extra": "12175 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 30019,
            "unit": "ns/op",
            "extra": "12175 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1521,
            "unit": "B/op",
            "extra": "12175 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "12175 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 68586471,
            "unit": "ns/op\t    1793 B/op\t      16 allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 68586471,
            "unit": "ns/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1793,
            "unit": "B/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 16,
            "unit": "allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 34282465,
            "unit": "ns/op\t    1936 B/op\t      18 allocs/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 34282465,
            "unit": "ns/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1936,
            "unit": "B/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 17170517,
            "unit": "ns/op\t    2224 B/op\t      22 allocs/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 17170517,
            "unit": "ns/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 2224,
            "unit": "B/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 8631765,
            "unit": "ns/op\t    2806 B/op\t      30 allocs/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 8631765,
            "unit": "ns/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 2806,
            "unit": "B/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 30,
            "unit": "allocs/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 4374684,
            "unit": "ns/op\t    4016 B/op\t      46 allocs/op",
            "extra": "81 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 4374684,
            "unit": "ns/op",
            "extra": "81 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 4016,
            "unit": "B/op",
            "extra": "81 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 46,
            "unit": "allocs/op",
            "extra": "81 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 1094849,
            "unit": "ns/op\t    1121 B/op\t      20 allocs/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 1094849,
            "unit": "ns/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1121,
            "unit": "B/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 16736,
            "unit": "ns/op\t    1235 B/op\t      20 allocs/op",
            "extra": "21172 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 16736,
            "unit": "ns/op",
            "extra": "21172 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1235,
            "unit": "B/op",
            "extra": "21172 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "21172 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 147.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2442082 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 147.6,
            "unit": "ns/op",
            "extra": "2442082 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2442082 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2442082 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 11186,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31119 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 11186,
            "unit": "ns/op",
            "extra": "31119 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "31119 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "31119 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 220.7,
            "unit": "ns/op\t   1430109 rejected\t       0 B/op\t       0 allocs/op",
            "extra": "1430416 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 220.7,
            "unit": "ns/op",
            "extra": "1430416 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - rejected",
            "value": 1430109,
            "unit": "rejected",
            "extra": "1430416 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1430416 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1430416 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 101.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3516888 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 101.6,
            "unit": "ns/op",
            "extra": "3516888 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3516888 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3516888 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 0.3117,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 0.3117,
            "unit": "ns/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 1475,
            "unit": "ns/op\t     568 B/op\t       9 allocs/op",
            "extra": "253687 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 1475,
            "unit": "ns/op",
            "extra": "253687 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "253687 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "253687 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 1092219,
            "unit": "ns/op\t     718 B/op\t      10 allocs/op",
            "extra": "332 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 1092219,
            "unit": "ns/op",
            "extra": "332 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 718,
            "unit": "B/op",
            "extra": "332 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "332 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 570.4,
            "unit": "ns/op\t     568 B/op\t       9 allocs/op",
            "extra": "563078 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 570.4,
            "unit": "ns/op",
            "extra": "563078 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "563078 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "563078 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 3882,
            "unit": "ns/op\t     664 B/op\t      11 allocs/op",
            "extra": "89343 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 3882,
            "unit": "ns/op",
            "extra": "89343 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 664,
            "unit": "B/op",
            "extra": "89343 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "89343 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 462.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "724856 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 462.5,
            "unit": "ns/op",
            "extra": "724856 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "724856 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "724856 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 726.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "487992 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 726.9,
            "unit": "ns/op",
            "extra": "487992 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "487992 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "487992 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 1040239,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "366 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 1040239,
            "unit": "ns/op",
            "extra": "366 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "366 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "366 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 12.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28693784 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 12.46,
            "unit": "ns/op",
            "extra": "28693784 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "28693784 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "28693784 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 20578,
            "unit": "ns/op\t   18273 B/op\t      28 allocs/op",
            "extra": "17358 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 20578,
            "unit": "ns/op",
            "extra": "17358 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 18273,
            "unit": "B/op",
            "extra": "17358 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "17358 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 27585,
            "unit": "ns/op\t   25308 B/op\t      82 allocs/op",
            "extra": "13327 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 27585,
            "unit": "ns/op",
            "extra": "13327 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 25308,
            "unit": "B/op",
            "extra": "13327 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "13327 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 153835,
            "unit": "ns/op\t  112243 B/op\t     633 allocs/op",
            "extra": "2156 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 153835,
            "unit": "ns/op",
            "extra": "2156 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 112243,
            "unit": "B/op",
            "extra": "2156 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 633,
            "unit": "allocs/op",
            "extra": "2156 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11382394912,
            "unit": "ns/op\t     924 B/op\t      14 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11382394912,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 924,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 14,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 24.31,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14740468 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 24.31,
            "unit": "ns/op",
            "extra": "14740468 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "14740468 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14740468 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 24.3,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14091633 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 24.3,
            "unit": "ns/op",
            "extra": "14091633 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "14091633 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14091633 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 25.58,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12844279 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 25.58,
            "unit": "ns/op",
            "extra": "12844279 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12844279 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12844279 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11382206132,
            "unit": "ns/op\t     902 B/op\t      13 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11382206132,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 902,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11382210610,
            "unit": "ns/op\t     902 B/op\t      13 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11382210610,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 902,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 277.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1306597 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 277.2,
            "unit": "ns/op",
            "extra": "1306597 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1306597 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1306597 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 26.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14306329 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 26.51,
            "unit": "ns/op",
            "extra": "14306329 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14306329 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14306329 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 688.9,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "568293 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 688.9,
            "unit": "ns/op",
            "extra": "568293 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "568293 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "568293 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 10.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36944653 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 10.82,
            "unit": "ns/op",
            "extra": "36944653 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "36944653 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "36944653 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "puttanpal@Abhiprays-MacBook-Air.local",
            "name": "Abhipray Dumka"
          },
          "committer": {
            "email": "puttanpal@Abhiprays-MacBook-Air.local",
            "name": "Abhipray Dumka"
          },
          "distinct": true,
          "id": "e91441ced2a9cfdeb35bb349ec1dee2cec5aa1db",
          "message": "fix: correct CI/CD badge URL (Concurrx not concurx)",
          "timestamp": "2026-03-07T17:21:17+05:30",
          "tree_id": "e6d1c7de63fad440e4d3ee1cb21a9a59a72d2d12",
          "url": "https://github.com/abhipray-cpu/Concurrx/commit/e91441ced2a9cfdeb35bb349ec1dee2cec5aa1db"
        },
        "date": 1772884762556,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 1712,
            "unit": "ns/op\t     720 B/op\t      10 allocs/op",
            "extra": "191509 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1712,
            "unit": "ns/op",
            "extra": "191509 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 720,
            "unit": "B/op",
            "extra": "191509 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "191509 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 3837,
            "unit": "ns/op\t    1176 B/op\t      25 allocs/op",
            "extra": "88926 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 3837,
            "unit": "ns/op",
            "extra": "88926 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 1176,
            "unit": "B/op",
            "extra": "88926 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "88926 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 1086382,
            "unit": "ns/op\t    2159 B/op\t      36 allocs/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1086382,
            "unit": "ns/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 2159,
            "unit": "B/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 36,
            "unit": "allocs/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group)",
            "value": 1693,
            "unit": "ns/op\t     728 B/op\t      10 allocs/op",
            "extra": "186444 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1693,
            "unit": "ns/op",
            "extra": "186444 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 728,
            "unit": "B/op",
            "extra": "186444 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "186444 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group)",
            "value": 1112463,
            "unit": "ns/op\t    6291 B/op\t     222 allocs/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1112463,
            "unit": "ns/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 6291,
            "unit": "B/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 222,
            "unit": "allocs/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group)",
            "value": 1088071,
            "unit": "ns/op\t    2641 B/op\t      54 allocs/op",
            "extra": "328 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1088071,
            "unit": "ns/op",
            "extra": "328 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 2641,
            "unit": "B/op",
            "extra": "328 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "328 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group)",
            "value": 20758,
            "unit": "ns/op\t    6937 B/op\t     214 allocs/op",
            "extra": "17872 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 20758,
            "unit": "ns/op",
            "extra": "17872 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 6937,
            "unit": "B/op",
            "extra": "17872 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 214,
            "unit": "allocs/op",
            "extra": "17872 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 255.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1404511 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 255.9,
            "unit": "ns/op",
            "extra": "1404511 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1404511 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1404511 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 267623,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1346 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 267623,
            "unit": "ns/op",
            "extra": "1346 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1346 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1346 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 266463,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1400 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 266463,
            "unit": "ns/op",
            "extra": "1400 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1400 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1400 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 5134974,
            "unit": "ns/op\t     249 B/op\t       3 allocs/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 5134974,
            "unit": "ns/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 249,
            "unit": "B/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 238.8,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "1518087 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 238.8,
            "unit": "ns/op",
            "extra": "1518087 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "1518087 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1518087 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 17.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20161764 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 17.4,
            "unit": "ns/op",
            "extra": "20161764 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20161764 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20161764 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 18.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19347648 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 18.57,
            "unit": "ns/op",
            "extra": "19347648 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19347648 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19347648 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 38.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9306326 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 38.69,
            "unit": "ns/op",
            "extra": "9306326 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9306326 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9306326 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 17.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20736422 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 17.32,
            "unit": "ns/op",
            "extra": "20736422 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20736422 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20736422 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 61.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5826312 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 61.21,
            "unit": "ns/op",
            "extra": "5826312 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5826312 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5826312 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 586244,
            "unit": "ns/op\t   10217 B/op\t      23 allocs/op",
            "extra": "603 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 586244,
            "unit": "ns/op",
            "extra": "603 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10217,
            "unit": "B/op",
            "extra": "603 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "603 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 541792,
            "unit": "ns/op\t   10134 B/op\t      23 allocs/op",
            "extra": "692 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 541792,
            "unit": "ns/op",
            "extra": "692 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10134,
            "unit": "B/op",
            "extra": "692 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "692 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 509918,
            "unit": "ns/op\t   10136 B/op\t      23 allocs/op",
            "extra": "703 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 509918,
            "unit": "ns/op",
            "extra": "703 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10136,
            "unit": "B/op",
            "extra": "703 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "703 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 1033065,
            "unit": "ns/op\t    4382 B/op\t      28 allocs/op",
            "extra": "355 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 1033065,
            "unit": "ns/op",
            "extra": "355 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 4382,
            "unit": "B/op",
            "extra": "355 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "355 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 2141656,
            "unit": "ns/op\t    2889 B/op\t      25 allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 2141656,
            "unit": "ns/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 2889,
            "unit": "B/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce)",
            "value": 754783,
            "unit": "ns/op\t    1313 B/op\t      18 allocs/op",
            "extra": "463 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - ns/op",
            "value": 754783,
            "unit": "ns/op",
            "extra": "463 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - B/op",
            "value": 1313,
            "unit": "B/op",
            "extra": "463 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "463 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce)",
            "value": 8014790,
            "unit": "ns/op\t    2037 B/op\t      27 allocs/op",
            "extra": "44 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - ns/op",
            "value": 8014790,
            "unit": "ns/op",
            "extra": "44 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - B/op",
            "value": 2037,
            "unit": "B/op",
            "extra": "44 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "44 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 1975956,
            "unit": "ns/op\t  239590 B/op\t    4107 allocs/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 1975956,
            "unit": "ns/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239590,
            "unit": "B/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "184 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 4852576,
            "unit": "ns/op\t  698778 B/op\t   12303 allocs/op",
            "extra": "75 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 4852576,
            "unit": "ns/op",
            "extra": "75 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 698778,
            "unit": "B/op",
            "extra": "75 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 12303,
            "unit": "allocs/op",
            "extra": "75 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 167331312,
            "unit": "ns/op\t   85840 B/op\t    1297 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 167331312,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 85840,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 1297,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 19326173,
            "unit": "ns/op\t 2322764 B/op\t   40011 allocs/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 19326173,
            "unit": "ns/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 2322764,
            "unit": "B/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 40011,
            "unit": "allocs/op",
            "extra": "18 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 1974525,
            "unit": "ns/op\t  239570 B/op\t    4107 allocs/op",
            "extra": "178 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 1974525,
            "unit": "ns/op",
            "extra": "178 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239570,
            "unit": "B/op",
            "extra": "178 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "178 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 7160,
            "unit": "ns/op\t    2374 B/op\t      26 allocs/op",
            "extra": "48504 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 7160,
            "unit": "ns/op",
            "extra": "48504 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 2374,
            "unit": "B/op",
            "extra": "48504 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 26,
            "unit": "allocs/op",
            "extra": "48504 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 3675,
            "unit": "ns/op\t    1072 B/op\t      15 allocs/op",
            "extra": "99769 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 3675,
            "unit": "ns/op",
            "extra": "99769 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 1072,
            "unit": "B/op",
            "extra": "99769 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "99769 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 1921525,
            "unit": "ns/op\t  239568 B/op\t    4107 allocs/op",
            "extra": "180 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 1921525,
            "unit": "ns/op",
            "extra": "180 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239568,
            "unit": "B/op",
            "extra": "180 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "180 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 1007,
            "unit": "ns/op\t      12 B/op\t       0 allocs/op",
            "extra": "376514 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 1007,
            "unit": "ns/op",
            "extra": "376514 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 12,
            "unit": "B/op",
            "extra": "376514 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "376514 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 1028,
            "unit": "ns/op\t       5 B/op\t       0 allocs/op",
            "extra": "383544 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 1028,
            "unit": "ns/op",
            "extra": "383544 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 5,
            "unit": "B/op",
            "extra": "383544 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "383544 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 5375,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "69082 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 5375,
            "unit": "ns/op",
            "extra": "69082 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "69082 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "69082 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 10159275,
            "unit": "ns/op\t     665 B/op\t       8 allocs/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 10159275,
            "unit": "ns/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 665,
            "unit": "B/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 104.4,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "3433556 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 104.4,
            "unit": "ns/op",
            "extra": "3433556 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "3433556 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3433556 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 141.4,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "2541540 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 141.4,
            "unit": "ns/op",
            "extra": "2541540 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2541540 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2541540 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 268.9,
            "unit": "ns/op\t     144 B/op\t       6 allocs/op",
            "extra": "1335753 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 268.9,
            "unit": "ns/op",
            "extra": "1335753 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "1335753 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1335753 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 2142742,
            "unit": "ns/op\t     608 B/op\t      10 allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 2142742,
            "unit": "ns/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 608,
            "unit": "B/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 111.8,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "3236256 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 111.8,
            "unit": "ns/op",
            "extra": "3236256 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "3236256 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3236256 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 28717,
            "unit": "ns/op\t    1522 B/op\t      22 allocs/op",
            "extra": "12556 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 28717,
            "unit": "ns/op",
            "extra": "12556 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1522,
            "unit": "B/op",
            "extra": "12556 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "12556 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 68462035,
            "unit": "ns/op\t    1796 B/op\t      16 allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 68462035,
            "unit": "ns/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1796,
            "unit": "B/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 16,
            "unit": "allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 34248777,
            "unit": "ns/op\t    1952 B/op\t      18 allocs/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 34248777,
            "unit": "ns/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1952,
            "unit": "B/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 17202384,
            "unit": "ns/op\t    2231 B/op\t      22 allocs/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 17202384,
            "unit": "ns/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 2231,
            "unit": "B/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 8620534,
            "unit": "ns/op\t    2808 B/op\t      30 allocs/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 8620534,
            "unit": "ns/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 2808,
            "unit": "B/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 30,
            "unit": "allocs/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 4378693,
            "unit": "ns/op\t    3966 B/op\t      46 allocs/op",
            "extra": "81 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 4378693,
            "unit": "ns/op",
            "extra": "81 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 3966,
            "unit": "B/op",
            "extra": "81 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 46,
            "unit": "allocs/op",
            "extra": "81 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 1095879,
            "unit": "ns/op\t    1178 B/op\t      20 allocs/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 1095879,
            "unit": "ns/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1178,
            "unit": "B/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 16279,
            "unit": "ns/op\t    1234 B/op\t      20 allocs/op",
            "extra": "21470 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 16279,
            "unit": "ns/op",
            "extra": "21470 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1234,
            "unit": "B/op",
            "extra": "21470 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "21470 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 147.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2449448 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 147.2,
            "unit": "ns/op",
            "extra": "2449448 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2449448 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2449448 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 10965,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43195 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 10965,
            "unit": "ns/op",
            "extra": "43195 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43195 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43195 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 91.89,
            "unit": "ns/op\t   3691803 rejected\t       0 B/op\t       0 allocs/op",
            "extra": "3692143 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 91.89,
            "unit": "ns/op",
            "extra": "3692143 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - rejected",
            "value": 3691803,
            "unit": "rejected",
            "extra": "3692143 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3692143 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3692143 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 103.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3522429 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 103.1,
            "unit": "ns/op",
            "extra": "3522429 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3522429 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3522429 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 0.312,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 0.312,
            "unit": "ns/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 1453,
            "unit": "ns/op\t     568 B/op\t       9 allocs/op",
            "extra": "240008 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 1453,
            "unit": "ns/op",
            "extra": "240008 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "240008 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "240008 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 1085267,
            "unit": "ns/op\t     779 B/op\t      10 allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 1085267,
            "unit": "ns/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 779,
            "unit": "B/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 567.3,
            "unit": "ns/op\t     568 B/op\t       9 allocs/op",
            "extra": "556858 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 567.3,
            "unit": "ns/op",
            "extra": "556858 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "556858 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "556858 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 3678,
            "unit": "ns/op\t     664 B/op\t      11 allocs/op",
            "extra": "91646 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 3678,
            "unit": "ns/op",
            "extra": "91646 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 664,
            "unit": "B/op",
            "extra": "91646 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "91646 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 481.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "674719 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 481.3,
            "unit": "ns/op",
            "extra": "674719 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "674719 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "674719 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 750.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "500232 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 750.3,
            "unit": "ns/op",
            "extra": "500232 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "500232 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "500232 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 1045703,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "378 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 1045703,
            "unit": "ns/op",
            "extra": "378 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "378 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "378 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 12.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28613970 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 12.47,
            "unit": "ns/op",
            "extra": "28613970 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "28613970 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "28613970 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 20450,
            "unit": "ns/op\t   18273 B/op\t      28 allocs/op",
            "extra": "18404 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 20450,
            "unit": "ns/op",
            "extra": "18404 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 18273,
            "unit": "B/op",
            "extra": "18404 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "18404 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 27126,
            "unit": "ns/op\t   25308 B/op\t      82 allocs/op",
            "extra": "13425 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 27126,
            "unit": "ns/op",
            "extra": "13425 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 25308,
            "unit": "B/op",
            "extra": "13425 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "13425 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 155150,
            "unit": "ns/op\t  112525 B/op\t     640 allocs/op",
            "extra": "2120 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 155150,
            "unit": "ns/op",
            "extra": "2120 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 112525,
            "unit": "B/op",
            "extra": "2120 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 640,
            "unit": "allocs/op",
            "extra": "2120 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11382086366,
            "unit": "ns/op\t     913 B/op\t      14 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11382086366,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 913,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 14,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 24.35,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14790793 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 24.35,
            "unit": "ns/op",
            "extra": "14790793 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "14790793 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14790793 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 24.45,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14149278 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 24.45,
            "unit": "ns/op",
            "extra": "14149278 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "14149278 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14149278 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 25.58,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13303159 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 25.58,
            "unit": "ns/op",
            "extra": "13303159 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13303159 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13303159 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11381219072,
            "unit": "ns/op\t     902 B/op\t      13 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11381219072,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 902,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11381874187,
            "unit": "ns/op\t     902 B/op\t      13 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11381874187,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 902,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 272.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1307348 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 272.3,
            "unit": "ns/op",
            "extra": "1307348 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1307348 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1307348 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 25.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15405510 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 25.57,
            "unit": "ns/op",
            "extra": "15405510 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15405510 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15405510 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 655.7,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "546260 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 655.7,
            "unit": "ns/op",
            "extra": "546260 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "546260 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "546260 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 11.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31768330 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 11.2,
            "unit": "ns/op",
            "extra": "31768330 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "31768330 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "31768330 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Abhipray Dumka",
            "email": "puttanpal@Abhiprays-MacBook-Air.local"
          },
          "committer": {
            "name": "Abhipray Dumka",
            "email": "puttanpal@Abhiprays-MacBook-Air.local"
          },
          "id": "e91441ced2a9cfdeb35bb349ec1dee2cec5aa1db",
          "message": "fix: correct CI/CD badge URL (Concurrx not concurx)",
          "timestamp": "2026-03-07T11:51:17Z",
          "url": "https://github.com/abhipray-cpu/concurx/commit/e91441ced2a9cfdeb35bb349ec1dee2cec5aa1db"
        },
        "date": 1772939075810,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 1761,
            "unit": "ns/op\t     720 B/op\t      10 allocs/op",
            "extra": "196772 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1761,
            "unit": "ns/op",
            "extra": "196772 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 720,
            "unit": "B/op",
            "extra": "196772 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "196772 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 3992,
            "unit": "ns/op\t    1176 B/op\t      25 allocs/op",
            "extra": "82681 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 3992,
            "unit": "ns/op",
            "extra": "82681 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 1176,
            "unit": "B/op",
            "extra": "82681 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "82681 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 1085286,
            "unit": "ns/op\t    2163 B/op\t      36 allocs/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1085286,
            "unit": "ns/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 2163,
            "unit": "B/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 36,
            "unit": "allocs/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group)",
            "value": 1770,
            "unit": "ns/op\t     728 B/op\t      10 allocs/op",
            "extra": "173256 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1770,
            "unit": "ns/op",
            "extra": "173256 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 728,
            "unit": "B/op",
            "extra": "173256 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "173256 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group)",
            "value": 1109971,
            "unit": "ns/op\t    6308 B/op\t     222 allocs/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1109971,
            "unit": "ns/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 6308,
            "unit": "B/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 222,
            "unit": "allocs/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group)",
            "value": 1098605,
            "unit": "ns/op\t    2632 B/op\t      54 allocs/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1098605,
            "unit": "ns/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 2632,
            "unit": "B/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "321 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group)",
            "value": 21228,
            "unit": "ns/op\t    7144 B/op\t     221 allocs/op",
            "extra": "17128 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 21228,
            "unit": "ns/op",
            "extra": "17128 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 7144,
            "unit": "B/op",
            "extra": "17128 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 221,
            "unit": "allocs/op",
            "extra": "17128 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 265.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1356823 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 265.3,
            "unit": "ns/op",
            "extra": "1356823 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1356823 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1356823 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 266655,
            "unit": "ns/op\t       1 B/op\t       0 allocs/op",
            "extra": "1396 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 266655,
            "unit": "ns/op",
            "extra": "1396 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1396 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1396 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 267358,
            "unit": "ns/op\t       1 B/op\t       0 allocs/op",
            "extra": "1396 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 267358,
            "unit": "ns/op",
            "extra": "1396 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1396 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1396 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 5137508,
            "unit": "ns/op\t     249 B/op\t       3 allocs/op",
            "extra": "68 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 5137508,
            "unit": "ns/op",
            "extra": "68 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 249,
            "unit": "B/op",
            "extra": "68 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "68 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 244.3,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "1474585 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 244.3,
            "unit": "ns/op",
            "extra": "1474585 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "1474585 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1474585 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 17.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19845596 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 17.44,
            "unit": "ns/op",
            "extra": "19845596 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19845596 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19845596 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 18.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19298485 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 18.59,
            "unit": "ns/op",
            "extra": "19298485 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19298485 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19298485 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 38.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9282804 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 38.72,
            "unit": "ns/op",
            "extra": "9282804 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9282804 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9282804 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 17.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20466711 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 17.54,
            "unit": "ns/op",
            "extra": "20466711 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20466711 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20466711 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 60.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5803237 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 60.12,
            "unit": "ns/op",
            "extra": "5803237 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5803237 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5803237 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 602023,
            "unit": "ns/op\t   10204 B/op\t      23 allocs/op",
            "extra": "594 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 602023,
            "unit": "ns/op",
            "extra": "594 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10204,
            "unit": "B/op",
            "extra": "594 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "594 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 518037,
            "unit": "ns/op\t   10125 B/op\t      23 allocs/op",
            "extra": "688 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 518037,
            "unit": "ns/op",
            "extra": "688 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10125,
            "unit": "B/op",
            "extra": "688 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "688 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 525836,
            "unit": "ns/op\t   10127 B/op\t      23 allocs/op",
            "extra": "669 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 525836,
            "unit": "ns/op",
            "extra": "669 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10127,
            "unit": "B/op",
            "extra": "669 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "669 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 999873,
            "unit": "ns/op\t    4393 B/op\t      28 allocs/op",
            "extra": "360 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 999873,
            "unit": "ns/op",
            "extra": "360 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 4393,
            "unit": "B/op",
            "extra": "360 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "360 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 2149142,
            "unit": "ns/op\t    2882 B/op\t      25 allocs/op",
            "extra": "170 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 2149142,
            "unit": "ns/op",
            "extra": "170 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 2882,
            "unit": "B/op",
            "extra": "170 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "170 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce)",
            "value": 747507,
            "unit": "ns/op\t    1261 B/op\t      18 allocs/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - ns/op",
            "value": 747507,
            "unit": "ns/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - B/op",
            "value": 1261,
            "unit": "B/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "476 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce)",
            "value": 8200320,
            "unit": "ns/op\t    2153 B/op\t      27 allocs/op",
            "extra": "43 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - ns/op",
            "value": 8200320,
            "unit": "ns/op",
            "extra": "43 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - B/op",
            "value": 2153,
            "unit": "B/op",
            "extra": "43 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "43 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 2074497,
            "unit": "ns/op\t  239594 B/op\t    4107 allocs/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 2074497,
            "unit": "ns/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239594,
            "unit": "B/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 5026734,
            "unit": "ns/op\t  698719 B/op\t   12303 allocs/op",
            "extra": "70 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 5026734,
            "unit": "ns/op",
            "extra": "70 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 698719,
            "unit": "B/op",
            "extra": "70 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 12303,
            "unit": "allocs/op",
            "extra": "70 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 167693981,
            "unit": "ns/op\t   85536 B/op\t    1295 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 167693981,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 85536,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 1295,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 19811655,
            "unit": "ns/op\t 2322696 B/op\t   40011 allocs/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 19811655,
            "unit": "ns/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 2322696,
            "unit": "B/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 40011,
            "unit": "allocs/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 2068530,
            "unit": "ns/op\t  239587 B/op\t    4107 allocs/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 2068530,
            "unit": "ns/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239587,
            "unit": "B/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 7621,
            "unit": "ns/op\t    2376 B/op\t      26 allocs/op",
            "extra": "45501 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 7621,
            "unit": "ns/op",
            "extra": "45501 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 2376,
            "unit": "B/op",
            "extra": "45501 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 26,
            "unit": "allocs/op",
            "extra": "45501 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 3766,
            "unit": "ns/op\t    1072 B/op\t      15 allocs/op",
            "extra": "96858 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 3766,
            "unit": "ns/op",
            "extra": "96858 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 1072,
            "unit": "B/op",
            "extra": "96858 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "96858 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 2161104,
            "unit": "ns/op\t  239568 B/op\t    4107 allocs/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 2161104,
            "unit": "ns/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239568,
            "unit": "B/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 1013,
            "unit": "ns/op\t      11 B/op\t       0 allocs/op",
            "extra": "365076 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 1013,
            "unit": "ns/op",
            "extra": "365076 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 11,
            "unit": "B/op",
            "extra": "365076 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "365076 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 1013,
            "unit": "ns/op\t       7 B/op\t       0 allocs/op",
            "extra": "381778 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 1013,
            "unit": "ns/op",
            "extra": "381778 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 7,
            "unit": "B/op",
            "extra": "381778 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "381778 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 5395,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "70128 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 5395,
            "unit": "ns/op",
            "extra": "70128 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "70128 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "70128 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 10152770,
            "unit": "ns/op\t     648 B/op\t       8 allocs/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 10152770,
            "unit": "ns/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 648,
            "unit": "B/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 104.4,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "3508315 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 104.4,
            "unit": "ns/op",
            "extra": "3508315 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "3508315 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3508315 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 143.3,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "2537065 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 143.3,
            "unit": "ns/op",
            "extra": "2537065 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2537065 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2537065 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 272.4,
            "unit": "ns/op\t     144 B/op\t       6 allocs/op",
            "extra": "1331977 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 272.4,
            "unit": "ns/op",
            "extra": "1331977 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "1331977 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1331977 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 2142711,
            "unit": "ns/op\t     608 B/op\t      10 allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 2142711,
            "unit": "ns/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 608,
            "unit": "B/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 110.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "3214737 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 110.9,
            "unit": "ns/op",
            "extra": "3214737 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "3214737 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3214737 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 29524,
            "unit": "ns/op\t    1522 B/op\t      22 allocs/op",
            "extra": "12270 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 29524,
            "unit": "ns/op",
            "extra": "12270 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1522,
            "unit": "B/op",
            "extra": "12270 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "12270 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 68508036,
            "unit": "ns/op\t    1793 B/op\t      16 allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 68508036,
            "unit": "ns/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1793,
            "unit": "B/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 16,
            "unit": "allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 34292183,
            "unit": "ns/op\t    1940 B/op\t      18 allocs/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 34292183,
            "unit": "ns/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1940,
            "unit": "B/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 17185686,
            "unit": "ns/op\t    2231 B/op\t      22 allocs/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 17185686,
            "unit": "ns/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 2231,
            "unit": "B/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 8662725,
            "unit": "ns/op\t    2815 B/op\t      30 allocs/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 8662725,
            "unit": "ns/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 2815,
            "unit": "B/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 30,
            "unit": "allocs/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 4385580,
            "unit": "ns/op\t    4148 B/op\t      48 allocs/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 4385580,
            "unit": "ns/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 4148,
            "unit": "B/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 48,
            "unit": "allocs/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 1093927,
            "unit": "ns/op\t    1155 B/op\t      20 allocs/op",
            "extra": "328 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 1093927,
            "unit": "ns/op",
            "extra": "328 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1155,
            "unit": "B/op",
            "extra": "328 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "328 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 16704,
            "unit": "ns/op\t    1233 B/op\t      20 allocs/op",
            "extra": "20722 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 16704,
            "unit": "ns/op",
            "extra": "20722 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1233,
            "unit": "B/op",
            "extra": "20722 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "20722 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 151.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2445682 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 151.6,
            "unit": "ns/op",
            "extra": "2445682 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2445682 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2445682 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 16410,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42894 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 16410,
            "unit": "ns/op",
            "extra": "42894 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42894 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42894 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 349.4,
            "unit": "ns/op\t   2851890 rejected\t       0 B/op\t       0 allocs/op",
            "extra": "2852846 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 349.4,
            "unit": "ns/op",
            "extra": "2852846 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - rejected",
            "value": 2851890,
            "unit": "rejected",
            "extra": "2852846 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2852846 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2852846 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3521053 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 103,
            "unit": "ns/op",
            "extra": "3521053 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3521053 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3521053 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 0.3118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 0.3118,
            "unit": "ns/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 1490,
            "unit": "ns/op\t     568 B/op\t       9 allocs/op",
            "extra": "222916 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 1490,
            "unit": "ns/op",
            "extra": "222916 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "222916 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "222916 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 1087487,
            "unit": "ns/op\t     777 B/op\t      10 allocs/op",
            "extra": "333 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 1087487,
            "unit": "ns/op",
            "extra": "333 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 777,
            "unit": "B/op",
            "extra": "333 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "333 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 575.1,
            "unit": "ns/op\t     568 B/op\t       9 allocs/op",
            "extra": "548526 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 575.1,
            "unit": "ns/op",
            "extra": "548526 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "548526 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "548526 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 3888,
            "unit": "ns/op\t     664 B/op\t      11 allocs/op",
            "extra": "90319 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 3888,
            "unit": "ns/op",
            "extra": "90319 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 664,
            "unit": "B/op",
            "extra": "90319 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "90319 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 465.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "742923 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 465.3,
            "unit": "ns/op",
            "extra": "742923 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "742923 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "742923 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 731.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "486030 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 731.7,
            "unit": "ns/op",
            "extra": "486030 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "486030 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "486030 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 1042527,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "378 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 1042527,
            "unit": "ns/op",
            "extra": "378 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "378 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "378 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 12.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28726486 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 12.47,
            "unit": "ns/op",
            "extra": "28726486 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "28726486 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "28726486 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 20008,
            "unit": "ns/op\t   18273 B/op\t      28 allocs/op",
            "extra": "17368 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 20008,
            "unit": "ns/op",
            "extra": "17368 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 18273,
            "unit": "B/op",
            "extra": "17368 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "17368 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 27568,
            "unit": "ns/op\t   25307 B/op\t      82 allocs/op",
            "extra": "13128 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 27568,
            "unit": "ns/op",
            "extra": "13128 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 25307,
            "unit": "B/op",
            "extra": "13128 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "13128 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 157339,
            "unit": "ns/op\t  112332 B/op\t     634 allocs/op",
            "extra": "2316 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 157339,
            "unit": "ns/op",
            "extra": "2316 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 112332,
            "unit": "B/op",
            "extra": "2316 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 634,
            "unit": "allocs/op",
            "extra": "2316 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11376152249,
            "unit": "ns/op\t     913 B/op\t      14 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11376152249,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 913,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 14,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 25.35,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14838661 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 25.35,
            "unit": "ns/op",
            "extra": "14838661 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "14838661 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14838661 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 24.2,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13594174 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 24.2,
            "unit": "ns/op",
            "extra": "13594174 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13594174 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13594174 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 25.59,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13119799 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 25.59,
            "unit": "ns/op",
            "extra": "13119799 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13119799 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13119799 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11377745369,
            "unit": "ns/op\t     918 B/op\t      14 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11377745369,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 918,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 14,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11382340380,
            "unit": "ns/op\t     913 B/op\t      14 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11382340380,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 913,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 14,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 277.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1292053 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 277.3,
            "unit": "ns/op",
            "extra": "1292053 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1292053 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1292053 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 26.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13720567 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 26.6,
            "unit": "ns/op",
            "extra": "13720567 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13720567 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13720567 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 648.3,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "546192 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 648.3,
            "unit": "ns/op",
            "extra": "546192 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "546192 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "546192 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 10.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35243718 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 10.49,
            "unit": "ns/op",
            "extra": "35243718 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "35243718 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "35243718 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Abhipray Dumka",
            "email": "puttanpal@Abhiprays-MacBook-Air.local"
          },
          "committer": {
            "name": "Abhipray Dumka",
            "email": "puttanpal@Abhiprays-MacBook-Air.local"
          },
          "id": "e91441ced2a9cfdeb35bb349ec1dee2cec5aa1db",
          "message": "fix: correct CI/CD badge URL (Concurrx not concurx)",
          "timestamp": "2026-03-07T11:51:17Z",
          "url": "https://github.com/abhipray-cpu/concurx/commit/e91441ced2a9cfdeb35bb349ec1dee2cec5aa1db"
        },
        "date": 1773025553499,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 1727,
            "unit": "ns/op\t     720 B/op\t      10 allocs/op",
            "extra": "200175 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1727,
            "unit": "ns/op",
            "extra": "200175 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 720,
            "unit": "B/op",
            "extra": "200175 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "200175 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 3927,
            "unit": "ns/op\t    1176 B/op\t      25 allocs/op",
            "extra": "87069 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 3927,
            "unit": "ns/op",
            "extra": "87069 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 1176,
            "unit": "B/op",
            "extra": "87069 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "87069 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 1085791,
            "unit": "ns/op\t    2169 B/op\t      36 allocs/op",
            "extra": "332 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1085791,
            "unit": "ns/op",
            "extra": "332 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 2169,
            "unit": "B/op",
            "extra": "332 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 36,
            "unit": "allocs/op",
            "extra": "332 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group)",
            "value": 1728,
            "unit": "ns/op\t     728 B/op\t      10 allocs/op",
            "extra": "187026 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1728,
            "unit": "ns/op",
            "extra": "187026 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 728,
            "unit": "B/op",
            "extra": "187026 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "187026 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group)",
            "value": 1115432,
            "unit": "ns/op\t    6287 B/op\t     222 allocs/op",
            "extra": "325 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1115432,
            "unit": "ns/op",
            "extra": "325 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 6287,
            "unit": "B/op",
            "extra": "325 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 222,
            "unit": "allocs/op",
            "extra": "325 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group)",
            "value": 1091558,
            "unit": "ns/op\t    2632 B/op\t      54 allocs/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1091558,
            "unit": "ns/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 2632,
            "unit": "B/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group)",
            "value": 21047,
            "unit": "ns/op\t    7263 B/op\t     224 allocs/op",
            "extra": "16878 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 21047,
            "unit": "ns/op",
            "extra": "16878 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 7263,
            "unit": "B/op",
            "extra": "16878 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 224,
            "unit": "allocs/op",
            "extra": "16878 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 273.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1314270 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 273.7,
            "unit": "ns/op",
            "extra": "1314270 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1314270 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1314270 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 268031,
            "unit": "ns/op\t       1 B/op\t       0 allocs/op",
            "extra": "1345 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 268031,
            "unit": "ns/op",
            "extra": "1345 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1345 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1345 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 265275,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1395 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 265275,
            "unit": "ns/op",
            "extra": "1395 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1395 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1395 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 5138051,
            "unit": "ns/op\t     249 B/op\t       3 allocs/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 5138051,
            "unit": "ns/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 249,
            "unit": "B/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 242.8,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "1530747 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 242.8,
            "unit": "ns/op",
            "extra": "1530747 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "1530747 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1530747 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 17.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20204802 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 17.43,
            "unit": "ns/op",
            "extra": "20204802 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20204802 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20204802 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 18.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19193572 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 18.57,
            "unit": "ns/op",
            "extra": "19193572 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19193572 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19193572 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 38.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9310428 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 38.69,
            "unit": "ns/op",
            "extra": "9310428 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9310428 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9310428 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 17.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20772606 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 17.36,
            "unit": "ns/op",
            "extra": "20772606 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20772606 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20772606 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 57.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5866773 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 57.75,
            "unit": "ns/op",
            "extra": "5866773 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5866773 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5866773 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 602040,
            "unit": "ns/op\t   10173 B/op\t      23 allocs/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 602040,
            "unit": "ns/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10173,
            "unit": "B/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 519358,
            "unit": "ns/op\t   10127 B/op\t      23 allocs/op",
            "extra": "673 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 519358,
            "unit": "ns/op",
            "extra": "673 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10127,
            "unit": "B/op",
            "extra": "673 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "673 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 516564,
            "unit": "ns/op\t   10127 B/op\t      23 allocs/op",
            "extra": "681 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 516564,
            "unit": "ns/op",
            "extra": "681 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10127,
            "unit": "B/op",
            "extra": "681 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "681 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 1029029,
            "unit": "ns/op\t    4397 B/op\t      28 allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 1029029,
            "unit": "ns/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 4397,
            "unit": "B/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 2134498,
            "unit": "ns/op\t    2872 B/op\t      25 allocs/op",
            "extra": "166 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 2134498,
            "unit": "ns/op",
            "extra": "166 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 2872,
            "unit": "B/op",
            "extra": "166 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "166 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce)",
            "value": 779968,
            "unit": "ns/op\t    1272 B/op\t      18 allocs/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - ns/op",
            "value": 779968,
            "unit": "ns/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - B/op",
            "value": 1272,
            "unit": "B/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "457 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce)",
            "value": 8211518,
            "unit": "ns/op\t    2078 B/op\t      27 allocs/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - ns/op",
            "value": 8211518,
            "unit": "ns/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - B/op",
            "value": 2078,
            "unit": "B/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 2013157,
            "unit": "ns/op\t  239611 B/op\t    4107 allocs/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 2013157,
            "unit": "ns/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239611,
            "unit": "B/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 5020531,
            "unit": "ns/op\t  698832 B/op\t   12303 allocs/op",
            "extra": "66 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 5020531,
            "unit": "ns/op",
            "extra": "66 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 698832,
            "unit": "B/op",
            "extra": "66 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 12303,
            "unit": "allocs/op",
            "extra": "66 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 182639444,
            "unit": "ns/op\t   85264 B/op\t    1294 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 182639444,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 85264,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 1294,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 20069627,
            "unit": "ns/op\t 2322704 B/op\t   40011 allocs/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 20069627,
            "unit": "ns/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 2322704,
            "unit": "B/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 40011,
            "unit": "allocs/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 2048556,
            "unit": "ns/op\t  239580 B/op\t    4107 allocs/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 2048556,
            "unit": "ns/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239580,
            "unit": "B/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 7307,
            "unit": "ns/op\t    2375 B/op\t      26 allocs/op",
            "extra": "46876 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 7307,
            "unit": "ns/op",
            "extra": "46876 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 2375,
            "unit": "B/op",
            "extra": "46876 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 26,
            "unit": "allocs/op",
            "extra": "46876 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 3757,
            "unit": "ns/op\t    1072 B/op\t      15 allocs/op",
            "extra": "95707 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 3757,
            "unit": "ns/op",
            "extra": "95707 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 1072,
            "unit": "B/op",
            "extra": "95707 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "95707 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 2003326,
            "unit": "ns/op\t  239568 B/op\t    4107 allocs/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 2003326,
            "unit": "ns/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239568,
            "unit": "B/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 1010,
            "unit": "ns/op\t      14 B/op\t       0 allocs/op",
            "extra": "366199 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 1010,
            "unit": "ns/op",
            "extra": "366199 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 14,
            "unit": "B/op",
            "extra": "366199 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "366199 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 1013,
            "unit": "ns/op\t       6 B/op\t       0 allocs/op",
            "extra": "379284 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 1013,
            "unit": "ns/op",
            "extra": "379284 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 6,
            "unit": "B/op",
            "extra": "379284 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "379284 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 5585,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "69349 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 5585,
            "unit": "ns/op",
            "extra": "69349 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "69349 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "69349 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 10150744,
            "unit": "ns/op\t     672 B/op\t       8 allocs/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 10150744,
            "unit": "ns/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 672,
            "unit": "B/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 103.8,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "3473248 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 103.8,
            "unit": "ns/op",
            "extra": "3473248 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "3473248 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3473248 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 141.5,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "2518104 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 141.5,
            "unit": "ns/op",
            "extra": "2518104 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2518104 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2518104 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 269.2,
            "unit": "ns/op\t     144 B/op\t       6 allocs/op",
            "extra": "1333350 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 269.2,
            "unit": "ns/op",
            "extra": "1333350 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "1333350 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1333350 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 2139223,
            "unit": "ns/op\t     608 B/op\t      10 allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 2139223,
            "unit": "ns/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 608,
            "unit": "B/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 110.7,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "3199519 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 110.7,
            "unit": "ns/op",
            "extra": "3199519 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "3199519 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3199519 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 29524,
            "unit": "ns/op\t    1521 B/op\t      22 allocs/op",
            "extra": "12315 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 29524,
            "unit": "ns/op",
            "extra": "12315 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1521,
            "unit": "B/op",
            "extra": "12315 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "12315 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 68461762,
            "unit": "ns/op\t    1793 B/op\t      16 allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 68461762,
            "unit": "ns/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1793,
            "unit": "B/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 16,
            "unit": "allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 34365302,
            "unit": "ns/op\t    1951 B/op\t      18 allocs/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 34365302,
            "unit": "ns/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1951,
            "unit": "B/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 17184102,
            "unit": "ns/op\t    2238 B/op\t      22 allocs/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 17184102,
            "unit": "ns/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 2238,
            "unit": "B/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 8655525,
            "unit": "ns/op\t    2813 B/op\t      30 allocs/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 8655525,
            "unit": "ns/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 2813,
            "unit": "B/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 30,
            "unit": "allocs/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 4374316,
            "unit": "ns/op\t    4017 B/op\t      46 allocs/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 4374316,
            "unit": "ns/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 4017,
            "unit": "B/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 46,
            "unit": "allocs/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 1093528,
            "unit": "ns/op\t    1177 B/op\t      20 allocs/op",
            "extra": "330 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 1093528,
            "unit": "ns/op",
            "extra": "330 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1177,
            "unit": "B/op",
            "extra": "330 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "330 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 16819,
            "unit": "ns/op\t    1233 B/op\t      20 allocs/op",
            "extra": "21148 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 16819,
            "unit": "ns/op",
            "extra": "21148 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1233,
            "unit": "B/op",
            "extra": "21148 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "21148 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 147.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2441086 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 147.9,
            "unit": "ns/op",
            "extra": "2441086 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2441086 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2441086 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 14619,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40671 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 14619,
            "unit": "ns/op",
            "extra": "40671 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "40671 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "40671 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 160.1,
            "unit": "ns/op\t   2641343 rejected\t       0 B/op\t       0 allocs/op",
            "extra": "2641758 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 160.1,
            "unit": "ns/op",
            "extra": "2641758 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - rejected",
            "value": 2641343,
            "unit": "rejected",
            "extra": "2641758 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2641758 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2641758 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 101.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3519760 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 101.3,
            "unit": "ns/op",
            "extra": "3519760 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3519760 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3519760 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 0.3116,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 0.3116,
            "unit": "ns/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 1490,
            "unit": "ns/op\t     568 B/op\t       9 allocs/op",
            "extra": "238526 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 1490,
            "unit": "ns/op",
            "extra": "238526 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "238526 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "238526 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 1084711,
            "unit": "ns/op\t     764 B/op\t      10 allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 1084711,
            "unit": "ns/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 764,
            "unit": "B/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 574,
            "unit": "ns/op\t     568 B/op\t       9 allocs/op",
            "extra": "557313 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 574,
            "unit": "ns/op",
            "extra": "557313 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "557313 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "557313 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 3854,
            "unit": "ns/op\t     664 B/op\t      11 allocs/op",
            "extra": "86714 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 3854,
            "unit": "ns/op",
            "extra": "86714 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 664,
            "unit": "B/op",
            "extra": "86714 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "86714 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 469.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "729090 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 469.2,
            "unit": "ns/op",
            "extra": "729090 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "729090 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "729090 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 734.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "492670 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 734.3,
            "unit": "ns/op",
            "extra": "492670 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "492670 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "492670 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 1041879,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "367 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 1041879,
            "unit": "ns/op",
            "extra": "367 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "367 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "367 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 12.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28875788 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 12.5,
            "unit": "ns/op",
            "extra": "28875788 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "28875788 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "28875788 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 20607,
            "unit": "ns/op\t   18274 B/op\t      28 allocs/op",
            "extra": "17701 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 20607,
            "unit": "ns/op",
            "extra": "17701 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 18274,
            "unit": "B/op",
            "extra": "17701 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "17701 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 27029,
            "unit": "ns/op\t   25308 B/op\t      82 allocs/op",
            "extra": "13016 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 27029,
            "unit": "ns/op",
            "extra": "13016 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 25308,
            "unit": "B/op",
            "extra": "13016 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "13016 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 156468,
            "unit": "ns/op\t  112313 B/op\t     634 allocs/op",
            "extra": "2049 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 156468,
            "unit": "ns/op",
            "extra": "2049 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 112313,
            "unit": "B/op",
            "extra": "2049 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 634,
            "unit": "allocs/op",
            "extra": "2049 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11382223302,
            "unit": "ns/op\t     913 B/op\t      14 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11382223302,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 913,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 14,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 24.47,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14656441 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 24.47,
            "unit": "ns/op",
            "extra": "14656441 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "14656441 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14656441 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 24.42,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14080690 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 24.42,
            "unit": "ns/op",
            "extra": "14080690 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "14080690 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14080690 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 25.51,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12493497 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 25.51,
            "unit": "ns/op",
            "extra": "12493497 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12493497 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12493497 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11377500988,
            "unit": "ns/op\t     908 B/op\t      14 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11377500988,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 908,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 14,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11382300509,
            "unit": "ns/op\t     902 B/op\t      13 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11382300509,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 902,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 277.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1290068 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 277.5,
            "unit": "ns/op",
            "extra": "1290068 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1290068 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1290068 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 26.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13484712 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 26.63,
            "unit": "ns/op",
            "extra": "13484712 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13484712 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13484712 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 639,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "566980 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 639,
            "unit": "ns/op",
            "extra": "566980 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "566980 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "566980 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 10.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31293786 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 10.94,
            "unit": "ns/op",
            "extra": "31293786 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "31293786 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "31293786 times\n4 procs"
          }
        ]
      }
    ]
  }
}