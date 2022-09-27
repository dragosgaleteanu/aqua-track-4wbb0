import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { LinearGradient } from "expo-linear-gradient";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Home() {
  const [displayMode, setDisplayMode] = useState<
    "Consumption" | "List" | "Register"
  >("Consumption");

  const mockupWaterSources = [
    "Kitchen sinks",
    "Garden hoses",
    "Bathroom shower heads",
    "Bathroom sinks",
  ];
  const mockSourceTypes = [
    "silverware-fork-knife",
    "flower-pollen-outline",
    "shower-head",
    "water-pump",
  ];
  const [currentSource, setCurrentSource] = useState<string>("");

  const selectOptions = [
    "Bathroom Sink",
    "Kitchen Sink",
    "Bathroom Shower",
    "Garden Hose",
  ];
  const [selectedOption, setSelectedOption] = useState<
    "Bathroom Sink" | "Kitchen Sink" | "Bathroom Shower" | "Garden Hose" | ""
  >("");

  const lastWeeklyCost = 60;
  const currentWeeklyCost = 10;
  const currentWaterSpeed = 1.2;

  const [IPAddress, setIPAddress] = React.useState("");
  const [sourceName, setSourceName] = React.useState("");

  const [stateText, setStateText] = React.useState("");

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#0066ff", "#66ccff"]} style={styles.container}>
        <View style={styles.innerView}>
          <Pressable
            style={styles.logoutBtn}
            onPress={() => {
              //FIXME: implement logout functionality
            }}
          >
            <Text style={styles.logoutBtnText}>Log out</Text>
          </Pressable>
          {displayMode === "Consumption" ? (
            <>
              <Text style={styles.title}>AquaTrack</Text>
              <View style={styles.infoGrids}>
                <View style={styles.volumeGrid}>
                  <Text style={styles.volumeTitle}>Total consumption</Text>
                  <Text style={styles.volumeUnit}>/week</Text>
                  <Text style={styles.volumeValue}>7m³</Text>
                </View>
                <View style={styles.heatGrid}>
                  <Text style={styles.heatTitle}>Avg ° Temperature</Text>
                  <Text style={styles.heatUnit}>/week</Text>
                  <Text style={styles.heatValue}>30°C</Text>
                </View>
                <View style={styles.speedGrid}>
                  <Text style={styles.speedTitle}>Current water flow</Text>
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
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
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
                    <Icon
                      name={mockSourceTypes[index]}
                      size={24}
                      color="#ffffff"
                    />
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
                <Text style={styles.registerBtnText}>+</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setDisplayMode("Consumption");
                }}
                style={styles.goBackBtnList}
              >
                <Text style={styles.goBackBtnText}>Go back</Text>
              </Pressable>
            </IconComponentProvider>
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
                    width: 242,
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
                onChangeText={(text) => {
                  setIPAddress(text);
                }}
                value={IPAddress}
                placeholder="Enter IP Address"
              />
              <TextInput
                style={styles.nameInput}
                onChangeText={(text) => {
                  setSourceName(text);
                }}
                value={sourceName}
                placeholder="Enter Source Name"
              />
              <Text style={styles.stateText}>{stateText}</Text>
              <Pressable
                onPress={() => {
                  setSourceName("");
                  setIPAddress("");
                  setSelectedOption("");
                  setDisplayMode("List");
                }}
                style={styles.cancelBtn}
              >
                <Text style={styles.goBackBtnText}>Cancel</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  if (selectedOption !== "") {
                    setDisplayMode("List");

                    //FIXME: save water resource details: type, IPAddress, sourceName
                  } else {
                    setStateText(
                      "Please fill in all fields to successfully add your water resource!"
                    );

                    setTimeout(() => {
                      setStateText("");
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
  logoutBtn: {
    position: "absolute",
    top: "8%",
    right: "8%",
  },
  logoutBtnText: {
    fontSize: 13,
    color: "#ffffff",
  },
  srcList: {
    marginTop: 140,
    marginLeft: -50,
    marginRight: 45,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "35%",
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
    left: "25%",
  },
  confirmBtn: {
    backgroundColor: "#33cc33",
    position: "absolute",
    bottom: "23%",
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
    bottom: "23%",
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
    bottom: "8%",
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
    top: "70%",
    left: "38%",
    width: "47%",
    height: 95,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    paddingBottom: 10,
    paddingHorizontal: 30,
  },
  srcBtn: {
    marginVertical: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0066ff",
    marginBottom: 7,
    minHeight: 50,
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
    width: "45%",
    height: "40%",
  },
  srcBtnText: {
    marginTop: 10,
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
  },
  selectSrcBtn: {
    position: "absolute",
    bottom: "5%",
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
  goBackBtnList: {
    position: "absolute",
    bottom: "8%",
    left: "33%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0066ff",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 50,
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
  registerBtnText: {
    position: "absolute",
    bottom: "5%",
    fontSize: 80,
    color: "#ffffff",
  },
  goBackBtnText: {
    fontSize: 20,
    color: "#ffffff",
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
  financialGrid: {
    width: "70%",
    position: "absolute",
    bottom: "28%",
    right: "40%",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#0ABAB5",
    padding: 20,
    paddingBottom: 15,
  },
  financialTitle: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
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
