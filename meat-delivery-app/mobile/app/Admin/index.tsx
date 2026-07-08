import { View, Text, StyleSheet } from "react-native";

export default function AdminScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Text style={styles.subtitle}>Admin Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 18,
    color: "#555555",
  },
});