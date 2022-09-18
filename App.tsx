import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import DeviceList from "./components/DeviceList/DeviceList";
import DishesWashed from "./components/DishesWashed/DishesWashed";
import FinancialSavings from "./components/FinancialSavings/FinancialSavings";
import RankindDashboard from "./components/RankingDashboard/RankingDashboard";
import WaterConsumption from "./components/WaterConsumption/WaterConsumption";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./resources/images/background.jpg")}
        style={styles.image}
      >
        <ScrollView style={styles.innerView}>
          <Text style={styles.title}>AquaTrack</Text>
          <View style={styles.infoGrids}>
            <DishesWashed />
            <DeviceList />
            <WaterConsumption />
            <RankindDashboard />
            <FinancialSavings />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  infoGrids: {
    flex: 1,
    paddingTop: "-5%",
    paddingLeft: "15%",
  },
  innerView: {
    flex: 1,
    flexDirection: "column",
    paddingTop: "20%",
    paddingLeft: "22%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    color: "#ffffff",
    fontSize: 50,
  },
});
