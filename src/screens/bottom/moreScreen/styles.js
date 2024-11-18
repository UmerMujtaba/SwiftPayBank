import { StyleSheet } from "react-native";
import { height, hp, rfs, rhp, rwp, wp } from "../../../constants/dimensions";
import fonts from "../../../constants/fonts";
import { colors } from "../../../constants/colors";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gradientColor1,
        justifyContent: "flex-end"
    },
    modalContainer: {
        // height: hp(82),
        flex:1,
        marginTop:rhp(60),
        backgroundColor: colors.white,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    },
    topBar: {
        height: rhp(50),
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey,
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
        color: colors.blacK,
        fontSize: rfs(16),
        fontWeight: 'bold',
    },
    detailContainer: {
        paddingHorizontal: rwp(20),
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey,
        borderStyle: 'solid',

    },
    avatarContainer: {
        marginTop: rhp(35),
        height: rhp(80),
        width: rwp(80),
        borderRadius: 40,
        backgroundColor: '#F1F5F9',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: rhp(8)
    },
    avatarImg: {
        resizeMode: 'contain',
        height: rhp(48),
        width: rwp(48)
    },
    nameStyle: {
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
        fontSize: rfs(17),
        fontWeight: 'bold',
        color: colors.blacK,
        marginBottom: rhp(4)
    },
    accNoStyle: {
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize: rfs(14),
        color: colors.grey,
        marginBottom: rhp(32)
    },
    accContainer: {
        padding: 20,
        paddingBottom: 0
    },
    accHeading: {
        color: colors.blacK,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
        fontSize: rfs(16),
        fontWeight: 'bold'
    },
    logoutContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: rhp(15),
        height: rhp(48),
        marginBottom: rhp(17)
    },
    logoutText: {
        color: '#D02E28',
        fontSize: rfs(18),
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Bold,
        fontWeight: '600'
    }
})