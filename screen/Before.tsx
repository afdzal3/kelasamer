import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export function Before({navigation}) {
  return (
    
    <View style={styles.container}>
      <Button onPress={() => { navigation.navigate("Rumah") }} title="Title Button Rumah" > Label Rumah </Button>
      <Text style={styles.container2}>
        inside screen Home
      </Text>
    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: { 
   
    fontSize: 13,
  },
});
