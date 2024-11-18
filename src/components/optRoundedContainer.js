import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { rhp, rwp } from '../constants/dimensions'
import { colors } from '../constants/colors'

const OptRoundedContainer = ({ imageSource, style ,onPress}) => {
    return (
        <TouchableOpacity style={[styles.optRoundedContainer, style]} onPress={onPress}>
            <Image source={imageSource} style={styles.optImage} />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    optRoundedContainer: {
        width: rwp(56),
        height: rhp(56),
        borderRadius: 27,
        backgroundColor: colors.bgColor,
        marginBottom: rhp(8),
        alignItems: 'center',
        justifyContent: 'center'
    },
    optImage: {
        resizeMode: 'contain',
        height: rhp(26),
        width: rwp(26)
    },
})
export default OptRoundedContainer