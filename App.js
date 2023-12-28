import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WelcomeScn } from './screens/WelcomeScn';
import { Menu } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NativeStackView from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const stack = createNativeStackNavigator();

function App() {
  return (
          <NavigationContainer>
            <stack.Navigator initialRouteName='WelcomeScn'>
              <stack.Screen name="WelcomeScn" component={WelcomeScn} options={{headerShown : false}} />
              <stack.screen name="Menu" component={Menu} options={{headerShown:false}}/>
            </stack.Navigator>
          </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default <App />