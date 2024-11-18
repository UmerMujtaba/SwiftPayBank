import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { images } from '../assets/images'
import { colors } from '../constants/colors'
import { rfs, rhp, rwp } from '../constants/dimensions'
import fonts from '../constants/fonts'

const CustomListTile = ({ title, subTitle, imageSource, roundStyle,imageStyle,style,onPress}) => {
    return (
        <TouchableOpacity style={[styles.itemContainer,style]} onPress={onPress}>
            <View style={[styles.roundedContainer, roundStyle]}>
                <Image source={imageSource} style={[styles.listImageStyle,imageStyle]} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText} ellipsizeMode="tail" numberOfLines={1}>{title}</Text>
                <Text style={styles.subtitleText}>{subTitle}</Text>
            </View>
            <Image source={images.rightArrowIcon} style={styles.rightArrow} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: rhp(10),
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey,
        marginVertical: rhp(9),
        height:rhp(65),
        // backgroundColor:'blue'

    },
    listImageStyle: {
        width: rwp(33),
        height: rhp(33),
        resizeMode: 'contain'
    },
    roundedContainer: {
        width: rwp(42),
        height: rhp(42),
        backgroundColor: colors.bgColor,
        borderRadius: 20,
        marginRight: rwp(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
    },
    titleText: {
        fontSize: rfs(15),
        fontWeight: '500',
        color: colors.listTitleColor,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
        marginBottom: rhp(4)
    },
    subtitleText: {
        fontSize: rfs(13),
        fontWeight: '400',
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        color: colors.grey,
    },
    rightArrow: {
        resizeMode: 'contain',
        width: rwp(18),
        height: rhp(18)

    },
})
export default CustomListTile