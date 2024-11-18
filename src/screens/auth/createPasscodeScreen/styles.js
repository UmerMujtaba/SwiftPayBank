
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
      },
      subTitle: {
        fontSize: rfs(16),
        fontWeight: '500',
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        color: colors.grey,
        marginTop: rhp(10),
      },
      body:{
        marginTop:rhp(20)
      },

})