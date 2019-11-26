/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import _ from 'lodash';
import BackButton from './BackButton';
import { Colors } from '../../Theme';

const Header = props => {
  return (
   <View style={[{ backgroundColor:'#F1F2F6',flexDirection:'row'}, props.style]}>
     <View style={{flex:3}}>
      <BackButton />
     </View>
     <View style={{flex:1,flexDirection:'row',marginHorizontal: 40, }}>
     { props.children}
     </View>
    
    </View>
  );
};
export default Header;
