import 'react-native-gesture-handler';
import React from 'react';

import Main from './pages/Main';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{title: 'Home', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
