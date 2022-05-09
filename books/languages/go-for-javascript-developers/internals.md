# Go Internals

## Table of Contents

- [Heap/Stack Memory Allocation](#heapstack-memory-allocation)
- [Garbage Collection](#garbage-collection)
- [Compilation](#compilation)

## Heap/Stack Memory Allocation

> Simlar to JS

Heap and Stack concepts are abstracted so that you don't, like in JS, have to worry about them. Go uses _escape analysis_ during compile-time to figure out memory allocation.

## Garbage Collection

> Similar to JS

Garbage collection is implemented.

## Compilation

> Different to JS

Go is a compiled language. This means that you get compile-time safety instead of having to use a _linter_ like in JS.
