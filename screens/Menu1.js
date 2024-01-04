import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { CarSafe } from './CarSafe';
import { WheelSafe } from './WheelSafe';

export const Menu1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri: 'assets:/car.png' }}
        style={{ width: 100, height: 100, margin: 10 }}
      />
      <Text>Welcome to your app!</Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#3498db',
          borderRadius: 50,
          padding: 10,
          margin: 10,
        }}
        onPress={() => navigation.navigate('WheelSafe')}
      >
        <Icon name="heart" type="font-awesome" color="#fff" size={30} />
      </TouchableOpacity>

      <Image
        source={{ uri: 'assets:/wheel.png' }}
        style={{ width: 100, height: 100, margin: 10 }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#e74c3c',
          borderRadius: 50,
          padding: 10,
          margin: 10,
        }}
        onPress={() => {
          navigation.navigate('CarSafe');
        }}
      >
        <Icon name="star" type="font-awesome" color="#fff" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    height: 70,
    width: 70,
  },
});
