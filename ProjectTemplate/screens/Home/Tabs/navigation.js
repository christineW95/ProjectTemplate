/* eslint-disable react-native/no-inline-styles */
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import React from 'react';
import {Image, View} from 'react-native';

import Favorite from './Favorite';
import Main from './Home';
import Cart from './Cart';
import Profile from './Profile';
const Tabs = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <Image
              source={require('../../../assets/Images/Dashboard_Icon.png')}
              resizeMode="contain"
              style={{flex: 1}}
            />
          </View>
        ),
      },
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        tabBarIcon: () => (
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
        tabBarIcon: () => (
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
        tabBarIcon: () => (
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
    barStyle: {
      backgroundColor: '#F42C53',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: 'hidden',
    },
  },
);
export default createAppContainer(Tabs);
