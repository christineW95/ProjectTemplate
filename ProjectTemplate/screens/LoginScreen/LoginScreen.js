import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {AppImage, AppInput, AppButton} from '../../components';

import Images from '../../Theme/Images';

import styles from './LoginScreen.styles';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;
const keyboardBehavior = Platform.OS === 'ios' ? 'padding':'';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  navigateToRegistration = () => {
    const {navigation} =  this.props;
    navigation.push('Register');
  };
  navigateToHome= () => {
    const {navigation} =  this.props;
    navigation.push('Home');
  };
  navigateToForgotPassword = () => {
    const {navigation} = this.props;
    navigation.push('ForgotPassword');
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
                    Let's start with Login!
                  </Text>
                </View>
              </View>
              <View style={styles.bottomContainer}>
                <AppInput image={Images.userIcon} label="User Name" />
                <AppInput image={Images.lockIcon} label="Password" />
                <View style={styles.signInContainer}>
                  <AppButton
                    buttonStyle={styles.signInButton}
                    textStyle={styles.signInText}
                    onPress={this.navigateToHome}
                    text="Get the new Order"
                  />

                  <Text
                    onPress={this.navigateToForgotPassword}
                    style={styles.forgotPasswordText}>
                    Forgot Password?
                  </Text>
                  <Text
                    onPress={this.navigateToRegistration}
                    style={styles.createAccountText}>
                    <Text>You Don't Have an Account?</Text>

                    <Text
                      onPress={this.navigateToRegistration}
                      style={styles.createNowText}>
                      {' '}
                      Create Now
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}
