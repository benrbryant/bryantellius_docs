# Functions

"In mathematics, a function is a mapping from a set of inputs to a set of outputs such that each input is mapped to exactly one output."

Function = Subroutine = Procedure

A _function_ is a code that is grouped together as one _unit_ that can be reused with the same or different inputs.

Using a function to get an output is referred to as _invoking_ or _calling_ a function.

Functions enable more code organization and reusability, and follows a _top-down_ design while facilitating _procedural abstraction_.

Functions also create an _isolated_ unit of code that is easier and better suited for testing.

## Defining Functions

Functions are identified by their _signatures_, or identifiers, which are names given to functions when you define them.

> Some languages include _anonymous_ functions, that are not given a name. See the JavaScript examples below.

Generally, functions parameter lists are contained within parentheses and provided in a comma-separated list.

> Statically typed languages provide the _return type_ of the function before the function name, and the _parameter type_ of each parameter in the parameter list. See the Java example below.

Apart from _indented programming languages_, function bodies are contained with curly braces `{}`.

Functions typically return values based on computation given their input. This is generally done with a `return` statement.

> Functions do not have to return a value. Statically types languages denote this by labelling the return type as `void`

Below are examples of defining functions in JavaScript (dynamically typed) and Java (statically typed):

JavaScript:

```js
function add(num1, num2) {
  return num1 + num2;
}
```

Java:

```java
public int add(int num1, int num2) {
    return num1 + num2;
}
```

## Calling Functions

To use a function, we _invoke_ or _call_ it by it's _identifier_ followed by parentheses with any needed parameters. Parameters provided as inputs to a function are called _arguments_.

After a function is executed from top to bottom of its function body, the program execution is returned to the _caller_, wherever the function call started.

Below are examples of called the previously defined `add` functions.

JavaScript

```js
add(2, 2); // returns 4

// or the return value can be assigned to a variable

let sum = add(1, 2); // returns 3 and assigns it to `sum`
```

```java
add(2, 2); // returns 4

// or the return value can be assigned to a variable

int sum = add(1, 2); // returns 3 and assigns it to `sum`
```

### Call Stack

When functions are called, they are added to the _call stack_, a last in-first out data structure that keeps track of function scope and execution. Each new function that is executed is added to the call stack, and when the execution is done, it is removed. Below is an example with several functions in the call stack.

Pseudocode:

```txt
FUNCTION add(a, b)
    sum <- a + b
    return sum
END

FUNCTION avg(a, b)
    x <- add(a, b) / 2
    return x
END

avg(2, 4)
```

Call Stack:

| Stack | Calls `avg` | Calls `add` in `avg` | Finishes `add` | Finishes `avg` |
| ----- | ----------- | -------------------- | -------------- | -------------- |
|       |             | add(2, 4)            |                |                |
|       | avg(2, 4)   | avg(2, 4)            | avg(2, 4)      |                |

### Call by Value vs Call by Reference

Variable values can be _passed by value_ or _passed by reference_. Different languages approach these mechanisms differently. Generally, a variable that is _passed by value_ has it's value copied and then passed into a function as a parameter. A variable that is _passed by reference_ passes the memory location of its value into the function. This means that the function can mutate the actual variable value if passed by reference.

## More on Functions

"In programming languages, any entity that can be stored in a variable or passed an argument to a function or returned as a value from a function is referred to as a _first-class citizen_."

### Callback Functions

Traditional _first-class citizens_ can be treated as any other reference value. This is beneficial and leads to the application of _callback functions_. A callback function is a function that is passed as a parameter to another function, called the _higher-order function_, and called at some point in the function execution. This allows for some functions to define generic behavior that uses specific callback functions. A prime example would be a sort function that takes a callback function, where the callback function specifies the specific sorting algorithm.

### Function Overloading

_Function overloading_ refers to creating multiple functions of the same name, that differ in number (arity) or type of parameters. Not all languages support this, but those that do perform the process called _static dispatch_ to determine which function you are invoking at a given line depending on the parameter count and types.

### Variable Arguments

Some languages support `vararg`, or variable arguments, which allow for one function to take 0 or many arguments and handle them as an inputted collection data structure (usually an array). Language implementations differ, but examples of JavaScript and Java are listed below:

JavaScript Variable Arguments

```js
function add(...nums) {
  // nums is an array of parameters passed in
}

// can be called as such:
add(1);
add(1, 2, 3);
add(1, 2, 3, 4, 5, 6);
```

Java Variable Arguments

```java
public int add(int... nums) {
    // nums is an array of integer parameters passed in
}

// can be called as such:
add(1);
add(1, 2, 3);
add(1, 2, 3, 4, 5, 6);
```

### Optional or Default Parameters

Some languages support _optional parameters_, which are parameters that may or may not be required for a function to execute. With optional parameters allowed, _default parameters_ can be provided in the case that some parameters are missing. The following is an example in JavaScript:

JavaScript

```js
function add(a, b = 0) {
  // `b` is defined with a default value of 0
  return a + b;
}

add(1); // even with only `a` provided, the function executes and yields 1 (1 + 0)
```

> Java does not support optional or default parameters.

## Exercises

### Exercise 1: Convert CMYK to RGB

### Exercise 2: Convert RGB to Grayscale

### Exercise 3: Length Conversions