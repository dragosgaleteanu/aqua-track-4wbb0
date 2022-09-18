import { View, StyleSheet, Text } from "react-native";

export default function FinancialSavings() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>money saved this week</Text>
      <Text style={styles.valueText}>€23.57</Text>
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
