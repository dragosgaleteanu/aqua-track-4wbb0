import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

type Props = {
  returnHome: () => void;
};

export default function GardenHoses(props: Props) {
  const currentWaterSpeed = 4;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Garden hoses</Text>
      <View style={styles.infoGrids}>
        <View style={styles.volumeGrid}>
          <Text style={styles.volumeTitle}>Total consumption</Text>
          <Text style={styles.volumeUnit}>/week</Text>
          <Text style={styles.volumeValue}>8m³</Text>
        </View>
        <View style={styles.heatGrid}>
          <Text style={styles.heatTitle}>Avg ° Temperature</Text>
          <Text style={styles.heatUnit}>/week</Text>
          <Text style={styles.heatValue}>31°C</Text>
        </View>
        <View style={styles.speedGrid}>
          <Text style={styles.speedTitle}>Current water flow</Text>
          <Text style={styles.speedValue}>{currentWaterSpeed} l/min</Text>
        </View>
      </View>
      <View style={styles.weatherGrid}>
        <Text style={styles.weatherText}>
          Today the maximum temp is 28 with sunny weather and low humidity. You
          should water the plants!
        </Text>
      </View>
      <Pressable
        style={styles.goBackBtn}
        onPress={() => {
          props.returnHome();
        }}
      >
        <Text style={styles.goBackBtnText}>Go back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  weatherGrid: {
    position: "absolute",
    padding: 10,
    borderRadius: 10,
    borderColor: "#0ABAB5",
    borderWidth: 2,
    top: "55%",
    width: "80%",
    right: "24%",
  },
  weatherText: {
    textAlign: "center",
    fontSize: 25,
    color: "#ffffff",
  },
  title: {
    color: "#ffffff",
    fontSize: 50,
    marginLeft: -40,
  },
  infoGrids: { flex: 1, paddingTop: "-5%", paddingLeft: "15%" },
  volumeGrid: {
    position: "absolute",
    top: "10%",
    left: "-25.5%",
    alignItems: "center",
    borderColor: "#0ABAB5",
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
  },
  volumeTitle: {
    color: "#ffffff",
    fontSize: 18,
  },
  volumeValue: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
  },
  volumeUnit: {
    fontSize: 18,
    color: "#ffffff",
    marginBottom: 5,
  },
  heatGrid: {
    position: "absolute",
    top: "10%",
    left: "45%",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: "#0ABAB5",
  },
  heatTitle: { color: "#ffffff", fontSize: 18 },
  heatUnit: { color: "#ffffff", fontSize: 18, marginBottom: 5 },
  heatValue: { color: "#ffffff", fontSize: 30, fontWeight: "bold" },
  speedGrid: {
    position: "absolute",
    top: "30%",
    left: "-7%",
    alignItems: "center",
    borderColor: "#0ABAB5",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width: "100%",
  },
  speedTitle: { color: "#ffffff", fontSize: 18 },
  speedValue: { color: "#ffffff", fontSize: 36, fontWeight: "bold" },
  goBackBtn: {
    position: "absolute",
    bottom: "3%",
    left: "7%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0066ff",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  goBackBtnText: {
    fontSize: 20,
    color: "#ffffff",
  },
});
