import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground, Text } from 'react-native';

export const WelcomeScn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/WelcomeImg.png')}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.welcomeText}>Welcome to TripSavr</Text>
          <TouchableOpacity
            onPress={() => {
              try {
                navigation.navigate('Menu1');
              } catch (error) {
                console.error('Navigation error:', error);
              }
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Let's Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '50%',
  },
  welcomeText: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'white',
    paddingVertical: 15, // Adjust the button's vertical padding
    paddingHorizontal: 20, // Adjust the button's horizontal padding
    borderRadius: 10, // Optional: Add border radius for rounded corners
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
});
