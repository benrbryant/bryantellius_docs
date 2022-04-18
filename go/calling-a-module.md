# Call Your Code From Another Module

You can import your code into another module for execution by including it in an import statement:

```go
import (
    "bryantellius.com/module"
    "..."
)
```

You can then call an exported name (function) by referencing the imported module and the function name: `module.FuncName()`

If you have not published the module, you will need to point Go to the local filepath where that module exists.

1. Run `go mod edit -replace "bryantellius.com/module=../filepath`
2. Run `go mod tidy`

This will add a `replace` line in your `go.mod` file that will instruct the go compiler to look for local modules if they cannot be found at a published location.
