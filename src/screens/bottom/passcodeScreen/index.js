import { View, Text, Image, Alert, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import ScreenHeader from '../../../components/header';
import { styles } from './styles';
import { images } from '../../../assets/images';
import { Strings } from '../../../constants/strings';
import PasscodeInput from '../../../components/passcodeInput';
import DialPad from '../../../components/passcodeInput';


const PasscodeScreen = ({ navigation,route }) => {
    
    const  details  = route.params.obj;
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <ScreenHeader title="Passcode" onPress={() => navigation.goBack()} imageSource={images.leftArrow}/>
                <View style={styles.body}>
                    <View style={styles.roundContainer}>
                        <Image source={images.lockIcon} style={styles.avatarImg} />
                    </View>
                    <Text style={styles.heading}>{Strings.enterYourPasscode}</Text>
                    <Text style={styles.subHeading}>{Strings.fourDigitPasscode}</Text>
                    <DialPad details={details} />
                </View>
            </View>
        </View>
    );
};

export default PasscodeScreen;
