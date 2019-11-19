import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import React, {Component} from 'react';
import {Text, ImageBackground, Image, Dimensions,View} from 'react-native';
var {width, height} = Dimensions.get('window');

import Favorite from './Favorite';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Main from './Home';
import Cart from './Cart';
// tabBarIcon: ({ focused, tintColor }) => {
//   return <Image source={require('./images/tab_explore.png')} />
// }
// tabBarIcon : <Image source={require('./assets/images/react-native.png')}  style={styles.tabNavigatorProfileIcon} />
const Tabs = createMaterialBottomTabNavigator(
  {  
    Home: { screen: Main,  
        navigationOptions:{  
            tabBarLabel:'Home',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                  <Image source={require('../../../assets/Images/Dashboard_Icon.png')} resizeMode='contain' style={{flex:1}}/>
                    {/* <Icon style={[{color: tintColor}]} size={23} name={'home'}/>   */}
                </View>),  
        }  
    },  
    Cart: {  
        screen: Cart,  
        navigationOptions:{  
            tabBarLabel:'Cart',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                <Image source={require('../../../assets/Images/Order_icon.png')} resizeMode='contain' style={{flex:1}}/>
                </View>),  
        }  
    },  
},  
{  
  initialRouteName: "Home",  
  activeColor: '#f0edf6',  
  inactiveColor: '#226557',  
  barStyle: { backgroundColor: '#3BAD87' },  
},  
 
 
  );
export default createAppContainer(Tabs);
