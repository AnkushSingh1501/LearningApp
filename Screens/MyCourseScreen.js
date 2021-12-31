import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MyCourseScreen = () => {
    return (
      <View style={styles.container}>
        <Text>MyCourse Screen</Text>
      </View>
    );
};

export default MyCourseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor:'#CBC3E3'
  },
});