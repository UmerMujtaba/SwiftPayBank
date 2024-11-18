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
    input: {
        marginBottom: 12,
    },
    tile: {
        height: rhp(40),
        borderRadius: 8,
        backgroundColor: colors.disabled,
        justifyContent: 'center'
    },
    rememberText: {
        fontFamily: fonts.SF_PRO_TEXT.PlusJakartaSans.SemiBold,
        fontSize: rfs(12),
        color: colors.grey,
    },
    clickText: {
        fontFamily: fonts.SF_PRO_TEXT.PlusJakartaSans.SemiBold,
        fontSize: rfs(12),
        color: colors.gradientColor3,
        padding: wp(2),
        paddingLeft: 0,
    },
    tileInsideView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 15
    },
    btn:(isButtonEnabled)=>({
        backgroundColor: isButtonEnabled? colors.gradientColor2 : colors.secondary,
        marginTop: rhp(34),
        width:wp(90)
    }),
    
})