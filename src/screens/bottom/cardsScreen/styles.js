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
        marginTop: 70,
        backgroundColor: colors.white,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    },
    emptyContainer: {
        paddingHorizontal: rwp(20),
        alignItems: 'center',
    },
    imgStyle: {
        marginTop: rhp(26),
        resizeMode: "contain",
        height: rhp(150),
        width: rwp(150)
    },
    heading: {
        fontSize: rfs(18),
        marginTop: rhp(26),
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        color: colors.gradientColor1,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    cardContainer: {
        alignSelf: 'center',
        padding: 20
    },
    cardDataHeading: {

        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
        color: colors.blacK,
        fontSize: rfs(20),
        fontWeight: '700',
        marginBottom: rhp(10)
    },
    tileContainer: {
        padding: 10,
        width: wp(90),
        backgroundColor: colors.bgColor,
        marginBottom: rhp(10),
        borderRadius: 10,
    },

    bankName: {
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Bold,
        color: colors.blacK,
        fontSize: rfs(18)
    },
    accName: {
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        color: colors.grey,
        fontSize: rfs(14)
    },
    accNo: {
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        color: colors.grey,
        fontSize: rfs(14)
    }

})

