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

import styles from './RegistrationScreen.styles';;

const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;;
const keyboardBehavior = Platform.OS === 'ios' ? 'padding':'';

export default class RegistrationScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  navigateToLogin = () => {
    const {navigation} =  this.props;
    navigation.pop();
  };

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
                  <Text style={styles.welcomeText}>
                    Welcome to Food Delivery App{' '}
                  </Text>
                  <Text style={styles.welcomeText}>
                    Let's start with Register!
                  </Text>
                </View>
              </View>
              <View style={styles.bottomContainer}>
                <AppInput image={Images.userIcon} label="User Name" />
                <AppInput image={Images.lockIcon} label="Password" />
                <AppInput image={Images.lockIcon} label="Re-type Password" />
                <AppInput image={Images.email} label="Email" />

                <View style={styles.signInContainer}>
                  <AppButton
                    buttonStyle={styles.registerButton}
                    textStyle={styles.registerText}
                    text="CREATE ACCOUNT"
                  />

                  <Text
                    onPress={this.navigateToLogin}
                    style={styles.createAccountText}>
                    <Text>Already Have an account?</Text>


            <Text onPress={this.navigateToLogin} style={styles.createNowText} > Login</Text>
      </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );;
  }
}
