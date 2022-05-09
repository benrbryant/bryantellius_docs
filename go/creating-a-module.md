# Creating a Module

Create a new module with `go mod init <host>/<module_name>`, which with generate a `go.mod` file to track your module dependencies.

Initially, it will include your module name and the `go` version your project runs on. As you add dependencies, the `go.mod` file will reflect the name and version of each dependency used in your code.

You can create functions in Go with the with the following syntax:

```go
// func keyword
// function name
// parameters followed by data type
// return data type after the parameter list
// curly braces for the function body
func Add(num1 int, num2 int) int {
    // declare a variable
    var sum int
    // assign a variable a value
    sum = num1 + num2
    // return a value
    return sum
}
```

A function with a capitalized name is known as an _exported name_, and can be referenced/called in another package/file.
