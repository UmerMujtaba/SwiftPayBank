import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { images } from '../assets/images'
import { rfs, rhp, rwp } from '../constants/dimensions'
import fonts from '../constants/fonts'
import { colors } from '../constants/colors'

const ScreenHeader = ({ title, onPress,imageSource,navigation,imageSource2,Press }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onPress}>
                <Image source={imageSource} style={styles.imgStyle} />
            </TouchableOpacity>

            <Text style={styles.headerText}>{title}</Text>
            {/* <View style={{ width: 20 }} /> */}
            <TouchableOpacity onPress={Press}>
                <Image source={imageSource2} style={styles.imgStyle} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    imgStyle: {
        resizeMode: 'contain',
        height: rhp(20),
        width: rwp(20)
    },
    header:
    {
        borderBottomColor: '#F3F3F3',
        borderBottomWidth: 1,
        height: rhp(50),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    headerText: {
        color: '#3A3C4C',
        fontSize:rfs(15),
        fontFamily:fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontWeight:'700'
    },
})
export default ScreenHeader