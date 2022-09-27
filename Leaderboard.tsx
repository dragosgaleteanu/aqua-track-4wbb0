import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";

export default function Leaderboard({ navigation }: { navigation: any }) {
  const [boardActivated, setBoardActivated] = useState<boolean>(false);
  const [userToAdd, setUserToAdd] = useState<string>("");
  const [rankingList, setRankingList] = useState<
    {
      name: string;
      consumptionPerPerson: number;
    }[]
  >([
    { name: "Dragos", consumptionPerPerson: 5 },
    { name: "Asad", consumptionPerPerson: 7 },
    { name: "Timo", consumptionPerPerson: 9 },
    { name: "Isabel", consumptionPerPerson: 12 },
    { name: "Thijs", consumptionPerPerson: 27 },
    { name: "Thijs", consumptionPerPerson: 45 },
    { name: "Ima", consumptionPerPerson: 78 },
    { name: "John", consumptionPerPerson: 98 },
    { name: "Mary", consumptionPerPerson: 99 },
  ]);

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#0066ff", "#66ccff"]} style={styles.container}>
        <Pressable
          style={styles.logoutBtn}
          onPress={() => {
            //FIXME: implement logout functionality
          }}
        >
          <Text style={styles.logoutBtnText}>Log out</Text>
        </Pressable>
        {!boardActivated ? (
          <View style={styles.container}>
            <Text style={styles.consentTitle}>
              Do you consent to participating in the water consumption ranking?
            </Text>
            <Pressable
              style={styles.consentYesBtn}
              onPress={() => {
                setBoardActivated(true);
              }}
            >
              <Text style={styles.consentYesBtnText}>Yes</Text>
            </Pressable>
            <Pressable
              style={styles.consentNoBtn}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.consentNoBtnText}>No</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.container}>
            <Text style={styles.leaderboardtitle}>Leaderboard</Text>
            <TextInput
              style={styles.newUserInput}
              onChangeText={(text) => {
                console.log(text);
                setUserToAdd(text);
              }}
              value={userToAdd}
              placeholder="Enter user"
            />
            <Pressable
              style={styles.newUserBtn}
              onPress={() => {
                setUserToAdd("");
                setRankingList((prev) => [
                  ...prev,
                  { name: userToAdd, consumptionPerPerson: 3 },
                ]);
              }}
            >
              <Text style={styles.newUserBtnText}>+</Text>
            </Pressable>
            <View style={styles.listLegend}>
              <Text style={styles.listLegendText}>Rank</Text>
              <Text style={styles.legendNameConsumption}>Name</Text>
              <Text style={styles.legendNameConsumption}>Consumption</Text>
            </View>
            <ScrollView style={styles.scrollList}>
              {rankingList.map((user, index) => (
                <View key={index} style={styles.scrollElement}>
                  <Text style={styles.scrollName}>
                    #{index + 1} {user.name}
                  </Text>
                  <Text style={styles.scrollWater}>
                    {user.consumptionPerPerson}m³
                  </Text>
                  <Pressable
                    style={styles.scrollElBtn}
                    onPress={() => {
                      setRankingList((prev) =>
                        prev.filter((_, removeIndex) => removeIndex !== index)
                      );
                    }}
                  >
                    <Text style={styles.scrollElBtnText}>X</Text>
                  </Pressable>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listLegend: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    top: "35%",
    left: "10%",
  },
  listLegendText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  legendNameConsumption: {
    color: "#ffffff",
    fontSize: 20,
    paddingLeft: 30,
    fontWeight: "bold",
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
  consentTitle: {
    position: "absolute",
    top: "30%",
    left: "10%",
    width: "80%",
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
  consentYesBtn: {
    position: "absolute",
    top: "55%",
    left: "15%",
    width: "30%",
    backgroundColor: "#33cc33",
    borderRadius: 10,
  },
  consentYesBtnText: {
    fontSize: 40,
    color: "#ffffff",
    textAlign: "center",
  },
  consentNoBtn: {
    position: "absolute",
    top: "55%",
    left: "55%",
    width: "30%",
    backgroundColor: "#ff0000",
    borderRadius: 10,
  },
  consentNoBtnText: {
    fontSize: 40,
    color: "#ffffff",
    textAlign: "center",
  },
  scrollName: {
    paddingLeft: 5,
    fontSize: 32,
    width: "50%",
    color: "#ffffff",
    fontWeight: "bold",
  },
  scrollWater: {
    width: "15%",
    textAlign: "right",
    color: "#ffffff",
    fontSize: 20,
  },
  scrollElement: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#0066ff",
    marginBottom: 7,
    minHeight: 50,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  scrollElBtn: {
    width: "10%",
    height: 30,
    borderRadius: 20,
    marginRight: "5%",
    backgroundColor: "#ff0000",
  },
  scrollElBtnText: {
    color: "#ffffff",
    fontSize: 25,
    paddingLeft: 8,
  },
  scrollList: {
    position: "absolute",
    top: "40%",
    left: "3%",
    width: "92%",
    height: "53%",
    borderRadius: 20,
    padding: 10,
  },
  leaderboardtitle: {
    position: "absolute",
    top: "9%",
    left: "25%",
    fontSize: 35,
    color: "#ffffff",
  },
  newUserInput: {
    position: "absolute",
    top: "20%",
    left: "10%",
    width: "60%",
    backgroundColor: "#e6e6e6",
    padding: 20,
    borderRadius: 20,
  },
  newUserBtn: {
    position: "absolute",
    top: "20%",
    right: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#33cc33",
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 15,
    paddingBottom: 6,
  },
  newUserBtnText: {
    fontSize: 40,
    color: "#ffffff",
  },
});
