# Reactive Microservices Architecture

By Jonas Boner

[Book Source](https://www.lightbend.com/ebooks/reactive-microservices-architecture-design-principles-for-distributed-systems-oreilly)

Bookmark: pg 33

## Table of Contents

## Notes

### What is a Reactive Microservices?

Microservices-based architecture is based on the decomposition of systems into "discrete and isolated subsystems communicating over well-defined protocols."

Isolated services require _asynchronous communication_ for resilience and elasticity to decouple the in _time_ (concurrency) and _space_ (mobility).

An isolated service enables an _autonomous service_.

Microservices should abide by the _single responsibility principle_.

Microservices should handle and persist their own state.

_Event Logs_ are the most compatible persistence model for microservices.
