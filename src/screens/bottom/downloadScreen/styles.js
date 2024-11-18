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
        flex: 1,
        marginTop: 70,
        backgroundColor: colors.white,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    },
    body: {
        backgroundColor: colors.disabled,
        flex: 1,
        width: wp(100),
    },
    receiptContainer: {
        backgroundColor: colors.gradientColor1,
        height: rhp(50),
        marginTop: rhp(50),
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: rwp(20)
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeText: {
        color: colors.grey,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize: rfs(10),
        alignSelf: 'center',
        marginBottom: rhp(12)
    },
    bankImg: {
        width: rwp(25),
        height: rhp(25),
        marginRight: rwp(8)
    },
    bankName: {
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Bold,
        fontSize: rfs(10),
        alignSelf: 'center',
        color: colors.white
    },
    receipt: {
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
        fontSize: rfs(12),
        alignSelf: 'center',
        color: colors.white
    },
    mainContainer: {
        backgroundColor: 'white',
        height: rhp(450),
        padding: 20
    },

    textContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.disabled,
        paddingVertical: rhp(7)
    },
    headingText: {
        color: colors.grey,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
        fontSize: rfs(12),
        width: '50%',
    },
    subHeadingText: {
        color: colors.gradientColor2,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize: rfs(11),
        alignSelf: 'center'
    },
    tickImg: {
        width: rwp(10),
        height: rhp(10),
        resizeMode: "contain",
        alignSelf: "center",
        marginRight: rwp(5)
    },
    transferContainer: {
        flexDirection: 'row'
    }
})