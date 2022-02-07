# State Management

Table of Contents

- [Context](#context)
- [Refs](#refs)
- [Render Props](render-props)
- [Higher Order Components](#higher-order-components)
- [Portals](#portals)
- [Error Boundaries](#error-boundaries)
- [Fiber Architecture](#fiber-architecture)
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
