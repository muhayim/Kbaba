import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { WelcomeScn } from "./screens/WelcomeScn";
import { Menu1 } from "./screens/Menu1";
import { CarSafe } from "./screens/CarSafe";
import { WheelSafe } from "./screens/WheelSafe";
import { ShopStore } from "./screens/ShopStore";
import { Launch } from "./screens/Launch";
import { VFind } from "./screens/VFind"; // Update the import
import { Menyu1 } from "./screens/Menyu1";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Launch">
        <Stack.Screen
          name="Launch"
          component={Launch}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomeScn"
          component={WelcomeScn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menyu1"
          component={Menyu1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu1"
          component={Menu1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CarSafe"
          component={CarSafe}
          options={{
            title: "Car Safe",
            headerStyle: { backgroundColor: "#000000" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="WheelSafe"
          component={WheelSafe}
          options={{
            title: "Wheel Safe",
            headerStyle: { backgroundColor: "#000000" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="ShopStore"
          component={ShopStore}
          options={{
            title: "How To Use",
            headerStyle: { backgroundColor: "#000000" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="VFind"
          component={VFind}
          options={{
            title: "VFind",
            headerStyle: { backgroundColor: "#000000" },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
