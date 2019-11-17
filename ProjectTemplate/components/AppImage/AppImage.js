import React from 'react'
import { View, Image } from 'react-native'

import styles from './AppImage.styles'

const AppImage = ({ containerStyle, image, imageStyle, ...props }) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }} >
      <View style={styles.imageRowContainer}>
        <Image source={image} style={{ ...styles.image, ...imageStyle }} resizeMode='contain' />
      </View>
    </View>
  )
}
export default AppImage
