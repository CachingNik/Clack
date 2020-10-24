import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import ChatlistScreen from '../screens/ChatlistScreen';
import ProfileScreen from '../screens/ProfileScreen';

const TabNavigator =  createMaterialBottomTabNavigator({
  Profile: {screen: ProfileScreen},
  Chatlist: {screen: ChatlistScreen}
});

export default createAppContainer(TabNavigator);