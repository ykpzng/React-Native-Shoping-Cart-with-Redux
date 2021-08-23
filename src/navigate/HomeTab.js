import React, { Button } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';

import HomeStack from './HomeStack';
import CartStack from './CartStack';

const Tab = createBottomTabNavigator();

Icons.loadFont();
const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home1"
        component={HomeStack}
        options={{
          title: 'Kitaplar',
          tabBarIcon: ({ focused }) => (
            <Icons
              size={25}
              name="home-outline"
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart1"
        component={CartStack}
        options={{
          title: 'Sepet',
          tabBarIcon: ({ focused }) => (
            <Icons
              size={25}
              name="cart-outline"
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
