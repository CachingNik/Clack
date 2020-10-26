import React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Routes from './Routes';

export default function Providers() {
  return (
    <PaperProvider theme={DefaultTheme}>
      <Routes />
    </PaperProvider>
  );
}
