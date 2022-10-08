import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import NumericInput from "react-native-numeric-input";

type Props = {
  returnHome: () => void;
};

export default function KitchenSinks(props: Props) {
  const [inputUValue, setInputUValue] = useState(0);
  const [inputPValue, setInputPValue] = useState(0);
  const currentWaterSpeed = 1.2;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kitchen sinks</Text>
      <View style={styles.infoGrids}>
        <View style={styles.volumeGrid}>
          <Text style={styles.volumeTitle}>Total consumption</Text>
          <Text style={styles.volumeUnit}>/week</Text>
          <Text style={styles.volumeValue}>3m³</Text>
        </View>
        <View style={styles.heatGrid}>
          <Text style={styles.heatTitle}>Avg ° Temperature</Text>
          <Text style={styles.heatUnit}>/week</Text>
          <Text style={styles.heatValue}>30°C</Text>
        </View>
        <View style={styles.speedGrid}>
          <Text style={styles.speedTitle}>Current water flow</Text>
          <Text style={styles.speedValue}>{currentWaterSpeed} l/min</Text>
        </View>
      </View>
      <View style={styles.inputUtensils}>
        <Text style={styles.inputUText}>Number of utensils washed</Text>
        <NumericInput
          value={inputUValue}
          onChange={(value) => {
            setInputUValue(value);
          }}
          onLimitReached={(isMax, msg) => console.log(isMax, msg)}
          totalWidth={240}
          totalHeight={50}
          iconSize={25}
          step={1}
          minValue={0}
          valueType="integer"
          rounded
          textColor="#FFFFFF"
          rightButtonBackgroundColor="#ff0000"
          leftButtonBackgroundColor="#33cc33"
        />
      </View>
      <View style={styles.inputPlates}>
        <Text style={styles.inputPText}>Number of plates washed</Text>
        <NumericInput
          value={inputPValue}
          onChange={(value) => {
            setInputPValue(value);
          }}
          onLimitReached={(isMax, msg) => console.log(isMax, msg)}
          totalWidth={240}
          totalHeight={50}
          iconSize={25}
          step={1}
          valueType="integer"
          minValue={0}
          rounded
          textColor="#FFFFFF"
          rightButtonBackgroundColor="#ff0000"
          leftButtonBackgroundColor="#33cc33"
        />
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
  inputUText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  inputUtensils: {
    position: "absolute",
    bottom: "35%",
    right: "19%",
  },
  inputPText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  inputPlates: {
    position: "absolute",
    bottom: "18%",
    right: "25%",
  },
  title: {
    color: "#ffffff",
    fontSize: 50,
    marginLeft: -30,
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
