 import React, { Component } from 'react'
 import {Text,ImageBackground ,Dimensions} from 'react-native'

 import Tabs from './navigation';
 var {width, height} = Dimensions.get('window')
 export default class NavigationTabs extends Component {
            render () {
              return (
                <ImageBackground   source={require('../../../assets/Images/Background.png')} style={{flex:1}}  imageStyle={{position:'absolute',bottom:0,resizeMode:'contain'}}>
                    <Text>Hello World</Text>
                    <Tabs />
                </ImageBackground>
              )
            }
          }
          