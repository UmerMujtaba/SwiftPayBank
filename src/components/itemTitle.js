import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { images } from '../assets/images'
import { rfs, rhp, rwp } from '../constants/dimensions'
import fonts from '../constants/fonts'
import { colors } from '../constants/colors'

const ItemTile = ({ title, verify, img, style,logo,styleContainer }) => {
    return (
        <TouchableOpacity style={[styles.itemTile,styleContainer]}>
            <Text style={[styles.titleStyle,style]}>{title}</Text>
            {img && (
                <Image source={images.rightArrowIcon} style={styles.arrowStyle} />
            )}

            {verify && (
                <View style={style = styles.verifyContainer}>
                    <Text style={styles.verifyText}>Verified</Text>
                </View>
            )}

            {logo && (
                <Image source={images.swiftLogo} style={styles.logoStyle} />
            )}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    itemTile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: rhp(10),
        height: rhp(48),
        alignItems: 'center',
        borderBottomWidth:1,
        borderBottomColor:'#F3F3F3'
    },
    arrowStyle: {
        width: rwp(27),
        height: rhp(18),
        resizeMode: 'contain'
    },
    titleStyle: {
        fontSize: rfs(15),
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        color: colors.listTitleColor
    },
    verifyContainer: {
        height: rhp(28),
        width: rwp(55),
        backgroundColor: '#e7f3eb',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    verifyText: {
        color: '#18843a',
        fontSize: rfs(13),
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
    },
    logoStyle:{
        width: rwp(29),
        height: rhp(29),
        resizeMode: 'contain',
        marginRight:5
    }
})
export default ItemTile