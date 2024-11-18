
import { StyleSheet } from "react-native";
import { hp, rfs, rhp, rwp, wp } from "../../../constants/dimensions";
import { colors } from "../../../constants/colors";
import fonts from "../../../constants/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
    justifyContent:"space-between"
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
  },
  body: {
    paddingVertical: rhp(20)
  },
  inputHeading: {
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    fontSize: rfs(12),
    color: colors.blacK,
  },
  inputStyle: {
    marginTop: rhp(0),
  },
  dateContainer: {
    height: rhp(48),
    marginTop: 0,
    borderBottomWidth: 1,
    width: wp(90),
    borderBottomColor: colors.disabled,
  },
  dateStyle: {
    color: 'black',
    fontSize: rfs(16),
    paddingVertical: rhp(12)
  },
  placeholderText: {
    color: colors.grey,
    fontSize: rfs(16),
  },
  btn: (isValid) => ({
    width: wp(90),
    alignSelf: 'center',
    marginBottom: rhp(20),
    marginTop: rhp(24),
    backgroundColor: isValid ? colors.gradientColor1 : colors.secondary
  }),
  lockImg: {
    resizeMode: "contain",
    alignSelf: 'center',
    width: rwp(370),
    height: rhp(58)
  },
  bottomContent:{
    justifyContent:'flex-end',
    // flex:1
  }

})