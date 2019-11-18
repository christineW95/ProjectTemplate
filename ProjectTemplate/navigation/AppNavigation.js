
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import RegistrationScreen from '../screens/RegisterationScreen/RegistrationScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen'
import { Colors } from '../Theme'
import Home from '../screens/Home'

const AppNavigator = createStackNavigator({
  Home:Home,
  Login: LoginScreen,
  Register: RegistrationScreen,
  ForgotPassword: ForgotPasswordScreen
},
 {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.lightGray
    }
  }
})
export default createAppContainer(AppNavigator)
