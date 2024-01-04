import React from 'react';
import { View , StyleSheet ,Button} from 'react-native';

export const WelcomeScn = ({navigation}) => {
  return (
    <View style={styles.container}>
     



<Button
  title="let's Get Started"
  onPress={() => {
    try {
      navigation.navigate('Menu1');
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },

    logo:{
        width: 400,
        height: 400

    }
})
