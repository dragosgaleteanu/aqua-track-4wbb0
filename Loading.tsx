import React, { useEffect } from "react";
import { StyleSheet, View, Text, ActivityIndicator, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { tips_tricks } from "./tips_tricks";

export default function Loading() {
  let tip = tips_tricks[Math.floor(Math.random() * tips_tricks.length)];

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#0066ff", "#66ccff"]} style={styles.container}>
        <View style={styles.innerView}>
          <Text style={styles.title}>💧 AquaTrack</Text>
          <ActivityIndicator
            size="large"
            color="#ffffff"
            style={styles.spinner}
          />
          <Text style={styles.loadtext}>Loading...</Text>
          <Text style={styles.text}>{tip}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadtext: {
    color: "#ffffff",
    fontSize: 27,
    position: "absolute",
    top: "48%",
    left: "47%",
  },
  title: {
    position: "absolute",
    top: "20%",
    left: "15%",
    color: "#ffffff",
    fontSize: 50,
  },
  innerView: {
    flex: 1,
    flexDirection: "column",
    paddingTop: "20%",
    paddingLeft: "22%",
  },
  spinner: {
    position: "absolute",
    top: "40%",
    left: "58%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    backgroundColor: "transparent",
    width: "80%",
    height: "30%",
    position: "absolute",
    bottom: "10%",
    left: "23%",
  },
});
