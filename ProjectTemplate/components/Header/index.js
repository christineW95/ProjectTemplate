/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import _ from 'lodash';
import BackButton from './BackButton';

const Header = props => {
  return (
    <View style={[{backgroundColor: 'green',flex:1}, props.style]}>
      <BackButton />
      {props.children}
    </View>
  );
};
export default Header;
