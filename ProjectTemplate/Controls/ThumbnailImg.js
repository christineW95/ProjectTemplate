import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text } from 'native-base';

// Note: To have Thumbnail of custom size, specify height, width and borderRadius within style

getImgTypeAndSize=(type,size)=>{
    let imgType=getImgType(type);
    let imgSize=getImgSize(size);
    let img={
         circular:!imgType ? true: false,
         square: imgType ? true: false,
         small:  imgSize ? true : false,
         large: !imgSize ? true :false
     }
     return img;
    
}
getImgType=(type)=>{
    let newType;
    switch(type){
        case 'square':
                newType=true;
            break;
        default:
                newType=false;
              
     }
     return newType;
}
getImgSize=(size)=>{
    let newSize;
    switch(size)
    {
        case 'small':
                newSize=true;
             break;
         case 'large':
                newSize=false;
             break;
         default:
                newSize=null
             break;
    }
    return newSize;
}
const ThumbnailImage =(props)=>{
    let img=getImgTypeAndSize(props.type,props.size);
    return(
        <Thumbnail style={[props.style,{alignSelf:'center',height:150,width:150,borderRadius:80}]} {...img} source={{uri: props.uri}} />
    )

}
export default ThumbnailImage;
  