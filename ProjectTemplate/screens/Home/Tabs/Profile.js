import React, { Component } from 'react'
import {  View, Text,SafeAreaView, ScrollView,TouchableOpacity,KeyboardAvoidingView,Platform } from 'react-native'
import TabStyles from './Tabs.styles'

const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0
const keyboardBehavior=Platform.OS === 'ios'? 'padding':''

export default class Profile extends Component {

  render () {
    return (
        <SafeAreaView style={{flex:1}}>
        <ScrollView  style={{...TabStyles.container,  marginVertical: 10, marginHorizontal: 10}} contentContainerStyle={{flexGrow:1}}>
          <View style={TabStyles.container}>
              <Text>Hello from Profile</Text>
          </View>
        </ScrollView>
        </SafeAreaView>
    )
  }
}
