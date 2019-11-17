import React, { Component } from 'react'
import { SafeAreaView, View, Text,  ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Images from '../../Theme/Images'
import AppInput from '../../components/AppInput/AppInput'
import AppImage from '../../components/AppImage/AppImage'

export default class LoginScreen extends Component {
  render () {
    return (
      <SafeAreaView style={{ flex: 1, marginHorizontal: 10, marginVertical: 30 }} >

        <View style={{ flex: 1}}>
        <AppImage image={Images.logo}  imageStyle={{ height: 106, width: 106,alignSelf:'center' }} />
       
         <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'red'}}>
         
          <Text>Welcome to Food Delivery App</Text>
            <Text style={{flex:1}}>Let's start with Login</Text>
      
          </View> 

        </View>
        <View style={{ justifyContent: 'flex-end', flex: 1, marginHorizontal: 20, marginVertical: 20 }} >
          <AppInput image={Images.userIcon} label='User Name' />
          <AppInput image={Images.lockIcon} label='Password' />

        </View>

      </SafeAreaView>
    )
  }
}
