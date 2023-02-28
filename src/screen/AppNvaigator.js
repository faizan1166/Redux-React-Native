import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../../redux/Products';
import Cart from '../../redux/Cart';
import Details from './Details';

const Stack = createNativeStackNavigator();
export default function AppNvaigator() {
   
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Product" component={Products} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Details" component={Details} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}