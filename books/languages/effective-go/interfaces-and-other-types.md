# Effective Go: Interfaces and Other Types

## Table of Contents

- [Interfaces](#interfaces)
- [Conversions](#conversions)
- [Interface conversions and type assertions](#interface-conversions-and-type-assertions)
- [Generality](#generality)
- [Interfaces and methods](#interfaces-and-methods)

## Interfaces

Interfaces define the structure of an object. In Go, it's common to have interfaces with only one method, making the interface name a verb of the method name (ie `Writer` that has a single `Write`) method. A type can implement multiple interfaces.

Here's an example of a type with a method:

```go
type Hobbits []string

func (h Hobbits) Introduce() {
    res := ""

    for i, hobbit := range h {
        if i == len(h) - 1 {
            res += " and " + hobbit
        } else {
            res += " " + hobbit
        }
    }

    fmt.Printf("Here are%v", res)
}
```

`Hobbits` can implement the `sort` methods if it adheres to the `sort.Interface`. We'll need to add `Len`, `Less`, and `Swap` methods.

```go
func (h Hobbits) Len() int {
    return len(h)
}
func (h Hobbits) Less(i, j int) bool {
    return h[i] < h[j]
}
func (h Hobbits) Swap(i, j int) {
    h[i], h[j] = h[j], h[i]
}
```

## Conversions

Data types can be converted from one to another. For example, integers can be converted to float64 and vice versa with `int(4.02)` or `float64(4)`. This also goes for `[]string`, `[]int`, etc.

```go
party := Hobbits{"Bilbo", "Frodo", "Thorin", "Samwise" }
[]string(party) // converts the Hobbits type ([]string) to a regular []string

someNumber := 4.5
int(someNumber) // returns 4
```

## Interface Conversions and Type Assertions

