# Effective Go: Data

## Table of Contents

- [Allocation with new](#allocation-with-new)
- [Constructors and composite literals](#constructors-and-composite-literals)
- [Allocation with make](#allocation-with-make)
- [Arrays](#arrays)
- [Slices](#slices)
- [Two-dimensional slices](#two--dimensional-slices)
- [Maps](#maps)
- [Printing](#printing)
- [Append](#append)

## Allocation with New

Go has a built-in `new` function for creating a _zero-memory address pointer_ of a certain data type.

```go
type Hobbit struct {
    name string
    age  int
}

func main() {
    frodo := new(Hobbit)
    fmt.Println(frodo) // prints &{ 0}
}

```

## Constructors and Composite Literals

A _composite literal_ creates a new instance each time it is used.

```go
type Hobbit struct {
    name string
    age  int
}

func main() {
    frodo := Hobbit{name: "Frodo", age: 51}
    fmt.Println(frodo.name) // prints "Frodo"
}
```

Composite literals can be used for arrays, slices, maps, etc.

## Allocation with make

Go has a built-in `make` function for allocating memory for slices, maps and channels. It takes up to three arguments: type, length, and capacity.

```go
hobbits := make([]string, 10, 100) // creates an slice of length 10 with a capacity of 100
```

## Arrays

Arrays are building blocks for slices, and are treated as values. That means that passing an array value copies it's internal values. You can use a pointer to pass a reference of an array value.

## Slices

