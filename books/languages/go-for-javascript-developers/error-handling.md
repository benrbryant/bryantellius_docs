# Go Error Handing

## Table of Contents

- [Flow control and values](#flow-control-and-values)
- [Usage](#usage)
- [Loss of stack trace](#loss-of-stack-trace)
- [The future](#the-future)

## Flow Control and Values

Go uses keywords and flow control with `panic`, `recover` and `defer`, while JS uses `try`, `catch` and `finally` blocks.

## Usage

> Different from JS

Error propagation is dependent on the severity and resolution strategy of error types and situations.

## Loss of Stack Trace

> Similar to JS

Although a stack trace is provided during error handling, it can be lost. There are packages that help with this in both languages.

## The Future

Error Handling is criticized on a major topic of revision.
