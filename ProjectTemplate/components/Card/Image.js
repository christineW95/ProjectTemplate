/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image,ImageBackground,Text,View} from 'react-native';

const CardImage = props => {

  let renderImages = () => {
    let image;
    if (props.children) {
      image = (<ImageBackground source={props.icon} resizeMode='contain' style={{width:null,height:null}} imageStyle={{flex:1,width:null,height:null}}>
     {props.children}
    </ImageBackground>);
          return image;
    } else {
      return <Image
      source={props.icon}
      style={[{resizeMode: 'center', flex: 1}, props.style]}
    />;
    }
  };

  
  return (
renderImages()
  );
};
export default CardImage;
