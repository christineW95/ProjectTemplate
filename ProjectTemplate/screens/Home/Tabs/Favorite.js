/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native' ;
import TabStyles from './Tabs.styles';

export default class Favorite extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          style={{
            ...TabStyles.container,
            marginVertical: 10,
            marginHorizontal: 10,
          }}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={TabStyles.container}>
            <Text>Hello from Favorite</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    ) ;
  }
}
