import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import fonts from '../constants/fonts';
import { rhp, rwp } from '../constants/dimensions';
import { colors } from '../constants/colors';

export const GradientButton = ({ onPress, buttonText, style,loaderLoading }) => {
  return (
    <TouchableOpacity
      style={[styles.gradientBtn, style]}
      onPress={onPress}
      activeOpacity={0.7}>
      {loaderLoading ? <ActivityIndicator color="#fff" /> :
        <Text style={styles.btnGradientTxt}>{buttonText}</Text>
      }
    </TouchableOpacity>
  );
};

export const PlainButton = ({ onPress, buttonText, style, imageSource, imgStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.plainBtn, style]}
      onPress={onPress}
      activeOpacity={0.4}>
      <Image source={imageSource} style={imgStyle} />
      <Text style={styles.btnPlnTxt}>{buttonText}</Text>
    </TouchableOpacity>
  );
};



export const GradientIconButton = ({ onPress, buttonText, style, imageSource, imgStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.gradientIcon, style]}
      onPress={onPress}
      activeOpacity={0.4}>
      <Image source={imageSource} style={imgStyle} />
      <Text style={styles.gradientIconTxt}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradientBtn: {
    width: rwp(204),
    height: rhp(58),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: colors.gradientColor1,
  },
  btnGradientTxt: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
  },


  plainBtn: {
    width: rwp(119),
    height: rhp(58),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  btnPlnTxt: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
  },

  gradientIcon: {
    flexDirection: 'row',
    width: rwp(204),
    height: rhp(58),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: colors.gradientColor1,
  },
  gradientIconTxt: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '500',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
  },
});
