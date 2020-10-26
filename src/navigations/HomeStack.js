import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeTab from './HomeTab';
import ChatScreen from '../screens/ChatScreen';

const screens = {
  Tab: {
    screen: HomeTab,
    navigationOptions: {
      title: 'Clack',
      headerLeft: () => {false}
    }
  },
  Chat: {
    screen: ChatScreen
  }
}

const stack = createStackNavigator(screens)

export default createAppContainer(stack)