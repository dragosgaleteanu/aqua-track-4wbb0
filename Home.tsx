import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  const [displayMode, setDisplayMode] = useState<"Consumption" | "List">(
    "Consumption"
  );

  const mockupWaterSources = [
    "Kitchen tap",
    "Bathroom shower",
    "Garden hose",
    "Neighbor's sink",
  ];
  const [currentSource, setCurrentSource] = useState<string>("");

  const lastWeeklyCost = 60;
  const currentWeeklyCost = 10;
  const currentWaterSpeed = 1.2;

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#0066ff", "#66ccff"]} style={styles.container}>
        <View style={styles.innerView}>
          {displayMode === "Consumption" ? (
            <>
              <Text style={styles.title}>AquaTrack</Text>
              <View style={styles.infoGrids}>
                <View style={styles.volumeGrid}>
                  <Text style={styles.volumeTitle}>
                    This week you have consumed
                  </Text>
                  <Text style={styles.volumeValue}>7 cubic meters</Text>
                </View>
                <View style={styles.heatGrid}>
                  <Text style={styles.heatTitle}>
                    Average water temperature
                  </Text>
                  <Text style={styles.heatValue}>30C/86F</Text>
                </View>
                <View style={styles.speedGrid}>
                  <Text style={styles.speedTitle}>Current water speed</Text>
                  <Text style={styles.speedValue}>
                    {currentWaterSpeed} l/min
                  </Text>
                </View>
                <View style={styles.financialGrid}>
                  <Text style={styles.financialTitle}>
                    Money{" "}
                    {currentWeeklyCost < lastWeeklyCost ? "saved" : "lost"} this
                    week
                  </Text>
                  <Text
                    style={
                      currentWeeklyCost < lastWeeklyCost
                        ? styles.financialValueLower
                        : styles.financialValueHigher
                    }
                  >
                    €{Math.abs(currentWeeklyCost - lastWeeklyCost)}
                  </Text>
                </View>
              </View>
              <Pressable
                onPress={() => {
                  setDisplayMode("List");
                }}
                style={styles.selectSrcBtn}
              >
                <Text style={styles.selectSrcBtnText}>Select water source</Text>
              </Pressable>
            </>
          ) : (
            <>
              <Text style={styles.srcTitle}>Select water source</Text>
              <View style={styles.srcList}>
                {mockupWaterSources.map((waterSource, index) => (
                  <Pressable
                    key={index}
                    style={styles.srcBtn}
                    onPress={() => {
                      setCurrentSource(waterSource);
                      setDisplayMode("Consumption");
                    }}
                  >
                    <Text style={styles.srcBtnText}>{waterSource}</Text>
                  </Pressable>
                ))}
              </View>

              <Pressable
                onPress={() => {
                  setDisplayMode("Consumption");
                }}
                style={styles.goBackBtn}
              >
                <Text style={styles.goBackBtnText}>Go back</Text>
              </Pressable>
            </>
          )}
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  infoGrids: {
    flex: 1,
    paddingTop: "-5%",
    paddingLeft: "15%",
  },
  srcList: {
    marginTop: 140,
    marginRight: 90,
  },
  srcTitle: {
    position: "absolute",
    top: "12%",
    left: "15%",
    fontSize: 35,
    color: "#ffffff",
  },
  srcBtn: {
    marginVertical: 20,
  },
  srcBtnText: {
    fontSize: 25,
    color: "#ffffff",
    textAlign: "center",
  },
  selectSrcBtn: {
    position: "absolute",
    bottom: "10%",
    left: "28%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0066ff",
    borderRadius: 50,
    padding: 25,
  },
  selectSrcBtnText: {
    fontSize: 20,
    color: "#ffffff",
  },
  goBackBtn: {
    position: "absolute",
    bottom: "10%",
    left: "36%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0066ff",
    borderRadius: 50,
    paddingVertical: 30,
    paddingHorizontal: 50,
  },
  goBackBtnText: {
    fontSize: 20,
    color: "#ffffff",
  },
  heatGrid: {
    position: "absolute",
    top: "25%",
    left: "1%",
    alignItems: "center",
  },
  heatTitle: { color: "#ffffff", fontSize: 18 },
  heatValue: { color: "#ffffff", fontSize: 30, fontWeight: "bold" },
  speedGrid: {
    position: "absolute",
    top: "40%",
    left: "10%",
    alignItems: "center",
  },
  speedTitle: { color: "#ffffff", fontSize: 18 },
  speedValue: { color: "#ffffff", fontSize: 36, fontWeight: "bold" },
  volumeGrid: {
    position: "absolute",
    top: "10%",
    left: "-5%",
    alignItems: "center",
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
  financialGrid: {
    width: "100%",
    position: "absolute",
    bottom: "30%",
    right: "25%",
    alignItems: "center",
  },
  financialTitle: {
    color: "#ffffff",
    fontSize: 20,
  },
  financialValueLower: {
    color: "#00ff00",
    fontSize: 60,
    fontWeight: "bold",
  },
  financialValueHigher: {
    color: "#ff3300",
    fontSize: 60,
    fontWeight: "bold",
  },
  innerView: {
    flex: 1,
    flexDirection: "column",
    paddingTop: "20%",
    paddingLeft: "22%",
  },
  container: {
    flex: 1,
  },
  title: {
    color: "#ffffff",
    fontSize: 50,
  },
});
