import React from 'react';
import { Text , View } from 'react-native';
import { ImageBackground } from 'react-native';
 const WheelSafe = () => {
  return (
    <View>
      <Text> I  say HI</Text>
      <ImageBackground 
     source={require('../assets/screen1.png')} 
     resizeMode="cover" 
     >


     </ImageBackground>
      
      </View>
      
  )
}
console.log("here")

export {WheelSafe};