# State Management

Table of Contents

- Hooks
  - Your own hooks
  - Custom Hooks
    - `useCallback`
    - `useRef`
    - `useMemo`
    - `useReducer`
    - `useContext`
- [Sources](#sources)

## Hooks

React **Hooks** allow you to "extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy."

Essentially, hooks allow you to use [state](props-state.md#state), [context](#context), refs and more within functional components while dealing less with [render props](state-management.md#render-props) or [higher-order components](state-management.md#higher-order-components).

The two main hooks are the [state hook](props-state.md#state-hook) and [effect hook](props-state.md#effect-hook).

### Custom Hooks

A **Custom Hook** is a function that calls other hooks, but includes custom logic.

Example from the React docs:

```jsx
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

This custom hook follows the naming convention by using `useSomeHookName`, and uses the state and effect hook to check and return whether a user is on or offline. This custom hook can be used in multiple components that would have this same stateful logic to check the user's status.

### Additional Hooks

#### `useContext`

The context hooks let's use consume a context within a _provider_.

As per the earlier class component example in the [context section](state-management.md#context), you could rewrite the class as a functional component with the `useContext` hook to access the context value:

```jsx
const PageTemplate = ({ title }) => {
  const { fromContext, setFromContext } = useContext(AppContext);

  return (
    <div>
      <h1>{title}</h1>
      <p>Can read context: {fromContext}</p>
    </div>
  );
};
```

#### `useReducer`

The reducer hook can be used instead of the [state hook](props-state.md#state-hook) when dealing with complex state logic, specifically update said state.

You pass a reducer function and initial state as parameters to the reducer hook, and it returns the current state value and updater function, the same as the state hook.

The reducer function takes in the current state and an action object (with `type` property) that determines how state should be updated depending on the action type.

```jsx
const reducer = (state, action) => {
  const now = new Date();

  switch (action.type) {
    case "succeeded":
      return {
        status: action.type,
        color: "green",
        display: "Succeeded with request",
        now,
      };
    case "failed":
      return {
        status: action.type,
        color: "red",
        display: "Failed to complete action",
        now,
      };
    default:
      throw new Error("Unknown action");
  }
};

const initialState = {
  status: "pending",
  color: "gray",
  display: "Waiting for test",
  now: new Date(),
};

const PageTemplate = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 style={{ color: state.color }}>
        {state.display} at {state.now.toLocaleTimeString()}
      </h1>
      <button onClick={() => dispatch({ type: "succeeded" })}>
        Test Succeed
      </button>
      <button onClick={() => dispatch({ type: "failed" })}>Test Fail</button>
    </div>
  );
};
```

Instead of a normal updater function returned from the `useReducer` hook, a `dispatch` function is returned that can be called and passed the action object, with `type` and other properties dependent on the reducer function.

#### `useMemo`

The **memo hook** is used to optimize components that rely on heavily computed values. The hook takes in a callback function and dependency array, and returns a memoized value.

This hook should **_not_** include side effects. Side effects belong in the [effect hook](props-state.md#effect-hook).

> Memoization: "In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again."

#### `useCallback`

The **callback hook** can be used in place of the `componentShouldUpdate` lifecycle method to prevent unnecessary renders within child components that may depend on "reference equality".

The hook accepts a callback function and array of dependencies, and returns a _memoized callback_.

`useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`

#### `useRef`

The **ref hook** is used to access a _mutable object value_ that is persisted throughout the lifecycle of a component. Refs are common when dealing with DOM elements (e.g. `document.body.children`, where children is an HTMLCollection of element refs).

Example from the React docs:

```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

## Sources

[reactjs.org](https://reactjs.org/docs/hooks-reference.html)
