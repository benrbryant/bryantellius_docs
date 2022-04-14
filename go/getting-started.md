# Getting Started

First things first (apparently), you will be depending on other packages within your code. When this is the case, you can run `go mod init <path>/<package>` to set up a go.mod file that will track and manage your dependencies.

You can initiate go files with `go run <file>` in your terminal.

Just like [npm's registry](https://npmjs.com), [pkg.go.dev](https://pkg.go.dev) serves as a registry to find and learn about using dependency packages within your project.

You can include an import for a dependency, and running `go mod tidy` will install the dependency package at the latest version for you!
