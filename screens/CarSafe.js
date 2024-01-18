import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';

const CarSafe = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.quote}>
        Car Safe  is  a  brand new utility    that  enables you to   access   automobile services at
        the tip of your finger. {'\n'}
        {'\n'}
      </Text>
      <Image source={require('../assets/car.png')} style={styles.logo} />
      <Text>Car Safe services include:</Text>

      <Text style={styles.listItem}>
        - On-Road vehicle assistance {'\n'}
        - On-Site fuel assistance {'\n'}
        - And much more
      </Text>
      <Text style={styles.loginText}>Login to continue...</Text>
      <Button
        title="Login                "
        onPress={() => navigation.navigate('Menu1')}
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
    fontWeight:'bold',
    marginHorizontal:  10, 
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

export { CarSafe };
