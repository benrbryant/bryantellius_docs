# Redux Essentials

## What is Redux?

> Redux is a pattern and library for managing and updating application state, using events called "actions". - [Redux Docs](https://redux.js.org/tutorials/essentials/part-1-overview-concepts#what-is-redux?)

Redux works from a 'store' where state is stored and maintained, that is accessible across the entire application.

## Should you use Redux?

> The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application logic will behave when those changes occur. - [Redux Docs](https://redux.js.org/tutorials/essentials/part-1-overview-concepts#why-should-i-use-redux?)

You should use Redux if you need to use data in **many** parts of your application. Even further, if that state is updated frequently, the state is complex (meaning it is subsequently complex to update it), or there is a _lot_ of code to work with and pass state across, you may need to consider implementing Redux.

## Terms with State Management

1. State, typically `useState()`
2. Action, typically `setSomething()`
3. View, typically `<div>{something}</div>`

