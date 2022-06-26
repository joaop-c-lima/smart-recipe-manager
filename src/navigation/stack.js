import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants/routes';

const Stack = createNativeStackNavigator();
export default createStack = (screens = []) => (
  <Stack.Navigator initialRouteName={ROUTES.HOME}>
    {screens.map(({name, component, options = {}}) => (
      <Stack.Screen key={name} {...options} {...{name, component}} />
    ))}
  </Stack.Navigator>
);
