# Chapter 2

- Think of each js file as a 'program'
- Values are data
- Values are used in a program as _literals_

Primitive Value Types

| Name      | Example               |
| --------- | --------------------- |
| string    | "Ben", 'Ben', \`Ben\` |
| number    | 1, 1.10               |
| boolean   | true, false           |
| undefined | undefined             |
| null      | null                  |
| bigint    | 1000000000000n        |
| symbol    | Symbol("something")   |

Structured Data Types

| Name       | Example            |
| ---------- | ------------------ |
| object     | {}, [], etc        |
| function\* | function name() {} |

> \* Functions are objects in JS

- `typeof` is a unary operator that returns evaluates a value and returns its type as a string
- _Coercion_ is the process of converting, or casting, values to different types
- Declaration keywords `var` (function scoped), `let` and `const` (block scoped) are used to declare variables
- Functions are 'procedures', or sets of statements that can be executed with a single function call
- Functions are first class citizens in JS, meaning we can treat them as we treat any other value (assign to variables, pass as parameters, return as values...)
