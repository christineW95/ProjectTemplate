import React, { Component } from 'react'
import { SafeAreaView, View, Text, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class LoginScreen extends Component {
  render () {
    return (
      <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }} >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <Text style={{ paddingVertical: 10 }}>Welcome to Food Delivery App</Text>
          <Text>Let's start with Login</Text>

        </View>
        <View style={{ justifyContent: 'flex-end', flex: 1, marginHorizontal: 20, marginVertical: 20 }} >
          <View style={{ flexDirection: 'row' }}>
            <Icon name='md-person' size={23} style={{ position: 'absolute', top: '30%' }} />
            <TextInput
              placeholder='User Name'
              style={{ borderBottomColor: 'black', borderBottomWidth: 1, paddingVertical: 10, width: '100%', paddingHorizontal: 20 }}
            />
          </View>

        </View>

      </SafeAreaView>
    )
  }
}
