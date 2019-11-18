import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import React, { Component } from 'react'
import {Text,ImageBackground ,Image,Dimensions} from 'react-native'
var {width, height} = Dimensions.get('window')

import Favorite from './Favorite';
import Icon from 'react-native-vector-icons/FontAwesome5';  
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';  
import Main from './Home';
import Cart from './Cart';
// tabBarIcon: ({ focused, tintColor }) => {
//   return <Image source={require('./images/tab_explore.png')} />
// }
// tabBarIcon : <Image source={require('./assets/images/react-native.png')}  style={styles.tabNavigatorProfileIcon} />
const Tabs= createMaterialBottomTabNavigator(
  {
    Home: 
    { 
      screen: Main,  
      navigationOptions:{  
          tabBarLabel:'Home',  
          tabBarIcon:  <Icon  size={21} name={"home"} style={{ color: "white" }} />,
          barStyle: { backgroundColor: 'transparent' },  
      }  
  },
    Favorite:{
      screen:Favorite,
      navigationOptions:{  
        tabBarLabel:'Favorite',  
        tabBarIcon: <Icon  size={21} name={"star"} style={{ color: "white" }} />,
        barStyle: { backgroundColor: 'transparent' },  


    }  
    },
    Cart:{
      screen:Cart,
      navigationOptions:{  
        tabBarLabel:'Cart',  
        tabBarIcon: <FontAwesomeIcon size={24} name={"shopping-cart"} style={{ color: "white" }} />,
        barStyle: { backgroundColor: 'transparent' },  


    }  
    }
  }
);
export default createAppContainer(Tabs)

