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
    addCardContainer: {
        paddingVertical: 20,
        // backgroundColor:'red'
    },
    heading: {
        color: colors.blacK,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
        fontSize: rfs(17),
        fontWeight: '700'
    },
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
        paddingVertical: rhp(15),
        justifyContent: "center"
    },
    tileImg: {
        width: 46,
        height: 46,
        resizeMode: 'contain',
        marginRight: rwp(10),
        marginLeft: rwp(10),
        alignSelf: 'center'
    },
    tileText: {
        color: colors.blacK,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize: rfs(15),
        fontWeight:'700'
    },
    tileSubText: {
        color: colors.grey,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize: rfs(13),
        marginTop: rhp(5)
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
    inputContainer:{
        marginTop: rhp(16),
        marginBottom: rhp(0)
    },
    infoImg:{
        resizeMode:'contain',
        width: wp(90),
        height: rhp(60)
    },
    toastContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background for the whole screen
      },
      toast: {
        backgroundColor:'rgba(125, 124, 147,0.9)', // Transparent background for the toast
        padding: 15,
        borderRadius: 12,
        height:rhp(74),
        width: rwp(189),
        justifyContent:'center',
        alignItems:'center',
        flexDirection:"row",
      },
      toastText: {
        color: '#fff', // White text color
        fontSize: rfs(16),
        fontFamily:fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        marginLeft:rwp(10)
      },
      tickImg:{
        resizeMode:"contain",
        height:rhp(24),
        width: rwp(24)
      },
      btn:(isCvcEntered)=>({
        width:wp(90),
        marginTop:rhp(32),
        backgroundColor: isCvcEntered ? colors.gradientColor2 : colors.secondary,
      })
})