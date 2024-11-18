import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
// import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import React, { useState } from 'react';
import { images } from '../../../assets/images';
import { ScreenNames, Strings } from '../../../constants/strings';
import { styles } from './styles';
import { navigate } from '../../../navigator/navigationRef';
import ProgressBar from '../../../components/progressBar';
import AppBar from '../../../components/appBar';
import TouchID from 'react-native-touch-id';
// import PasscodeAuth from '@el173/react-native-passcode-auth';


const UnlockMethodScreen = ({ navigation }) => {
    // const [biometricAvailable, setBiometricAvailable] = useState(false);
    const [loaderLoading, setLoaderLoading] = useState(false);
    // console.log(ReactNativeBiometrics);

    // useEffect(() => {
    //     ReactNativeBiometrics.isSensorAvailable()
    //       .then((result) => {
    //         const { available } = result;
    //         if (available) {
    //           setBiometricAvailable(true);
    //         } else {
    //           setBiometricAvailable(false);
    //         }
    //       })
    //       .catch(() => setBiometricAvailable(false));
    //   }, []);

    //   console.log(ReactNativeBiometrics);  // This will log the available methods

    // ReactNativeBiometrics.isSensorAvailable()
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log("Error: ", error);
    //   });

    //   const handleAuthentication = () => {
    //     if (biometricAvailable) {
    //       ReactNativeBiometrics.simplePrompt({ promptMessage: 'Authenticate with Face ID or Touch ID' })
    //         .then((result) => {
    //           if (result.success) {
    //             Alert.alert('Authentication Successful');
    //           } else {
    //             Alert.alert('Authentication Failed');
    //           }
    //         })
    //         .catch((error) => {
    //           Alert.alert('Error', 'Biometric authentication failed');
    //           console.log(error);
    //         });
    //     } else {
    //       Alert.alert('Biometric Authentication Not Available', 'Biometric authentication is not available on this device.');
    //     }
    //   };

    // Check if biometric authentication is supported


    const handleBiometricAuthentication = () => {
        const optionalConfigObject = {
            title: 'Swift Pay Bank', // For Android
            imageColor: '#B69377', // For Android
            imageErrorColor: '#B69377', // For Android
            sensorDescription: 'Touch sensor', // For Android
            sensorErrorDescription: 'Failed', // For Android
            cancelText: 'Cancel', // For Android
            fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
            unifiedErrors: false, // Use unified error messages (default false)
            passcodeFallback: true, // iOS: Allows the device to fall back to using the passcode if FaceID or TouchID is not available
        };

        TouchID.isSupported()
            .then((biometryType) => {
                console.log('Biometry type supported: ', biometryType);

                TouchID.authenticate('Please authenticate using your FaceID/TouchID', optionalConfigObject)
                    .then((success) => {
                        if (success) {
                            Alert.alert('Authentication Successful');
                            onLoginWithFingerprint();
                        }
                    })
                    .catch((error) => {
                        Alert.alert('Authentication Failed', error.message);
                        console.error('Authentication Error:', error);
                    });
            })
            .catch((error) => {
                Alert.alert('Biometric authentication not available', 'Please configure FaceID or TouchID.');
                console.error('Biometric Support Error:', error);
            });
    };

    const onLoginWithFingerprint = () => {

        setTimeout(() => {
            setLoaderLoading(false);
            navigate(ScreenNames.UserDataScreen);
        }, 1000)
        console.log('Login successful with fingerprint or FaceID!');
    };
    return (
        <View style={styles.container}>
            <AppBar start={3} end={5} onPress={() => navigation.goBack()} />
            <ProgressBar
                prevState={40} nextState={60}
                style={{ borderBottomLeftRadius: 8, borderBottomTopRadius: 8 }}
            />
            <Text style={styles.title}>{Strings.secureYourAccess} </Text>
            <Text style={styles.subTitle}>{Strings.chooseHowYouWantToUnlockAndEnter} </Text>
            <View style={styles.body}>
                <TouchableOpacity style={styles.optionTile} onPress={handleBiometricAuthentication}>
                    <Image source={images.faceIcon} style={styles.tileImg} />
                    <Text style={styles.tileText}>{Strings.faceIdAndTouch}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate(ScreenNames.CreatePascodeScreen)} style={[styles.optionTile, { marginTop: 0, borderBottomWidth: 0, borderBottomColor: 'null' }]}>

                    <Image source={images.passcodeIcon} style={styles.tileImg} />
                    <Text style={styles.tileText}>{Strings.passcodeOnly}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default UnlockMethodScreen