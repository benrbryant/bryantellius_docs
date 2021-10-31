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
- Loose equality allows for _coercive equality_, enabling type coercion before comparison
- Strict equality disables type coercion from _identity equality_
- JS programs can be organized between data/behavior relationships
  - Classes defined a structure for data (properties) and behaviors (methods)
- _Module Factories_ are functions that contain a private (local) scope with declarations, and return an object with exposed properties and methods
- ES modules are different (newer) in that instead of a function coupled with instantiation, the entire file is assumed a module, and `import` / `export` syntax is used
