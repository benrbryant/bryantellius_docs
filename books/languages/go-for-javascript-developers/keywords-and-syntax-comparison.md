# Go Keywords and Syntax Comparison

## Table of Contents

- [this keyword](#this-keyword)
- [new keyword](#new-keyword)
- [bind / method values](#bind--method-values)
- [setTimeout / timer](#settimeout--timer)
- [setInterval / ticker](#setinterval--ticker)
- [String literals](#string-literals)
- [Comments](#comments)

## `this` Keyword

> Different from JS

In Go, `this` can be used as a _receiver_ within method functions.

```go
type Person struct {
    name string
}

func (this *Bar) Name() string {
    return this.name
}
```

## `new` Keyword

> Different from JS

Using the `new` keyword will create a _zeroed storage_ for a new item of a specified type, and return a _pointer_ to said item

```go
ticker := time.NewTicker(d) // ticker is a *time.Ticker
timer := time.NewTimer(d) // timer is a *time.Timer
```

## Bind / Method Values

> Different from JS

In JS, you need to use the `.bind()` method to bind the `this` value to an object within a method.

In Go, assigning a method to a variable will copy it's reference value to the new variable.

```go
speak := person.speak // speak(), is same as person.speak()
```

## setTimeout / timer

> Similar to JS

To create a timeout in Go, use `time.AfterFunc(/* time */, /* function */)`.

```go
func greet() {
    fmt.Println("Hello!")
}

time.AfterFunc(3 * time.Second, greet)
```

## setInterval / ticker

> Different from JS

In Go, use `time.NewTicker(/* time */)` to create an interval.

```go
ticker := time.NewTicker(time.Second)

go func() {
    for t := range ticker.C {
        greet()
    }
}()
```

## String Literals

> Different from JS

Strings are denoted by `""` double quotes.

Raw string literals are denoted by \`\` backticks.

## Comments

> Similar to JS

Single line comments are denoted by `//` forward slashes.

Multi-line comments are denoted by `/* */` opening and closing forward slash/asterisk combinations.
