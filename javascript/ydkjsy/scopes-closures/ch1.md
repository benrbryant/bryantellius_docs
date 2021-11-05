# Chapter 1

Scope determines the visibility of values in our programs. They handle where variables are defined, and where they can be accessed.

JS is classified as an interpreted programming language, yet it closer to compilation when you open the hood of the JS engines.

Code Compilation works in three basic ways:

1. Tokenizing/Lexing

   This step involves breaking the code into strings that are meaningful _tokens_ for building scope. Ex:
   `var x = 1;` would be seen as `var`, `x`, `=`, `1`, and `;`

2. Parsing

   After tokenizing, the array of tokens is parsed into an _Abstract Syntax Tree_ with semantic structure for code inference

3. Code Generation

   JS engines take the AST and generates machine-readable code that can actually create variables, reserve memory, etc
