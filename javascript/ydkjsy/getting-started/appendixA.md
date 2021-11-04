# Appendix A

Primitive value types are passed by _value copy_
Structured value types are passed by _reference copy_

Functions are first-class citizens, aka treated as regular non-primitive values

You can define functions in a multitude of ways:

`function name() {}`
`const name = function () {}`
`const name = function oldName() {}`
`const name = () => {}`
etc

## Prototypal "Classes"

```js
function Classroom() {
  // ..
}

Classroom.prototype.welcome = function hello() {
  console.log("Welcome, students!");
};

var mathClass = new Classroom();

mathClass.welcome();
// Welcome, students!
```

> All functions by default reference an empty object at a property named _prototype_. Despite the confusing naming, this is not the function's prototype (where the function is prototype linked to), but rather the prototype object to link to when other objects are created by calling the function with new.
