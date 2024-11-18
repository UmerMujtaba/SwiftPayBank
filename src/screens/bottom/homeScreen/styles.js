import { StyleSheet } from "react-native";
import { hp, rfs, rhp, rwp, wp } from "../../../constants/dimensions";
import fonts from "../../../constants/fonts";
import { colors } from "../../../constants/colors";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    //custom app bar in components
    //optContainer is in components
    lineStyle: {
        resizeMode: 'contain',
        width: wp(90),
        alignSelf: 'center',
        marginBottom: rhp(20)
    },
    startTxt: {
        color: colors.blacK,
        fontSize: rfs(17),
        fontWeight: '700',
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        marginBottom: rhp(10)
    },
    quickHeading: {
        color: colors.blacK,
        fontSize: rfs(17),
        fontWeight: '700',
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    },

    //access item container design is in component
    todayTxtStyle: {
        fontSize: rfs(14),

    },
    transactionContainer: {
        //backgroundColor:'red',
        marginTop: rhp(20),
        marginBottom: rhp(20)
    },
    transactionsRow: {
        flexDirection: 'row',
        // backgroundColor:'pink',
        marginTop: rhp(20)
    },
    transactionText: {
        textAlignVertical: "center",
        marginLeft: rwp(12),
        color: colors.grey,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize: rfs(14),
        fontWeight: '400'
    }
})