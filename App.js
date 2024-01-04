import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { WelcomeScn } from './screens/WelcomeScn';
import {Menu1} from  './screens/Menu1';
import { CarSafe } from './screens/CarSafe';
import { WheelSafe } from './screens/WheelSafe';


const stack = createNativeStackNavigator();
function App() {
  return (
          <NavigationContainer>
            <stack.Navigator initialRouteName='WelcomeScn'>
              <stack.Screen name="WelcomeScn" component={WelcomeScn} options={{headerShown : false}} />
              <stack.Screen name="Menu1" 
          component={Menu1} options={{
            title: 'App Name', headerStyle: {backgroundColor: '#3498db'},headerTintColor: '#fff' }} />
            <stack.Screen name="CarSafe" component={CarSafe} options={{headerShown : false}} />
            <stack.Screen name="WheelSafe" component={WheelSafe} options={{headerShown : false}} />
            </stack.Navigator>
          </NavigationContainer>
  );
}



export default App;