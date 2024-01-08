import React from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';

const Menu1 = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.Sview}>
      <TouchableOpacity
        style={styles.circularButton}
        onPress={() => navigation.navigate('CarSafe')}
      >
        <Image
          source={require('../assets/car.png')}
          style={{ width: 100, height: 100, borderWidth: 5, borderRadius: 100 }}
        />
      </TouchableOpacity>
      <Text style={styles.headingText}>Car Safe</Text>
      <Text style={styles.descriptionText}>
        Empower your journey with the convenience of on-demand car services, bringing the expertise of a mobile car mechanic directly to your doorstep, ensuring your road adventures stay smooth and worry-free.
      </Text>

      <TouchableOpacity
        style={styles.circularButton}
        onPress={() => {
          navigation.navigate('WheelSafe');
        }}
      >
        <Image
          source={require('../assets/wheel.png')}
          style={{ width: 100, height: 100, borderWidth: 5, borderRadius: 100 }}
        />
      </TouchableOpacity>
      <Text style={styles.headingText}>Wheel Safe</Text>
      <Text style={styles.descriptionText}>
        Seamless journeys await with our app's on-road services—experience the ease of mobile tire care and expert assistance for a worry-free drive. Your travels, our priority, right at your fingertips.
      </Text>

      <TouchableOpacity style={styles.circularButton} onPress={() => { navigation.navigate('HowToUse'); }}>
        <Image
          source={require('../assets/qstn.png')}
          style={{ width: 100, height: 100, borderWidth: 5, borderRadius: 100 }}
        />
        <Text style={styles.headingText}>How To Use?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  circularButton: {
    borderRadius: 50,
    padding: 10,
    margin: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  descriptionText: {
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  Sview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { Menu1 };
