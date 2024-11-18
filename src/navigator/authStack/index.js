import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames } from '../../constants/strings';
import OnBoardingScreen from '../../screens/auth/onBoardingScreen';
import LoginScreen from '../../screens/auth/loginScreen';
import ForgotPasswordScreen from '../../screens/auth/forgotPasswordScreen';
import GetStartedScreenSix from '../../screens/auth/userDetailScreen';
import GetStartedScreenFive from '../../screens/auth/createPasscodeScreen';
import GetStartedScreenSeven from '../../screens/auth/bvnNumScreen';
import ThankYouScreen from '../../screens/auth/thankYouScreen';
import GetStartedScreenEight from '../../screens/auth/welcomeScreen';
import SignUpScreen from '../../screens/auth/signUpScreen';
import PhoneInputScreen from '../../screens/auth/phoneInputScreen';
import OtpScreen from '../../screens/auth/otpScreen';
import UnlockMethodScreen from '../../screens/auth/unlockMethodsScreen';
import CreatePasscodesScreen from '../../screens/auth/createPasscodeScreen';
import UserDetailsScreen from '../../screens/auth/userDetailScreen';
import BVNVerifyScreen from '../../screens/auth/bvnNumScreen';
import WelcomeScreen from '../../screens/auth/welcomeScreen';

const AuthStack = createNativeStackNavigator();

const navigationOptions = () => ({
  headerShown: false,
  animationEnabled: true,
  animationTypeForReplace: 'push',
  animation: 'slide_from_right',
});

const Auth = () => {
  return (
    <AuthStack.Navigator initialRouteName={ScreenNames.BoardingScreen}>
      <AuthStack.Screen
        name={ScreenNames.BoardingScreen}
        component={OnBoardingScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.RegisterationScreen}
        component={SignUpScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.PhoneScreen}
        component={PhoneInputScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.OTPScreen}
        component={OtpScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.UnlockScreen}
        component={UnlockMethodScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.CreatePascodeScreen}
        component={CreatePasscodesScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.UserDataScreen}
        component={UserDetailsScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.BvnScreen}
        component={BVNVerifyScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.thankYouScreen}
        component={ThankYouScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.WelcomingScreen}
        component={WelcomeScreen}
        options={navigationOptions}
      />


      <AuthStack.Screen
        name={ScreenNames.loginScreen}
        component={LoginScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.forgotPasswordScreen}
        component={ForgotPasswordScreen}
        options={navigationOptions}
      />
      

    </AuthStack.Navigator>
  );
};

export default Auth;
