import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import fonts from "../constants/fonts";
import { rfs, rhp } from "../constants/dimensions";


const TransferTileTextContainer = ({ headingText, subHeadingText }) => {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.headingText}>{headingText}</Text>
            <Text style={styles.subHeadingText}>{subHeadingText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.disabled,
        paddingVertical: rhp(7)
    },
    headingText: {
        color: colors.grey,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
        fontSize: rfs(12),
        width: '50%',
    },
    subHeadingText: {
        color: colors.gradientColor2,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize: rfs(11),
        alignSelf: 'center'
    },
})
export default TransferTileTextContainer