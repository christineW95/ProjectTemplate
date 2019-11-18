/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {ImageBackground, Dimensions, View, Platform, Text} from 'react-native';
import Tabs from './navigation';
var {width, height} = Dimensions.get('window');
export default class NavigationTabs extends Component {
  render() {
    return (
      <View style={{backgroundColor:'yellow',flex:1}}>
        <Text>Hello world</Text>
        <Tabs/>
      </View>

      // <ImageBackground
      //   source={require('../../../assets/Images/drawable-hdpi/Background.png')}
      //   style={{
      //     flex: 1,
      //     width: null,
      //     height: null,
      //     position: 'absolute',
      //     bottom: 0,
      //   }}
      //   imageStyle={{resizeMode: 'center', flex: 1}}>
      // </ImageBackground>
    );
  }
}
