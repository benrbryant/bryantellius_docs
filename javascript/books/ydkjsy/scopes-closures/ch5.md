# Chapter 5 Notes

_Hoisting_ refers to the registration of a variable name at the beginning of a given scope during parsing/compilation. 

_Function hoisting_ is the specific example of hoisting where function names are registered _and_ their values are initialized at the top of the scope. Therefore you can invoke a function before it is defined within a scope block.

_Variable hoisting_ is the specific example of hoisting a variable _declaration_. This allows for a variable to be referenced, assigned, passed, etc, but it doesn't hoist any assignment statement. Referencing a variable before it is a assigned a value results in `undefined`.

> "The TDZ is the time window where a variable exists but is still uninitialized, and therefore cannot be accessed in any way. Only the execution of the instructions left by Compiler at the point of the original declaration can do that initialization. After that moment, the TDZ is done, and the variable is free to be used for the rest of the scope."
