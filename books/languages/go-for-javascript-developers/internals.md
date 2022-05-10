# Go Internals

## Table of Contents

- [Heap/Stack Memory Allocation](#heapstack-memory-allocation)
- [Garbage Collection](#garbage-collection)
- [Compilation](#compilation)

## Prerequisite Definitions

**Heap**: space in computer main storage (memory) that is used to by a program process to store _global_ data; dynamic size and hierarchy structure

**Stack**: space in computer storage (memory) that is used by a program process to store _temporary, local_ data; fixed size and linear structure

**Garbage Collection**: tool used for managing program memory allocation; different programming languages with vary in how they handle GC

[Read the referenced article on Garbage Collection](https://www.freecodecamp.org/news/a-guide-to-garbage-collection-in-programming/)

## Heap/Stack Memory Allocation

> Simlar to JS

Heap and Stack concepts are abstracted so that you don't, like in JS, have to worry about them. Go uses _escape analysis_ during compile-time to figure out memory allocation.

## Garbage Collection

> Similar to JS

Garbage collection is implemented.

## Compilation

> Different to JS

Go is a compiled language. This means that you get compile-time safety instead of having to use a _linter_ like in JS.
