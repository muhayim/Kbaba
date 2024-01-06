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
      Empower your journey with the convenience of on-demand car services, {'\n'}
      bringing the expertise of a mobile car mechanic directly to your doorstep, {'\n'}
      ensuring your road adventures stay smooth and worry-free.
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
<Text>Wheel Safe</Text>
<Text>Seamless journeys await with our app's on-road services—experience {'\n'}
the ease of mobile tire care and expert assistance for a worry-free drive.{'\n'}
 Your travels, our priority, right at your fingertips.</Text>

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
