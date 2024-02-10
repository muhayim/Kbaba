import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { WelcomeScn } from "./screens/WelcomeScn";
import {RoadFixLogin}  from "./screens/RoadFixLogin"
import { RoadFix } from "./screens/RoadFix";
import { WheelSafe } from "./screens/WheelSafe";
import { ShopStore } from "./screens/ShopStore";
import { Launch1 } from "./screens/Launch1";
import { VFind } from "./screens/VFind";
import { Menyu1 } from "./screens/Menyu1";
import { RoadFixVerify } from "./screens/RoadFixVerify";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Launch1">
        <Stack.Screen
          name="Launch1"
          component={Launch1}
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
          name="RoadFixLogin"
          component={RoadFixLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RoadFixVerify"
          component={RoadFixVerify}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RoadFix"
          component={RoadFix}
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
