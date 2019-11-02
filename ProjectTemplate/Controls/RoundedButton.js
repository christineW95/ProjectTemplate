import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';


const RoundedButton =(props)=>{
    let color=props.color ? props.color : "#2A2C5A";
    let label=props.label;
    return(
            <Button rounded style={{backgroundColor: color,shadowRadius:15,shadowOffset:10}}>
                <Text>{label}</Text>
            </Button>
    )

}
export default RoundedButton;
  