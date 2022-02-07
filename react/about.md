# About React; Using React

Table of Contents

- [About React](#about-react)
- [CRA tool](#create-react-app-tool)
- [JSX](#jsx)
- [Components](#components)
  - [Class Components](#class-components)
  - [Functional Components](#functional-components)
- [Sources](#sources)

## About React

**React** is "a JavaScript library for building user interfaces"

The ReactDOM takes react elements (written as JSX expressions or objects) and creates a _virtual DOM_ to mimic, or shadow 😉, the real DOM. It manages all components renders and updates.

The entry point of a react application usually has:

```jsx
`ReactDOM.render(<App />, document.getElementById("root"))`;
```

where JSX is passed into the ReactDOM's `render` method to inject DOM elements into the selected element.

## `create-react-app` tool

**Create React App** is a tool that creates single-page React applications. It requires no configuration, and comes with a modern build setup (webpack, babel).

## JSX

**JavaScript XML** is a special syntax used in JS files that couples web technologies (HTML, CSS, JS) into a single unit called a **component**. It looks like HTML or even JS strings, but it is closer to JS than HTML (this is why the "attributes" are written in camelCase). You can use JSX _expressions_ as first-class citizens in your code that mingles with component logic.

You can create a react element with JSX expressions or JSX objects:

```jsx
// Expression
<p className="text-primary bg-light">This is a paragraph</p>;

// Object

React.createElement(
  "p",
  { className: "text-primary bg-light" },
  "This is a paragraph"
);
```

> NOTE ON REACT ELEMENTS: "React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time."

## Components

**Components** are "like JavaScript functions", that take in a parameter _props_, and returns _React Elements_ to determine what the screen should display to the user.

You can render _user-defined_ components as `<MyComponent title="Hello World" />`

> NOTE ON COMPONENT NAMES: Always start a react component name with a capital letter to avoid DOM element interpretation.

All react components are to be treated as "pure": given an input, they do not attempt to change input values, just use them in the output.

### Class Components

_Class_ components are written using ES6 class syntax, and contain a `render` method that returns JSX.

```js
class App extends Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
```

### Functional Components

_Functional_ components are written as a normal as a JS function that returns JSX.

```jsx
function App() {
  return <h1>Hello World!</h1>;
}
```

## Sources

[reactjs.org](https://reactjs.org)
