import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Leaderboard from "./Leaderboard";
import Home from "./Home";
import Loading from "./Loading";

const Tab = createBottomTabNavigator();

export default function App() {
  const [showLoading, setShowLoading] = useState<boolean>(true);

  setTimeout(() => {
    setShowLoading(false);
  }, 4000);

  return (
    <NavigationContainer>
      {showLoading ? (
        <Loading />
      ) : (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              height: 80,
              paddingTop: 5,
              backgroundColor: "#0066ff",
              borderTopColor: "#ffffff",
              borderTopWidth: 2,
            },
            tabBarActiveTintColor: "#ffffff",
            headerTitleStyle: {
              color: "#ffffff",
              fontSize: 25,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={40} />
              ),
            }}
          />
          <Tab.Screen
            name="Leaderboard"
            component={Leaderboard}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="human-capacity-increase"
                  color={color}
                  size={40}
                />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerView: {
    flex: 1,
    flexDirection: "column",
    paddingTop: "20%",
    paddingLeft: "22%",
  },
});
