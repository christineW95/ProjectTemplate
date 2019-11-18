/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View,ImageBackground,Text,Dimensions} from 'react-native';
import HomeStyles from './Home.styles';
import NavigationTabs from './Tabs';
var {width, height} = Dimensions.get('window');

export default class Home extends Component {
  render() {
    return (
      // <View
      //   style={{
      //     flex: 1,
      //     paddingTop: Platform.OS === 'ios' ? 20 : 0,
      //     backgroundColor: 'green',
      //     alignItems:'center',
      //     justifyContent: 'flex-end',
      //   }}>
        <ImageBackground
          source={require('../../assets/Images/drawable-xxhdpi/Dashboard.png')}
          style={{
             flex:1,
             width: width,
             height: null,
            backgroundColor: 'black',
            justifyContent: 'flex-end',
          }}
          imageStyle={{flex:1,resizeMode: 'contain'}}>
            <NavigationTabs/>
        </ImageBackground>
      // </View>
    );
  }
}
