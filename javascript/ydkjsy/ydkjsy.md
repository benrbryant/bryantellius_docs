# YDKJSY CH 2

- JS treats each file as it's own program
- Module: a collection of state and publicly exposed methods to operate on that state

## New Things

- Strict Equality "==="
  - `NaN === NaN // false`
  - `0 === -0 // true`
  - Use Number.isNaN(...) to check for NaN values
  - Use Object.is(...) for 0/-0
- When considering equality, content-aware comparisons consider 'structural equality'
- JS doesn't consider objects with 'structural equality', but 'identity equality'
- Brendan Eich, the creator of JavaScript
