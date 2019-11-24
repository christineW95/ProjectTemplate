import React, {Component} from 'react';
import {View} from 'react-native';
import NavigationTabs from '../Home/Tabs';

export default class Trending extends Component {
  constructor(props) {
    super(props);
  }

  navigateToHome = () => {
    debugger;
    const {navigation} = this.props;
    navigation.pop();
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationTabs />
      </View>
    );
  }
}
