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

Microservices should handle and persist their own state (Share-Nothing Architecture). This aspect of each microservice being a _Bounded Context_ that manages it's own data is influenced by _Domain Driven Design (DDD)_. This leads to decentralized data management that is referred to as _polygot persistence_.

_Event Logs_ are the most compatible persistence model for microservices. _Object-Relational Impedance Mismatch_ caused by using _Object-Relational Mappers (ORM)_ can be avoided by using an event log.

### Microservices Come in Systems

"Conway's law is an adage that states organizatins design systems that mirror their own communication structure". Microservices should be designed to closed mimic the reality of the organization's operations.

_Inversion of Control (IoC)_ enables microservices to discover one another by using a _Service Discovery_ platform.

_Publish-Subscribe_ protocol is an example of a communication protocol between microservices.

_Composability_ of operations on data means that "changes to data can be made available to other services without stalling them, without waiting on coordination to take place."

### Summary

Isolation, single-responsibility principle, autonomy, exclusive state, asynchronous message-passing and mobility are all necessary and beneficial traits of a Microservices architecture.