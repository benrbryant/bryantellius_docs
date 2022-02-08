# State Management

Table of Contents

- [Context](#context)
- [Refs](#refs)
- [Render Props](render-props)
- [Higher Order Components](#higher-order-components)
- [Portals](#portals)
  - [Event Bubbling and Portals](#event-bubbling-and-portals)
- [Error Boundaries](#error-boundaries)
- [Fiber Architecture](#fiber-architecture)
  - [Reconciliation](#reconciliation)
  - [React Fiber](#react-fiber)
- [Sources](#sources)

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

## Refs

**Refs** are _mutable_ objects with a `.current` property that references a DOM element. You can passed a ref object to a react element through the `ref` attribute.

Use `createRef` to create a ref object. If you use `createRef` in a constructor, the ref object refers to the react element rendered by that instance by default. The ref object will be assigned when the component is mounted, and is re-assigned to `null` when the component is unmounted.

Example from the React docs:

```jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

`React.createRef()` can only be used in _class components_. To use refs in functional components, read about the [refs hook](hooks.md#useref).

### Callback Refs

React ref attributes can also be assigned callback functions. These callback functions assign a property on the component instance that references the DOM element directly.

Example from the React docs:

```jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = (element) => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // Focus the text input using the raw DOM API
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // autofocus the input on mount
    this.focusTextInput();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

## Render Props

**Render props** is a function that is passed to a component to dynammically determine what component to render.

Render props is useful for encapsulating state values to easily share and dynammically render components with reusable state.

Example from the React docs:

```jsx
class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="/cat.jpg"
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
      />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={(mouse) => <Cat mouse={mouse} />} />
      </div>
    );
  }
}
```

## Higher Order Components

Based on the compositional nature of **higher order functions** in JavaScript, a higher-order component is "a function that takes a component and returns a new component."

If multiple components subscribe to, or use similar logic, it would be efficient to wrap those components in a HOC that injects, or provides, data to a child component.

Example:

```jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const withStudioGhibliData = (WrappedComponent, dataURL) => {
  return (props) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
      let response = await fetch(dataURL);
      let list = await response.json();
      setData(list);
    };

    useEffect(() => {
      fetchData();
    }, []);

    return <WrappedComponent data={data} {...props} />;
  };
};

const Locations = ({ data }) => {
  return (
    <div>
      <h1>Studio Ghibli Locations</h1>
      <div className="task-container">
        {data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="card-body">
                <Link to={item.id}>{item.name}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withStudioGhibliData(
  Locations,
  "https://ghibliapi.herokuapp.com/locations"
);
```

Here, we have a _wrapper component_ that encompasses a `Locations` component that is passed data pulled from a fetch request. The HOC is resonsible for the data fetching logic, and can pass the needed data to _wrapped components_.

## Portals

**Portals** are a way to inject a react element into a valid DOM node, wherever it is, not just rendering a child to a parent element.

Instead of returning a react element from a component, return the result of `ReactDOM.createPortal()` while passing in the child component as the first argument, and the DOM node reference as the second argument.

Example:

```jsx
const FromPortal = () => {
  let domNode = document.querySelector("#ref");
  return ReactDOM.createPortal(<h1>Title from Child</h1>, domNode);
};
```

### Event Bubbling and Portals

When dealing with portals, "an event fired from inside a portal will propagate to ancestors in the containing _React tree_, even if those elements are not ancestors in the DOM tree."

Adding an event listener to a portal child element will still be bubble to the parent component, even though the child is not a direct descendent of the parent component through the portal.

## Error Boundaries

According to React, "error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them."

**Error boundaries** are designed to work in the same way as JS `try/catch` blocks. They can be created in _class components_ by defining either a `static getDerivedStateFromError(error)` method, or `componentDidCatch(error, errorInfo)` lifecycle method.

You can update state in the `static getDerivedStateFromError(error)` to conditionally render a fallback UI on the next render.

Example from the React docs:

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

## Fiber Architecture

**Fiber Architecture** and the **Stack Reconciler** are parts of [React Internals and the concepts of reconciliation](https://reactjs.org/docs/reconciliation.html).

### Reconciliation

In React, each time you render your application, you return a tree of React elements to the ReactDOM. Due to many different components, with children, making up a React tree that can be rendered many times throughout the lifecycle of an application, there will be **many** updates made to the real DOM.

React implements a _diffing algorithm_ that makes DOM updates efficient between renders, by checking element types to determine the best way to update that element. Depending on the type of element and the change, React will then _recursively_ update the children elements.

When rendering children elements, specifically lists, add keys to elements so that React can distinguish the need to update a list item or keep it the same, based on checking the keys of the elements.

Previously, React used a _Stack Reconciler_ to perform updates. The limitations of this implementation were that larger applications grew too heavy and expensive, which led to dropped frames when rendering the UI updates. Also, the stack reconciler did not distinguish differences between UI updates and store updates, although UI updates should be prioritized.

### React Fiber

**Fiber architecture** is built on single _fibers_, plain JavaScript objects, that contain information about a component's input and output. The objective of fiber architecture is to enhance the react scheduling system by improving:

- when to pause or continue work
- assigning priorities to different types of work
- reusing already completed work
- abandoning work that is no longer necessary

Fiber objects have the following properties:

- `type`: what type of element
- `key`: id for a specific element
- `child`: the return value of the render
- `sibling`: singly linked list of siblings in a return value of a render
- `return`: reference to the parent fiber
- `pendingProps`: arguments to a component
- `memoizedProps`: previously used arguments to a component
- `pendingWorkPriority`: number to label the priority of pending work
- `output`: the rendered result from a component, usually transferred up the react tree to be used by the `ReactDOM.render()` method (_renderer_)

## Sources

[reactjs.org](https://reactjs.org/docs/context.html)
[React Internals Fiber Architecture](https://dev.to/burhanuday/react-internals-fiber-architecture-280l)
