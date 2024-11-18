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
        lineHeight: 22
      },
      optionTile:{
        height:rhp(50),
        width:wp(90),
        marginTop:rhp(24),
        borderBottomWidth:1,
        borderBottomColor:colors.disabled,
        flexDirection:'row',
        alignItems:"center"
      },
      tileImg:{
        resizeMode:'contain',
        height:  rhp(32),
        width: rwp(32),
        marginRight: rwp(14)
      },
      tileText:{
        fontFamily:fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
        fontSize:rfs(16),
        color:colors.blacK
      }
})