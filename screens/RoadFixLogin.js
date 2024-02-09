import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';

const RoadFixLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleGenerateOTP = () => {
    
    console.log('Generating OTP for phone number:', phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/car.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        keyboardType="phone-pad"
      />
      <Button title="Generate OTP" onPress={handleGenerateOTP} style ={styles.Btn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  Btn:{
    Color: 'black'
  }
});

export {RoadFixLogin};
