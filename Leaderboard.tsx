import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Leaderboard() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#0066ff", "#66ccff"]}
        style={styles.container}
      ></LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});