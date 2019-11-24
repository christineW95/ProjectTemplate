/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Fonts} from '../../Theme';
const AppText = props => {
  let text = props.text || props.children;
  return (
    <View>
      <Text
        style={[ {fontFamily: Fonts.PoppinsBold, color: 'white'},props.textStyles]}>
        {text}
      </Text>
    </View>
  );
};
export default AppText;
