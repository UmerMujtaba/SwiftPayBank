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
        fontSize: rfs(16),
        fontWeight: '700'
    },
    subHeading: {
        marginTop: rhp(4),
        color: colors.grey,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize: rfs(14),
    },
    input: {
        marginTop: 0,
    },
    dataAndCvcContainer: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    inputContainer: {
        width: wp(30),
        marginTop: 0,

    },
    dateContainer: {
        height: rhp(48),
        marginTop: 0,
        borderBottomWidth: 1,
        width: wp(30),
        borderBottomColor: colors.disabled,
    },
    dateStyle: {
        color: 'black',
        fontSize: rfs(16),
        paddingVertical: rhp(12)
    },
    inputHeading: {
        color: colors.grey,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize: rfs(13),
    },
    inputHeadingMain: {
        color: colors.grey,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize: rfs(13),
        marginTop: rhp(24),
    },
    btn: (isButtonEnabled) => ({
        width: wp(90),
        backgroundColor: isButtonEnabled ? colors.gradientColor2 : colors.secondary,
    })
})