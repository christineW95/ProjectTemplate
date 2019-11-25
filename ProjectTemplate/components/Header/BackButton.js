import React from 'react';
import {View, Text} from 'react-native';
import _ from 'lodash';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
const BackButton = props => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: 'green',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        },
        props.style,
      ]}>
      <View style={{}}>
        <Icon name="camera" size={27} color="black" />
      </View>
      <View style={{flex: 1}}>
        <Text>Back</Text>
      </View>
    </TouchableOpacity>
  );
};
export default BackButton;
