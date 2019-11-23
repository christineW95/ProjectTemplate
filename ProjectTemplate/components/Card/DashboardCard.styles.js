import { StyleSheet, Platform } from 'react-native'
import { Fonts } from '../../Theme'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5
  },
  image: {
    top: Platform.OS === 'android' ? 25 : 20,
    position: 'absolute'
  },
  input: {
    borderBottomColor: '#CDCDD8',
    borderBottomWidth: 1,
    paddingVertical: 12,
    fontSize: 14,
    fontFamily: Fonts.PoppinsMedium,
    width: '100%',
    paddingHorizontal: 30,
    color: 'black'
  },
  error: {
    fontFamily: Fonts.PoppinsMedium,
    fontSize: 15,
    color: 'red'
  }

})
