import React from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet, Share, Alert } from 'react-native';
import { images } from '../assets/images';
import { height, hp, rfs, rhp, rwp, width, wp } from '../constants/dimensions';
import fonts from '../constants/fonts';
import { colors } from '../constants/colors';
import { ScreenNames, Strings } from '../constants/strings';
import ModalHeader from './modalHeader';
import CustomListTile from './customListTile';
import { GradientButton, PlainButton } from './cta';
import Clipboard from '@react-native-clipboard/clipboard';
import { navigate } from '../navigator/navigationRef';

const AddMoneyModal = ({ visible, onClose, headingTitle, imageOne, imageTwo }) => {
    const accountNumber = Strings.userAccNum;
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: `Here is my account number: ${accountNumber}`,
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // Activity type of the shared action, if any
                    Alert.alert("Success", "Account number shared successfully!");
                    console.log('Shared with activity type:', result.activityType);
                } else {
                    console.log('Shared successfully');
                    //Alert.alert("Success", "Account number shared successfully!");
                }
            } else if (result.action === Share.dismissedAction) {
                Alert.alert("Cancelled", "Share dismissed.");
                console.log('Share dismissed');
            }
        } catch (error) {
            Alert.alert("Error", "Failed to share the account number.");
            console.error('Error sharing:', error.message);
        }
    };


    const handleCopyPress = (value) => {
        Clipboard.setString(value);
        console.log("🚀 ~ handleCopyPress ~ handleCopyPress:", value);
    };
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
                            title={Strings.bankTransfer}
                            subTitle={Strings.addMoneyVIA}
                            imageSource={images.bankOutlinedIcon}
                            roundStyle={styles.roundedContainer}
                            imageStyle={styles.roundedContainerImage}
                            style={{ borderStyle: 'dashed' }}
                            onPress={() => {
                                onClose();
                                navigate(ScreenNames.underConstructionScreen)
                            }}
                        />

                        <View style={styles.btnContainers}>
                            <Text style={styles.accTitleText}>{Strings.swiftAccNum}</Text>
                            <Text style={styles.accNum}>{accountNumber}</Text>

                            <View style={styles.btnRowContainer}>
                                <PlainButton
                                    buttonText={Strings.copyNumber}
                                    style={styles.btn}
                                    onPress={() => handleCopyPress(accountNumber)}
                                />
                                <GradientButton
                                    buttonText={Strings.shareInfo}
                                    style={[styles.btn, { marginLeft: 20 }]}
                                    onPress={onShare}
                                />
                            </View>
                        </View>
                        <Image source={images.optionImage} style={styles.orImage} />
                        <CustomListTile
                            title={Strings.topUp}
                            subTitle={Strings.addDirectlyFromCard}
                            imageSource={images.cardOutlinedIcon}
                            roundStyle={styles.roundedContainer}
                            imageStyle={styles.roundedContainerImage}
                            style={{ marginTop: rhp(10) }}
                            onPress={() => {
                                onClose();
                                navigate(ScreenNames.topUpUsingCardScreenStep1)
                            }}
                        />
                        <CustomListTile
                            title={Strings.topUp}
                            subTitle={Strings.addDirectlyFromCard}
                            imageSource={images.cardOutlinedIcon}
                            roundStyle={styles.roundedContainer}
                            imageStyle={styles.roundedContainerImage}
                            onPress={() => {
                                onClose();
                                navigate(ScreenNames.underConstructionScreen)
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
        marginTop:rhp(40),
        flex: 1,
    },
    bodyContainer: {
        alignItems: "center",
        padding: 20,
    },
    imgBgContainer: {
        width: rwp(157),
        height: rhp(143),
        backgroundColor: colors.bgColor,
        borderRadius: 25,
        marginBottom: rhp(18),
        justifyContent: "center",
        alignItems: 'center'
    },
    imgStyle: {
        width: rwp(70),
        height: rhp(90),
        resizeMethod: 'contain'
    },
    title: {
        color: colors.blacK,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
        fontSize: rfs(18),
        fontWeight: '700',
        marginBottom: rhp(8)
    },
    subTitle: {
        color: colors.grey,
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize: rfs(15),
        textAlign: 'center',
        lineHeight: 20
    },
    accTitleText: {
        fontSize: rfs(14),
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        color: colors.grey,
        marginBottom: rhp(10)
    },
    accNum: {
        fontSize: rfs(22),
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
        color: colors.blacK,
        marginBottom: rhp(16)
    },
    btnContainers: {
        paddingTop: 11,
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderBottomColor: colors.lightGrey,
    },
    btnRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: rhp(25)
    },
    orImage: {
        resizeMode: 'contain',
        height: 14,
        width: 198,
        marginTop: rhp(10)
    },
    roundedContainer: {
        width: rwp(40),
        height: rhp(40),
        borderRadius: 50,
    },
    roundedContainerImage: {
        width: rwp(22),
        height: rhp(22)
    },
    btn: {
        width: rwp(160),
        height: rhp(47),

    }
});

export default AddMoneyModal;
