import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './AppButton.styles'

const AppButton = ({ text, buttonStyle, textStyle, onPress, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...styles.container, ...buttonStyle }}>
      <Text style={{ ...styles.text, ...textStyle }}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}
export default AppButton
