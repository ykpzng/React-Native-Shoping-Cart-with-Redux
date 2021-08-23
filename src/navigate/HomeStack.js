import React, { Button } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerStyle: { backgroundColor: '#24aaff' },
          headerTitleStyle: {
            color: '#ffffff',
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Ana Sayfa' }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: 'Sepetim' }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default HomeStack;
