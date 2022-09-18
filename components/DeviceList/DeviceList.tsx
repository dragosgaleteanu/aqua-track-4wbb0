import { View, StyleSheet, Text } from "react-native";

export default function DeviceList() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>My Devices</Text>
      <Text style={styles.valueText}>BATHROOM TAP</Text>
      <Text style={styles.valueText}>KITCHEN TAP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "20%",
    marginLeft: "-10%",
    width: "70%",
    height: "20%",
    backgroundColor: "#6495ED",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "#FFFFFF",
  },
  valueText: {
    color: "#FFFFFF",
  },
});
