import React from 'react';
import { StyleSheet, View,Text , TouchableOpacity,ImageBackground } from 'react-native';
import { Image } from 'react-native-elements';

const Menu1 = ({ navigation }) => {
 return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

     <ImageBackground 
     source={require('../assets/screen1.png')} 
     resizeMode="cover" 
     style={styles.image}>


     </ImageBackground>
      

      <TouchableOpacity
        style={styles.circularButton}
        onPress={() => navigation.navigate('CarSafe')} 
      >
       <Image
          source={require('../assets/car.png')}
          style={{ width: 100, height: 100 , borderWidth:5 , borderRadius: 100}}
      />

       
        
      </TouchableOpacity>
      <Text>
       Car  Safe
      </Text>
      <Text>
        
      </Text>

      <TouchableOpacity
        style={styles.circularButton}
        onPress={() => {
          navigation.navigate('WheelSafe'); 
        }}
      >
        <Image
          source={require('../assets/wheel.png')}
          style={{ width: 100, height: 100 , borderWidth:5 , borderRadius: 100}}
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
