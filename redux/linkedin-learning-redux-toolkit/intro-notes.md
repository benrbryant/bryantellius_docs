# Redux

## Intro

According to the creators, "Redux is a predictable state container for JavaScript apps."

Redux is useful for controlling React State management that can shared between components further than what is possible by passing props. Think of Redux as "centralized application state."

Redux Toolkit is a tool that comes with several packages containing functions and values for building a Redux application. It provides logic for "store setup, creating reducers and writing immutable update logic, and creating entire slices of state at once."

## Understanding Redux

Three parts

1. Actions - type and payload
2. Reducers - pure functions that take in state and action params and typically
3. Actions - add, update, remove

Stores

- contains application state in the form of slices
- create a store with `configureStore`
- configures reducers
- exposes `getState` and `dispatch(action)` methods

Slices

- slices are part of application state
- create a slice with `createSlice` that takes a config object containing `name`, `initialState`, and `reducer`

## Project Setup

Preferably, use `npx create-react-app {NAME} --template redux` to bootstrap a react project with Redux.

Alternatively, you can install React Redux and the Redux Toolkit separately into an existing React project.

Ex: `npm install react-redux @reduxjs/toolkit`

## Creating a Store

Use `configureStore` from @reduxjs/toolkit to create an Redux store.

Min Ex:

```js
// In src/data/store.js

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

export default store;
```

```js
// src/index.js

// ...other imports
import { Provider } from "react-redux";
import store from "data/store";

// ...createRoot
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```
