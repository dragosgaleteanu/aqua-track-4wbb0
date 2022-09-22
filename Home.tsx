import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  const [displayMode, setDisplayMode] = useState<
    "Consumption" | "List" | "Register"
  >("Consumption");

  const mockupWaterSources = [
    "Kitchen tap",
    "Bathroom shower",
    "Garden hose",
    "Neighbor's sink",
  ];
  const [currentSource, setCurrentSource] = useState<string>("");

  const selectOptions = ["Sink", "Shower"];
  const [selectedOption, setSelectedOption] = useState<
    "Sink" | "Shower" | "N/A"
  >();

  const lastWeeklyCost = 60;
  const currentWeeklyCost = 10;
  const currentWaterSpeed = 1.2;

  const [IPAddress, onChangeIPAddress] = React.useState("");
  const [sourceName, onChangeSourceName] = React.useState("");

  const [stateTax, setStateTax] = React.useState("");

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
          ) : displayMode === "List" ? (
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
                  setDisplayMode("Register");
                }}
                style={styles.registerBtn}
              >
                <Text style={styles.goBackBtnText}>
                  Register new water source
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setDisplayMode("Consumption");
                }}
                style={styles.goBackBtn}
              >
                <Text style={styles.goBackBtnText}>Go back</Text>
              </Pressable>
            </>
          ) : (
            <>
              <Text style={styles.registerSrcTitle}>
                Register a new water source
              </Text>
              <View style={styles.dropdown}>
                <SelectDropdown
                  buttonStyle={{
                    borderRadius: 50,
                    backgroundColor: "#e6e6e6",
                    shadowColor: "#ffffff",
                  }}
                  dropdownStyle={{
                    borderRadius: 5,
                  }}
                  data={selectOptions}
                  onSelect={(selectedItem, index) => {
                    setSelectedOption(selectedItem);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item;
                  }}
                />
              </View>
              <TextInput
                style={styles.ipInput}
                onChangeText={onChangeIPAddress}
                value={IPAddress}
                placeholder="Enter IP Address"
              />
              <TextInput
                style={styles.nameInput}
                onChangeText={onChangeSourceName}
                value={sourceName}
                placeholder="Enter Source Name"
              />
              <Text style={styles.stateText}>{stateTax}</Text>
              <Pressable
                onPress={() => {
                  setDisplayMode("List");
                  setSelectedOption("N/A");
                }}
                style={styles.cancelBtn}
              >
                <Text style={styles.goBackBtnText}>Cancel</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  if (selectedOption !== "N/A") {
                    setDisplayMode("List");

                    //FIXME: save water resource details: type, IPAddress, sourceName
                  } else {
                    setStateTax(
                      "Please fill in all fields to successfully add your water resource!"
                    );

                    setTimeout(() => {
                      setStateTax("");
                    }, 3000);
                  }
                }}
                style={styles.confirmBtn}
              >
                <Text style={styles.goBackBtnText}>Confirm</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setDisplayMode("Consumption");
                }}
                style={styles.goHomeBtn}
              >
                <Text style={styles.goBackBtnText}>Go Home</Text>
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
  stateText: {
    position: "absolute",
    bottom: "22%",
    left: "29%",
    width: "70%",
    height: "20%",
    textAlign: "center",
    color: "#ff3300",
    fontSize: 20,
    fontWeight: "bold",
  },
  ipInput: {
    position: "absolute",
    top: "40%",
    left: "24%",
    width: "80%",
    backgroundColor: "#e6e6e6",
    padding: 20,
    borderRadius: 50,
  },
  nameInput: {
    position: "absolute",
    top: "55%",
    left: "24%",
    width: "80%",
    backgroundColor: "#e6e6e6",
    padding: 20,
    borderRadius: 50,
  },
  srcTitle: {
    position: "absolute",
    top: "12%",
    left: "15%",
    fontSize: 35,
    color: "#ffffff",
  },
  registerSrcTitle: {
    position: "absolute",
    top: "12%",
    left: "15%",
    fontSize: 23,
    fontWeight: "bold",
    color: "#ffffff",
  },
  dropdown: {
    position: "absolute",
    top: "25%",
    left: "32%",
  },
  confirmBtn: {
    backgroundColor: "#33cc33",
    position: "absolute",
    bottom: "16%",
    right: "15%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  cancelBtn: {
    backgroundColor: "#ff0000",
    position: "absolute",
    bottom: "16%",
    left: "15%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  goHomeBtn: {
    backgroundColor: "#0066ff",
    position: "absolute",
    bottom: "5%",
    left: "39%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  registerBtn: {
    backgroundColor: "#0066ff",
    position: "absolute",
    bottom: "15%",
    left: "15%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
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
    bottom: "3%",
    left: "36%",
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
