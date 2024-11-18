import { StyleSheet } from "react-native";
import { hp, rfs, rhp, rwp, wp } from "../../../constants/dimensions";
import fonts from "../../../constants/fonts";
import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gradientColor1,
        justifyContent: "flex-end"
    },
    modalContainer: {
        //height: hp(97),
        flex: 1,
        marginTop: rhp(70),
        backgroundColor: colors.white,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    },
    body:{
        paddingHorizontal:rwp(40),
       alignItems:"center",
    },
    roundContainer:{
        height:rhp(48),
        width:rwp(48),
        borderRadius:rwp(24),
        backgroundColor:colors.bgColor,
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        marginTop: rhp(26)
    },
    avatarImg:{
        height:rhp(24),
        width:rwp(24),
        resizeMode:'contain',

    },
    heading:{
        fontFamily:fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
        fontSize:rfs(18),
        color:colors.blacK,
        marginTop:rhp(24),
        fontWeight:'700'
    },
    subHeading:{
        fontFamily:fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
        fontSize:rfs(14),
        color:colors.blacK,
        marginTop:rhp(4),
        textAlign:'center',
        lineHeight:20
    }
})
