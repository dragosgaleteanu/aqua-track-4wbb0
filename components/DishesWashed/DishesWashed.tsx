import { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import NumericInput from "react-native-numeric-input";

export default function DishesWashed() {
  const [customAlertText, setCustomAlertText] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Number of dishes washed</Text>
      <NumericInput
        type="up-down"
        minValue={0}
        onChange={(text) => {
          const value = +text;

          if (value < 5) {
            setCustomAlertText(
              "You are using too much water. Please mind your actions' effect on the environment"
            );
          } else {
            setCustomAlertText(
              "You are using a decent volume of water. Good job!"
            );
          }
        }}
      />
      <Text style={styles.valueText}>{customAlertText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    marginTop: "10%",
    marginLeft: "-10%",
    width: "70%",
    height: "40%",
    backgroundColor: "#6495ED",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "#FFFFFF",
    marginBottom: "10%",
  },
  valueText: {
    color: "#FFFFFF",
  },
});
