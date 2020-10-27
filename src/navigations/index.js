import React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Routes from './Routes';
import AuthProvider from './AuthProvider';

export default function Providers() {
  return (
    
      <AuthProvider>
        <PaperProvider theme={DefaultTheme}>
        <Routes />

    </PaperProvider>
      </AuthProvider>
  );
}
