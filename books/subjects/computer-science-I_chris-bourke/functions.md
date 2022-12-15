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

Given values for C, M, Y, and K in CMYK coloring, output the corresponding RGB conversion in the following string format: `rgb(r, g, b)`.

Use the following formulas:

r = 255 x (1 − C) x (1 − K)
g = 255 x (1 − M) x (1 − K)
b = 255 x (1 − Y ) x (1 − K)

Pseudocode:

```txt
FUNCTION convertCMYKToRGB(c, m, y, k)
  r <- 255 * (1 - c) * (1 - k)
  g <- 255 * (1 - m) * (1 - k)
  b <- 255 * (1 - y) * (1 - k)
  rgb <- rgb(r, g, b)
  return rgb
END
```

JavaScript

```js
function convertCMYKToRGB(c, m, y, k) {
  let r = parseInt(255 * (1 - c) * (1 - k));
  let g = parseInt(255 * (1 - m) * (1 - k));
  let b = parseInt(255 * (1 - y) * (1 - k));
  let rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}
```

Java

```java
public static String convertCMYKToRGB(double c, double m, double y, int k) {
  int r = (int)(255 * (1 - c) * (1 - k));
  int g = (int)(255 * (1 - m) * (1 - k));
  int b = (int)(255 * (1 - y) * (1 - k));
  return String.format("rgb(%d, %d, %d)", r, g, b);
}
```

### Exercise 2: Convert RGB to Grayscale

Create three different functions that are given r, g, b values, and output the grayscale rgb value.

> An RGB color value is grayscale if all three components have the same value.

Use the following three techniques:

1. Average method - (r + g + b) / 3
2. Lightness method - (max{r, g, b} + min{r, g, b}) / 2
3. Luminosity method - 0.21r + 0.72g + 0.07b

Pseudocode:

```txt
FUNCTION toAvgGrayscale(r, g, b)
  grayscale <- (r + g + b) / 3
  return grayscale
END

FUNCTION toLightnessGrayscale(r, g, b)
  max <- max{r, g, b}
  min <- min{r, g, b}
  grayscale <- (max + min) / 2
  return grayscale
END

FUNCTION toLuminosityGrayscale(r, g, b)
  grayscale <- (0.21 *r) + (0.72 * g) + (0.07 * b)
  return grayscale
END
```

JavaScript

```js
function toAvgGrayscale(r, g, b) {
  let grayscale = (r + g + b) / 3;
  return grayscale;
}

function toLightnessGrayscale(r, g, b) {
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let grayscale = (max + min) / 2;
  return grayscale;
}

function toLuminosityGrayscale(r, g, b) {
  let grayscale = 0.21 * r + 0.72 * g + 0.07 * b;
  return grayscale;
}
```

Java

```java
public static int toAvgGrayscale(int r, int g, int b) {
  return (r + g + b) / 3;
}

public static int toLightnessGrayscale(int r, int g, int b) {
  int max = r > g ? Math.max(r, b) : Math.max(b, g);
  int min = r < g ? Math.min(r, b) : Math.min(b, g);
  return (max + min) / 2;
}

public static int toLuminosityGrayscale(int r, int g, int b) {
  return (int) ((0.21 * r) + (0.72 * g) + (0.07 * b));
}
```

### Exercise 3: Length Conversions

Write two utility functions that convert given kilometers to miles or given miles to kilometers.

- One mile is equivalent to 1.609347219 kilometers

Pseudocode

```txt
FUNCTION convertKilometerToMile(k)
  miles <- k * (1 / 1.609347219)
  return miles
END

FUNCTION convertMileToKilometer(mi)
  kilometers <- mi * 1.609347219
  return kilometers
END
```

JavaScript

```js
function convertKilometerToMile(k) {
  return k * (1 / 1.609347219);
}

function convertMileToKilometer(mi) {
  return mi * 1.609347219;
}
```

Java

```java
public static double convertKilometerToMile(double k) {
  return k * (1 / 1.609347219);
}

public static double convertMileToKilometer(double mi) {
  return mi * 1.609347219;
}
```
