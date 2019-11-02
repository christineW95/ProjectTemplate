import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Themes from './Themes/DarkTheme';
import CustomDivider from './Controls/Divider';
import ThumbnailImage from './Controls/ThumbnailImg';
import RoundedButton from './Controls/RoundedButton';
import { Button } from 'native-base';


export default class App extends Component {
  render() {
    return (
      <View style={styles.darkTheme()}>
        <View>
        <Text style={[styles.headerStyle(),{fontSize:11,textAlign:'center',margin:20}]}>Welcome to React Native!</Text>
          <CustomDivider/>
        </View>
        <View>
          <Text  style={[styles.headerStyle(),{textAlign:'center',margin:35,color:"white"}]}>Welcome back!</Text>
        </View>
        <View>
          <ThumbnailImage size='large' uri='https://facebook.github.io/react-native/docs/assets/favicon.png' />
        </View>
        
        <View style={{flexDirection:'row', flex:0.2,justifyContent:'center',margin:60}}>
          <RoundedButton label="LOGIN AS CHRISTINE"/>
        </View>

        <View style={{flexDirection:'row', flex:0.2,justifyContent:'center',margin:40}}>
          <Button transparent>
              <Text style={[styles.textStyle(),{fontSize:11}]}>Delete Account</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  darkTheme:Themes.theme,
  textStyle:Themes.text,
  headerStyle:Themes.header,
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
