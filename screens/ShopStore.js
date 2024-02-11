import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ShopStore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Our online shop is under construction! 
        {'\n\n'}
        Stay tuned for an amazing shopping experience!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff', // background color
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333', // text color
  },
});

export {ShopStore}
