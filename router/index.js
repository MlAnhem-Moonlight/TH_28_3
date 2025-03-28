import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';
import Payment from '../screens/Payment';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator for Home and Cart
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false}} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = 'account-circle';
            } else if (route.name === 'Inbox') {
              iconName = 'inbox';
            } else if (route.name === 'Order') {
              iconName = 'shopping-cart';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { height: 60 },
        })}
      >
        {/* Use HomeStack for Home and Cart */}
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen
          name="Order"
          component={() => null}
          options={{
            headerShown: false,
            tabBarLabel: 'Order',
          }}/>
        <Tab.Screen
          name="Inbox"
          component={() => null}
          options={{
            tabBarLabel: 'Inbox',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;