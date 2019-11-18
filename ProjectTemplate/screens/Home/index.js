import React, { Component } from 'react'
import {  View, Text,SafeAreaView, ScrollView,KeyboardAvoidingView,Platform } from 'react-native'
import HomeStyles from './Home.styles'
import NavigationTabs from './Tabs';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0
const keyboardBehavior=Platform.OS === 'ios'? 'padding':''

export default class Home extends Component {
  render () {
    return (
          <View style={HomeStyles.container}>
            <NavigationTabs/>
          </View>
      
    )
  }
}
