# Errors

A _Bug_ is a flaw or mistake in a program that results in incorrect behavior or unintended consequences.

_Debuggers_ are tools that help developers find bugs by stepping through the execution of a program statement-by-statement.

_Anti-patterns_, or code smells, are common bad-habits that are found in code.

A _lint_ or _linter_ is a tool that examines source code for anti-patterns.

## Error Handling

_Error handling_ refers to anticipating possible error conditions by detecting, preventing or recovering from errors.

An error that crashes or terminates a program is considered a _fatal_ error.

### Defensive Programming

_Defensive programming_ refers to checking for potential errors before executing "dangerous" or potential erroneous code. This can be done in a variety of ways depending on the system design and the operations being performed.

### Exceptions

"An _exception_ is an event or occurrence of an anomalous, erroneous condition that requires special handling."

_Exception handling_ generally entails a `try/catch` structure in most languages.

For example:

```txt
try {
    // do some dangerous code
} catch (exception) {
    // handle exception
}
```

In the above example, the `try` block is used to encapsulate any code that may result in an error, and if an exception is _raised_, execution is transferred to the `catch` block to handle the error.

## Exercises

Rewrite the exercises from [Functions](./functions.md#exercises) to include Defensive programming and Exception Handling (where applicable).
