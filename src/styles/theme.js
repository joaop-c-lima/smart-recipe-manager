import React from 'react';
import { themeColors } from './colors';
import { componentStyles } from './components';
import { ThemeProvider } from '@rneui/themed';

export default ({ children }) => (
  <ThemeProvider theme={Object.assign({}, componentStyles, themeColors)}>{children}</ThemeProvider>
);
