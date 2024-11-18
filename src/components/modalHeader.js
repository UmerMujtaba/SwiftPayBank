import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { rfs, rhp, rwp } from '../constants/dimensions'
import { colors } from '../constants/colors'
import fonts from '../constants/fonts'

const ModalHeader = ({ onClose, imageSourceOne, imageSourceTwo, heading }) => {
    return (
        <View style={styles.header}>
            <View style={styles.headerContent}>
                <TouchableOpacity onPress={onClose}>
                    <Image source={imageSourceOne} style={styles.iconStyle} />
                </TouchableOpacity>
                <Text style={styles.headerText}>{heading}</Text>
                <Image source={imageSourceTwo} style={styles.iconStyle} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey,
        height: rhp(40),

    },
    headerContent: {
        paddingHorizontal: rwp(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: rhp(10),
    },
    headerText: {
        fontSize: rfs(18),
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
        fontWeight: '700',
        color: colors.blacK,
    },
    iconStyle: {
        width: rwp(22),
        height: rhp(22),
        resizeMode: 'contain',
    },
})
export default ModalHeader