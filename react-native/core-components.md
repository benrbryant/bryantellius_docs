# Core Components

The building block for mobile UIs in React Native is the **view**. Components in React Native are based on the component API used in [React](../react/README.md).

React Native has many **core components** for building interactive mobile UIs. Since you could be building an app for iOS or AndroidOS, there are also **native components** that are platform specific.

The most common core components are:

- [View](#view)
- [Text](#text)
- [Image](#image)
- [ScollView](#scrollview)
- [TextInput](#textinput)
- [StyleSheets](#stylesheets)

## View

**View** components are container components that support flexbox, style, touch handling, and accessibility controls, and maps to the native platform view.

Styling can be added through the `style` prop that can accept inline styling, or [StyleSheets](#stylesheets)

Example:

```jsx
<View style={styles.container}>
  <Text style={{ fontSize: 32 }}>React Native with Expo! ✅</Text>
</View>
```

## Text

The **Text** component is for displaying text, and supports nesting, styling, and touch handling.

Styling can be added through the `style` prop that can accept inline styling, or [StyleSheets](#stylesheets)

Text containers are not using the layout styling, but rather text styling that wraps by default instead of using flex.

```jsx
<Text style={styles.textLight}>
  Inside of a <Text style={styles.textBold}>View</Text>
</Text>
```

## StyleSheets

**StyleSheets** are supported for most core components. You can pass an object with specified styles to the `StyleSheet.create({})` method which returns an object that you can pass to component `style` props.

Example:

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    color: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

## Image

