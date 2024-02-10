import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Launch1 = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      try {
        navigation.navigate('Menyu1');
      } catch (error) {
        console.error('Navigation error:', error);
      }
    }, 1000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/m3logo.png')}
        style={styles.logo}
        resizeMode="contain" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  },
});

export {Launch1};
