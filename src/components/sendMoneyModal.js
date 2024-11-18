import React from 'react';
import { Modal, View, Image, StyleSheet } from 'react-native';
import { images } from '../assets/images';
import {  rhp, rwp, wp } from '../constants/dimensions';
import { colors } from '../constants/colors';
import { ScreenNames, Strings } from '../constants/strings';
import ModalHeader from './modalHeader';
import CustomListTile from './customListTile';
import { navigate } from '../navigator/navigationRef';

const SendMoneyModal = ({ visible, onClose, headingTitle, imageOne, imageTwo }) => {
    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <ModalHeader
                        heading={headingTitle}
                        imageSourceOne={imageOne}
                        imageSourceTwo={imageTwo}
                        onClose={onClose}
                    />
                    <View style={styles.bodyContainer}>
                        <CustomListTile
                            title={Strings.swiftPayUser}
                            subTitle={Strings.sendToUser}
                            imageSource={images.swiftLogo}
                            roundStyle={styles.roundedContainer}
                            imageStyle={styles.roundedContainerImage}
                            onPress={()=>{
                                onClose()
                                navigate(ScreenNames.underConstructionScreen)}}
                        />
                        <CustomListTile
                            title={Strings.bankAccount}
                            subTitle={Strings.sendToBankAcc}
                            imageSource={images.bankOutlinedIcon}
                            roundStyle={styles.roundedContainer}
                            imageStyle={styles.roundedContainerImage}
                            onPress={()=>{
                                onClose()
                                navigate(ScreenNames.sendMoneyBankAccountScreen)}}
                        />
                        <Image source={images.optionImage} style={styles.orImage} />
                        <CustomListTile
                            title={Strings.eNaira}
                            subTitle={Strings.sendToENaira}
                            imageSource={images.eNairaLogo}
                            roundStyle={styles.roundedContainer}
                            imageStyle={styles.roundedContainerImage}
                            onPress={()=>{
                                onClose()
                                navigate(ScreenNames.sendMoneyENairaScreen)
                            }}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContainer: {
        width: wp(100),
        backgroundColor: colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingTop: rhp(20),
        flex: 1,
        marginTop:rhp(40)

    },
    bodyContainer: {
        alignItems: "center",
        padding: 20,
    },
    roundedContainer: {
        width: rwp(40),
        height: rhp(40),
        borderRadius:20
    },
    roundedContainerImage: {
        width: rwp(22),
        height: rhp(22)
    },
    orImage: {
        resizeMode: 'contain',
        height: 14,
        width: 198,
    },

});

export default SendMoneyModal;
