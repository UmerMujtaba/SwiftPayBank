
import { StyleSheet } from "react-native";
import { hp, rfs, rhp, rwp, wp } from "../../../constants/dimensions";
import { colors } from "../../../constants/colors";
import fonts from "../../../constants/fonts";

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
    zIndex: 1
  },
  subTitle: {
    fontSize: rfs(16),
    fontWeight: '500',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    color: colors.grey,
    marginTop: rhp(10),
    lineHeight: 28
  },
  body: {
    marginTop: rhp(20)
  },
  inputStyle: {
    marginTop: rhp(5)
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
  lockImg: {
    resizeMode: "contain",
    alignSelf: 'center',
    width: rwp(332),
    height: rhp(80)
  },
  otpContainer: {
    marginTop: rhp(24),
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
  loaderContainer: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  thankYou: {
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Bold,
    fontSize: rfs(16),
    color: colors.blacK,
    marginBottom: rhp(8)
  },
  timeAndRestartText: {
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    fontSize: rfs(15),
    color: colors.grey
  },
  btn: (isValid) => ({
    width: wp(90),
    alignSelf: 'center',
    marginBottom: rhp(25),
    marginTop: rhp(24),
    backgroundColor: isValid ? colors.gradientColor1 : colors.secondary
  }),
  bottomContent:{
    flex:1,
    justifyContent:"flex-end"
  }
})