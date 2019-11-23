/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text} from 'react-native';
import {Fonts} from '../../Theme';

const DashboardCard = props => {
  return (
    <View
      style={{
        borderRadius: 10,
        backgroundColor: props.cardColor,
        marginHorizontal: 10,
      }}>
      <View>
        <Image source={props.icon} style={{resizeMode: 'center', flex: 1}} />
      </View>
      <View style={{alignItems: 'center', flex: 1,marginBottom:10}}>
        <View>
          <Text style={{fontFamily: Fonts.PoppinsBold, color: 'white'}}>
            {props.title}
          </Text>
        </View>
        <View>
          <Text style={{color: 'white'}}>{props.NumberOfplaces} places</Text>
        </View>
      </View>
    </View>
  );
};
export default DashboardCard;
