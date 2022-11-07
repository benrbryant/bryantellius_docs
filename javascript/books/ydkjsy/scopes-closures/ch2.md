# Chapter 2 Notes

Lexical scoping happens at compilation/parsing. Scopes are mapped out and variable references are identified in each lexical scope and matched with their value for execution.

When it comes to the lexing step in the compilation phase, the JS engine is split into three tasks/parts: _compiler_, _scope manager_ and _engine_\*.

\* This identification of parts is illustrated by Kyle Simpson

The way that _nested scopes_ work, is during execution, if a variable reference cannot be found, the JS engine with continue looking at outer scopes until a reference is found. If no reference is found, the result _should_ be a `ReferenceError`.

> NOTE: In an assignment statement, if a variable does not exist, and you are not using strict mode, the JS engine will create a _global variable_. This is bad practice and should be avoided.
