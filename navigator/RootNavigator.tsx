import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screen/Home';
import { Before } from '../screen/Before';

export function RootNavigator() {
    const Stack = createNativeStackNavigator();
    return (
    

    <NavigationContainer>
    <Stack.Navigator initialRouteName="Rumah">
      <Stack.Screen name="Rumah" component={Home} />
      <Stack.Screen name="Sebelum" component={Before} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}





