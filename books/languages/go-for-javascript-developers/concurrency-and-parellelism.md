# Go Concurrency And Parellelism

## Table Of Contents

- [Overview](#overview)
- [Async vs Sync APIs](#async-vs-sync-apis)
- [Sequential and Concurrent Patterns](#sequential-and-concurrent-patterns)

## Prerequisite Definitions

**Concurrency**: "means executing multiple tasks at the same time but not necessarily simultaneously."
**Parallelism**: "is a specific kind of concurrency where tasks are really executed simultaneously."

[Read the referenced article for more information](https://medium.com/@itIsMadhavan/concurrency-vs-parallelism-a-brief-review-b337c8dac350)

## Overview

> Different from JS

Node.js is _single-threaded_ with the help of the _event loop_, offering few alternatives for concurrency and parallelism.

Go is "all about concurrency that enables parallelism."

_Goroutines_ enable functions to run concurrently and communicate between channels.

## Async vs Sync APIS

> Different from JS

Since Node.js is _single-threaded_, you are encouraged to mostly use asynchronous APIs.

Go allows the _caller_ to determine blocking or non-blocking behavior with the use of _goroutines_.

## Sequential and Concurrent Patterns

> Different from JS

In JS, you can use `Promise.then()`'s or `async/await` to create a _sequential_ model, or `Promise.all([...]).then()` for a concurrent model.

In Go, synchronous and asynchronous code may resemble the following:

```go
// sequential
func fetchSequential() {
    a := fetchA()
    fmt.Println(a)
    b := fetchB()
    fmt.Println(b)
    c := fetchC()
    fmt.Println(c)
}

// concurrent
func fetchConcurrent() {
    aChan := make(chan fetchResult, 0)
    go func(c chan fetchResult) {
        c <- fetchA()
    }(aChan)
    bChan := make(chan fetchResult, 0)
    go func(c chan fetchResult) {
        c <- fetchB()
    }(bChan)
    cChan := make(chan fetchResult, 0)
    go func(c chan fetchResult) {
        c <- fetchC()
    }(cChan)

    // order doesn't really matter!
    a := <-aChan
    b := <-bChan
    c := <-cChan
    fmt.Println(a)
    fmt.Println(b)
    fmt.Println(c)
}
```
