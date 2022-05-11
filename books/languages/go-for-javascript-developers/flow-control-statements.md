# Go Flow Control Statements

## Table of Contents

- [Loops and Iterations](#loops-and-interations)
- [If/Else](#ifelse)
- [Switch](#switch)

## Loops and Iterations

> Similar to JS

Loop structures are similar in Go as they are in JS.

A `for` loop is written:

```go
for i := 0; i < 10; i++ {
    fmt.Println(i)
}
```

And a `while` loop as:

```go
i := 0

while i < 10 {
    fmt.Println(i)
    i++
}
```

You can iterate over values in a _slice_ or _map_ with:

```go
hobbit := map[string]string {
    "name": "hobbit",
}

hobbits := []string{"Frodo", "Bilbo", "Samwise"}

for key, value := range hobbit {
    fmt.Println(value, key)
}

for key, value := range hobbits {
    fmt.Println(value, key)
}
```

## If/Else

> Similar to JS

Go's if/else statements are similar as in JS:

```go
isOnline := true

if isOnline {
    fmt.Println("User has connected")
} else {
    fmt.Println("User offline")
}
```

One difference is that in Go if statements, you can initialize a variable before the conditional that is scoped by the if/else blocks.

```go
if user := checkUser(); user.isOnline == true {
    fmt.Println(user.name + " is online")
} else {
    fmt.Println("User offline")
}
```

## Switch

> Different from JS

JS defaults to "fallthrough", or continue evaluating cases until a `break` keyword or `default`.

Go defaults to "break" and only "fallthroughs" when a `fallthrough` keyword is met.

```go
color := "red"
answer := ""

switch color {
case "red":
    answer = "That's my favorite color too!"
case "blue":
    fallthrough
case "green":
    answer = "That's my second favorite color."
default:
    answer = "I don't know that color..."
}

fmt.Println(answer)
```
