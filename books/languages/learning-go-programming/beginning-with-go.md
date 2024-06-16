# Beginning With Go

Every file begins by declaring a named package.

```go
package main
```

Other packages that are used within a file can be imported with the `import` keyword followed by the package name in quotes.

```go
import "fmt"
// or
import (
    "fmt"
    "strings"
)
```

Comments are denoted by `//` (single-line) or `/* */` (multi-line).

All go programs begin with a `main` function. A _function_ is a group of repeatable code that can accept inputs and return outputs. Typically, functions take the name of the file they are defined in, but you can defined multiple functions in a file.

```go
func main() {
    // program
}
```

Go programs can be run with the `go run` command. You can provide a file to run, or leave as is and go will run the `main` file/function.

Functions, variables and custom types can be named with letters and underscore characters. Go treats capitalized identifiers in a file as _exported identifiers_, whereas non-capitalized identifiers are _non-exported identifiers_. Go is case sensitive.
