import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Category Screen</Text>
      </View>
    );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor:'#CBC3E3'
  },
});