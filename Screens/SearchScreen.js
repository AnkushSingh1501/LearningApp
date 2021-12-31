import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SearchScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Search Screen</Text>
      </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor:'#CBC3E3'
  },
});