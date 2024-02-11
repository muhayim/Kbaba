import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';

const WheelFix = ({ navigation }) => {
  const nav =()=> navigation.navigate('WheelFixLogin');
  return (
    <View style={styles.screen}>
      <Text style={styles.quote}>
        Wheel Fix is a brand new utility that enables you to access tyre services at
        the tip of your finger. {'\n'}
        {'\n'}
      </Text>
      <Image source={require('../assets/WheelBlack.png')} style={styles.logo} />
      <Text>Wheel Fix services include:</Text>

      <Text style={styles.listItem}>
        - On-Road vehicle tyre assistance {'\n'}
        - On-Site wheel puncture assistance {'\n'}
        - And much more
      </Text>
      <Text style={styles.loginText}>Login to continue...</Text>
      <Button
        title="Login"
        onPress={nav}
        buttonStyle={styles.loginButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  quote: {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  listItem: {
    fontSize: 18,
    margin: 10,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'black',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: 'black',
    width: '80%',
  },
});

export { WheelFix };
