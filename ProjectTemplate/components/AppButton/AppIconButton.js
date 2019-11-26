import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './AppButton.styles'

const AppIconButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={ props.buttonStyle }>
      <Icon name={props.icon} color={props.color} size={25}/>
    </TouchableOpacity>
  )
}
export default AppIconButton
