import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { images } from '../assets/images'
import { rfs, rhp, rwp, wp } from '../constants/dimensions'
import { colors } from '../constants/colors'
import fonts from '../constants/fonts'
import { Strings } from '../constants/strings'

const Card = () => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.ovalContainer}>
                <Image source={images.bankIcon} style={styles.logo} />
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={styles.totalText}>{Strings.totalBalance}</Text>
                <Text style={styles.balance}>{Strings.totalAmount}</Text>
                <Text style={styles.updateText}>{Strings.updateText}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        height: rhp(150),
        width: wp(85),
        backgroundColor: colors.primary,
        alignSelf: 'center',
        marginTop: rhp(26),
        borderRadius: 8,
        overflow: 'hidden'
    },
    ovalContainer: {
        backgroundColor: 'rgb(34,78,134)',
        height: rhp(290),
        width: rwp(290),
        borderRadius: 165,
        zIndex: 0,
        position: "absolute",
        right: -110,
        top: -20
    },
    logo: {
        resizeMode: 'contain',
        height: rhp(30),
        width: rwp(30),
        top: 40,
        left: 120

    },
    totalText: {
        fontSize: rfs(13),
        fontWeight: '500',
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        color: colors.white,
        marginTop: rhp(38)
    },
    balance: {
        fontSize: rfs(26),
        fontWeight: '700',
        fontFamily: fonts.SF_PRO_TEXT.PlusJakartaSans.Regular,
        color: colors.white,
    },
    updateText: {
        fontSize: rfs(12),
        fontWeight: '500',
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        color: 'rgba(255,255,255,0.6)',
        marginTop: rhp(6)
    },
})
export default Card