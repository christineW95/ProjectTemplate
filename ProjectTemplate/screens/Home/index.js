/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View,ImageBackground,Text,Dimensions} from 'react-native';
import HomeStyles from './Home.styles';
import NavigationTabs from './Tabs';
var {width, height} = Dimensions.get('window');

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 20 : 0, backgroundColor: 'green', }}>
        <View style={{flex:1}}>
            <NavigationTabs/>
        </View>
       </View>
    );
  }
}
