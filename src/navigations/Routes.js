import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { AuthContext } from './AuthProvider';
import auth from '@react-native-firebase/auth';
import LoadWait from '../components/LoadWait';

export default function Routes() {

  const { user, setUser } = useContext(AuthContext);
  const [ initializing, setInitializing ] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if(initializing)
      setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if(initializing) return <LoadWait />;

  return (
    <NavigationContainer>
      { user ? <HomeStack /> : <AuthStack /> }
    </NavigationContainer>
  );
}
