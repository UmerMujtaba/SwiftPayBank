import { StyleSheet } from 'react-native';
import fonts from '../../../constants/fonts';
import { rfs, rhp, rwp, wp } from '../../../constants/dimensions';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  
  title: {
    fontWeight: '700',
    fontSize: rfs(30),
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    color: colors.blacK,
    marginTop: rhp(20),
    lineHeight: 33.6,
    letterSpacing: 1,
  },
  subTitle: {
    fontSize: rfs(16),
    fontWeight: '500',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    color: colors.grey,
    marginTop: rhp(10),
  },
  phnText: {
    fontSize: rfs(16),
    fontWeight: '400',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    color: colors.grey,
  },
  editText: {
    color: colors.primary,
    fontSize: rfs(16),
    fontWeight: '600',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
    marginLeft: rwp(8),
  },
  otpContainer: {
    marginTop: rhp(24),
  },
  cell: {
    borderRadius: 8,
    borderWidth: 0,
    backgroundColor: colors.bgColor,
    borderBottomWidth: 0,
    width: rwp(49),
    height: rhp(50),
  },
  cellText: {
    color: colors.blacK,
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    fontSize: rfs(28),
    textAlign: 'center',
    paddingTop: rhp(8),
  },
  bottomTextRow: {
    flexDirection: 'row',
    marginTop: rhp(20),
    justifyContent: 'center',
  },
  codeText: {
    fontSize: rfs(15),
    fontWeight: '600',
    color: colors.grey,
    fontFamily: fonts.SF_PRO_TEXT.PlusJakartaSans.Medium,
  },
  flexStyle: {
    flex: 1,
    justifyContent:'flex-end'
  },
  countryCodeStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  btnStyle:(isOtpComplete)=> ({
    width: wp(90),
    marginBottom: rhp(25),
    alignSelf:"center",
    backgroundColor: isOtpComplete ? colors.gradientColor1 : colors.secondary,
  }),
});
