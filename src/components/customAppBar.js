import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../constants/colors';
import { images } from '../assets/images';
import { Strings } from '../constants/strings';
import { hp, rfs, rhp, rwp, wp } from '../constants/dimensions';
import fonts from '../constants/fonts';
import NotificationModal from './customNotificationModal';
import { useSelector } from 'react-redux';


const CustomAppBar = () => {
  const balance = '20,000,000';
  const [modalVisible, setModalVisible] = useState(false);
  const [isBalanceHidden, setIsBalanceHidden] = useState(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceHidden(!isBalanceHidden);
  };

  const userData = useSelector((state) => state.userRegistration.userData); // Access the user data
  const [firstName, setFirstName] = useState(userData?.firstName);
  const [lastName, setLastName] = useState(userData?.lastName);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (firstName && lastName) {
      setUserName(`${firstName} ${lastName}`);
    }
    console.log("🚀 ~ HomeScreen ~ userName:", userName)
  }, [firstName, lastName]);


  return (
    <LinearGradient
      colors={[colors.gradientColor1, colors.gradientColor2]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.appBarContainer}
    >
      <View style={styles.appBar}>
        <View style={styles.greetingRow}>
          <Image source={images.userCircledIcon} style={styles.userAppBarIcon} />
          <View style={styles.greetingCol}>
            <Text style={styles.greetingHeading}>{userName? `Hi, ${userName}` : 'Hi, Victor Jim'}</Text>
            <Text style={styles.greetingSubHeading}>{Strings.subGreeting}</Text>
          </View>
        </View>

        <View style={styles.iconsRow}>
          <TouchableOpacity onPress={toggleBalanceVisibility}>
          <Image
          source={
            isBalanceHidden
              ? images.eyeOpenIconWhite  // Icon for showing balance
              : images.eyeHideIconWhite  // Icon for hiding balance
          }
          style={styles.appBarIconStyle} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <NotificationModal visible={modalVisible} onClose={() => setModalVisible(false)}
              headingTitle={Strings.notifications}
              imageOne={images.crossIcon}
              imageTwo={images.bellRingIcon}
            />
            <Image source={images.bellWhiteIcon} style={styles.appBarIconStyle} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.totalTxt}>{Strings.totalText}</Text>

      <View style={styles.balanceRow}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={images.unitIcon} style={styles.unitIconStyle} />
          <Text style={styles.balanceAmount}>{isBalanceHidden ? '*'.repeat(balance.length) : balance}</Text>
        </View>

        <TouchableOpacity style={styles.appBarRoundedContainer}>
          <Image source={images.dotIcon} style={styles.dotStyle} />
        </TouchableOpacity>
      </View>

      <Text style={styles.updateText}>{Strings.updateText}</Text>

      <View style={styles.bottomNav}>
        <Text style={styles.bankName}>{Strings.bankName}</Text>
        <View style={styles.hiddenCircle} />
        <Image source={images.bankIcon} style={styles.bankIconStyle} />
      </View>
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  appBarContainer: {
    width: wp(100),
    paddingHorizontal: 20,
    paddingTop: 20
  },
  appBar: {
    marginTop: hp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  greetingRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userAppBarIcon: {
    resizeMode: 'contain',
    width: rwp(25),
    height: rhp(25),
    marginRight: rwp(8)
  },
  greetingCol: {
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  greetingHeading: {
    textAlignVertical: 'center',
    fontSize: rfs(15),
    fontWeight: '500',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    color: colors.white
  },
  greetingSubHeading: {
    textAlignVertical: 'center',
    fontSize: rfs(13),
    fontWeight: '400',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    color: 'rgba(255,255,255,0.6)',
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  appBarIconStyle: {
    resizeMode: 'contain',
    width: rwp(25),
    height: rhp(25),
    marginLeft: rwp(14)
  },
  totalTxt: {
    fontSize: rfs(13),
    fontWeight: '500',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    color: colors.white,
    marginTop: rhp(20)
  },
  balanceRow: {
    height: 34,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  unitIconStyle: {
    resizeMode: 'contain',
    width: rwp(20),
    height: rhp(28),
    marginRight: rwp(3),
    alignSelf: 'flex-end'
  },
  balanceAmount: {
    fontSize: rfs(28),
    fontWeight: '700',
    fontFamily: fonts.SF_PRO_TEXT.PlusJakartaSans.Regular,
    color: colors.white,
    textAlignVertical: 'center'
  },
  appBarRoundedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: rwp(28),
    height: rhp(28),
    borderRadius: 50,
    backgroundColor: '#3a679d'
  },
  dotStyle: {
    resizeMode: "contain",
    width: rwp(25),
    height: rhp(25)
  },
  updateText: {
    fontSize: rfs(12),
    fontWeight: '500',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    color: 'rgba(255,255,255,0.6)',
    marginTop: rhp(6)
  },
  bankName: {
    fontWeight: '700',
    fontSize: rfs(12),
    color: colors.white,
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
  },
  bottomNav: {
    backgroundColor: 'rgb(38,88,149)',
    marginTop: rhp(20),
    height: rhp(55),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingHorizontal: rwp(19),
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    overflow: 'hidden'
  },
  hiddenCircle: {
    backgroundColor: 'rgb(34,78,134)',
    height: rhp(290),
    width: rwp(290),
    borderRadius: 165,
    zIndex: 0,
    position: "absolute",
    right: -120,
    top: -20
  },
  bankIconStyle: {
    resizeMode: 'contain',
    height: rhp(30),
    width: rwp(30),
  },


})
export default CustomAppBar;
