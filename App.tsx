import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Leaderboard from "./Leaderboard";
import Home from "./Home";
import Loading from "./Loading";
import { LinearGradient } from "expo-linear-gradient";
import NumericInput from "react-native-numeric-input";

const Tab = createBottomTabNavigator();

export default function App() {
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showRegistration, setShowRegistration] = useState<boolean>(false);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  setTimeout(() => {
    setShowLoading(false);
  }, 5000);

  return (
    <NavigationContainer>
      {showLoading ? (
        <Loading />
      ) : isLoggedIn ? (
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
      ) : !showRegistration ? (
        <LinearGradient
          colors={["#0066ff", "#66ccff"]}
          style={styles.container}
        >
          <View style={styles.container}>
            <Text style={styles.login}>Log in</Text>
            <Text style={styles.username}>Username</Text>
            <TextInput
              style={styles.usernameIn}
              onChangeText={(text) => {
                setUsername(text);
              }}
              placeholder="Enter username"
            />
            <Text style={styles.password}>Password</Text>
            <TextInput
              style={styles.passwordIn}
              secureTextEntry={true}
              onChangeText={(text) => {
                setPassword(text);
              }}
              placeholder="Enter password"
            />
            <Pressable
              style={styles.loginBtn}
              onPress={() => {
                setIsLoggedIn(true);
              }}
            >
              <Text style={styles.loginBtnText}>Log in</Text>
            </Pressable>
            <Pressable
              style={styles.signupBtn}
              onPress={() => {
                setShowRegistration(true);
              }}
            >
              <Text style={styles.signupBtnText}>Sign up</Text>
            </Pressable>
          </View>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={["#0066ff", "#66ccff"]}
          style={styles.container}
        >
          <View style={styles.container}>
            <Text>Make an account</Text>
            <Text>Username</Text>
            <TextInput placeholder="Enter username" />
            <Text>Email</Text>
            <TextInput placeholder="Enter email" />
            <Text>Password</Text>
            <TextInput secureTextEntry={true} />
            <Text>Confirm password</Text>
            <Text>Number of people in your household</Text>
            <NumericInput
              value={0}
              onChange={() => {
                //FIXME: implement this one asap
              }}
              minValue={1}
            />
          </View>
        </LinearGradient>
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
  loginBtn: {},
  loginBtnText: {},
  signupBtn: {},
  signupBtnText: {},
  login: {
    position: "absolute",
    top: "15%",
    left: "38%",
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  username: {
    position: "absolute",
    top: "25%",
    left: "15%",
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  usernameIn: {
    position: "absolute",
    top: "30%",
    left: "15%",
    backgroundColor: "#e6e6e6",
    fontSize: 20,
    width: "70%",
    height: "6%",
    borderRadius: 20,
    paddingLeft: 20,
  },
  password: {
    position: "absolute",
    top: "40%",
    left: "15%",
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  passwordIn: {
    position: "absolute",
    top: "45%",
    left: "15%",
    backgroundColor: "#e6e6e6",
    fontSize: 20,
    width: "70%",
    height: "6%",
    borderRadius: 20,
    paddingLeft: 20,
  },
});
