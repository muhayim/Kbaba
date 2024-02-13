import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Button, Image } from "react-native-elements";

const Menyu1 = ({ navigation }) => {
  const Nav = () => navigation.navigate("AllServices");

  const data = [
    {
      key: 1,
      label: "Road Fix",
      imageSource: require("../assets/car.png"),
      source: "RoadFix",
    },
    {
      key: 2,
      label: "Wheel Fix",
      imageSource: require("../assets/wheel.png"),
      source: "WheelFix",
    },
    {
      key: 3,
      label: "Shop Store",
      imageSource: require("../assets/ShopWhite.png"),
      source: "ShopStore",
    },
    {
      key: 4,
      label: "Vehicle Find",
      imageSource: require("../assets/VFind.png"),
      source: "VFind",
    },
    {
      key: 5,
      label: "How To Use",
      imageSource: require("../assets/qstn.png"),
      source: "WelcomeScn",
    },
    {
      key: 6,
      label: "Settings",
      imageSource: require("../assets/settings.png"),
      source: "Settings",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(item.source)}>
          <Image source={item.imageSource} style={styles.image} />
          <Text style={styles.itemLabel}>{item.label}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const keyExtractor = (item) => item.key;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
   
  </View>
      <SafeAreaView style={styles.card}>
        <Text>Your Location</Text>
        <Text>(GetLocation)</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.card}>
        <Text>Today's Fuel Price :</Text>
        <Text>(Get_fuel_Price)</Text>
      </SafeAreaView>
      <View style={styles.bottomHalf}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={3}
        />
        <Button
          title="All Services"
          onPress={Nav}
          style={styles.Btn}
          color={"#cadcfc"}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  bottomHalf: {
    backgroundColor: "black",
    borderRadius: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  itemContainer: {
    alignItems: "center",
    margin: 10,
    width: 75,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "white",
    margin: 5,
    marginLeft: 1,
  },
  itemLabel: {
    marginTop: 1,
    textAlign: "center",
    color: "white",
  },
  Btn: {
    width: "80%",
    flex: 1,
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
    shadowColor: "gray",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5, // This is for Android
  },
  buttonContainer: {
    backgroundColor: "black",
    padding:70, // Adjust padding as needed
    flexDirection: "row", // Adjust flexDirection as needed
    justifyContent: "space-around", // Adjust justifyContent as needed
    alignItems: "center", // Adjust alignItems as needed
  },
  
});

export { Menyu1 };
