import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { images } from '../assets/images'
import { Strings } from '../constants/strings'
import { rfs, rhp, rwp } from '../constants/dimensions'
import { colors } from '../constants/colors'
import fonts from '../constants/fonts'
import OvalTouchableContainer from './ovalTouchableContainer'

const AccessItemContainer = () => {
    return (
        <View style={styles.accessItemRow}>
            <OvalTouchableContainer
                text={Strings.airTime}
                imageSource={images.phoneIcon}
            />
            <OvalTouchableContainer
                text={Strings.betting}
                imageSource={images.ballIcon}
            />
            <OvalTouchableContainer
                text={Strings.dataBundle}
                imageSource={images.upRightIcon}
                style={{width:rwp(127)}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    accessItemRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

})
export default AccessItemContainer