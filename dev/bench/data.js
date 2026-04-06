window.BENCHMARK_DATA = {
  "lastUpdate": 1775445097649,
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
        "date": 1773111642739,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 1741,
            "unit": "ns/op\t     720 B/op\t      10 allocs/op",
            "extra": "197184 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1741,
            "unit": "ns/op",
            "extra": "197184 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 720,
            "unit": "B/op",
            "extra": "197184 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "197184 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 3924,
            "unit": "ns/op\t    1176 B/op\t      25 allocs/op",
            "extra": "85870 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 3924,
            "unit": "ns/op",
            "extra": "85870 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 1176,
            "unit": "B/op",
            "extra": "85870 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "85870 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 1089111,
            "unit": "ns/op\t    2156 B/op\t      36 allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1089111,
            "unit": "ns/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 2156,
            "unit": "B/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 36,
            "unit": "allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group)",
            "value": 1739,
            "unit": "ns/op\t     728 B/op\t      10 allocs/op",
            "extra": "185461 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1739,
            "unit": "ns/op",
            "extra": "185461 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 728,
            "unit": "B/op",
            "extra": "185461 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "185461 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group)",
            "value": 1112424,
            "unit": "ns/op\t    6278 B/op\t     222 allocs/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1112424,
            "unit": "ns/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 6278,
            "unit": "B/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 222,
            "unit": "allocs/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group)",
            "value": 1091285,
            "unit": "ns/op\t    2639 B/op\t      54 allocs/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1091285,
            "unit": "ns/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 2639,
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
            "value": 21088,
            "unit": "ns/op\t    6996 B/op\t     216 allocs/op",
            "extra": "17031 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 21088,
            "unit": "ns/op",
            "extra": "17031 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 6996,
            "unit": "B/op",
            "extra": "17031 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 216,
            "unit": "allocs/op",
            "extra": "17031 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 258.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1395154 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 258.3,
            "unit": "ns/op",
            "extra": "1395154 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1395154 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1395154 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 266899,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 266899,
            "unit": "ns/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
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
            "value": 267324,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1400 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 267324,
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
            "value": 5159329,
            "unit": "ns/op\t     249 B/op\t       3 allocs/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 5159329,
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
            "value": 237,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "1471354 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 237,
            "unit": "ns/op",
            "extra": "1471354 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "1471354 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1471354 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 17.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20606642 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 17.42,
            "unit": "ns/op",
            "extra": "20606642 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20606642 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20606642 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 18.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19171860 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 18.59,
            "unit": "ns/op",
            "extra": "19171860 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19171860 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19171860 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 38.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9288774 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 38.73,
            "unit": "ns/op",
            "extra": "9288774 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9288774 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9288774 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 17.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20687018 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 17.32,
            "unit": "ns/op",
            "extra": "20687018 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20687018 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20687018 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 56.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6205144 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 56.92,
            "unit": "ns/op",
            "extra": "6205144 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6205144 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6205144 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 591984,
            "unit": "ns/op\t   10173 B/op\t      23 allocs/op",
            "extra": "601 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 591984,
            "unit": "ns/op",
            "extra": "601 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10173,
            "unit": "B/op",
            "extra": "601 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "601 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 510325,
            "unit": "ns/op\t   10148 B/op\t      23 allocs/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 510325,
            "unit": "ns/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10148,
            "unit": "B/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 509303,
            "unit": "ns/op\t   10122 B/op\t      23 allocs/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 509303,
            "unit": "ns/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10122,
            "unit": "B/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "684 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 1038024,
            "unit": "ns/op\t    4385 B/op\t      28 allocs/op",
            "extra": "362 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 1038024,
            "unit": "ns/op",
            "extra": "362 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 4385,
            "unit": "B/op",
            "extra": "362 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "362 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 2137882,
            "unit": "ns/op\t    2872 B/op\t      25 allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 2137882,
            "unit": "ns/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 2872,
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
            "value": 748894,
            "unit": "ns/op\t    1306 B/op\t      18 allocs/op",
            "extra": "464 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - ns/op",
            "value": 748894,
            "unit": "ns/op",
            "extra": "464 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - B/op",
            "value": 1306,
            "unit": "B/op",
            "extra": "464 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "464 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce)",
            "value": 7930258,
            "unit": "ns/op\t    2337 B/op\t      29 allocs/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - ns/op",
            "value": 7930258,
            "unit": "ns/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - B/op",
            "value": 2337,
            "unit": "B/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 2048669,
            "unit": "ns/op\t  239633 B/op\t    4107 allocs/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 2048669,
            "unit": "ns/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239633,
            "unit": "B/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 4869320,
            "unit": "ns/op\t  698854 B/op\t   12303 allocs/op",
            "extra": "70 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 4869320,
            "unit": "ns/op",
            "extra": "70 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 698854,
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
            "value": 226398958,
            "unit": "ns/op\t   85216 B/op\t    1294 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 226398958,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 85216,
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
            "value": 19400188,
            "unit": "ns/op\t 2322668 B/op\t   40011 allocs/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 19400188,
            "unit": "ns/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 2322668,
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
            "value": 2050687,
            "unit": "ns/op\t  239600 B/op\t    4107 allocs/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 2050687,
            "unit": "ns/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239600,
            "unit": "B/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 7486,
            "unit": "ns/op\t    2376 B/op\t      26 allocs/op",
            "extra": "45896 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 7486,
            "unit": "ns/op",
            "extra": "45896 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 2376,
            "unit": "B/op",
            "extra": "45896 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 26,
            "unit": "allocs/op",
            "extra": "45896 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 3684,
            "unit": "ns/op\t    1072 B/op\t      15 allocs/op",
            "extra": "100594 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 3684,
            "unit": "ns/op",
            "extra": "100594 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 1072,
            "unit": "B/op",
            "extra": "100594 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "100594 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 1984823,
            "unit": "ns/op\t  239568 B/op\t    4107 allocs/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 1984823,
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
            "value": 1011,
            "unit": "ns/op\t       9 B/op\t       0 allocs/op",
            "extra": "362708 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 1011,
            "unit": "ns/op",
            "extra": "362708 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 9,
            "unit": "B/op",
            "extra": "362708 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "362708 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 1011,
            "unit": "ns/op\t       6 B/op\t       0 allocs/op",
            "extra": "373562 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 1011,
            "unit": "ns/op",
            "extra": "373562 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 6,
            "unit": "B/op",
            "extra": "373562 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "373562 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 5364,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "69805 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 5364,
            "unit": "ns/op",
            "extra": "69805 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "69805 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "69805 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 10155117,
            "unit": "ns/op\t     665 B/op\t       8 allocs/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 10155117,
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
            "value": 103.5,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "3458136 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 103.5,
            "unit": "ns/op",
            "extra": "3458136 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "3458136 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3458136 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 142.3,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "2536760 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 142.3,
            "unit": "ns/op",
            "extra": "2536760 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2536760 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2536760 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 268.6,
            "unit": "ns/op\t     144 B/op\t       6 allocs/op",
            "extra": "1332986 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 268.6,
            "unit": "ns/op",
            "extra": "1332986 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "1332986 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1332986 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 2138150,
            "unit": "ns/op\t     608 B/op\t      10 allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 2138150,
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
            "value": 113.8,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "3239385 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 113.8,
            "unit": "ns/op",
            "extra": "3239385 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "3239385 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3239385 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 29020,
            "unit": "ns/op\t    1521 B/op\t      22 allocs/op",
            "extra": "12204 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 29020,
            "unit": "ns/op",
            "extra": "12204 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1521,
            "unit": "B/op",
            "extra": "12204 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "12204 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 68572173,
            "unit": "ns/op\t    1800 B/op\t      16 allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 68572173,
            "unit": "ns/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1800,
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
            "value": 34262732,
            "unit": "ns/op\t    1942 B/op\t      18 allocs/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 34262732,
            "unit": "ns/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1942,
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
            "value": 17179111,
            "unit": "ns/op\t    2229 B/op\t      22 allocs/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 17179111,
            "unit": "ns/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 2229,
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
            "value": 8632153,
            "unit": "ns/op\t    2806 B/op\t      30 allocs/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 8632153,
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
            "value": 4381798,
            "unit": "ns/op\t    4051 B/op\t      46 allocs/op",
            "extra": "81 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 4381798,
            "unit": "ns/op",
            "extra": "81 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 4051,
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
            "value": 1097886,
            "unit": "ns/op\t    1202 B/op\t      20 allocs/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 1097886,
            "unit": "ns/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1202,
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
            "value": 16481,
            "unit": "ns/op\t    1234 B/op\t      20 allocs/op",
            "extra": "21424 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 16481,
            "unit": "ns/op",
            "extra": "21424 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1234,
            "unit": "B/op",
            "extra": "21424 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "21424 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 146.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2457272 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 146.4,
            "unit": "ns/op",
            "extra": "2457272 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2457272 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2457272 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 13761,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44216 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 13761,
            "unit": "ns/op",
            "extra": "44216 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44216 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44216 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 101.7,
            "unit": "ns/op\t   3626588 rejected\t       0 B/op\t       0 allocs/op",
            "extra": "3626955 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 101.7,
            "unit": "ns/op",
            "extra": "3626955 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - rejected",
            "value": 3626588,
            "unit": "rejected",
            "extra": "3626955 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3626955 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3626955 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 101.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3499564 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 101.6,
            "unit": "ns/op",
            "extra": "3499564 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3499564 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3499564 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 0.3126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 0.3126,
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
            "value": 1433,
            "unit": "ns/op\t     568 B/op\t       9 allocs/op",
            "extra": "237844 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 1433,
            "unit": "ns/op",
            "extra": "237844 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "237844 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "237844 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 1085364,
            "unit": "ns/op\t     735 B/op\t      10 allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 1085364,
            "unit": "ns/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 735,
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
            "value": 570.5,
            "unit": "ns/op\t     568 B/op\t       9 allocs/op",
            "extra": "539882 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 570.5,
            "unit": "ns/op",
            "extra": "539882 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "539882 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "539882 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 3768,
            "unit": "ns/op\t     664 B/op\t      11 allocs/op",
            "extra": "86355 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 3768,
            "unit": "ns/op",
            "extra": "86355 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 664,
            "unit": "B/op",
            "extra": "86355 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "86355 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 525.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "669075 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 525.5,
            "unit": "ns/op",
            "extra": "669075 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "669075 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "669075 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 742.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "500761 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 742.8,
            "unit": "ns/op",
            "extra": "500761 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "500761 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "500761 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 1037929,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 1037929,
            "unit": "ns/op",
            "extra": "373 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "373 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "373 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 12.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28166752 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 12.55,
            "unit": "ns/op",
            "extra": "28166752 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "28166752 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "28166752 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 19929,
            "unit": "ns/op\t   18273 B/op\t      28 allocs/op",
            "extra": "17952 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 19929,
            "unit": "ns/op",
            "extra": "17952 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 18273,
            "unit": "B/op",
            "extra": "17952 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "17952 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 27217,
            "unit": "ns/op\t   25308 B/op\t      82 allocs/op",
            "extra": "12859 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 27217,
            "unit": "ns/op",
            "extra": "12859 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 25308,
            "unit": "B/op",
            "extra": "12859 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "12859 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 159738,
            "unit": "ns/op\t  112293 B/op\t     635 allocs/op",
            "extra": "1958 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 159738,
            "unit": "ns/op",
            "extra": "1958 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 112293,
            "unit": "B/op",
            "extra": "1958 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 635,
            "unit": "allocs/op",
            "extra": "1958 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11382310379,
            "unit": "ns/op\t     918 B/op\t      14 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11382310379,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 918,
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
            "extra": "14301786 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 24.31,
            "unit": "ns/op",
            "extra": "14301786 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "14301786 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14301786 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 24.32,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13861234 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 24.32,
            "unit": "ns/op",
            "extra": "13861234 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13861234 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13861234 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 26.65,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12860409 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 26.65,
            "unit": "ns/op",
            "extra": "12860409 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12860409 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12860409 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11382373346,
            "unit": "ns/op\t     902 B/op\t      13 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11382373346,
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
            "value": 11382217600,
            "unit": "ns/op\t     908 B/op\t      14 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11382217600,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 908,
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
            "value": 274.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1304620 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 274.3,
            "unit": "ns/op",
            "extra": "1304620 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1304620 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1304620 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 25.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14364306 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 25.31,
            "unit": "ns/op",
            "extra": "14364306 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14364306 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14364306 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 646.9,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "558474 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 646.9,
            "unit": "ns/op",
            "extra": "558474 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "558474 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "558474 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 10.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31731574 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 10.85,
            "unit": "ns/op",
            "extra": "31731574 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "31731574 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "31731574 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Abhipray Dumka",
            "username": "abhipray-cpu",
            "email": "dumkaabhipray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "37bd84e6575ab262fd4bf0c83dc51fd939653f6f",
          "message": "Dependabot removal (#9)\n\n* removed the dependabot file\n\n* updated the schdeuled nightly run\n\n---------\n\nCo-authored-by: Abhipray Dumka <puttanpal@Abhiprays-MacBook-Air.local>",
          "timestamp": "2026-03-10T17:02:36Z",
          "url": "https://github.com/abhipray-cpu/concurx/commit/37bd84e6575ab262fd4bf0c83dc51fd939653f6f"
        },
        "date": 1773630873170,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 1797,
            "unit": "ns/op\t     720 B/op\t      10 allocs/op",
            "extra": "190869 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1797,
            "unit": "ns/op",
            "extra": "190869 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 720,
            "unit": "B/op",
            "extra": "190869 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "190869 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 4078,
            "unit": "ns/op\t    1176 B/op\t      25 allocs/op",
            "extra": "86852 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 4078,
            "unit": "ns/op",
            "extra": "86852 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 1176,
            "unit": "B/op",
            "extra": "86852 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "86852 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 1089652,
            "unit": "ns/op\t    2172 B/op\t      36 allocs/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1089652,
            "unit": "ns/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 2172,
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
            "value": 1736,
            "unit": "ns/op\t     728 B/op\t      10 allocs/op",
            "extra": "180549 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1736,
            "unit": "ns/op",
            "extra": "180549 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 728,
            "unit": "B/op",
            "extra": "180549 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "180549 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group)",
            "value": 1114231,
            "unit": "ns/op\t    6268 B/op\t     222 allocs/op",
            "extra": "325 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1114231,
            "unit": "ns/op",
            "extra": "325 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 6268,
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
            "value": 1099415,
            "unit": "ns/op\t    2653 B/op\t      54 allocs/op",
            "extra": "326 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1099415,
            "unit": "ns/op",
            "extra": "326 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 2653,
            "unit": "B/op",
            "extra": "326 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "326 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group)",
            "value": 20731,
            "unit": "ns/op\t    6941 B/op\t     214 allocs/op",
            "extra": "17661 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 20731,
            "unit": "ns/op",
            "extra": "17661 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 6941,
            "unit": "B/op",
            "extra": "17661 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 214,
            "unit": "allocs/op",
            "extra": "17661 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 249.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1427918 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 249.4,
            "unit": "ns/op",
            "extra": "1427918 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1427918 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1427918 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 269389,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 269389,
            "unit": "ns/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
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
            "value": 267065,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 267065,
            "unit": "ns/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 5144291,
            "unit": "ns/op\t     249 B/op\t       3 allocs/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 5144291,
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
            "value": 236.2,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "1531167 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 236.2,
            "unit": "ns/op",
            "extra": "1531167 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "1531167 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1531167 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 17.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20388476 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 17.55,
            "unit": "ns/op",
            "extra": "20388476 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20388476 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20388476 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 18.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19118020 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 18.69,
            "unit": "ns/op",
            "extra": "19118020 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19118020 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19118020 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 39.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9298773 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 39.46,
            "unit": "ns/op",
            "extra": "9298773 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9298773 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9298773 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 17.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20015834 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 17.51,
            "unit": "ns/op",
            "extra": "20015834 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20015834 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20015834 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 58.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6258608 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 58.24,
            "unit": "ns/op",
            "extra": "6258608 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6258608 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6258608 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 608550,
            "unit": "ns/op\t   10171 B/op\t      23 allocs/op",
            "extra": "589 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 608550,
            "unit": "ns/op",
            "extra": "589 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10171,
            "unit": "B/op",
            "extra": "589 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "589 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 519392,
            "unit": "ns/op\t   10137 B/op\t      23 allocs/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 519392,
            "unit": "ns/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10137,
            "unit": "B/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 522098,
            "unit": "ns/op\t   10142 B/op\t      23 allocs/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 522098,
            "unit": "ns/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10142,
            "unit": "B/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 1025624,
            "unit": "ns/op\t    4421 B/op\t      28 allocs/op",
            "extra": "356 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 1025624,
            "unit": "ns/op",
            "extra": "356 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 4421,
            "unit": "B/op",
            "extra": "356 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "356 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 2099247,
            "unit": "ns/op\t    2865 B/op\t      24 allocs/op",
            "extra": "165 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 2099247,
            "unit": "ns/op",
            "extra": "165 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 2865,
            "unit": "B/op",
            "extra": "165 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 24,
            "unit": "allocs/op",
            "extra": "165 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce)",
            "value": 775977,
            "unit": "ns/op\t    1290 B/op\t      18 allocs/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - ns/op",
            "value": 775977,
            "unit": "ns/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - B/op",
            "value": 1290,
            "unit": "B/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "470 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce)",
            "value": 8368988,
            "unit": "ns/op\t    2331 B/op\t      28 allocs/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - ns/op",
            "value": 8368988,
            "unit": "ns/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - B/op",
            "value": 2331,
            "unit": "B/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "42 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 2068772,
            "unit": "ns/op\t  239635 B/op\t    4107 allocs/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 2068772,
            "unit": "ns/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239635,
            "unit": "B/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "174 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 5069287,
            "unit": "ns/op\t  698757 B/op\t   12303 allocs/op",
            "extra": "73 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 5069287,
            "unit": "ns/op",
            "extra": "73 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 698757,
            "unit": "B/op",
            "extra": "73 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 12303,
            "unit": "allocs/op",
            "extra": "73 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 191388480,
            "unit": "ns/op\t   85728 B/op\t    1295 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 191388480,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 85728,
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
            "value": 19727444,
            "unit": "ns/op\t 2322916 B/op\t   40011 allocs/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 19727444,
            "unit": "ns/op",
            "extra": "16 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 2322916,
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
            "value": 2048076,
            "unit": "ns/op\t  239585 B/op\t    4107 allocs/op",
            "extra": "175 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 2048076,
            "unit": "ns/op",
            "extra": "175 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239585,
            "unit": "B/op",
            "extra": "175 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "175 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 7599,
            "unit": "ns/op\t    2375 B/op\t      26 allocs/op",
            "extra": "46520 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 7599,
            "unit": "ns/op",
            "extra": "46520 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 2375,
            "unit": "B/op",
            "extra": "46520 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 26,
            "unit": "allocs/op",
            "extra": "46520 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 3765,
            "unit": "ns/op\t    1072 B/op\t      15 allocs/op",
            "extra": "97281 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 3765,
            "unit": "ns/op",
            "extra": "97281 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 1072,
            "unit": "B/op",
            "extra": "97281 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "97281 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 2015247,
            "unit": "ns/op\t  239569 B/op\t    4107 allocs/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 2015247,
            "unit": "ns/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239569,
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
            "extra": "378745 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 1013,
            "unit": "ns/op",
            "extra": "378745 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 11,
            "unit": "B/op",
            "extra": "378745 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "378745 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 1030,
            "unit": "ns/op\t       6 B/op\t       0 allocs/op",
            "extra": "371842 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 1030,
            "unit": "ns/op",
            "extra": "371842 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 6,
            "unit": "B/op",
            "extra": "371842 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "371842 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 5364,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "70045 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 5364,
            "unit": "ns/op",
            "extra": "70045 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "70045 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "70045 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 10162232,
            "unit": "ns/op\t     646 B/op\t       8 allocs/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 10162232,
            "unit": "ns/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 646,
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
            "value": 104.3,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "3437436 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 104.3,
            "unit": "ns/op",
            "extra": "3437436 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "3437436 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3437436 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 142.4,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "2495635 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 142.4,
            "unit": "ns/op",
            "extra": "2495635 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2495635 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2495635 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 270.3,
            "unit": "ns/op\t     144 B/op\t       6 allocs/op",
            "extra": "1339689 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 270.3,
            "unit": "ns/op",
            "extra": "1339689 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "1339689 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1339689 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 2143396,
            "unit": "ns/op\t     608 B/op\t      10 allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 2143396,
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
            "value": 111.2,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "3179042 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 111.2,
            "unit": "ns/op",
            "extra": "3179042 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "3179042 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3179042 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 29842,
            "unit": "ns/op\t    1522 B/op\t      22 allocs/op",
            "extra": "12174 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 29842,
            "unit": "ns/op",
            "extra": "12174 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1522,
            "unit": "B/op",
            "extra": "12174 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "12174 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 68632883,
            "unit": "ns/op\t    1793 B/op\t      16 allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 68632883,
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
            "value": 34300993,
            "unit": "ns/op\t    1940 B/op\t      18 allocs/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 34300993,
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
            "value": 17215169,
            "unit": "ns/op\t    2237 B/op\t      22 allocs/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 17215169,
            "unit": "ns/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 2237,
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
            "value": 8645109,
            "unit": "ns/op\t    2812 B/op\t      30 allocs/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 8645109,
            "unit": "ns/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 2812,
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
            "value": 4391128,
            "unit": "ns/op\t    3985 B/op\t      46 allocs/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 4391128,
            "unit": "ns/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 3985,
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
            "value": 1099388,
            "unit": "ns/op\t    1143 B/op\t      20 allocs/op",
            "extra": "330 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 1099388,
            "unit": "ns/op",
            "extra": "330 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1143,
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
            "value": 16754,
            "unit": "ns/op\t    1234 B/op\t      20 allocs/op",
            "extra": "20578 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 16754,
            "unit": "ns/op",
            "extra": "20578 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1234,
            "unit": "B/op",
            "extra": "20578 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "20578 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 147.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2434008 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 147.7,
            "unit": "ns/op",
            "extra": "2434008 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2434008 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2434008 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 9478,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "33868 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 9478,
            "unit": "ns/op",
            "extra": "33868 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "33868 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "33868 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 305.8,
            "unit": "ns/op\t   3495658 rejected\t       0 B/op\t       0 allocs/op",
            "extra": "3496681 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 305.8,
            "unit": "ns/op",
            "extra": "3496681 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - rejected",
            "value": 3495658,
            "unit": "rejected",
            "extra": "3496681 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3496681 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3496681 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 101.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3525399 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 101.4,
            "unit": "ns/op",
            "extra": "3525399 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3525399 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3525399 times\n4 procs"
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
            "value": 1473,
            "unit": "ns/op\t     568 B/op\t       9 allocs/op",
            "extra": "227946 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 1473,
            "unit": "ns/op",
            "extra": "227946 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "227946 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "227946 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 1089062,
            "unit": "ns/op\t     730 B/op\t      10 allocs/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 1089062,
            "unit": "ns/op",
            "extra": "334 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 730,
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
            "value": 568.9,
            "unit": "ns/op\t     568 B/op\t       9 allocs/op",
            "extra": "578817 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 568.9,
            "unit": "ns/op",
            "extra": "578817 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "578817 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "578817 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 3868,
            "unit": "ns/op\t     664 B/op\t      11 allocs/op",
            "extra": "90543 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 3868,
            "unit": "ns/op",
            "extra": "90543 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 664,
            "unit": "B/op",
            "extra": "90543 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "90543 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 464.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "727461 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 464.2,
            "unit": "ns/op",
            "extra": "727461 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "727461 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "727461 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 730,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "484326 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 730,
            "unit": "ns/op",
            "extra": "484326 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "484326 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "484326 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 1036939,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 1036939,
            "unit": "ns/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 12.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28617165 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 12.46,
            "unit": "ns/op",
            "extra": "28617165 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "28617165 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "28617165 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 20619,
            "unit": "ns/op\t   18274 B/op\t      28 allocs/op",
            "extra": "18879 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 20619,
            "unit": "ns/op",
            "extra": "18879 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 18274,
            "unit": "B/op",
            "extra": "18879 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "18879 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 26981,
            "unit": "ns/op\t   25307 B/op\t      82 allocs/op",
            "extra": "13395 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 26981,
            "unit": "ns/op",
            "extra": "13395 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 25307,
            "unit": "B/op",
            "extra": "13395 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "13395 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 157350,
            "unit": "ns/op\t  112266 B/op\t     632 allocs/op",
            "extra": "1976 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 157350,
            "unit": "ns/op",
            "extra": "1976 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 112266,
            "unit": "B/op",
            "extra": "1976 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 632,
            "unit": "allocs/op",
            "extra": "1976 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11382141577,
            "unit": "ns/op\t     902 B/op\t      13 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11382141577,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 902,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 24.36,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14734702 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 24.36,
            "unit": "ns/op",
            "extra": "14734702 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "14734702 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14734702 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 24.31,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13801790 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 24.31,
            "unit": "ns/op",
            "extra": "13801790 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13801790 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13801790 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 25.47,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13415041 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 25.47,
            "unit": "ns/op",
            "extra": "13415041 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13415041 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13415041 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11382310310,
            "unit": "ns/op\t     908 B/op\t      14 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11382310310,
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
            "value": 11382466948,
            "unit": "ns/op\t     913 B/op\t      14 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11382466948,
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
            "value": 277.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1291164 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 277.7,
            "unit": "ns/op",
            "extra": "1291164 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1291164 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1291164 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 26.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13645221 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 26.13,
            "unit": "ns/op",
            "extra": "13645221 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13645221 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13645221 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 624.2,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "556677 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 624.2,
            "unit": "ns/op",
            "extra": "556677 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "556677 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "556677 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 10.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31049574 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 10.43,
            "unit": "ns/op",
            "extra": "31049574 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "31049574 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "31049574 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Abhipray Dumka",
            "username": "abhipray-cpu",
            "email": "dumkaabhipray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "37bd84e6575ab262fd4bf0c83dc51fd939653f6f",
          "message": "Dependabot removal (#9)\n\n* removed the dependabot file\n\n* updated the schdeuled nightly run\n\n---------\n\nCo-authored-by: Abhipray Dumka <puttanpal@Abhiprays-MacBook-Air.local>",
          "timestamp": "2026-03-10T17:02:36Z",
          "url": "https://github.com/abhipray-cpu/concurx/commit/37bd84e6575ab262fd4bf0c83dc51fd939653f6f"
        },
        "date": 1774235638328,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 1766,
            "unit": "ns/op\t     720 B/op\t      10 allocs/op",
            "extra": "191325 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1766,
            "unit": "ns/op",
            "extra": "191325 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 720,
            "unit": "B/op",
            "extra": "191325 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "191325 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 3994,
            "unit": "ns/op\t    1176 B/op\t      25 allocs/op",
            "extra": "87046 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 3994,
            "unit": "ns/op",
            "extra": "87046 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 1176,
            "unit": "B/op",
            "extra": "87046 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "87046 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 1093749,
            "unit": "ns/op\t    2178 B/op\t      36 allocs/op",
            "extra": "332 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1093749,
            "unit": "ns/op",
            "extra": "332 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 2178,
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
            "value": 1763,
            "unit": "ns/op\t     728 B/op\t      10 allocs/op",
            "extra": "175653 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1763,
            "unit": "ns/op",
            "extra": "175653 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 728,
            "unit": "B/op",
            "extra": "175653 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "175653 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group)",
            "value": 1112250,
            "unit": "ns/op\t    6292 B/op\t     222 allocs/op",
            "extra": "328 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1112250,
            "unit": "ns/op",
            "extra": "328 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 6292,
            "unit": "B/op",
            "extra": "328 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 222,
            "unit": "allocs/op",
            "extra": "328 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group)",
            "value": 1099477,
            "unit": "ns/op\t    2651 B/op\t      54 allocs/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1099477,
            "unit": "ns/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 2651,
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
            "value": 21594,
            "unit": "ns/op\t    6802 B/op\t     210 allocs/op",
            "extra": "16658 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 21594,
            "unit": "ns/op",
            "extra": "16658 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 6802,
            "unit": "B/op",
            "extra": "16658 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 210,
            "unit": "allocs/op",
            "extra": "16658 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 258.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1392627 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 258.8,
            "unit": "ns/op",
            "extra": "1392627 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1392627 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1392627 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 268068,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1401 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 268068,
            "unit": "ns/op",
            "extra": "1401 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1401 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1401 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 266550,
            "unit": "ns/op\t       1 B/op\t       0 allocs/op",
            "extra": "1344 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 266550,
            "unit": "ns/op",
            "extra": "1344 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1344 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1344 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 5138179,
            "unit": "ns/op\t     249 B/op\t       3 allocs/op",
            "extra": "69 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 5138179,
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
            "value": 239.7,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "1479465 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 239.7,
            "unit": "ns/op",
            "extra": "1479465 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "1479465 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1479465 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 17.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20509477 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 17.47,
            "unit": "ns/op",
            "extra": "20509477 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20509477 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20509477 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 18.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19311482 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 18.55,
            "unit": "ns/op",
            "extra": "19311482 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19311482 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19311482 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 39.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9321645 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 39.39,
            "unit": "ns/op",
            "extra": "9321645 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9321645 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9321645 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 17.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19263332 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 17.38,
            "unit": "ns/op",
            "extra": "19263332 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19263332 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19263332 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 63.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6276799 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 63.13,
            "unit": "ns/op",
            "extra": "6276799 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6276799 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6276799 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 595190,
            "unit": "ns/op\t   10186 B/op\t      23 allocs/op",
            "extra": "584 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 595190,
            "unit": "ns/op",
            "extra": "584 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10186,
            "unit": "B/op",
            "extra": "584 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "584 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 517434,
            "unit": "ns/op\t   10148 B/op\t      23 allocs/op",
            "extra": "688 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 517434,
            "unit": "ns/op",
            "extra": "688 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10148,
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
            "value": 515802,
            "unit": "ns/op\t   10130 B/op\t      23 allocs/op",
            "extra": "670 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 515802,
            "unit": "ns/op",
            "extra": "670 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10130,
            "unit": "B/op",
            "extra": "670 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "670 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 1026167,
            "unit": "ns/op\t    4357 B/op\t      27 allocs/op",
            "extra": "366 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 1026167,
            "unit": "ns/op",
            "extra": "366 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 4357,
            "unit": "B/op",
            "extra": "366 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "366 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 2139687,
            "unit": "ns/op\t    2872 B/op\t      25 allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 2139687,
            "unit": "ns/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 2872,
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
            "value": 747385,
            "unit": "ns/op\t    1281 B/op\t      18 allocs/op",
            "extra": "474 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - ns/op",
            "value": 747385,
            "unit": "ns/op",
            "extra": "474 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - B/op",
            "value": 1281,
            "unit": "B/op",
            "extra": "474 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "474 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce)",
            "value": 8078188,
            "unit": "ns/op\t    1902 B/op\t      26 allocs/op",
            "extra": "43 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - ns/op",
            "value": 8078188,
            "unit": "ns/op",
            "extra": "43 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - B/op",
            "value": 1902,
            "unit": "B/op",
            "extra": "43 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - allocs/op",
            "value": 26,
            "unit": "allocs/op",
            "extra": "43 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 2060610,
            "unit": "ns/op\t  239592 B/op\t    4107 allocs/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 2060610,
            "unit": "ns/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239592,
            "unit": "B/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 4870648,
            "unit": "ns/op\t  698764 B/op\t   12303 allocs/op",
            "extra": "74 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 4870648,
            "unit": "ns/op",
            "extra": "74 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 698764,
            "unit": "B/op",
            "extra": "74 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 12303,
            "unit": "allocs/op",
            "extra": "74 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 195775318,
            "unit": "ns/op\t   85168 B/op\t    1293 allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 195775318,
            "unit": "ns/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 85168,
            "unit": "B/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 1293,
            "unit": "allocs/op",
            "extra": "2 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 20159352,
            "unit": "ns/op\t 2322695 B/op\t   40011 allocs/op",
            "extra": "15 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 20159352,
            "unit": "ns/op",
            "extra": "15 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 2322695,
            "unit": "B/op",
            "extra": "15 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 40011,
            "unit": "allocs/op",
            "extra": "15 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 2063472,
            "unit": "ns/op\t  239579 B/op\t    4107 allocs/op",
            "extra": "175 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 2063472,
            "unit": "ns/op",
            "extra": "175 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239579,
            "unit": "B/op",
            "extra": "175 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "175 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 7600,
            "unit": "ns/op\t    2377 B/op\t      26 allocs/op",
            "extra": "45097 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 7600,
            "unit": "ns/op",
            "extra": "45097 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 2377,
            "unit": "B/op",
            "extra": "45097 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 26,
            "unit": "allocs/op",
            "extra": "45097 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 3711,
            "unit": "ns/op\t    1072 B/op\t      15 allocs/op",
            "extra": "96698 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 3711,
            "unit": "ns/op",
            "extra": "96698 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 1072,
            "unit": "B/op",
            "extra": "96698 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "96698 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 1972403,
            "unit": "ns/op\t  239568 B/op\t    4107 allocs/op",
            "extra": "169 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 1972403,
            "unit": "ns/op",
            "extra": "169 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239568,
            "unit": "B/op",
            "extra": "169 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "169 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 1011,
            "unit": "ns/op\t       9 B/op\t       0 allocs/op",
            "extra": "395619 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 1011,
            "unit": "ns/op",
            "extra": "395619 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 9,
            "unit": "B/op",
            "extra": "395619 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "395619 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 1034,
            "unit": "ns/op\t       5 B/op\t       0 allocs/op",
            "extra": "387705 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 1034,
            "unit": "ns/op",
            "extra": "387705 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 5,
            "unit": "B/op",
            "extra": "387705 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "387705 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 5412,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "67579 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 5412,
            "unit": "ns/op",
            "extra": "67579 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67579 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67579 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 10181086,
            "unit": "ns/op\t     687 B/op\t       8 allocs/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 10181086,
            "unit": "ns/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 687,
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
            "value": 105.1,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "3456206 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 105.1,
            "unit": "ns/op",
            "extra": "3456206 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "3456206 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3456206 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 143,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "2486355 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 143,
            "unit": "ns/op",
            "extra": "2486355 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2486355 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2486355 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 271.9,
            "unit": "ns/op\t     144 B/op\t       6 allocs/op",
            "extra": "1319668 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 271.9,
            "unit": "ns/op",
            "extra": "1319668 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "1319668 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1319668 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 2141561,
            "unit": "ns/op\t     608 B/op\t      10 allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 2141561,
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
            "value": 111.2,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "3213438 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 111.2,
            "unit": "ns/op",
            "extra": "3213438 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "3213438 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3213438 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 29704,
            "unit": "ns/op\t    1520 B/op\t      22 allocs/op",
            "extra": "12427 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 29704,
            "unit": "ns/op",
            "extra": "12427 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1520,
            "unit": "B/op",
            "extra": "12427 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "12427 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 68470517,
            "unit": "ns/op\t    1803 B/op\t      16 allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 68470517,
            "unit": "ns/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1803,
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
            "value": 34296181,
            "unit": "ns/op\t    1945 B/op\t      18 allocs/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 34296181,
            "unit": "ns/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1945,
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
            "value": 17190707,
            "unit": "ns/op\t    2227 B/op\t      22 allocs/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 17190707,
            "unit": "ns/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 2227,
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
            "value": 8636824,
            "unit": "ns/op\t    2806 B/op\t      30 allocs/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 8636824,
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
            "value": 4391626,
            "unit": "ns/op\t    4058 B/op\t      47 allocs/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 4391626,
            "unit": "ns/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 4058,
            "unit": "B/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 47,
            "unit": "allocs/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 1095501,
            "unit": "ns/op\t    1194 B/op\t      20 allocs/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 1095501,
            "unit": "ns/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1194,
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
            "value": 16711,
            "unit": "ns/op\t    1234 B/op\t      20 allocs/op",
            "extra": "21069 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 16711,
            "unit": "ns/op",
            "extra": "21069 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1234,
            "unit": "B/op",
            "extra": "21069 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "21069 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 147.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2442508 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 147.2,
            "unit": "ns/op",
            "extra": "2442508 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2442508 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2442508 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 9856,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43346 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 9856,
            "unit": "ns/op",
            "extra": "43346 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43346 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43346 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 92.87,
            "unit": "ns/op\t   3803213 rejected\t       0 B/op\t       0 allocs/op",
            "extra": "3803568 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 92.87,
            "unit": "ns/op",
            "extra": "3803568 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - rejected",
            "value": 3803213,
            "unit": "rejected",
            "extra": "3803568 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3803568 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3803568 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 103.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3342882 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 103.1,
            "unit": "ns/op",
            "extra": "3342882 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3342882 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3342882 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 0.3115,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 0.3115,
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
            "value": 1528,
            "unit": "ns/op\t     568 B/op\t       9 allocs/op",
            "extra": "246480 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 1528,
            "unit": "ns/op",
            "extra": "246480 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "246480 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "246480 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 1087638,
            "unit": "ns/op\t     831 B/op\t      10 allocs/op",
            "extra": "333 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 1087638,
            "unit": "ns/op",
            "extra": "333 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 831,
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
            "value": 571,
            "unit": "ns/op\t     568 B/op\t       9 allocs/op",
            "extra": "630278 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 571,
            "unit": "ns/op",
            "extra": "630278 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "630278 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "630278 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 3901,
            "unit": "ns/op\t     664 B/op\t      11 allocs/op",
            "extra": "80192 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 3901,
            "unit": "ns/op",
            "extra": "80192 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 664,
            "unit": "B/op",
            "extra": "80192 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "80192 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 453.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "704600 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 453.7,
            "unit": "ns/op",
            "extra": "704600 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "704600 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "704600 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 715.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "489997 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 715.6,
            "unit": "ns/op",
            "extra": "489997 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "489997 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "489997 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 1040625,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "373 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 1040625,
            "unit": "ns/op",
            "extra": "373 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "373 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "373 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 12.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27861658 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 12.48,
            "unit": "ns/op",
            "extra": "27861658 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "27861658 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "27861658 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 20233,
            "unit": "ns/op\t   18273 B/op\t      28 allocs/op",
            "extra": "18136 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 20233,
            "unit": "ns/op",
            "extra": "18136 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 18273,
            "unit": "B/op",
            "extra": "18136 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "18136 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 27645,
            "unit": "ns/op\t   25309 B/op\t      82 allocs/op",
            "extra": "12939 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 27645,
            "unit": "ns/op",
            "extra": "12939 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 25309,
            "unit": "B/op",
            "extra": "12939 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "12939 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 154460,
            "unit": "ns/op\t  112105 B/op\t     631 allocs/op",
            "extra": "2017 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 154460,
            "unit": "ns/op",
            "extra": "2017 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 112105,
            "unit": "B/op",
            "extra": "2017 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 631,
            "unit": "allocs/op",
            "extra": "2017 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11377031852,
            "unit": "ns/op\t     908 B/op\t      14 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11377031852,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 908,
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
            "value": 24.62,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14429534 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 24.62,
            "unit": "ns/op",
            "extra": "14429534 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "14429534 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14429534 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 24.86,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13551136 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 24.86,
            "unit": "ns/op",
            "extra": "13551136 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13551136 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13551136 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 25.74,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13197828 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 25.74,
            "unit": "ns/op",
            "extra": "13197828 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13197828 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13197828 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11382308246,
            "unit": "ns/op\t     908 B/op\t      14 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11382308246,
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
            "value": 11382264041,
            "unit": "ns/op\t     902 B/op\t      13 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11382264041,
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
            "value": 273.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1315700 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 273.4,
            "unit": "ns/op",
            "extra": "1315700 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1315700 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1315700 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 25.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13513003 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 25.3,
            "unit": "ns/op",
            "extra": "13513003 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "13513003 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "13513003 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 629.7,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "555348 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 629.7,
            "unit": "ns/op",
            "extra": "555348 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "555348 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "555348 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 10.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30805594 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 10.73,
            "unit": "ns/op",
            "extra": "30805594 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "30805594 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "30805594 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Abhipray Dumka",
            "username": "abhipray-cpu",
            "email": "dumkaabhipray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "37bd84e6575ab262fd4bf0c83dc51fd939653f6f",
          "message": "Dependabot removal (#9)\n\n* removed the dependabot file\n\n* updated the schdeuled nightly run\n\n---------\n\nCo-authored-by: Abhipray Dumka <puttanpal@Abhiprays-MacBook-Air.local>",
          "timestamp": "2026-03-10T17:02:36Z",
          "url": "https://github.com/abhipray-cpu/concurx/commit/37bd84e6575ab262fd4bf0c83dc51fd939653f6f"
        },
        "date": 1774840424618,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 1580,
            "unit": "ns/op\t     720 B/op\t      10 allocs/op",
            "extra": "207442 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1580,
            "unit": "ns/op",
            "extra": "207442 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 720,
            "unit": "B/op",
            "extra": "207442 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "207442 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 3527,
            "unit": "ns/op\t    1176 B/op\t      25 allocs/op",
            "extra": "94227 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 3527,
            "unit": "ns/op",
            "extra": "94227 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 1176,
            "unit": "B/op",
            "extra": "94227 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "94227 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 1088096,
            "unit": "ns/op\t    2165 B/op\t      36 allocs/op",
            "extra": "337 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1088096,
            "unit": "ns/op",
            "extra": "337 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 2165,
            "unit": "B/op",
            "extra": "337 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 36,
            "unit": "allocs/op",
            "extra": "337 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group)",
            "value": 1744,
            "unit": "ns/op\t     728 B/op\t      10 allocs/op",
            "extra": "204258 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1744,
            "unit": "ns/op",
            "extra": "204258 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 728,
            "unit": "B/op",
            "extra": "204258 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "204258 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group)",
            "value": 1118621,
            "unit": "ns/op\t    6296 B/op\t     222 allocs/op",
            "extra": "324 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1118621,
            "unit": "ns/op",
            "extra": "324 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 6296,
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
            "value": 1096904,
            "unit": "ns/op\t    2650 B/op\t      54 allocs/op",
            "extra": "325 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1096904,
            "unit": "ns/op",
            "extra": "325 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 2650,
            "unit": "B/op",
            "extra": "325 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "325 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group)",
            "value": 35698,
            "unit": "ns/op\t   15260 B/op\t     474 allocs/op",
            "extra": "9669 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 35698,
            "unit": "ns/op",
            "extra": "9669 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 15260,
            "unit": "B/op",
            "extra": "9669 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 474,
            "unit": "allocs/op",
            "extra": "9669 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 251,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1413254 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 251,
            "unit": "ns/op",
            "extra": "1413254 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1413254 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1413254 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 268312,
            "unit": "ns/op\t       1 B/op\t       0 allocs/op",
            "extra": "1395 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 268312,
            "unit": "ns/op",
            "extra": "1395 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1395 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1395 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 269144,
            "unit": "ns/op\t       2 B/op\t       0 allocs/op",
            "extra": "1334 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 269144,
            "unit": "ns/op",
            "extra": "1334 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 2,
            "unit": "B/op",
            "extra": "1334 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1334 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 5150548,
            "unit": "ns/op\t     249 B/op\t       3 allocs/op",
            "extra": "68 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 5150548,
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
            "value": 236,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "1570569 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 236,
            "unit": "ns/op",
            "extra": "1570569 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "1570569 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1570569 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 17.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19820800 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 17.44,
            "unit": "ns/op",
            "extra": "19820800 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19820800 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19820800 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 18.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19294143 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 18.61,
            "unit": "ns/op",
            "extra": "19294143 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19294143 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19294143 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 38.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9233014 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 38.97,
            "unit": "ns/op",
            "extra": "9233014 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9233014 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9233014 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 17.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20441988 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 17.45,
            "unit": "ns/op",
            "extra": "20441988 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20441988 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20441988 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 58.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5924187 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 58.41,
            "unit": "ns/op",
            "extra": "5924187 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5924187 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5924187 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 556578,
            "unit": "ns/op\t   10172 B/op\t      23 allocs/op",
            "extra": "585 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 556578,
            "unit": "ns/op",
            "extra": "585 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10172,
            "unit": "B/op",
            "extra": "585 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "585 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 479759,
            "unit": "ns/op\t   10144 B/op\t      23 allocs/op",
            "extra": "740 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 479759,
            "unit": "ns/op",
            "extra": "740 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10144,
            "unit": "B/op",
            "extra": "740 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "740 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 476622,
            "unit": "ns/op\t   10124 B/op\t      23 allocs/op",
            "extra": "741 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 476622,
            "unit": "ns/op",
            "extra": "741 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10124,
            "unit": "B/op",
            "extra": "741 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "741 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 1024552,
            "unit": "ns/op\t    4380 B/op\t      28 allocs/op",
            "extra": "345 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 1024552,
            "unit": "ns/op",
            "extra": "345 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 4380,
            "unit": "B/op",
            "extra": "345 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "345 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 2131969,
            "unit": "ns/op\t    2872 B/op\t      25 allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 2131969,
            "unit": "ns/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 2872,
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
            "value": 659816,
            "unit": "ns/op\t    1284 B/op\t      18 allocs/op",
            "extra": "531 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - ns/op",
            "value": 659816,
            "unit": "ns/op",
            "extra": "531 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - B/op",
            "value": 1284,
            "unit": "B/op",
            "extra": "531 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "531 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce)",
            "value": 6981480,
            "unit": "ns/op\t    2027 B/op\t      27 allocs/op",
            "extra": "45 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - ns/op",
            "value": 6981480,
            "unit": "ns/op",
            "extra": "45 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - B/op",
            "value": 2027,
            "unit": "B/op",
            "extra": "45 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "45 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 1856248,
            "unit": "ns/op\t  239604 B/op\t    4107 allocs/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 1856248,
            "unit": "ns/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239604,
            "unit": "B/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 4433953,
            "unit": "ns/op\t  698708 B/op\t   12303 allocs/op",
            "extra": "81 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 4433953,
            "unit": "ns/op",
            "extra": "81 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 698708,
            "unit": "B/op",
            "extra": "81 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 12303,
            "unit": "allocs/op",
            "extra": "81 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 94579967,
            "unit": "ns/op\t   85024 B/op\t    1291 allocs/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 94579967,
            "unit": "ns/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 85024,
            "unit": "B/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 1291,
            "unit": "allocs/op",
            "extra": "8 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 17727727,
            "unit": "ns/op\t 2322663 B/op\t   40011 allocs/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 17727727,
            "unit": "ns/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 2322663,
            "unit": "B/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 40011,
            "unit": "allocs/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 1817692,
            "unit": "ns/op\t  239581 B/op\t    4107 allocs/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 1817692,
            "unit": "ns/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239581,
            "unit": "B/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 6916,
            "unit": "ns/op\t    2373 B/op\t      26 allocs/op",
            "extra": "50066 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 6916,
            "unit": "ns/op",
            "extra": "50066 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 2373,
            "unit": "B/op",
            "extra": "50066 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 26,
            "unit": "allocs/op",
            "extra": "50066 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 3526,
            "unit": "ns/op\t    1072 B/op\t      15 allocs/op",
            "extra": "105688 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 3526,
            "unit": "ns/op",
            "extra": "105688 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 1072,
            "unit": "B/op",
            "extra": "105688 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "105688 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 1779211,
            "unit": "ns/op\t  239568 B/op\t    4107 allocs/op",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 1779211,
            "unit": "ns/op",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239568,
            "unit": "B/op",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 1011,
            "unit": "ns/op\t      11 B/op\t       0 allocs/op",
            "extra": "371896 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 1011,
            "unit": "ns/op",
            "extra": "371896 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 11,
            "unit": "B/op",
            "extra": "371896 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "371896 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 1013,
            "unit": "ns/op\t       9 B/op\t       0 allocs/op",
            "extra": "394605 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 1013,
            "unit": "ns/op",
            "extra": "394605 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 9,
            "unit": "B/op",
            "extra": "394605 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "394605 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 5398,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "69987 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 5398,
            "unit": "ns/op",
            "extra": "69987 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "69987 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "69987 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 10163248,
            "unit": "ns/op\t     664 B/op\t       8 allocs/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 10163248,
            "unit": "ns/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 664,
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
            "value": 104.2,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "3459955 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 104.2,
            "unit": "ns/op",
            "extra": "3459955 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "3459955 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3459955 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 143.4,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "2507432 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 143.4,
            "unit": "ns/op",
            "extra": "2507432 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2507432 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2507432 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 271.6,
            "unit": "ns/op\t     144 B/op\t       6 allocs/op",
            "extra": "1323747 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 271.6,
            "unit": "ns/op",
            "extra": "1323747 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "1323747 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1323747 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 2146006,
            "unit": "ns/op\t     608 B/op\t      10 allocs/op",
            "extra": "166 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 2146006,
            "unit": "ns/op",
            "extra": "166 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 608,
            "unit": "B/op",
            "extra": "166 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "166 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 111.3,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "3223617 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 111.3,
            "unit": "ns/op",
            "extra": "3223617 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "3223617 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3223617 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 26118,
            "unit": "ns/op\t    1522 B/op\t      22 allocs/op",
            "extra": "13873 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 26118,
            "unit": "ns/op",
            "extra": "13873 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1522,
            "unit": "B/op",
            "extra": "13873 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "13873 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 68868325,
            "unit": "ns/op\t    1800 B/op\t      16 allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 68868325,
            "unit": "ns/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1800,
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
            "value": 34420575,
            "unit": "ns/op\t    1944 B/op\t      18 allocs/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 34420575,
            "unit": "ns/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1944,
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
            "value": 17275783,
            "unit": "ns/op\t    2227 B/op\t      22 allocs/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 17275783,
            "unit": "ns/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 2227,
            "unit": "B/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 8696578,
            "unit": "ns/op\t    2806 B/op\t      30 allocs/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 8696578,
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
            "value": 4432959,
            "unit": "ns/op\t    3999 B/op\t      46 allocs/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 4432959,
            "unit": "ns/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 3999,
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
            "value": 1099257,
            "unit": "ns/op\t    1134 B/op\t      20 allocs/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 1099257,
            "unit": "ns/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1134,
            "unit": "B/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 15015,
            "unit": "ns/op\t    1233 B/op\t      20 allocs/op",
            "extra": "23385 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 15015,
            "unit": "ns/op",
            "extra": "23385 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1233,
            "unit": "B/op",
            "extra": "23385 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "23385 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 148.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2411666 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 148.6,
            "unit": "ns/op",
            "extra": "2411666 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2411666 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2411666 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 9728,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35578 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 9728,
            "unit": "ns/op",
            "extra": "35578 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "35578 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "35578 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 279.2,
            "unit": "ns/op\t   3413580 rejected\t       0 B/op\t       0 allocs/op",
            "extra": "3414486 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 279.2,
            "unit": "ns/op",
            "extra": "3414486 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - rejected",
            "value": 3413580,
            "unit": "rejected",
            "extra": "3414486 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3414486 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3414486 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 103.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3438712 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 103.9,
            "unit": "ns/op",
            "extra": "3438712 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3438712 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3438712 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 0.3115,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000000 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_NoWrapper (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 0.3115,
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
            "value": 1403,
            "unit": "ns/op\t     568 B/op\t       9 allocs/op",
            "extra": "253946 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 1403,
            "unit": "ns/op",
            "extra": "253946 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "253946 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "253946 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 1096482,
            "unit": "ns/op\t     775 B/op\t      10 allocs/op",
            "extra": "332 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 1096482,
            "unit": "ns/op",
            "extra": "332 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 775,
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
            "value": 572.5,
            "unit": "ns/op\t     568 B/op\t       9 allocs/op",
            "extra": "562807 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 572.5,
            "unit": "ns/op",
            "extra": "562807 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "562807 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "562807 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 3621,
            "unit": "ns/op\t     664 B/op\t      11 allocs/op",
            "extra": "94764 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 3621,
            "unit": "ns/op",
            "extra": "94764 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 664,
            "unit": "B/op",
            "extra": "94764 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "94764 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 418.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "762872 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 418.7,
            "unit": "ns/op",
            "extra": "762872 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "762872 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "762872 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 690.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "517394 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 690.2,
            "unit": "ns/op",
            "extra": "517394 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "517394 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "517394 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 1056161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "370 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 1056161,
            "unit": "ns/op",
            "extra": "370 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "370 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "370 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 12.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28540728 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 12.48,
            "unit": "ns/op",
            "extra": "28540728 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "28540728 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "28540728 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 19095,
            "unit": "ns/op\t   18274 B/op\t      28 allocs/op",
            "extra": "18512 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 19095,
            "unit": "ns/op",
            "extra": "18512 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 18274,
            "unit": "B/op",
            "extra": "18512 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "18512 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 28235,
            "unit": "ns/op\t   25308 B/op\t      82 allocs/op",
            "extra": "13057 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 28235,
            "unit": "ns/op",
            "extra": "13057 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 25308,
            "unit": "B/op",
            "extra": "13057 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "13057 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 132406,
            "unit": "ns/op\t  110433 B/op\t     592 allocs/op",
            "extra": "2335 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 132406,
            "unit": "ns/op",
            "extra": "2335 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 110433,
            "unit": "B/op",
            "extra": "2335 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 592,
            "unit": "allocs/op",
            "extra": "2335 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11377818017,
            "unit": "ns/op\t     913 B/op\t      14 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11377818017,
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
            "value": 24.44,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14500725 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 24.44,
            "unit": "ns/op",
            "extra": "14500725 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "14500725 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14500725 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 24.49,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13823398 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 24.49,
            "unit": "ns/op",
            "extra": "13823398 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13823398 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13823398 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 25.95,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "12780040 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 25.95,
            "unit": "ns/op",
            "extra": "12780040 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "12780040 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12780040 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11382348742,
            "unit": "ns/op\t     913 B/op\t      14 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11382348742,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 913,
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
            "value": 11380065807,
            "unit": "ns/op\t     884 B/op\t      13 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11380065807,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 884,
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
            "value": 248.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1434020 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 248.3,
            "unit": "ns/op",
            "extra": "1434020 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1434020 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1434020 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 18.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20706135 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 18.15,
            "unit": "ns/op",
            "extra": "20706135 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20706135 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20706135 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 609.8,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "598195 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 609.8,
            "unit": "ns/op",
            "extra": "598195 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "598195 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "598195 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 10.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36809703 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 10.26,
            "unit": "ns/op",
            "extra": "36809703 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "36809703 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "36809703 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Abhipray Dumka",
            "username": "abhipray-cpu",
            "email": "dumkaabhipray@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2461609b1d892c8cd8ef13e19f7509c8d12dd337",
          "message": "Update cron schedule for stale issue management (#10)",
          "timestamp": "2026-03-30T14:31:25Z",
          "url": "https://github.com/abhipray-cpu/concurx/commit/2461609b1d892c8cd8ef13e19f7509c8d12dd337"
        },
        "date": 1775445097295,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 1580,
            "unit": "ns/op\t     720 B/op\t      10 allocs/op",
            "extra": "221883 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1580,
            "unit": "ns/op",
            "extra": "221883 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 720,
            "unit": "B/op",
            "extra": "221883 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_NoSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "221883 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 3520,
            "unit": "ns/op\t    1176 B/op\t      25 allocs/op",
            "extra": "97945 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 3520,
            "unit": "ns/op",
            "extra": "97945 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 1176,
            "unit": "B/op",
            "extra": "97945 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_ShortTasks (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "97945 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group)",
            "value": 1087201,
            "unit": "ns/op\t    2160 B/op\t      36 allocs/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1087201,
            "unit": "ns/op",
            "extra": "331 times\n4 procs"
          },
          {
            "name": "BenchmarkGo_WithSemaphore_LongTasks (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 2160,
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
            "value": 1594,
            "unit": "ns/op\t     728 B/op\t      10 allocs/op",
            "extra": "204258 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1594,
            "unit": "ns/op",
            "extra": "204258 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 728,
            "unit": "B/op",
            "extra": "204258 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_NoSemaphore (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "204258 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group)",
            "value": 1122506,
            "unit": "ns/op\t    6291 B/op\t     222 allocs/op",
            "extra": "327 times\n4 procs"
          },
          {
            "name": "BenchmarkTryGo_WithContention (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1122506,
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
            "value": 1095231,
            "unit": "ns/op\t    2640 B/op\t      54 allocs/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 1095231,
            "unit": "ns/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 2640,
            "unit": "B/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkBlockingGo_AcquireLatency (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 54,
            "unit": "allocs/op",
            "extra": "322 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group)",
            "value": 36375,
            "unit": "ns/op\t   15114 B/op\t     470 allocs/op",
            "extra": "9062 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - ns/op",
            "value": 36375,
            "unit": "ns/op",
            "extra": "9062 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - B/op",
            "value": 15114,
            "unit": "B/op",
            "extra": "9062 times\n4 procs"
          },
          {
            "name": "BenchmarkWait_Overhead (github.com/abhipray-cpu/concurx/group) - allocs/op",
            "value": 470,
            "unit": "allocs/op",
            "extra": "9062 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 270.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1332088 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 270.7,
            "unit": "ns/op",
            "extra": "1332088 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1332088 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_NoContention (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1332088 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 268240,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 268240,
            "unit": "ns/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_FailFast (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
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
            "value": 269214,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1394 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 269214,
            "unit": "ns/op",
            "extra": "1394 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1394 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_Contention_WithQueue (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1394 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead)",
            "value": 5152037,
            "unit": "ns/op\t     249 B/op\t       3 allocs/op",
            "extra": "68 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Execute_WithTimeout (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 5152037,
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
            "value": 235.4,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "1550059 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - ns/op",
            "value": 235.4,
            "unit": "ns/op",
            "extra": "1550059 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "1550059 times\n4 procs"
          },
          {
            "name": "BenchmarkBulkhead_Saturation (github.com/abhipray-cpu/concurx/patterns/bulkhead) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "1550059 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 17.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20294361 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 17.49,
            "unit": "ns/op",
            "extra": "20294361 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20294361 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_ClosedSuccess (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20294361 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 18.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19152890 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 18.62,
            "unit": "ns/op",
            "extra": "19152890 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19152890 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_FailureBeforeOpen (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19152890 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 39.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9209301 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 39.02,
            "unit": "ns/op",
            "extra": "9209301 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9209301 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_OpenFastFail (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9209301 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 17.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20534347 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 17.66,
            "unit": "ns/op",
            "extra": "20534347 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20534347 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_HalfOpenRecovery (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20534347 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker)",
            "value": 64.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5577590 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - ns/op",
            "value": 64.14,
            "unit": "ns/op",
            "extra": "5577590 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5577590 times\n4 procs"
          },
          {
            "name": "BenchmarkCircuitBreaker_Parallel (github.com/abhipray-cpu/concurx/patterns/circuitbreaker) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5577590 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 556103,
            "unit": "ns/op\t   10212 B/op\t      23 allocs/op",
            "extra": "639 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 556103,
            "unit": "ns/op",
            "extra": "639 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10212,
            "unit": "B/op",
            "extra": "639 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_CPU (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "639 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 469464,
            "unit": "ns/op\t   10125 B/op\t      23 allocs/op",
            "extra": "760 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 469464,
            "unit": "ns/op",
            "extra": "760 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10125,
            "unit": "B/op",
            "extra": "760 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/ordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "760 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 469010,
            "unit": "ns/op\t   10129 B/op\t      23 allocs/op",
            "extra": "766 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 469010,
            "unit": "ns/op",
            "extra": "766 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 10129,
            "unit": "B/op",
            "extra": "766 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_PreserveOrder/unordered (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 23,
            "unit": "allocs/op",
            "extra": "766 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 1008203,
            "unit": "ns/op\t    4375 B/op\t      27 allocs/op",
            "extra": "358 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 1008203,
            "unit": "ns/op",
            "extra": "358 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 4375,
            "unit": "B/op",
            "extra": "358 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_FailFast (github.com/abhipray-cpu/concurx/patterns/fanoutin) - allocs/op",
            "value": 27,
            "unit": "allocs/op",
            "extra": "358 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin)",
            "value": 2158418,
            "unit": "ns/op\t    2877 B/op\t      25 allocs/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - ns/op",
            "value": 2158418,
            "unit": "ns/op",
            "extra": "168 times\n4 procs"
          },
          {
            "name": "BenchmarkFanOut_Timeout (github.com/abhipray-cpu/concurx/patterns/fanoutin) - B/op",
            "value": 2877,
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
            "value": 647656,
            "unit": "ns/op\t    1283 B/op\t      18 allocs/op",
            "extra": "552 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - ns/op",
            "value": 647656,
            "unit": "ns/op",
            "extra": "552 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - B/op",
            "value": 1283,
            "unit": "B/op",
            "extra": "552 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_1k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "552 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce)",
            "value": 7012912,
            "unit": "ns/op\t    2113 B/op\t      28 allocs/op",
            "extra": "50 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - ns/op",
            "value": 7012912,
            "unit": "ns/op",
            "extra": "50 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - B/op",
            "value": 2113,
            "unit": "B/op",
            "extra": "50 times\n4 procs"
          },
          {
            "name": "BenchmarkMapReduce_10k (github.com/abhipray-cpu/concurx/patterns/mapreduce) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "50 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 1814583,
            "unit": "ns/op\t  239590 B/op\t    4107 allocs/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 1814583,
            "unit": "ns/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239590,
            "unit": "B/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_SingleStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 4579177,
            "unit": "ns/op\t  698770 B/op\t   12303 allocs/op",
            "extra": "84 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 4579177,
            "unit": "ns/op",
            "extra": "84 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 698770,
            "unit": "B/op",
            "extra": "84 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_MultiStage (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 12303,
            "unit": "allocs/op",
            "extra": "84 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 53788113,
            "unit": "ns/op\t   85109 B/op\t    1291 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 53788113,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 85109,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Backpressure (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 1291,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 17505680,
            "unit": "ns/op\t 2323056 B/op\t   40012 allocs/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 17505680,
            "unit": "ns/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 2323056,
            "unit": "B/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_HighFanIn (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 40012,
            "unit": "allocs/op",
            "extra": "19 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 1808466,
            "unit": "ns/op\t  239572 B/op\t    4107 allocs/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 1808466,
            "unit": "ns/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239572,
            "unit": "B/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_FailFast (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 6727,
            "unit": "ns/op\t    2373 B/op\t      26 allocs/op",
            "extra": "50149 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 6727,
            "unit": "ns/op",
            "extra": "50149 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 2373,
            "unit": "B/op",
            "extra": "50149 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Cancellation (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 26,
            "unit": "allocs/op",
            "extra": "50149 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 3493,
            "unit": "ns/op\t    1078 B/op\t      15 allocs/op",
            "extra": "103653 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 3493,
            "unit": "ns/op",
            "extra": "103653 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 1078,
            "unit": "B/op",
            "extra": "103653 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_PanicIsolation (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 15,
            "unit": "allocs/op",
            "extra": "103653 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline)",
            "value": 1731758,
            "unit": "ns/op\t  239568 B/op\t    4107 allocs/op",
            "extra": "194 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - ns/op",
            "value": 1731758,
            "unit": "ns/op",
            "extra": "194 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - B/op",
            "value": 239568,
            "unit": "B/op",
            "extra": "194 times\n4 procs"
          },
          {
            "name": "BenchmarkPipeline_Contention (github.com/abhipray-cpu/concurx/patterns/pipeline) - allocs/op",
            "value": 4107,
            "unit": "allocs/op",
            "extra": "194 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 1013,
            "unit": "ns/op\t       8 B/op\t       0 allocs/op",
            "extra": "370333 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 1013,
            "unit": "ns/op",
            "extra": "370333 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "370333 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Allow (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "370333 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 1011,
            "unit": "ns/op\t       9 B/op\t       0 allocs/op",
            "extra": "362649 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 1011,
            "unit": "ns/op",
            "extra": "362649 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 9,
            "unit": "B/op",
            "extra": "362649 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_TokenBucket_Execute (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "362649 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 5469,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "68917 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 5469,
            "unit": "ns/op",
            "extra": "68917 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68917 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_SlidingWindow_FailFast (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68917 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter)",
            "value": 10211725,
            "unit": "ns/op\t     673 B/op\t       8 allocs/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - ns/op",
            "value": 10211725,
            "unit": "ns/op",
            "extra": "34 times\n4 procs"
          },
          {
            "name": "BenchmarkRateLimiter_Timeout_Delay (github.com/abhipray-cpu/concurx/patterns/ratelimiter) - B/op",
            "value": 673,
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
            "value": 104.7,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "3461959 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 104.7,
            "unit": "ns/op",
            "extra": "3461959 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "3461959 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Success_NoRetry (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3461959 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 142.7,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "2477294 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 142.7,
            "unit": "ns/op",
            "extra": "2477294 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2477294 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_SingleRetry (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2477294 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 270.8,
            "unit": "ns/op\t     144 B/op\t       6 allocs/op",
            "extra": "1326764 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 270.8,
            "unit": "ns/op",
            "extra": "1326764 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "1326764 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_Exhausted (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1326764 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 2154279,
            "unit": "ns/op\t     608 B/op\t      10 allocs/op",
            "extra": "166 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 2154279,
            "unit": "ns/op",
            "extra": "166 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 608,
            "unit": "B/op",
            "extra": "166 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_WithBackoff (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "166 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry)",
            "value": 111,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "3203322 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - ns/op",
            "value": 111,
            "unit": "ns/op",
            "extra": "3203322 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "3203322 times\n4 procs"
          },
          {
            "name": "BenchmarkRetry_ContextCanceled (github.com/abhipray-cpu/concurx/patterns/retry) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "3203322 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 26189,
            "unit": "ns/op\t    1522 B/op\t      22 allocs/op",
            "extra": "14118 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 26189,
            "unit": "ns/op",
            "extra": "14118 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1522,
            "unit": "B/op",
            "extra": "14118 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_AllSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "14118 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 68760801,
            "unit": "ns/op\t    1796 B/op\t      16 allocs/op",
            "extra": "5 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=1 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 68760801,
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
            "value": 34365907,
            "unit": "ns/op\t    1942 B/op\t      18 allocs/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 34365907,
            "unit": "ns/op",
            "extra": "9 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=2 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1942,
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
            "value": 17266632,
            "unit": "ns/op\t    2230 B/op\t      22 allocs/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 17266632,
            "unit": "ns/op",
            "extra": "20 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=4 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 2230,
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
            "value": 8696814,
            "unit": "ns/op\t    2806 B/op\t      30 allocs/op",
            "extra": "40 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=8 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 8696814,
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
            "value": 4417116,
            "unit": "ns/op\t    4066 B/op\t      47 allocs/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 4417116,
            "unit": "ns/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 4066,
            "unit": "B/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_ConcurrencyScaling/concurrency=16 (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 47,
            "unit": "allocs/op",
            "extra": "80 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather)",
            "value": 1105080,
            "unit": "ns/op\t    1148 B/op\t      20 allocs/op",
            "extra": "328 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 1105080,
            "unit": "ns/op",
            "extra": "328 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_FirstSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1148,
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
            "value": 15144,
            "unit": "ns/op\t    1233 B/op\t      20 allocs/op",
            "extra": "23734 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - ns/op",
            "value": 15144,
            "unit": "ns/op",
            "extra": "23734 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - B/op",
            "value": 1233,
            "unit": "B/op",
            "extra": "23734 times\n4 procs"
          },
          {
            "name": "BenchmarkScatterGather_MinSuccess (github.com/abhipray-cpu/concurx/patterns/scattergather) - allocs/op",
            "value": 20,
            "unit": "allocs/op",
            "extra": "23734 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 149.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2400933 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 149.1,
            "unit": "ns/op",
            "extra": "2400933 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2400933 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_AllowOnly (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2400933 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 9942,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47134 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 9942,
            "unit": "ns/op",
            "extra": "47134 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47134 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_Contention (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47134 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 115.7,
            "unit": "ns/op\t   3540680 rejected\t       0 B/op\t       0 allocs/op",
            "extra": "3541080 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 115.7,
            "unit": "ns/op",
            "extra": "3541080 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - rejected",
            "value": 3540680,
            "unit": "rejected",
            "extra": "3541080 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3541080 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_RejectHeavy (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3541080 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler)",
            "value": 103.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3425072 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - ns/op",
            "value": 103.4,
            "unit": "ns/op",
            "extra": "3425072 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "3425072 times\n4 procs"
          },
          {
            "name": "BenchmarkThrottler_DelayPolicy (github.com/abhipray-cpu/concurx/patterns/throttler) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3425072 times\n4 procs"
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
            "value": 1391,
            "unit": "ns/op\t     568 B/op\t       9 allocs/op",
            "extra": "257587 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 1391,
            "unit": "ns/op",
            "extra": "257587 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "257587 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_FastSuccess (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "257587 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 1094256,
            "unit": "ns/op\t     782 B/op\t      10 allocs/op",
            "extra": "332 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 1094256,
            "unit": "ns/op",
            "extra": "332 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Expiry (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 782,
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
            "value": 646.6,
            "unit": "ns/op\t     568 B/op\t       9 allocs/op",
            "extra": "464738 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 646.6,
            "unit": "ns/op",
            "extra": "464738 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 568,
            "unit": "B/op",
            "extra": "464738 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Parallel (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "464738 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout)",
            "value": 3582,
            "unit": "ns/op\t     664 B/op\t      11 allocs/op",
            "extra": "94827 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - ns/op",
            "value": 3582,
            "unit": "ns/op",
            "extra": "94827 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - B/op",
            "value": 664,
            "unit": "B/op",
            "extra": "94827 times\n4 procs"
          },
          {
            "name": "BenchmarkTimeout_Panic (github.com/abhipray-cpu/concurx/patterns/timeout) - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "94827 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 414.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "812260 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 414.5,
            "unit": "ns/op",
            "extra": "812260 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "812260 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_Submit (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "812260 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 702.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "509646 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 702.1,
            "unit": "ns/op",
            "extra": "509646 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "509646 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_CPUWork (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "509646 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 1045495,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 1045495,
            "unit": "ns/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_BlockingQueue (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore)",
            "value": 12.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28616934 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - ns/op",
            "value": 12.47,
            "unit": "ns/op",
            "extra": "28616934 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "28616934 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerPerCore_FailFast (github.com/abhipray-cpu/concurx/patterns/workerpercore) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "28616934 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 20123,
            "unit": "ns/op\t   18274 B/op\t      28 allocs/op",
            "extra": "17971 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 20123,
            "unit": "ns/op",
            "extra": "17971 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 18274,
            "unit": "B/op",
            "extra": "17971 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=1 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "17971 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 27440,
            "unit": "ns/op\t   25307 B/op\t      82 allocs/op",
            "extra": "12972 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 27440,
            "unit": "ns/op",
            "extra": "12972 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 25307,
            "unit": "B/op",
            "extra": "12972 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=10 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "12972 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 134135,
            "unit": "ns/op\t  110557 B/op\t     595 allocs/op",
            "extra": "2726 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 134135,
            "unit": "ns/op",
            "extra": "2726 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 110557,
            "unit": "B/op",
            "extra": "2726 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_StartStop/children=100 (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 595,
            "unit": "allocs/op",
            "extra": "2726 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11381333107,
            "unit": "ns/op\t     913 B/op\t      14 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_FailureHandling (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11381333107,
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
            "value": 24.27,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14410717 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 24.27,
            "unit": "ns/op",
            "extra": "14410717 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "14410717 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/OneForOne (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14410717 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 24.16,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "14042382 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 24.16,
            "unit": "ns/op",
            "extra": "14042382 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "14042382 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/AllForOne (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14042382 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 25.61,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "13223610 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 25.61,
            "unit": "ns/op",
            "extra": "13223610 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "13223610 times\n4 procs"
          },
          {
            "name": "BenchmarkStrategy_OnFailure/FuncStrategy (github.com/abhipray-cpu/concurx/supervisor) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13223610 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor)",
            "value": 11379069996,
            "unit": "ns/op\t     913 B/op\t      14 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11379069996,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-disabled (github.com/abhipray-cpu/concurx/supervisor) - B/op",
            "value": 913,
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
            "value": 11379458072,
            "unit": "ns/op\t     913 B/op\t      14 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkSupervisor_Hooks/hooks-enabled (github.com/abhipray-cpu/concurx/supervisor) - ns/op",
            "value": 11379458072,
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
            "value": 243.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1471366 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 243.6,
            "unit": "ns/op",
            "extra": "1471366 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1471366 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitAndRun (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1471366 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 18.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18803008 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 18.35,
            "unit": "ns/op",
            "extra": "18803008 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18803008 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitOnly (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18803008 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 603.6,
            "unit": "ns/op\t      24 B/op\t       1 allocs/op",
            "extra": "594916 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 603.6,
            "unit": "ns/op",
            "extra": "594916 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "594916 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_PanicIsolation (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "594916 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup)",
            "value": 10.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "34024983 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - ns/op",
            "value": 10.26,
            "unit": "ns/op",
            "extra": "34024983 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "34024983 times\n4 procs"
          },
          {
            "name": "BenchmarkWorkerGroup_SubmitReject (github.com/abhipray-cpu/concurx/workergroup) - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "34024983 times\n4 procs"
          }
        ]
      }
    ]
  }
}