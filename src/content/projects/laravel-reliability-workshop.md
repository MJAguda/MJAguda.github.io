---
title: Production Reliability Patterns for Laravel
subtitle: Concurrency, Tracing and Dead-Letter Queues
category: workshop
tagline: A workshop video on keeping Laravel apps reliable in production, covering concurrency, request tracing and dead-letter queues.
role: Creator & instructor
tech: [Laravel, PHP, Queues, Distributed tracing]
order: 6.5
status: workshop
links:
  - label: Watch on YouTube
    href: https://youtu.be/J2GaJ6wYSk8
---

I recorded this workshop on three patterns that keep a Laravel app dependable in production:

- **Concurrency:** stop simultaneous requests and queue jobs from overwriting each other's work.
- **Tracing:** follow one request through the app and its background jobs, so a failure can be traced to its cause.
- **Dead-letter queues:** park jobs that keep failing, so they can be inspected and retried instead of being lost.
