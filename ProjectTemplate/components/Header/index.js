/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import _ from 'lodash';
import BackButton from './BackButton';
import { Colors } from '../../Theme';

const Header = props => {
  return (
         
   <View style={[{ backgroundColor:'#F1F2F6'}, props.style]}>
     { <BackButton /> || props.children}
    </View>
  );
};
export default Header;
