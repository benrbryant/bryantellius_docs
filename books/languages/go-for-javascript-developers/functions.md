# Go Functions

## Table of Contents

- [First-class Functions](#first--class-functions)
- [Multiple Returns](#multiple-returns)
- [IIFE](#iife)
- [Closures](#closures)

## First-Class Functions

> Similar to JS

Go treats functions as _first-class citizens_ that can be passed as parameters, returned, and assigned to variables.

You can only return nested _anonymous_ functions.

## Multiple Returns

> Different from JS

You can return multiple values from a Go function by seperating them with commas.

```go
func returnTwo() (string, bool) {
    return "Hello", true
}
```

## IIFE

> Similar to JS

Here's an example of an _immediately invoked function expression_ in Go:

```go
func () {
    fmt.Println("IIFE")
}()
```

## Closures

> Similar to JS

Go functions can create closures just as in JS.

```go
func increment(num int) {
    val := 0

    return func () {
        val++
        return val
    }
}
```
