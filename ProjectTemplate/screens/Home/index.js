/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, ImageBackground, Text, Dimensions} from 'react-native';
import HomeStyles from './Home.styles';
import NavigationTabs from './Tabs';
import {ScrollView} from 'react-native-gesture-handler';
import Tabs from 'react-native-tabs';
var {width, height} = Dimensions.get('window');

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
