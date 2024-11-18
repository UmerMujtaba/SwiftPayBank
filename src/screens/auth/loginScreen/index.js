import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import AppBar from '../../../components/appBar'
import { styles } from './styles'
import { ScreenNames, Strings } from '../../../constants/strings'
import CustomTextInput from '../../../components/customTextInput'
import { images } from '../../../assets/images'
import CustomCheckbox from '../../../components/customCheckBox'
import { GradientButton } from '../../../components/cta'
import { navigate } from '../../../navigator/navigationRef'

const LoginScreen = ({ navigation }) => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [isSecureCheck, setIsSecureCheck] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const handleCheckboxPress = (isChecked, setRememberMe) => {
        setRememberMe(isChecked);
        console.log('Keep me signed in is checked:', isChecked);
    };

    const isButtonEnabled = Email.length > 0 && Password.length > 0 ;
    return (
        <View style={styles.container}>
            <AppBar showSteps={false} onPress={() => navigation.goBack()} />

            <Text style={styles.title}>{Strings.loginToYourAccount} </Text>


            <CustomTextInput
                ref={firstRef}
                placeholder={Strings.enterEmail}
                keyboardType="email-address"
                returnKeyType="next"
                value={Email}
                onChangeText={setEmail}
                onSubmitEditing={() => secondRef.current.focus()}
            />
            <CustomTextInput
                ref={secondRef}
                placeholder={Strings.password}
                keyboardType="default"
                returnKeyType="done"
                style={styles.inputText}
                secureTextEntry={isSecureCheck}
                value={Password}
                onChangeText={setPassword}
                suffixIconStyle={styles.iconStyle}
                eyeSource={isSecureCheck ? images.eyeOpenIcon : images.eyeHideIcon}
                eye
                eyePress={() => setIsSecureCheck(!isSecureCheck)}
            />

            <View style={styles.rememberRow}>
                <CustomCheckbox
                    remember
                    onPress={isChecked => handleCheckboxPress(isChecked, setRememberMe)}
                />

                <TouchableOpacity onPress={() => navigate(ScreenNames.forgotPasswordScreen)}>
                    <Text style={styles.forgotText}>{Strings.forgotPassword}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.flexStyle} />

            <GradientButton
                buttonText={Strings.getStarted}
                style={styles.btnStyle(isButtonEnabled)}
                onPress={() => {
                    if (isButtonEnabled) {
                        navigate(ScreenNames.CreatePascodeScreen);
                    }
                }}
            />
        </View>
    )
}

export default LoginScreen