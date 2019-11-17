import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Fonts, Colors } from '../../Theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F2F6'
  },
  image: {
    height: 106,
    width: 106,
    alignSelf: 'center'
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  welcomeText: {
    fontSize: RFValue(22, 800),
    fontFamily: Fonts.PoppinsSemiBold,
    color: 'black'
  },
  forgotButton: {
    backgroundColor: Colors.lightGreen,
    borderRadius: 10
  },
  forgotText: {
    color: 'white'
  },
  forgotPasswordText: {
    fontSize: 15,
    fontFamily: Fonts.PoppinsMedium
  },
  createAccountText: {
    fontSize: 12,
    fontFamily: Fonts.PoppinsRegular,
    flexDirection: 'row',
    paddingTop: 20
  },
  createNowText: {
    color: '#407AFF'

  },
  forgotContainer: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end'
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center'
  }
})
