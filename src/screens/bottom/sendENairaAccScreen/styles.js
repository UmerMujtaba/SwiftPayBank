import { Platform, StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import fonts from "../../../constants/fonts";
import { hp, rfs, rhp, rwp, wp } from "../../../constants/dimensions";


const styles = StyleSheet.create({
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
    dropdown: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: colors.disabled
    },
    dropdownContainer: {
        borderColor: "#ccc",

    },
    listItemLabel: {
        fontSize: 16,
        color: "#333",
    },
    label: {
        fontSize: 16,
        color: "#333",
    },
    selectedLabel: {
        fontWeight: "bold",
        color: "#007BFF",
    },
    separator: {
        backgroundColor: "#eee",
        height: 1,
    },
    bankLogo: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    placeholderStyling: {
        color: colors.grey,
        fontWeight: '400',
        fontSize: rfs(17),
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular
    },
    iconStyle: {
        width: rwp(18),
        height: rhp(18),
        marginRight: 5
    },
    btn: (allOptions) => ({
        marginTop: 34,
        width: wp(90),
        backgroundColor: allOptions ? colors.gradientColor1 : colors.secondary
    }),
    tileStyle: {
        backgroundColor: '#F1F5F9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: rhp(16),
        borderRadius: 8,
        width: wp(80),
        alignSelf: 'center',

    },
    tileCol: {
        flexDirection: 'row',
    },
    tileTextContainer: {
        flexDirection: 'column',
        padding: 10,
        justifyContent: "center"
    },
    tileImg: {
        width: 46,
        height: 46,
        resizeMode: 'contain',
        marginRight: 10,
        marginLeft: 10,
        alignSelf: 'center'
    },
    tileText: {
        color: colors.blacK,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize: rfs(18)
    },
    tileSubText: {
        color: colors.grey,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize: rfs(13)
    },
    changeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: rwp(10)
    },
    tileArrow: {
        width: rwp(16),
        height: rhp(16),
        resizeMode: 'contain',
        //alignSelf: 'center'
    },
    changeText: {
        color: colors.grey,
        marginRight: 10,
        fontSize: rfs(12),
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular
    },
   

});