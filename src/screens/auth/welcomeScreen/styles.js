import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import fonts from "../../../constants/fonts";
import { hp, rfs, rhp, rwp, wp } from "../../../constants/dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    resizeMode: 'contain',
    width: rwp(120),
    height: rhp(120),
    marginTop: hp(10),
  },
  openingTxt: {
    fontSize: rfs(24),
    fontWeight: '700',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Bold,
    color: colors.white,
    textAlign: 'center',
    marginTop: rhp(14),
  },
  announcementTxt: {
    fontSize: rfs(14),
    fontWeight: '400',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    color: colors.white,
    textAlign: 'center',
    marginTop: rhp(12),
    lineHeight: 20,
    marginBottom: rhp(37),
  },
  infoText: {
    fontSize: rfs(19),
    fontWeight: '700',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Bold,
    color: 'black',
  },
  accText: {
    fontSize: rfs(14),
    fontWeight: '400',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    color: colors.grey,
    marginBottom: rhp(4),
  },
  inputIcon: {
    width: rwp(14),
    height: rhp(14),
    alignSelf: 'center',
  },
  inputsView: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    padding: 20,
  },
  gradientView: { flex: 1, alignItems: 'center' },
  btnStyle: { marginTop: rhp(25), width: wp(90) },
});
