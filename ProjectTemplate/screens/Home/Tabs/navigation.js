import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import React, {Component} from 'react';
import {Text, ImageBackground, Image, Dimensions, View} from 'react-native';
var {width, height} = Dimensions.get('window');

import Favorite from './Favorite';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Main from './Home';
import Cart from './Cart';
import Profile from './Profile';
// tabBarIcon: ({ focused, tintColor }) => {
//   return <Image source={require('./images/tab_explore.png')} />
// }
// tabBarIcon : <Image source={require('./assets/images/react-native.png')}  style={styles.tabNavigatorProfileIcon} />
const Tabs = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Image
              source={require('../../../assets/Images/Dashboard_Icon.png')}
              resizeMode="contain"
              style={{flex: 1}}
            />
            {/* <Icon style={[{color: tintColor}]} size={23} name={'home'}/>   */}
          </View>
        ),
      },
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Image
              source={require('../../../assets/Images/Order_icon.png')}
              resizeMode="contain"
              style={{flex: 1}}
            />
          </View>
        ),
      },
    },
    Favorite: {
      screen: Favorite,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Image
              source={require('../../../assets/Images/Favorites_Icon.png')}
              resizeMode="contain"
              style={{flex: 1}}
            />
          </View>
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Image
              source={require('../../../assets/Images/Profile_Icon.png')}
              resizeMode="contain"
              style={{flex: 1}}
            />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle:{backgroundColor:'#F42C53',borderTopLeftRadius:10,borderTopRightRadius:10,overflow:'hidden'}
  },
);
export default createAppContainer(Tabs);
