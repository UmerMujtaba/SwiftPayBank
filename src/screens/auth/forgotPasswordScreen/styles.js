import { Platform, StyleSheet } from "react-native";
import { hp, rfs, rhp, rwp, wp } from "../../../constants/dimensions";
import fonts from "../../../constants/fonts";
import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: colors.white,
      padding: 20,
  },
  title: {
      fontWeight: '700',
      fontSize: rfs(32),
      fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
      color: 'black',
      marginTop: rhp(12),
      lineHeight: 33.6,
      letterSpacing: 1,
  },
  inputText: {
      marginTop: 0,
      marginBottom:0
  },
  subTitle: {
      fontSize: rfs(16),
      fontWeight: '500',
      fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
      color: colors.grey,
      marginTop: rhp(10),
      lineHeight: 22,
  },
  rememberText: {
      fontFamily: fonts.SF_PRO_TEXT.PlusJakartaSans.SemiBold,
      fontSize: rfs(12),
      textAlign:'center',
      color: colors.grey,
  },
  clickText: {
      fontFamily: fonts.SF_PRO_TEXT.PlusJakartaSans.SemiBold,
      fontSize: rfs(12),
      color: colors.gradientColor3,
      padding:wp(2),
      paddingLeft:0,
  },
  flexStyle:{
    flex:1,
  },
  btn:(isButtonEnabled)=>({
    width: wp(90),
    backgroundColor: isButtonEnabled ? colors.gradientColor1 : colors.secondary
  })
});