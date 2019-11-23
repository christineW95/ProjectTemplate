/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';;
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';;

import {AppImage, AppInput, AppButton} from '../../components';;

import Images from '../../Theme/Images';;

import styles from './ForgotPasswordScreen.styles';;

const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;;
const keyboardBehavior = Platform.OS === 'ios' ? 'padding' : '';

export default class ForgotPasswordScreen extends Component {
  //   static navigationOptions={
  //     header:null
  //   }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={keyboardBehavior}
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView
            style={{
              ...styles.container,
              marginVertical: 10,
              marginHorizontal: 10,
            }}
            contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
              <View style={{flex: 1}}>
                <AppImage image={Images.logo} imageStyle={styles.image} />

                <View style={styles.welcomeContainer}>
                  <Text style={styles.welcomeText}>Forgot Password?</Text>
                </View>
              </View>
              <View style={styles.bottomContainer}>
                <AppInput image={Images.email} label="Email" />

                <View style={styles.forgotContainer}>
                  <AppButton
                    buttonStyle={styles.forgotButton}
                    textStyle={styles.forgotText}
                    text="SUBMIT NOW"
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );;
  }
}
