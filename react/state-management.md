# State Management

Table of Contents

- Context
- Hooks
  - Your own hooks
  - Custom Hooks
    - `useCallback`
    - `useRef`
    - `useMemo`
    - `useReducer`
    - `useContext`

## Context

Context is data that can be shared throughout a component tree in React to avoid certain instances of _prop drilling_ (passing data from parent to child to child, etc). Withing a context _provider_, "all consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes." So context can be thought of as "global state".

You can create a context with a default value with the following:

```jsx
const AppProvider = React.createContext(null);
```

Both class components and functional components can utilize context.

In class component:

```jsx
const AppContext = createContext(null);

const AppProvider = (props) => {
  const [fromContext, setFromContext] = useState("True");

  return (
    <AppContext.Provider value={{ fromContext, setFromContext }}>
      {props.children}
    </AppContext.Provider>
  );
};

class App extends Component {
  render() {
    return (
      <AppProvider>
        <PageTemplate title="Hello World" />
      </AppProvider>
    );
  }
}

class PageTemplate extends Component {
  static contextType = AppContext;
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Can read context: {this.context.fromContext}</p>
      </div>
    );
  }
}
```

`createContext` will return a context object that can be imported and referenced when and where you need to access the context data values within a context _Provider_.

In a class component, assign the context object to `static contextType`, so that you may access the context value through `this.context` to subscribe to it's changes.

In functional components, use the [context hook](#useContext).

## Hooks

React **Hooks** allow you to "extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy."

Essentially, hooks allow you to use [state](props-state.md#state), [context](#context), refs and more within functional components while dealing less with [render props](#) or [higher-order components](#).

The two main hooks are the [state hook](props-state.md#state-hook) and [effect hook](props-state.md#effect-hook).

### Custom Hooks

A **Custom Hook** is a function that calls other hooks, but includes custom logic.

The React docs example is as follows:

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

As per the earlier class component example in the [context section](#context), you could rewrite the class as a functional component with the `useContext` hook to access the context value:

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

#### `useRef`

#### `useMemo`

#### `useCallback`
