import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5
  },
  image: {
    top: Platform.OS === 'android' ? 30 : 20,
    position: 'absolute'
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingVertical: 15,
    width: '100%',
    paddingHorizontal: 30
  }

})
