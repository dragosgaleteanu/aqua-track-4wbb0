import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Info() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#0066ff", "#66ccff"]} style={styles.container}>
        <Text style={styles.text}>
          Tips and tricks will go in here after Timo and Isabel research is
          finished
        </Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 60,
    color: "#ffffff",
  },
});
