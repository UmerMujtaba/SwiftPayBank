import React from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { images } from '../assets/images';
import { hp, rfs, rhp, rwp, wp } from '../constants/dimensions';
import fonts from '../constants/fonts';
import { colors } from '../constants/colors';
import { Strings } from '../constants/strings';
import ModalHeader from './modalHeader';

const NotificationModal = ({ visible, onClose, headingTitle, imageOne, imageTwo }) => {
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
                        <View style={styles.imgBgContainer}>
                            <Image source={images.notificationPhone} style={styles.imgStyle} />
                        </View>
                        <Text style={styles.title}>{Strings.noNotification}</Text>
                        <Text style={styles.subTitle}>{Strings.notificationArrival}</Text>
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

    },

    bodyContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: 'center',
    },
    imgBgContainer: {
        width: rwp(157),
        height: rhp(143),
        backgroundColor: colors.bgColor,
        borderRadius: 25,
        marginBottom: rhp(18),
        justifyContent: "center",
        alignItems: 'center',

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
    }
});

export default NotificationModal;
