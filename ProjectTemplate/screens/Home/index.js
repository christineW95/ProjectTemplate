/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import NavigationTabs from './Tabs';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {page: 'second'};
  }
  render() {
    return (
      <View style={{flex: 1}}>
          <NavigationTabs/>
      </View>
    );
  }
}
