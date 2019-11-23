/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

const DashboardCard = props => {
  return (
    <View
      style={[{
        borderRadius: 10,
        backgroundColor: props.cardColor,
        marginHorizontal: 10,
      },props.style]}>
      {props.children}
    </View>
  );
};
export default DashboardCard;
