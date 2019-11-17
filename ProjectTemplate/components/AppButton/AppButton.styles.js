import { StyleSheet } from 'react-native'
import { Fonts } from '../../Theme'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    height: 50,
    width: '100%'
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: Fonts.PoppinsMedium

  }
})
