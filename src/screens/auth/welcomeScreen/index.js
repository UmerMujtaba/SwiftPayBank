import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Clipboard from '@react-native-clipboard/clipboard';
import { colors } from '../../../constants/colors';
import { images } from '../../../assets/images';
import { GradientButton } from '../../../components/cta';
import { ScreenNames, Strings } from '../../../constants/strings';
import FilledTextInput from '../../../components/FilledTextInput';
import { styles } from './styles';
import { rhp } from '../../../constants/dimensions';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { navigate, navigateReset } from '../../../navigator/navigationRef';
import { useSelector } from 'react-redux';

const WelcomeScreen = ({ navigation }) => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["57%", "57%", "80%"], []);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const [AccNum, setAccNum] = useState('8085472417');
  const [AccName, setAccName] = useState(''); 
  const [InstitutionName, setInstitutionName] = useState('Swift Pay Bank');


  const userData = useSelector((state) => state.userRegistration.userData);
  console.log("🚀 ~ WelcomeScreen ~ userData:", userData);


  const handleCopyPress = (value) => {
    Clipboard.setString(value);
    console.log("🚀 ~ handleCopyPress ~ handleCopyPress:", value);
  };

  const handleSheetChange = useCallback((index) => {
    console.log("🚀 ~ handleSheetChange ~ handleSheetChange:", index)
  }, []);

  useEffect(() => {
    sheetRef.current?.snapToIndex(0);
  }, []);



  useEffect(() => {
    if (userData && userData.firstName && userData.lastName) {
      // Set full name when both first and last name are available
      setAccName(`${userData.firstName} ${userData.lastName}`);
    }
  }, [userData]); // Re-run the effect when userData changes

  console.log("🚀 ~ WelcomeScreen ~ AccName:", AccName);


  const handleSubmit = () => {
    console.log("🚀 ~ GetStartedScreenFour ~ AccountName:", AccName); // Log before navigation
    console.log("🚀 ~ GetStartedScreenFour ~ AccountNumber:", AccNum);
    console.log("🚀 ~ GetStartedScreenFour ~ InstitutionName:", InstitutionName);


    setTimeout(() => {
      navigate('BottomStack', { screen: ScreenNames.HomeScreen, params: AccName })
    }, 1000)
  }
  return (

    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <LinearGradient
        colors={[colors.gradientColor1, colors.gradientColor2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientView}>
        <Image source={images.balloonImage} style={styles.bgImage} />
        <Text style={styles.openingTxt}>{Strings.openingText}</Text>
        <Text style={styles.announcementTxt}>{Strings.announcementNews}</Text>

        <BottomSheet
          ref={sheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChange}
          handleComponent={null}
        >
          <BottomSheetView style={styles.inputsView}>
            <Text style={styles.infoText}>{Strings.accountInfo}</Text>
            <BottomSheetView style={{ marginTop: rhp(24) }}>
              <Text style={styles.accText}>{Strings.accountNum}</Text>
              <FilledTextInput
                ref={firstRef}
                keyboardType="number"
                returnKeyType="next"
                value={AccNum}
                onChangeText={setAccNum}
                onSubmitEditing={() => secondRef.current.focus()}
                copy
                suffixIconStyle={styles.inputIcon}
                copySource={images.copyIcon}
                copyPress={() => handleCopyPress(AccNum)}
              />
              <Text style={styles.accText}>{Strings.accountName}</Text>
              <FilledTextInput
                ref={secondRef}
                keyboardType="default"
                returnKeyType="next"
                value={AccName}
                onChangeText={setAccName}
                onSubmitEditing={() => thirdRef.current.focus()}
                copy
                suffixIconStyle={styles.inputIcon}
                copySource={images.copyIcon}
                copyPress={() => handleCopyPress(AccName)}
              />
              <Text style={styles.accText}>{Strings.institutionName}</Text>
              <FilledTextInput
                ref={thirdRef}
                keyboardType="default"
                returnKeyType="done"
                value={InstitutionName}
                onChangeText={setInstitutionName}
              />
              <GradientButton
                buttonText={Strings.continueToApp}
                style={styles.btnStyle}
                onPress={handleSubmit}
              />
            </BottomSheetView>
          </BottomSheetView>
        </BottomSheet>
      </LinearGradient>
    </View>
  );
};

export default WelcomeScreen;
