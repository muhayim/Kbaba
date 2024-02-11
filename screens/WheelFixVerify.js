import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button} from "react-native";


const WheelFixVerify = ({ navigation }) => { // Correctly receive the navigation prop
  const [OTP, setOTP] = useState("");

  const handleVerifyOTP = () => {
    // Perform OTP verification logic here
    // If OTP is verified successfully, navigate to the 'Launch' screen
    navigation.navigate('Menyu1');
  };

  return (
    <View style ={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        onChangeText={setOTP}
        value={OTP}
        keyboardType="phone-pad"
      />
      <Button title="Verify OTP" onPress={handleVerifyOTP} color= {"black"} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,},
    input: {
    height: 40,
    width: "100%",
    marginBottom: 20,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export { WheelFixVerify };
