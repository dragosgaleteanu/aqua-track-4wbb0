import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  TouchableHighlight,
} from "react-native";
import { Stopwatch } from "react-native-stopwatch-timer";

type Props = {
  returnHome: () => void;
};

export default function BathroomShowerHeads(props: Props) {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const [showerTime, setShowerTime] = useState("");
  const currentWaterSpeed = 2;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bathroom shower heads</Text>
      <View style={styles.infoGrids}>
        <View style={styles.volumeGrid}>
          <Text style={styles.volumeTitle}>Total consumption</Text>
          <Text style={styles.volumeUnit}>/week</Text>
          <Text style={styles.volumeValue}>3m³</Text>
        </View>
        <View style={styles.heatGrid}>
          <Text style={styles.heatTitle}>Avg ° Temperature</Text>
          <Text style={styles.heatUnit}>/week</Text>
          <Text style={styles.heatValue}>38°C</Text>
        </View>
        <View style={styles.speedGrid}>
          <Text style={styles.speedTitle}>Current water flow</Text>
          <Text style={styles.speedValue}>{currentWaterSpeed} l/min</Text>
        </View>
      </View>
      <View style={styles.stopwatchSection}>
        <Stopwatch
          laps
          msecs
          start={isStopwatchStart}
          //To start
          reset={resetStopwatch}
          //To reset
          options={options}
          //options for the styling
          getTime={(time: any) => {
            console.log(time);
          }}
        />
        <Pressable
          style={styles.stBtn}
          onPress={() => {
            setIsStopwatchStart(!isStopwatchStart);
            setResetStopwatch(false);
          }}
        >
          <Text style={styles.stBtnText}>
            {!isStopwatchStart ? "Start" : "Stop"}
          </Text>
        </Pressable>
        <Pressable
          style={styles.resetBtn}
          onPress={() => {
            setIsStopwatchStart(false);
            setResetStopwatch(true);
          }}
        >
          <Text style={styles.resetBtnText}>Reset</Text>
        </Pressable>
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

const options = {
  container: {
    backgroundColor: "#FF0000",
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#FFF",
    marginLeft: 7,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stBtn: {
    position: "absolute",
    top: "140%",
    left: "7%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0066ff",
    borderRadius: 50,
    paddingVertical: 8,
    width: "88%",
    paddingHorizontal: 50,
  },
  stBtnText: {
    color: "#ffffff",
    fontSize: 25,
  },
  resetBtn: {
    position: "absolute",
    top: "300%",
    left: "7%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0066ff",
    borderRadius: 50,
    paddingVertical: 8,
    width: "88%",
    paddingHorizontal: 50,
  },
  resetBtnText: {
    color: "#ffffff",
    fontSize: 25,
  },
  title: {
    color: "#ffffff",
    fontSize: 33,
    marginLeft: -60,
  },
  stopwatchSection: {
    position: "absolute",
    bottom: "40%",
    left: "3%",
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  stopwatchBtnText: {
    color: "#ffffff",
    fontSize: 20,
    marginTop: 10,
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
