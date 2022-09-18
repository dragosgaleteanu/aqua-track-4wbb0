import { View, StyleSheet, Text } from "react-native";

export default function WaterConsumption() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        your water consumption for this week is
      </Text>
      <Text style={styles.valueText}>12 m3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "20%",
    width: "50%",
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
