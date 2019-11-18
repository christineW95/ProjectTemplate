import React, { Component } from 'react'
import {  View, Text,SafeAreaView, ScrollView,KeyboardAvoidingView,Platform } from 'react-native'
import HomeStyles from './Home.styles'
import NavigationTabs from './Tabs';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0
const keyboardBehavior=Platform.OS === 'ios'? 'padding':''

export default class Home extends Component {
  render () {
    return (
      <KeyboardAvoidingView style={HomeStyles.container}   behavior={keyboardBehavior} keyboardVerticalOffset={keyboardVerticalOffset}>
        <SafeAreaView style={{flex:1}}>
        <ScrollView  style={{...HomeStyles.container,  marginVertical: 10, marginHorizontal: 10}} contentContainerStyle={{flexGrow:1}}>
          <View style={HomeStyles.container}>
            <NavigationTabs/>
          </View>
        </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    )
  }
}
