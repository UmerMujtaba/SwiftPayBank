import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AppBar from '../../../components/appBar';
import { Strings } from '../../../constants/strings';
import { styles } from './styles';
import CustomTextInput from '../../../components/customTextInput';
import { GradientButton } from '../../../components/cta';

const ForgotPasswordScreen = ({ navigation }) => {
    const [Email, setEmail] = useState('');
    const isButtonEnabled = Email.length > 0;
    return (
        <View style={styles.container}>
            <AppBar showSteps={false} onPress={() => navigation.goBack()} />

            <Text style={styles.title}>{Strings.passwordForgot}</Text>
            <Text style={styles.subTitle}>{Strings.forgotSubHeading}</Text>

            <CustomTextInput
                placeholder={Strings.enterEmail}
                keyboardType="email-address"
                returnKeyType="next"
                value={Email}
                onChangeText={setEmail}
                onSubmitEditing={() => secondRef.current.focus()}
            />

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.rememberText}>
                {Strings.rememberPassword}{' '}
            </Text>
            <Text style={styles.clickText}  onPress={()=>alert('oiugfdfgh')}  > {Strings.clickHere}</Text>

            </View>
            <View style={styles.flexStyle}></View>

            <GradientButton
            buttonText={'Next'}
            style={styles.btn(isButtonEnabled)}
            />
        </View>
    );
}

export default ForgotPasswordScreen;
