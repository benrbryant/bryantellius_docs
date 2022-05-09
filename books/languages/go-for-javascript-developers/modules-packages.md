# Go Packages/Modules

## Table of Contents

- [Specification and Practice](#specifications-and-practice)
- [Management](#management)

## Specifications and Practice

In Go, there is no _file scope_, but rather _package scope_.

`go.mod` and `go.sum` are used to reproduce secure builds based on fetchable dependencies.

Importing a Go package enables you to have access to, _through the package name_, any exports from any file belonging to that package.

## Management

The `go mod` tool is used to manage Go packages.

Visit [pkg.go.dev](https://pkg.go.dev/) for official Go packages.
