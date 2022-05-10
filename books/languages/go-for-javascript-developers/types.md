# Go Types

## Table of Contents

- [Values, Pointers, References](#values-pointers-and-references)
- [Arrays / Slices](#arrays-vs-slices)
- [Dictionaries](#dictionaries)
- [Sets](#sets)

## Values, Pointers and References

> Different from JS

JS has _value_ and _reference_ types.

Go has _value_ and _reference_ types, and _pointers_. _Reference_ types are _slices_, _maps_ and _channels_; all other data types are _value_ data types, but can be referenced (and reassigned) with _pointers_.

Here's the difference:

```js
var hobbitA = {
  name: "Bilbo",
};

var hobbitB = hobbitA;

// mutate
hobbitB.name = "Frodo";
console.log(hobbitA.name === hobbitB.name); // prints 'true', both would be "Frodo"

// reassign
hobbitB = {
  name: "Samwise",
};
console.log(hobbitA.name === hobbitB.name); // prints 'false', hobbitA.name === "Frodo", while hobbitB.name === "Samwise"
```

```go
hobbitA := struct {
    name string
}{"Bilbo"}

hobbitB := &hobbitA

// mutate
// note hobbitB.name is short for (*hobbitB).name
hobbitB.name = "Frodo"
fmt.Println(hobbitA.name == hobbitB.name) // prints "true", both are "Frodo"

// reassign
*hobbitB = struct {
    name string
}{"Samwise"}
fmt.Println(hobbitA.name == hobbitB.name) // prints "true"
```

## Arrays vs Slices

In Go, a _slice_ is a dynammically sized list, while an _array_ is a _statically_ sized list.

Slices are _backed_ by arrays (either explicitly in the code, or transparently by the program).

Arrays cannot be changed at runtime since they have a static size. Because of this, a slice may be backed by a different array than previous during run time to accommodate for slice dynamic sizing.

```go
a := [3]int{1, 2, 3}

// 1. Create a slice by slicing an array
s1 := a[:]

// 2. Create a slice with slice literal
s2 := []int{1, 2, 3}

// 3.1 Create a zeroed slice with make()
s3_1 := make([]int, 3)

// 3.2 Same as previous line, except an addition of a cap param.
// The cap gives a slice a defined capacity with it's backing array.
// If the following slice will grow by 2 more elements, another array allocation will NOT be performed.
s3_2 := make([]int, 3, 5)

// 4. Create an "empty" slice by variable declaration
var s4 []int
```

You can use _slicing_ syntax to create a new slice from an array or slice.

```go
hobbits := []string{"Bilbo", "Frodo"}

// Adds to the end of the array.
hobbits = append(hobbits, "Samwise")
fmt.Println(hobbits)

// Removes from the end of the array.
n := len(hobbits) - 1 // index of last element, len() used to get the length of an array/slice
element := hobbits[n] // reference/get last element
hobbits = hobbits[:n] // remove the last element by slice to but not including given index
```

If a slice grows larger than it's backed array, a new array is created to back the slice.

## Dictionaries



## Sets
