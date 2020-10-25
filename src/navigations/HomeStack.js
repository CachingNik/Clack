import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import ChatlistScreen from '../screens/ChatlistScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const screens = {
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarColor: '#3F51B5',
      tabBarIcon: () => (<MaterialCommunityIcons name='account' size={22} color='white' />)
    }
  },
  Chatlist: {
    screen: ChatlistScreen,
    navigationOptions: {
      title: 'Chats',
      tabBarColor: '#607D8B',
      tabBarIcon: () => (<MaterialCommunityIcons name='message' size={22} color='white' />)
    }
  }
};

const setts = {
  shifting: true
};

const TabNavigator =  createMaterialBottomTabNavigator(screens, setts)

export default createAppContainer(TabNavigator);