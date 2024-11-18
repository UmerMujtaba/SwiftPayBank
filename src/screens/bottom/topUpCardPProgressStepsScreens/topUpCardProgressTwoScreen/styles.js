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
    totalAmount:{
        color:colors.gradientColor2,
        fontSize:rfs(28),
        fontFamily:fonts.SF_PRO_TEXT.BasisGrotesque.Bold,
        textAlign:'center'
    },
    amountContainer:{
        height:rhp(82),
        justifyContent:'center',
        alignSelf:'center',
        borderBottomWidth:1,
        borderBottomColor:colors.disabled,
        width:wp(90)
    },
    cardTile:{
        flexDirection:'row',
        height:rhp(48),
        marginTop:rhp(20)
    },
    roundContainer:{
        height:rhp(44),
        width:rwp(44),
        borderRadius:rwp(24),
        backgroundColor:colors.bgColor,
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
    },
    cardImg:{
        resizeMode:'contain',
        height:rhp(22),
        width: rwp(22)
    },
    cardText:{
        textAlignVertical:"center",
        marginLeft:rhp(12),
        fontFamily:fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize: rfs(13),
        color:colors.grey
    },
    addBtn:{
        width:wp(90),
        marginTop:rhp(32)
    }

})