import { StyleSheet } from "react-native";
import { hp, rfs, rhp, rwp, wp } from "../../../../constants/dimensions";
import { colors } from "../../../../constants/colors";
import fonts from "../../../../constants/fonts";

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
        paddingHorizontal: rwp(20)

    },
    totalAmount: {
        color: colors.gradientColor2,
        fontSize: rfs(28),
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Bold,
        textAlign: 'center'
    },
    amountContainer: {
        height: rhp(82),
        justifyContent: 'center',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.disabled,
        width: wp(90)
    },
    cardTile: {
        flexDirection: 'row',
        height: rhp(48),
        marginTop: rhp(20)
    },
    addCardContainer: {
        paddingVertical: 20
    },
    heading: {
        color: colors.blacK,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
        fontSize: rfs(17),
        fontWeight: '700'
    },
    subHeading: {
        marginTop: rhp(4),
        color: colors.grey,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize: rfs(14),
    },
    otpContainer: {
        marginTop: rhp(24),
    },
    cell: {
        borderRadius: 8,
        borderWidth: 0,
        backgroundColor: colors.bgColor,
        borderBottomWidth: 0,
        width: rwp(49),
        height: rhp(50),
    },
    cellText: {
        color: colors.blacK,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize: rfs(28),
        textAlign: 'center',
        paddingTop: rhp(8),
    },
    btn: (isOtpComplete) => ({
        marginTop: rhp(32),
        width: wp(90),
        backgroundColor: isOtpComplete ? colors.gradientColor2 : colors.secondary,
    })

})