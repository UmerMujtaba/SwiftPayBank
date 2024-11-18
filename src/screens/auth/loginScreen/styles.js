import { Platform, StyleSheet } from "react-native";
import { hp, rfs, rhp, rwp, wp } from "../../../constants/dimensions";
import fonts from "../../../constants/fonts";
import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
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
        marginBottom:0,
      },
      iconStyle: {
        width: 24,
        height: 26.4
      },
      rememberRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: rhp(22),
      },
      forgotText:{
        color:colors.primary,
        fontFamily:fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize:rfs(14),
        fontWeight:'bold',
        marginTop:rhp(1)
    },
    flexStyle:{
        flex:1
    },
    btnStyle: isButtonEnabled => ({
        marginTop: rhp(24),
        width: rwp(335),
        marginBottom: rhp(25),
        backgroundColor: isButtonEnabled ? colors.gradientColor1 : colors.secondary,
        alignSelf:'center'
      }),

})