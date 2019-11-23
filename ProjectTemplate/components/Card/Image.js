/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

const CardImage = props => {
  return (
    <Image
      source={props.icon}
      style={[{resizeMode: 'center', flex: 1}, props.style]}
    />
  );
};
export default CardImage;
