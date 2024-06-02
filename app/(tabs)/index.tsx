import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        My name is <Text style={styles.boldText}>YourName</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add8e6",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default App;
