import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ThemeProvider from './styles/theme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './navigation';
import './data-source';
import 'reflect-metadata';

export default () => (
  <SafeAreaProvider>
    <ThemeProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      </GestureHandlerRootView>
    </ThemeProvider>
  </SafeAreaProvider>
);
