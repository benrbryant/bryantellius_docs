# Eloquent JavaScript Notes - Condensed

## Introduction

"Programming is the act of constructing a program—a set of precise instructions telling a computer what to do."

"A programming language is an artificially constructed language used to instruct computers."

JavaScript was released in 1995 as a way to introduce logic to web pages in the Netscape Navigator browser.

## Ch. 1 - Values, Types and Operators

All data is represented as _bits_, 0s and 1s, to a computer.

### Data Types

1. Number - 64 bit numeric values
2. String - Unicode text characters
3. Boolean - logical data type true or false, 0 or 1 bits
4. Null - a value that is defined as empty or invalid
5. Undefined - a value that hasn't been defined

### Operators

- Arithmetic - +, -, \*, /, %
- Comparison - ==, !=, ===, !==, >, <, >=, <=
- Logical &&, ||, !
- Ternary - ? :

## Ch. 2 - Program Structure

"A fragment of code that produces a value is called an expression."

### Variables

Variables, or _bindings_, hold values and are defined with a _declaration keyword_, `let`, `var`, or `const`, followed by an _identifier_.

### Functions (Briefly)

"A function is a piece of program wrapped in a value."

You can use a function by calling, or _invoking_, it by name followed by a pair of parentheses.

"When a function produces a value, it is said to _return_ that value."

### Control Flow

Programs are executed line by line from top to bottom.

`if`, `else`, `else if` keywords can be combined with functions to introduce _conditional executions_ within a program.

### Loops

`while`, `do/while`, and `for` are common loop structures in JavaScript that repeat a code block until a condition is `false`.

The `break` keyword can be used to exit a loop.

The `continue` keyword can be used to skip a loop iteration.

### Additional Parts

Comments are for readability and are ignored by the JavaScript runtime environment.

`//` is a single line comment.

`/* ... */` is a multi line comment.

JavaScript is _case sensitive_.

## Ch. 3 - Functions

Functions are blocks of code that can receive input and return output.

A function can be _declared_ with the `function` keyword followed by an `identifier`, or _assigned_ to a variable.

```js
function add(a, b) {
    return a + b;
}

// or

const add = function (a, b) {
    return a + b;
}
```

Functions that are declared are _hoisted_, while functions assigned to variables are not available through _hoisting_.

Function _parameters_, or _arguments_, are assigned and passed in through a set of parentheses. Parameters can be optional, and can be defined with default values in the case where no parameter is provided.

```js
function add(a, b = 1) {
    return a + b;
}

add(1); // returns 2 because of the default parameter for b = 1

add(1, 2, 3); // returns 3, with the third parameter 3 being ignored
```

A function that calls itself is performing _recursion_.

## Ch. 4 - Data Structures: Objects and Arrays

Objects are collections of data stored in a structure.

_Dot notation_ and _bracket notation_ are two ways to access properties (data) and methods (behaviors) stored on object structures.

Arrays are specific types of objects that store related data in a "list" format, or sequential order that is _zero-indexed_.