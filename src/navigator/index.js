import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './authStack';
import { ScreenNames } from '../constants/strings';
import { navigationRef } from './navigationRef';
import Bottom from './bottomStack';
import SendBankAccountScreen from '../screens/bottom/sendBackAccountScreen';
import PasscodeScreen from '../screens/bottom/passcodeScreen';
import SuccessScreen from '../screens/bottom/successScreen';
import SendENairaAccScreen from '../screens/bottom/sendENairaAccScreen';
import TopUpCardProgressStepOneScreen from '../screens/bottom/topUpCardPProgressStepsScreens/topUpCardProgressOneScreen';
import TopUpCardProgressStepTwoScreen from '../screens/bottom/topUpCardPProgressStepsScreens/topUpCardProgressTwoScreen';
import TopUpCardProgressStepThreeScreen from '../screens/bottom/topUpCardPProgressStepsScreens/topUpCardProgressThreeScreen';
import TopUpCardProgressStepFourScreen from '../screens/bottom/topUpCardPProgressStepsScreens/topUpCardProgressFourScreen';
import TopUpCardProgressStepFiveScreen from '../screens/bottom/topUpCardPProgressStepsScreens/topUpCardProgressFiveScreen';
import TopUpCardProgressStepSixScreen from '../screens/bottom/topUpCardPProgressStepsScreens/topUpCardProgressSixScreen';
import UnderConstructionScreen from '../screens/bottom/underConstructionScreen';
import ReceiptDownloadScreen from '../screens/bottom/downloadScreen';

const NavigationStack = createNativeStackNavigator();

export const NavigationHandler = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* <NavigationStack.Navigator initialRouteName={ScreenNames.AuthStack}> */}
      <NavigationStack.Navigator initialRouteName={ScreenNames.BottomStack}>
        <NavigationStack.Screen
          name={ScreenNames.AuthStack}
          component={Auth}
          options={{ headerShown: false }}
        />
        <NavigationStack.Screen
          name={ScreenNames.BottomStack}
          component={Bottom}
          options={{ headerShown: false }}
        />
        <NavigationStack.Screen
          name={ScreenNames.sendMoneyBankAccountScreen}
          component={SendBankAccountScreen}
          options={{ headerShown: false }}
        />
        <NavigationStack.Screen
          name={ScreenNames.passcodeScreen}
          component={PasscodeScreen}
          options={{ headerShown: false }}
        />
        <NavigationStack.Screen
          name={ScreenNames.successScreen}
          component={SuccessScreen}
          options={{ headerShown: false }}
        />
        <NavigationStack.Screen
          name={ScreenNames.sendMoneyENairaScreen}
          component={SendENairaAccScreen}
          options={{ headerShown: false }}
        />
        <NavigationStack.Screen
          name={ScreenNames.DownloadScreen}
          component={ReceiptDownloadScreen}
          options={{ headerShown: false }}
        />
        <NavigationStack.Screen
          name={ScreenNames.topUpUsingCardScreenStep1}
          component={TopUpCardProgressStepOneScreen}
          options={{ headerShown: false }}
        />
        <NavigationStack.Screen
          name={ScreenNames.topUpUsingCardScreenStep2}
          component={TopUpCardProgressStepTwoScreen}
          options={{ headerShown: false }}
        />
        <NavigationStack.Screen
          name={ScreenNames.topUpUsingCardScreenStep3}
          component={TopUpCardProgressStepThreeScreen}
          options={{ headerShown: false }}
        />
        <NavigationStack.Screen
          name={ScreenNames.topUpUsingCardScreenStep4}
          component={TopUpCardProgressStepFourScreen}
          options={{ headerShown: false }}
        />
        <NavigationStack.Screen
          name={ScreenNames.topUpUsingCardScreenStep5}
          component={TopUpCardProgressStepFiveScreen}
          options={{ headerShown: false }}
        />
        <NavigationStack.Screen
          name={ScreenNames.topUpUsingCardScreenStep6}
          component={TopUpCardProgressStepSixScreen}
          options={{ headerShown: false }}
        />
        <NavigationStack.Screen
          name={ScreenNames.underConstructionScreen}
          component={UnderConstructionScreen}
          options={{ headerShown: false }}
        />



      </NavigationStack.Navigator>
    </NavigationContainer>
  );
};
