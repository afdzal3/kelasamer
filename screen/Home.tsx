import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export function Home({ navigation }) {
  return (

    <View style={styles.containerHome}>
      <Button onPress={() => { navigation.navigate("Sebelum") }} title="Title Button Sebelum" > Label Sebelum </Button>
      <Text style={styles.container2}>
        inside screen Home
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    fontSize: 10,
  },
});
