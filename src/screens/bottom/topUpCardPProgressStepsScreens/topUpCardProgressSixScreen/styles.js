import { Platform, StyleSheet } from "react-native";
import { hp, rfs, rhp, rwp, wp } from "../../../../constants/dimensions";
import fonts from "../../../../constants/fonts";
import { colors } from "../../../../constants/colors";


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
        alignItems: "center"
    },
    checkImg: {
        marginTop: rhp(25),
        resizeMode: "contain",
        height: rhp(110),
        width: rwp(110)
    },
    successMsg: {
        fontSize: rfs(20),
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
        fontWeight: '700',
        color: colors.blacK,
        marginTop: rhp(14),
    },
    transferAmount: {
        fontSize: rfs(15),
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        color: colors.grey,
        marginTop: rhp(13),
        textAlign: 'center',
    },
    imgShare: {
        resizeMode: 'cover',
        width: rwp(18),
        height: rhp(18),
        marginRight: rwp(12),

    },
    shareBtn: {
        width: wp(90),
        marginTop: rhp(56)
    },

})