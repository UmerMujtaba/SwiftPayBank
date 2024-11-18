import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { images, Strings } from '../path/to/your/assets'; // Adjust path to your assets if needed
import { rfs, rhp, rwp } from '../constants/dimensions';
import { colors } from '../constants/colors';
import fonts from '../constants/fonts';

const OvalTouchableContainer = ({ onPress, text, imageSource,style}) => {
    return (
        <TouchableOpacity style={[styles.ovalContainer,style]} onPress={onPress}>
            <Image source={imageSource} style={styles.ovalContainerImage} />
            <Text style={styles.ovalContainerText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    ovalContainer: {
        width: rwp(98),
        height: rhp(38),
        backgroundColor: colors.bgColor,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: rhp(10)
    },
    ovalContainerImage: {
        width: rwp(18),
        height: rhp(18),
        resizeMode: 'contain',
    },
    ovalContainerText: {
        fontWeight: '500',
        fontSize: rfs(14),
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        color: colors.grey,
        marginRight: rwp(3)
    }
})
export default OvalTouchableContainer