import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { images } from '../assets/images'
import { ScreenNames, Strings } from '../constants/strings'
import { hp, rfs, rhp, rwp, wp } from '../constants/dimensions'
import fonts from '../constants/fonts'
import { colors } from '../constants/colors'
import OptRoundedContainer from './optRoundedContainer'
import AddMoneyModal from './addMoneyModal'
import SendMoneyModal from './sendMoneyModal'
import { navigate } from '../navigator/navigationRef'



const OptionContainer = () => {
    const [AddMoneyModalVisible, setAddMoneyModalVisible] = useState(false);
    const [SendMoneyModalVisible, setSendMoneyModalVisible] = useState(false);
    console.log("🚀 ~ OptionContainer ~ SendMoneyModalVisible:", SendMoneyModalVisible)
    return (
        <View style={styles.optContainer}>
            <View style={styles.optBox}>
                <OptRoundedContainer onPress={() => setAddMoneyModalVisible(true)}
                    imageSource={images.plusColorIcon}
                />
                <AddMoneyModal visible={AddMoneyModalVisible}
                    onClose={() => setAddMoneyModalVisible(false)}
                    headingTitle={Strings.addMoneyCaps}
                    imageOne={images.leftArrow}
                    imageTwo={images.messageIcon}
                />
                <Text style={styles.optText}>{Strings.addMoney}</Text>
            </View>
            <View style={styles.optBox}>
                <OptRoundedContainer
                    imageSource={images.cardColorIcon}
                    onPress={() => {
                        navigate(ScreenNames.underConstructionScreen)
                    }}
                />
                <Text style={styles.optText}>{Strings.myCards}</Text>
            </View>
            <View style={styles.optBox}>
                <OptRoundedContainer onPress={() => setSendMoneyModalVisible(true)}
                    imageSource={images.sendColorIcon} />
                <SendMoneyModal visible={SendMoneyModalVisible}
                    onClose={() => setSendMoneyModalVisible(false)}
                    headingTitle={Strings.sendMoneyCaps}
                    imageOne={images.leftArrow}
                    imageTwo={images.messageIcon}
                />
                <Text style={styles.optText}>{Strings.sendMoney}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    optContainer: {
        alignSelf: 'center',
        width: rhp(300),
        marginTop: rhp(20),
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: rhp(20)
    },
    optBox: {
        width: rwp(70),
        height: rhp(82),
        alignItems: 'center',
    },

    optText: {
        color: colors.blacK,
        fontSize: rfs(13),
        fontWeight: '700',
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular
    },

})
export default OptionContainer