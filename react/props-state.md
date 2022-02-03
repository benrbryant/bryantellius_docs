# Props vs State

Table of Contents

- [Props](#props)
- [State](#state)
- [Basic Hooks](#basic-hooks---usestate-and-useeffect)
  - [State Hook](#state-hook)
  - [Effect Hook](#effect-hook)
- [Conditional Rendering](#conditional-rendering)
- [Component Lifecycle](#component-lifecycle-and-methods)
- [Lists and Keys](#list-and-keys)
- [Composition and Inheritence](#composition-vs-inheritence)

## Props

**Props** are inputs into a React Component that are treated as _readonly_.

Props is an object of `name: value` pairs that is passed from parent component to child component.

`props.children` is always available within components that references the values passed between opening and closing component tags

## State

State represents values that need to be updated through the lifecycle of a component (throughout re-renders).

State is managed by a component itself, or internally. Updating state triggers the component to render and update the DOM.

In class components, state can be initialized in the _constructor_ by:

```jsx
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  ...
}
```

and must be updated using `this.setState`:

```jsx
class App extends Component {
  // Either by passing in an object with the new state value to update
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  // Or by passing in an updater function that returns an object with the new state value to update
  handleClick() {
    this.setState((state, props) => ({ count: state + 1 }));
  }
}
```

## Basic Hooks - `useState` and `useEffect`

A **hook** is "is a special function that lets you 'hook into' React features. For example, useState is a Hook that lets you add React state to function components."

### State Hook

Functional components cannot handle state values on their own. To utilize state in a functional component, you can use the state hook that returns the state value and updater function for that piece of state.

Example:

```jsx
function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>Count {count}</button>;
}
```

The `useState` returns an array of two values. You can destructure those values to be referenced in the code. When you need to update the state value, call the updater function while passing in the new state value.

### Effect Hook

Functional components do not have access to [lifecycle methods](#component-lifecycle-and-methods), so the **effect hook** allows you to execute logic after each render within a functional component.

You pass a callback function to the `useEffect` function, and an optional _dependency array_, and the callback function will be called after each render.

If you have any values contained within the dependency array, the callback function will only be called
if one of those values has changed since the last render.

If you pass an empty dependency array, the callback function will only be called after the initial render.

If you do not supply a dependency array, the callback function will be called after _every_ render.

Examples:

Callback is called after each render

```jsx
function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Next render, with state now being " + count);
  });

  return <button onClick={handleClick}>Increment Count</button>;
}
```

Callback is only called after the initial render, including a cleanup function

```jsx
function App() {
  const [films, setFilms] = useState([]);
  const controller = new AbortController();

  // Callback is called after each render
  useEffect(() => {
    fetch("https://films.com/api/v1/get", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => setFilms(data));

    return () => controller.abort();
  }, []);

  return (
    <ul>
      {films.map((item) => (
        <li key={item.id}>{film.title}</li>
      ))}
    </ul>
  );
}
```

## Conditional Rendering

You can use JavaScript logic to _conditionally_ render specific JSX.

```jsx
// Using if/else
if (loggedIn) {
  return (
    <div>
      <h1>Hello {username}!</h1>
    </div>
  );
} else {
  return (
    <div>
      <h1>Hello Guest!</h1>
    </div>
  );
}

// Using logical &&
<div>{loggedIn && <h1>Hello {username}!</h1>}</div>;

// Using Ternary ? :
<div>
  <h1>Hello {loggedIn ? username : "Guest"}!</h1>
</div>;
```

## Component Lifecycle and Methods

Components have _lifecycles_, or stages, throughout their time on the DOM.

There are _lifecycle methods_ that we can use in class components that executes logic at their respective lifecycle stages.

Some of the most common lifecycle stages and correlating methods are:

1. Mount - `componentDidMount`
   - Happens after the initial render
2. Update - `componentDidUpdate`
   - Happens after each re-render (caused by updating state)
3. Unmount - `componentWillUnmount`
   - Happens when the component is removed from the DOM

## List and Keys

When rendering a **list** of items in JSX from array values, use the `Array.prototype.map()` method to return an array of JSX values from the list. Then, you can return the array of JSX directly into JSX expressions to be rendered by the ReactDOM.

**Keys** "help React identify which items have changed, are added, or are removed." When you are using `map` to return JSX for each array value, each JSX list item expression must contain a _unique_ key prop.

Example:

```jsx
<ul>
  {list.map((item) => {
    return <li key={item.id}>{item.value}</li>;
  })}
</ul>
```

## Composition vs Inheritence

React components can be designed in such a way that generic components can be used to create specific components.

Example:

```jsx
// Generic
function Alert(props) {
  return <div className={`alert-${props.type}`}>{props.message}</div>;
}

// Specific
function ErrorAlert(props) {
  return <Alert type="error" message={props.message} />;
}

// Specific
function SuccessAlert(props) {
  return <Alert type="success" message={props.message} />;
}
```

Using component composition in this way, you may not need to ever use class inheritence for class components. This is a design philosophy with the react's flexibility in mind.

## Sources

[reactjs.org/docs/](https://reactjs.org/docs/)
