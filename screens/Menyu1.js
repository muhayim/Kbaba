import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { Image } from "react-native-elements";


const Menyu1 = ({ navigation }) => {
  const data = [
    {
      key: 1,
      label: "Road Fix",
      imageSource: require("../assets/car.png"),
      source: "RoadFix",
    },
    {
      key: 2,
      label: "Wheel Safe",
      imageSource: require("../assets/wheel.png"),
      source: "WheelSafe",
    },
    {
      key: 3,
      label: "Shop Store",
      imageSource: require("../assets/shop.png"),
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
      <View>
        <TouchableOpacity onPress={() => navigation.navigate(item.source)}>
          <Image source={item.imageSource} style={styles.image} />
          <Text>{item.label}</Text>
        </TouchableOpacity>
        
      </View>
    );
  };

  const keyExtractor = (item) => item.key;

  return (
    <View style={styles.container}>
      < View style={styles.topHalf}>
      <Searchbar
      placeholder="Search Vehicle"
      
    />

      </View>

      <View style={styles.bottomHalf}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={3} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  topHalf: {
    backgroundColor: "lightgray",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomHalf: {
    backgroundColor: "black",
    borderRadius: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "white",
    margin:5,
    marginLeft:1,
   
  },
  textcolor: {
    color: "white",
  },
});

export { Menyu1 };
