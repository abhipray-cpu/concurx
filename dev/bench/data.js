window.BENCHMARK_DATA = {
  "lastUpdate": 1772884763032,
  "repoUrl": "https://github.com/abhipray-cpu/Concurrx",
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
      }
    ]
  }
}