import React from 'react'
import { View, TextInput, Image, Text } from 'react-native'

import styles from './AppInput.styles'

const AppInput = ({ label, onChange, keyboardType, inputStyle, containerStyle, image, errorMessage, ...props }) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <Image source={image} style={styles.image} />
      <TextInput
        onChangeTexte={onChange}
        keyboardType={keyboardType}
        placeholder={label}
        placeholderTextColor='black'
        style={{ ...styles.input, ...inputStyle }}
      />
      {errorMessage ? <Text>
        {errorMessage}
      </Text> : <></>}
    </View>
  )
}
export default AppInput
