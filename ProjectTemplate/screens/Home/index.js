/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View,Text} from 'react-native';
import NavigationTabs from './Tabs';
import { Button } from 'react-native-paper';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
          <NavigationTabs/>
      </View>
    );
  }
}
