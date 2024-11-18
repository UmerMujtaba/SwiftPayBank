import { StyleSheet } from "react-native";
import { hp, rfs, rhp, rwp, wp } from "../../../constants/dimensions";
import { colors } from "../../../constants/colors";
import fonts from "../../../constants/fonts";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gradientColor1,
        justifyContent: "flex-end"
    },
    modalContainer: {
        //height: hp(97),
        flex: 1,
        marginTop: 70,
        backgroundColor: colors.white,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    },
    body: {
        paddingHorizontal: rwp(20),
        alignItems:'center',
    },
    imgStyle:{
        marginTop: rhp(26),
        resizeMode:"contain",
        height: rhp(150),
        width: rwp(150)
    },
    heading:{
        fontSize: rfs(18),
        marginTop: rhp(26),
        fontFamily:fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        color:colors.gradientColor1,
        textAlign:'center',
        fontWeight: 'bold'
    }
})