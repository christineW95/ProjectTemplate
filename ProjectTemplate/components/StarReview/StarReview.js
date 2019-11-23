/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import StarReview from 'react-native-star-review';
const Stars = props => {
  return (
    <View
      style={{
        flex: 1,
        marginVertical:10
      }}>
      <StarReview ratings={4} disableReview={true} />
    </View>
  );
};
export default Stars;
