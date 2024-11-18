import { View, Text } from 'react-native';
import React, { useState } from 'react';
import AppBar from '../../../components/appBar';
import { styles } from './styles';
import { ScreenNames, Strings } from '../../../constants/strings';
import CountryPicker from 'react-native-country-picker-modal';
import CustomTextInput from '../../../components/customTextInput';
import { GradientButton } from '../../../components/cta';
import { rhp } from '../../../constants/dimensions';
import { navigate } from '../../../navigator/navigationRef';
import ProgressBar from '../../../components/progressBar';
import { setUserData } from '../../../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const PhoneInputScreen = ({ navigation }) => {
  const [country, setCountry] = useState({ cca2: 'NG', callingCode: ['234'], });
  const dispatch = useDispatch();
  const [phone, setPhoneState] = useState('');
  const onSelectCountry = country => { setCountry(country); };
  const [loading, setLoading] = useState(false)
  const isPhoneNumberFilled = phone.length > 0;

  const user = useSelector((state) => state.userRegistration.userData);
  console.log("🚀 ~ PhoneInputScreen ~ user:", user)


  const handleSubmit = () => {
    let updatedUserData = {
      ...user,
      phone: phone
    }
    dispatch(setUserData(updatedUserData));
    console.log("🚀 ~ handleSubmit ~ user data dispatched:", { updatedUserData });
    if (isPhoneNumberFilled) {
      navigate(ScreenNames.OTPScreen, {
        phone,
        countryCode: country.callingCode[0],
      });
    }
    console.log("🚀 ~ handleSubmit ~ UserPhone:", phone)
  };

  return (
    <View style={styles.container}>
      <AppBar start={2} end={5} onPress={() => navigation.goBack()} />
      <ProgressBar prevState={20} nextState={40} />
      <Text style={styles.title}>{Strings.yourMobileNum} </Text>
      <Text style={styles.subTitle}>{Strings.useAsAccNum} </Text>
      <View style={styles.countryCodePhnRow}>
        <View style={styles.countryCol}>
          <Text style={styles.countryHeading}>{Strings.country}</Text>
          <View style={styles.countryInsideRow}>
            <CountryPicker
              countryCode={country.cca2}
              onSelect={onSelectCountry}
              withFlag
              hideCountryName
              withFilter
              withCountryNameButton={false}
              containerButtonStyle={styles.containerBtnStyle}
            />
            <Text style={styles.countryCode}>{`+${country.callingCode ? country.callingCode[0] : ''
              }`}</Text>
            <View>
            </View>
          </View>
        </View>
        <CustomTextInput
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhoneState}
          style={[styles.inputStyle, { marginTop: rhp(2) }]}
        />
      </View>

      <View style={styles.bottomContent}>
        <Text style={styles.agreementText}>{Strings.agreementMsg}</Text>
        <GradientButton
          loaderLoading={loading}
          buttonText={Strings.submit}
          style={styles.btnStyle(isPhoneNumberFilled)}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default PhoneInputScreen;
