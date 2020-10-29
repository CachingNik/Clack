import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { AuthContext } from './AuthProvider';
import auth from '@react-native-firebase/auth';
import LoadWait from '../components/LoadWait';

export default function Routes() {

  const { user, setUser, initializing } = useContext(AuthContext);

  function onAuthStateChanged (user) {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if(initializing === true)
    return (
      <LoadWait />
  );

  return (
      <NavigationContainer>
      { user ? <HomeStack /> : <AuthStack /> }
      </NavigationContainer>
  );
}
