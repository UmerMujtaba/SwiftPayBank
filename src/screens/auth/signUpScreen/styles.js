import { StyleSheet } from 'react-native';
import { rwp, rhp, rfs, wp } from '../../../constants/dimensions';
import fonts from '../../../constants/fonts';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: rfs(30),
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    color: 'black',
    marginTop: rhp(20),
    lineHeight: 33.6,
    letterSpacing: 1,
  },
  btnStyle: isButtonEnabled => ({
    marginTop: rhp(24),
    width: wp(90),
    marginBottom: rhp(25),
    backgroundColor: isButtonEnabled ? colors.gradientColor1 : colors.secondary,
  }),
  inputText: {
    marginTop: 0
  },
  iconStyle: {
    width: 24,
    height: 26.4
  },
  checkBoxView: {
    justifyContent: 'flex-end',
    flex: 1
  },
  img: {
    width: 14,
    height: 16.4
  },
  img2: {
    marginRight: rwp(12),
    width: 14,
    height: 16.4
  },
  validIconStyle: (isEmailValid) => ({
    backgroundColor: isEmailValid ? "transparent" : 'red',
    width: rwp(20),
    height: rhp(20),
    borderRadius: 9,
    justifyContent: "center",
    alignItems: 'center'
  })
});
