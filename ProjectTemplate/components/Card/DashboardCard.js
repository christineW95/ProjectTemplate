/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import CardImage from './Image';
import AppText from '../AppText/AppText';
import _ from 'lodash';

const DashboardCard = props => {
  renderImages=(images)=>{
    let imagesList;
    if (_.isArray(props.cardImage)) {
      debugger;
     images= _.map(props.cardImage, value => {
        //value is object of {img:require('src)}
        return <CardImage icon={value.img} style={props.cardImageStyles} />;
      });
      return images;
    } else {
      return <CardImage icon={props.cardImage} style={props.cardImageStyles} />;
    }
  }

  return (
    <View
      style={[
        {
          borderRadius: 10,
          backgroundColor: props.cardColor,
          marginHorizontal: 10,
        },
        props.style,
      ]}>
      <View
        style={[
          {
            alignItems: 'center',
          },
          props.imageContainerStyles,
        ]}>
        {renderImages(props.cardImage)}
        {/* <CardImage icon={props.cardImage} style={props.cardImageStyles} /> */}
      </View>
      <View
        style={[
          {alignItems: 'center', flex: 1, marginBottom: 10},
          props.titleContainerStyles,
        ]}>
        <AppText text={props.title} textStyles={props.textStyles} />
      </View>
      {props.children}
    </View>
  );
};
export default DashboardCard;
