import { View, Text, StatusBar, Image } from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from './styles';
import AppBar from '../../../components/appBar';
import { ScreenNames, Strings } from '../../../constants/strings';
import CustomTextInput from '../../../components/customTextInput';
import { images } from '../../../assets/images';
import CustomCheckbox from '../../../components/customCheckBox';
import { GradientButton } from '../../../components/cta';
import { navigate } from '../../../navigator/navigationRef';
import ProgressBar from '../../../components/progressBar';
import { useDispatch, useSelector } from 'react-redux';

import { setUserData } from '../../../redux/slices/userSlice';
// import { setCards, setStatus as setCardStatus } from '../../../redux/cardsSlice';

const SignUpScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmailState] = useState('');
  const [password, setPasswordState] = useState('');

  const [isSecureCheck, setIsSecureCheck] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const handleCheckboxPress = (isChecked, setRememberMe) => {
    setRememberMe(isChecked);
    console.log('Keep me signed in is checked:', isChecked);
  };

  const totalSteps = 3;
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = () => {
    if (isButtonEnabled) {
      dispatch(setUserData({ email, password }));
      navigate(ScreenNames.PhoneScreen);
      handleNext();
    }
    console.log("🚀 ~ handleSubmit ~ Email:", email)
      console.log("🚀 ~ handleSubmit ~ Password:", password)
    };

  const progress = (currentStep / totalSteps) * 100;
  const isEmailValid = /\S+@\S+\.\S+/.test(email); 
  const isButtonEnabled = email.length > 0 && password.length > 0 && rememberMe;
  const isPasswordValid = password.length > 6;
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <AppBar start={1} end={5} onPress={() => navigation.goBack()} />
      <ProgressBar prevState={0} nextState={20} />
      <Text style={styles.title}>{Strings.getStartedWithAccount} </Text>
      <CustomTextInput
        ref={firstRef}
        placeholder={Strings.enterEmail}
        keyboardType="email-address"
        returnKeyType="next"
        value={email}
        onChangeText={setEmailState}
        onSubmitEditing={() => secondRef.current.focus()}
        eye
        eyeSource={isEmailValid ? images.tickGreenImage : images.crossRedImage}
        suffixIconStyle={styles.img}
      />
      
      <CustomTextInput
        ref={secondRef}
        placeholder={Strings.password}
        keyboardType="default"
        returnKeyType="done"
        style={styles.inputText}
        secureTextEntry={isSecureCheck}
        value={password}
        onChangeText={setPasswordState}
        suffixIconStyle={styles.iconStyle}
        eyeSource={isSecureCheck ? images.eyeOpenIcon : images.eyeHideIcon}
        eye
        eyePress={() => setIsSecureCheck(!isSecureCheck)}
        valid
        validSource={isPasswordValid ? images.tickGreenImage : images.crossRedImage}
        suffixValidIconStyle={styles.img2}
      />
      <View style={styles.checkBoxView}>
        <CustomCheckbox
          label={Strings.termsTextStart}
          onPress={isChecked => handleCheckboxPress(isChecked, setRememberMe)}
        />
        <GradientButton
          buttonText={Strings.getStarted}
          style={styles.btnStyle(isButtonEnabled)}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
