/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {ImageBackground, Dimensions, View, Platform, Text} from 'react-native';
import Tabs from './navigation';
var {width, height} = Dimensions.get('window');
export default class NavigationTabs extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Tabs/>
      </View>
    );
  }
}
