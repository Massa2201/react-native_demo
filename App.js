import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatListItem from "./src/components/ChatListItem";

const chat = {
  id: "1",
  user: {
    image: require("./assets/img_Leon.png"),
    name: "Leon",
  },
  lastMessage: {
    text: "evil",
    createdAt: "02:09",
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <ChatListItem />
      <ChatListItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
