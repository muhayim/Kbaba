import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Image } from "react-native-elements";

const Menu1 = ({ navigation }) => {
  const renderGridItems = () => {
    const gridItems = [
      { key: 1, label: "Car Safe", imageSource: require("../assets/car.png") },
      {
        key: 2,
        label: "Wheel Safe",
        imageSource: require("../assets/wheel.png"),
      },
      {
        key: 3,
        label: "Shop Store",
        imageSource: require("../assets/shop.png"),
      },
      {
        key:4,
        label:"How To Use",
        imageSource: require("../assets/qstn.png")
      }
    ];

    return gridItems.map((item) => (
      <TouchableOpacity
        key={item.key}
        style={styles.gridItem}
        onPress={() => navigation.navigate(item.label)}
      >
        <Image source={item.imageSource} style={styles.imageStyle} />
        <Text style={styles.labelText}>{item.label}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.circularButton}
          onPress={() => navigation.navigate("CarSafe")}
        >
          <Image
            source={require("../assets/car.png")}
            style={styles.imageGrid}
          />
          <Text style={styles.labelText}>Car Safe</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.circularButton}
          onPress={() => {
            navigation.navigate("WheelSafe");
          }}
        >
          <Image
            source={require("../assets/wheel.png")}
            style={styles.imageGrid}
          />
          <Text style={styles.labelText}>Wheel Safe</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.circularButton}
          onPress={() => {
            navigation.navigate("ShopStore");
          }}
        >
          <Image
            source={require("../assets/shop.png")}
            style={styles.imageGrid}
          />
          <Text style={styles.labelText}>Shop Store</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>{renderGridItems()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  circularButton: {
    borderRadius: 50,
    padding: 10,
    margin: 10,
    backgroundColor: "rgba(0, 0, 0, 0)",
    alignItems: "center",
  },
  gridItem: {
    flexBasis: "30%",
    margin: 10,
    alignItems: "center",
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderWidth: 3,
    margin:5
    
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
    justifyContent: "space-around",
    marginTop: 20,
  },
  scrollView: {
    marginTop: 20,
  },
});

export { Menu1 };
