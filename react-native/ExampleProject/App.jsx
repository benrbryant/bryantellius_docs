import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32 }}>React Native with Expo! ✅</Text>
      <Text>Text can be written in a &lt;Text&gt;</Text>
      <View style={styles.row}>
        <Text style={styles.textLight}>Inside of a View</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    color: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#111",
    color: "#000",
  },
  textLight: {
    color: "#eee",
  },
});
