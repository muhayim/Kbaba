import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';

const Menu1 = ({ navigation }) => {
 return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      

      <TouchableOpacity
        style={styles.circularButton}
        onPress={() => navigation.navigate('WheelSafe')} 
      >
       <Image
          source={require('../assets/car.png')}
          style={{ width: 50, height: 50 }}
      />

       
        
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.circularButton}
        onPress={() => {
          navigation.navigate('CarSafe'); 
        }}
      >
        <Image
          source={require('../assets/wheel.png')}
          style={{ width: 50, height: 50 }}
      />

      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 circularButton: {
    borderRadius: 50,
    padding: 10,
    margin: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)',
 },
});

export { Menu1 };
