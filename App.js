import { StatusBar } from 'expo-status-bar';
import React from 'react';


import HomeScreen from './src/Home';
import LoginScreen from './src/login';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="LoginInScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}