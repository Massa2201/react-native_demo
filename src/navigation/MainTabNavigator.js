import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotImplementedScreen from "../screens/NotImplementedScreen";
import ChatsScreen from "../screens/ChatsScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Chats">
      <Tab.Screen
        name="Status"
        component={NotImplementedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-whatsapp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Calls" component={NotImplementedScreen} />
      <Tab.Screen name="Camera" component={NotImplementedScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Settings" component={NotImplementedScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
