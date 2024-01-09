import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { WelcomeScn } from "./screens/WelcomeScn";
import { Menu1 } from "./screens/Menu1";
import { CarSafe } from "./screens/CarSafe";
import { WheelSafe } from "./screens/WheelSafe";
import { ShopStore } from "./screens/ShopStore";

const stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="WelcomeScn">
        <stack.Screen
          name="WelcomeScn"
          component={WelcomeScn}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Menu1"
          component={Menu1}
          options={{
            title: "Trip Savr",
            headerStyle: { backgroundColor: "#000000" },
            headerTintColor: "#fff",
          }}
        />
        <stack.Screen
          name="CarSafe"
          component={CarSafe}
          options={{
            title: "Car Safe",
            headerStyle: { backgroundColor: "#000000" },
            headerTintColor: "#fff",
          }}
        />
        <stack.Screen
          name="WheelSafe"
          component={WheelSafe}
          options={{
            title: "Wheel Safe",
            headerStyle: { backgroundColor: "#000000" },
            headerTintColor: "#fff",
          }}
        />
        <stack.Screen
          name="ShopStore"
          component={ShopStore}
          options={{
            title: "How To Use",
            headerStyle: { backgroundColor: "#000000" },
            headerTintColor: "#fff",
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
