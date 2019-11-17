import React from 'react'
import { View, TextInput, Image } from 'react-native'

import styles from './AppInput.styles'

const AppInput = ({ label, onChange, keyboardType, inputStyle, containerStyle, image, ...props }) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <Image source={image} style={styles.image} />
      <TextInput
        onChangeTexte={onChange}
        keyboardType={keyboardType}
        placeholder={label}
        style={styles.input}
      />
    </View>
  )
}
export default AppInput
