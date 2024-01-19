import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "react-native-elements";




const Menu1 = ({ navigation }) => {
  const renderGridItems = () => {
    const gridItems = [
      { key: 1, label: "Car Safe", imageSource: require("../assets/car.png"), source: "CarSafe" },
      { key: 2, label: "Wheel Safe", imageSource: require("../assets/wheel.png"), source: "WheelSafe" },
      { key: 3, label: "Shop Store", imageSource: require("../assets/shop.png"), source: "ShopStore" },
      { key: 4, label: "Vehicle Find", imageSource: require("../assets/VFind.png"), source: "VFind"},
      { key: 5, label: "How To Use", imageSource: require("../assets/qstn.png"), source: "WelcomeScn" },
      
    ];

    return gridItems.map((item) => (
      <View style={styles.scrollView }><TouchableOpacity
        key={item.key}
        style={styles.gridItem}
        onPress={() => navigation.navigate(item.source)}
      >
        <Image source={item.imageSource} style={styles.imageStyle} />
        
      </TouchableOpacity>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.circularButton}
            onPress={() => navigation.navigate("CarSafe")}
          >
            <Image source={require("../assets/car.png")} style={styles.imageGrid} />
            <Text style={styles.labelText}>Car Safe</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.circularButton}
            onPress={() => {
              navigation.navigate("WheelSafe");
            }}
          >
            <Image source={require("../assets/wheel.png")} style={styles.imageGrid} />
            <Text style={styles.labelText}>Wheel Safe</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.circularButton}
            onPress={() => {
              navigation.navigate("ShopStore");
            }}
          >
            <Image source={require("../assets/shop.png")} style={styles.imageGrid} />
            <Text style={styles.labelText}>Shop Store</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gridContainer}>{renderGridItems()}</View>
      </ScrollView>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circularButton: {
    borderRadius: 50,
    padding: 10,
    margin: 10,
    marginTop: 50,
    backgroundColor: "rgba(0, 0, 0, 0)",
    alignItems: "center",
  },
  gridItem: {
    flexBasis: "40%",
    alignItems: "center",
    marginBottom: 10,
    margin:5
  },
  imageStyle: {
    width: 140,
    height: 140,
    borderWidth: 3,
   
  },
  imageGrid: {
    width: 70,
    height: 70,
    borderWidth: 3,
    borderRadius: 100,
  },
  labelText: {
    textAlign: "center",
    marginTop: 5,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  scrollView: {
    marginTop: 20,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { Menu1 };
