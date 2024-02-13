import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, SearchBar } from 'react-native-elements';

const VFind = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (text) => {
    setSearch(text);
  };

  const handleSearchPress = () => {
    // Perform search operation here
    // For now, let's just navigate to "ShopStore"
    navigation.navigate("ShopStore");
  };

  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={handleSearchChange}
        value={search}
      />
      <Button
        title='Search'
        style={styles.Btn}
        onPress={handleSearchPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Btn: {
    color: 'black',
    margin: 10
  }
});

export { VFind };
