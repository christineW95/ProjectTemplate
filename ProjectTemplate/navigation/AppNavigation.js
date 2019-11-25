import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegistrationScreen from '../screens/RegisterationScreen/RegistrationScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import {Colors} from '../Theme';
import Home from '../screens/Home';
import Trending from '../screens/Trending/Trending';

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: Home,
    Register: RegistrationScreen,
    ForgotPassword: ForgotPasswordScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.lightGray,
      },
    },
  },
);;
export default createAppContainer(AppNavigator);
