import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
  Image,
  TextInput,
} from "react-native";

const testList = [
  {
    id: 1,
    component: "View",
  },
  {
    id: 2,
    component: "Text",
  },
  {
    id: 3,
    component: "Image",
  },
  {
    id: 4,
    component: "ScrollView",
  },
  {
    id: 5,
    component: "TextInput",
  },
];

const Item = ({ item }) => (
  <View>
    <Text>{item.component}</Text>
  </View>
);

export default function App() {
  const [value, setValue] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={{ fontSize: 32, textAlign: "center" }}>
          React Native with Expo! {"\n"}✅
        </Text>
        <TextInput
          onChangeText={(value) => setText(value)}
          placeholder={"Type something!"}
          defaultValue={value}
        />
        <Text style={styles.regularText}>{value}</Text>
        <View style={styles.row}>
          <Text style={styles.textLight}>Top View</Text>
        </View>
        <View style={styles.row + styles.container}>
          <Image
            style={styles.headerImage}
            source={require("./assets/purple_toon_link.jpg")}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.textLight}>Bottom View</Text>
        </View>
      </ScrollView>
      <FlatList
        data={testList}
        renderItem={Item}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#eee",
    color: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    width: "100%",
    backgroundColor: "#111",
    color: "#000",
    marginVertical: 10,
  },
  textLight: {
    color: "#eee",
    textAlign: "center",
    padding: 10,
  },
  regularText: {
    fontSize: 28,
  },
  headerImage: {
    resizeMode: "center",
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  scrollView: {
    padding: 20,
  },
});
