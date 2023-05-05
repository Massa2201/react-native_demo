import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ChatScreens from "./src/screens/ChatsScreens";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatScreens />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",

    paddingVertical: 50,
  },
});
