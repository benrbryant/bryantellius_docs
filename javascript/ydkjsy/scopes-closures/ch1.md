# Chapter 1 Notes

Scope determines the visibility of values in our programs. They handle where variables are defined, and where they can be accessed.

JS is classified as an interpreted programming language, yet it's closer to compilation when you open the hood of the JS engines.

Code Compilation works in three basic ways:

1. Tokenizing/Lexing

   This step involves breaking the code into strings that are meaningful _tokens_ for building scope. Ex:
   `var x = 1;` would be seen as `var`, `x`, `=`, `1`, and `;`

2. Parsing

   After tokenizing, the array of tokens is parsed into an _Abstract Syntax Tree_ with semantic structure for code inference

3. Code Generation

   JS engines take the AST and generates machine-readable code that can actually create variables, reserve memory, etc

## Proof of a Compile then Execute Approach

The clearest example that JS is "compiled" before executed line-by-line is syntax errors. If your code contains a syntax error, then the program will not run, even if the error occurs on line 100. Lines 1 through 99 would not run.

Another two examples are reference errors when hoisting variables and early errors when using strict mode.

These examples will throw errors before other lines of code, which suggests that the JS engine parses/compiles the entire program before execution.

## Variables within Compiler Theory

When the JS engine handles variables, it must know if a variable is a _target_ or a _source_. For example, `var name = firstName;`, `name` is the target and `firstName` is the source.

A simple example with labels:

```js
// scores is a target
let scores = [1, 2, 3, 4, 5];

// score is a target
// scores is a source
for (let score of scores) {
  // printScore is a source
  // score is a source
  printScore(score);
}

// printScore is a target
// score is a target
function printScore(score) {
  // console is a source
  // score is a source
  console.log(`Score: ${score}`);
}
```

> NOTE: Using `eval` or the `with` construct are bad practices and are the only two examples of where you can modify scope after compilation/parsing.

> NOTE: The parsing phase defines scopes, but scopes are built at _runtime_.