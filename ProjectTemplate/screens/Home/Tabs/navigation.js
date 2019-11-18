import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import React, { Component } from 'react'
import Favorite from './Favorite';
import Icon from 'react-native-vector-icons/FontAwesome5';  
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';  
import Main from './Home';
import Cart from './Cart';
// tabBarIcon : <Image source={require('./assets/images/react-native.png')}  style={styles.tabNavigatorProfileIcon} />
const Tabs= createMaterialBottomTabNavigator(
  {
    Home: 
    { 
      screen: Main,  
      navigationOptions:{  
          tabBarLabel:'Home',  
          tabBarIcon:  <Icon  size={21} name={"home"} style={{ color: "white" }} />
      }  
  },
    Favorite:{
      screen:Favorite,
      navigationOptions:{  
        // inactiveColor: '#3e2465',
        // activeColor: '#f0edf6',
        tabBarLabel:'Favorite',  
        tabBarIcon: <Icon  size={21} name={"star"} style={{ color: "white" }} />
    }  
    },
    Cart:{
      screen:Cart,
      navigationOptions:{  
        // inactiveColor: '#3e2465',
        // activeColor: '#f0edf6',
        tabBarLabel:'Cart',  
        tabBarIcon: <FontAwesomeIcon size={24} name={"shopping-cart"} style={{ color: "white" }} />
    }  
    }
  }
);
export default createAppContainer(Tabs)
