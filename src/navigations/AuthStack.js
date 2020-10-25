import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeStack from '../navigations/HomeStack';
import { Button } from 'react-native-paper';

const out = (n) => {
    n.pop()
}

const screens = {
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    Signup: {
        screen: SignupScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    Home: {
        screen: HomeStack,
        navigationOptions: ({ navigation }) => ({
            title: false,
            headerLeft: () => false,
            headerRight: () => (
                <Button icon='logout' onPress={() => navigation.pop()}>
                    Logout
                </Button>
            )
        })
    }
}

const stack = createStackNavigator(screens)

export default createAppContainer(stack)