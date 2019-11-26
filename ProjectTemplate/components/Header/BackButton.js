import React from 'react';
import {View, Text} from 'react-native';
import _ from 'lodash';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fonts } from '../../Theme'

const BackButton = props => {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        },
        props.style,
      ]}>
      <View style={{flex:1,marginHorizontal:10}}>
        <Icon name="chevron-left" size={27} color="#F42C53" />
      </View>
      <View style={{flex: 8,marginHorizontal:-30}}>
        <Text style={{fontFamily:Fonts.PoppinsMedium,color:'#F42C53'}}>Back</Text>
      </View>
    </TouchableOpacity>
  );
};
export default BackButton;
