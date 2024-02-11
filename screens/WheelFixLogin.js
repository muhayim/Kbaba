import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';

const WheelFixLogin = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleGenerateOTP = () => {
    navigation.navigate('WheelFixVerify');
    console.log('Generating OTP for phone number:', phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/WheelBlack.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        keyboardType="phone-pad"
      />
      <Button title="Generate OTP" onPress={handleGenerateOTP}  color={"black"}/>
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
    borderRadius: 150/2,
    borderWidth: 3,
    borderColor:'black'
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  }
  
  }
);

export {WheelFixLogin};
