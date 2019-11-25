/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Tabs from './navigation';
export default class NavigationTabs extends Component {
  constructor(props)
  {
    super(props)
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Tabs/>
      </View>
    );
  }
}
