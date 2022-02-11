# Core Components

The building block for mobile UIs in React Native is the **view**. Components in React Native are based on the component API used in [React](../react/README.md).

React Native has many **core components** for building interactive mobile UIs. Since you could be building an app for iOS or AndroidOS, there are also **native components** that are platform specific.

The most common core components are:

- [View](#view)
- [Text](#text)
- [Image](#image)
- [ScollView](#scrollview)
- [FlatList](#flatlist)
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

The **SafeAreaView** component can be used to wrap a full screen view without the worry of overlapping the statusbar or screen edges.

## Text

The **Text** component is for displaying text, and supports nesting, styling, and touch handling.

Styling can be added through the `style` prop that can accept inline styling, or [StyleSheets](#stylesheets)

Text containers are not using the layout styling, but rather text styling that wraps by default instead of using flex.

```jsx
<Text style={styles.textLight}>
  Inside of a <Text style={styles.textBold}>View</Text>
</Text>
```

## Image

The **Image** component can be used to display images from static assets, network images, local disk images, etc

Image sources can be specified with the `require()` function loaded in `source` props.

Example:

```jsx
<Image style={styles.headerLogo} source={require("path/to/image")} />;

const styles = StyleSheet.create({
  headerLogo: {
    resizeMode: "contain",
    height: 100,
    width: 100,
    borderRadius: 100,
  },
});
```

## ScrollView

A **ScrollView** is a scrollable container that has a _bounded height_. If the scollable content is very long, then you may want to consider using a [Flat List](#flatlist), which supports lazy loading.

Example:

```jsx
<ScrollView style={styles.container}>
  <Text style={{ fontSize: 32 }}>React Native with Expo! ✅</Text>
</ScrollView>
```

## FlatList

A **FlatList** is a "performant interface for rendering basic, flat lists."

The FlatList component takes in `data` props (array), `renderItem` props (map callback function), and `keyExtractor` props (function that extracts a key prop from the data props).

It will render a lazy-loaded list of data that can be rendered in columns as well as rows.

Example:

```jsx
const testList = [
  {
    id: 1,
    value: "View",
  },
  {
    id: 2,
    value: "Text",
  },
  {
    id: 3,
    value: "Image",
  },
  {
    id: 4,
    value: "ScrollView",
  },
  {
    id: 5,
    value: "TextInput",
  },
];

const Item = ({ item }) => (
  <View>
    <Text>{item.value}</Text>
  </View>
);

// ...
<FlatList data={testList} renderItem={Item} keyExtractor={(item) => item.id} />;
```

## TextInput

A **TextInput** component is used for taking user input. It receives a `onChangeText` prop (callback function for when the input changes) and an `onSubmitEditing` prop (callback function for when text is submitted).

TextInput's also have `keyboardType` prop (determines the mobile keyboard used for data inputs), `multiline` prop (boolean), `numberOfLines` prop, and `value` prop (for controlled inputs).

Example:

```jsx
const [value, setValue] = useState("");

<TextInput
  onChangeText={(value) => setText(value)}
  placeholder={"Type something!"}
  defaultValue={value}
/>
<Text style={styles.regularText}>{value}</Text>
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
