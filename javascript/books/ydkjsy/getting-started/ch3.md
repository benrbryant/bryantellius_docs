# Chapter 3

- Iterators are for consuming data as an entire set
- ES6 introduced the `next()` method whose return is an object called an _iterator result_, with `value` and `done` properties
- New APIs, such as `for/of` and `...`, are _iterator consumers_
- An _iterable_ is a value that can be iterated over
- Each time you create and consume an iterator, JS creates an instance of an _iterable_, allowing a value to be consumed/iterated over many times
- Iteratables are arrays, strings, maps, sets, etc
- Iterator methods include `.keys()`, `.values()`, and `.entries()`
- _An iterator is just an interable of itself_

> _Closure_ is when a function remembers and continues to access variables from outside its scope, even when the function is executed in a different scope.

- Closures can create/observe variables outside of the local scope in which values were defined
- Very commonly closure can be observed in asynchronous JS, such as the fetch api, event handlers, etc

> _Scope_ is the set of rules that controls how references to variables are resolved.

- Functions have an _execution context_ that define values that can be accessed from within the function body
- `this` is dependent on the _call/execution context_ of the function, not necessarily where the function is defined
- The `this` keyword can (and should) be used to dynammically determine the accessiblity of values based on execution context of a function
- _Prototypes_ are "linkages", or _models_, of objects with pre-defined properties and methods that can be shared with newly created objects
- **It is imperative to ask why?**
