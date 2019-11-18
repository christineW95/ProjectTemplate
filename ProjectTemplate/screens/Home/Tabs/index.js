 import React, { Component } from 'react'
 import {Text,ImageBackground ,Image,Dimensions,View} from 'react-native'

 import Tabs from './navigation';
 var {width, height} = Dimensions.get('window')
 export default class NavigationTabs extends Component {
           render () {
            const resizeMode = 'Background.png';
            const text = 'I am some centered text';
        
            return (
                 <ImageBackground source={require('../../../assets/Images/drawable-hdpi/Background.png')}
                    style={{ 
                      flex: 1,
                      width: '100%',
                      height:'100%',
                      position:'absolute',bottom:0
                      }}
                      imageStyle={{resizeMode:'center',flex:1}}
                      >
                  <Tabs/>

                </ImageBackground>
              )
          }
          }
          