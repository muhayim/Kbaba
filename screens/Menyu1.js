import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Button, Image } from "react-native-elements";
import * as Font from "expo-font";
import { Title } from "react-native-paper";
import { color } from "react-native-elements/dist/helpers";

const Menyu1 = ({ navigation }) => {
  const Nav = () => navigation.navigate("AllServices");

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "Lato-Black": require("../assets/fonts/Lato-Black.ttf"),
      });
      setFontLoaded(true);
    }

    loadFont();
  }, []);

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
          <Text style={[styles.itemLabel, { fontFamily: "Lato-Black" }]}>{item.label}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const keyExtractor = (item) => item.key;

  return (
    <SafeAreaView style={styles.container}>
      {fontLoaded && (
        <View style={styles.buttonContainer}>
          <Text style={{ color: "white", fontFamily: "Lato-Black" ,fontSize: 25 }}>
            RoadSavr
          </Text>
        </View>
      )}
      <SafeAreaView style={styles.card}>
        {fontLoaded && (
          <>
            <Text style={{ fontFamily: "Lato-Black" }}>Your Location</Text>
            <Text style={{ fontFamily: "Lato-Black" }}>(GetLocation)</Text>
          </>
        )}
      </SafeAreaView>
      <SafeAreaView style={styles.card}>
        {fontLoaded && (
          <>
            <Text style={{ fontFamily: "Lato-Black" }}>Space for Ads</Text>
            
          </>
        )}
      </SafeAreaView>

      <View style={[styles.bottomHalf, { fontFamily: "Lato-Black" }]}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={3}
          
        />
        
      </View>
       <View>
       {fontLoaded &&(
        <Pressable
        
        onPress={() =>navigation.navigate("AllServices")}
        style={({ pressed }) => [
          styles.bottomHalf,
          { opacity: pressed ? 0.5 : 1 } , {marginTop : 30}  
        ]}
      >
        <Text style={[styles.title , {fontFamily : "Lato-Black"}, {color:"white"}]} >Garage</Text>
      </Pressable>
      )} 
      </View> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5eea9",
    fontFamily:"Lato-Black"
  },
  bottomHalf: {
    backgroundColor: "#549d5f",
    borderRadius: 30,
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontFamily:"Lato-Black"
  },
  itemContainer: {
    alignItems: "center",
    margin: 10,
    width: 75,
    fontFamily:"Lato-Black"
  },
  image: {
    width: 52,
    height: 52,
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
    fontFamily: "Lato-Black",
  },
  Btn: {
    width: "80%",
    flex: 1,
    alignItems: "center",
    fontFamily: "Lato-Black",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    paddingTop: 300,
    width: "100%",
    marginVertical: 10,
    shadowColor: "gray",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    paddingTop: -1
  },
  buttonContainer: {
    backgroundColor: "black",
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    fontFamily:"Lato-Black",
    borderRadius: 33,
    backgroundColor: "#549d5f"
  },
});

export { Menyu1 };
