import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import fonts from '../constants/fonts';
import { rfs, rhp, rwp } from '../constants/dimensions';
import { Strings } from '../constants/strings';
import { colors } from '../constants/colors';

const CustomCheckbox = ({ onPress, style, remember }) => {
  const [isChecked, setIsChecked] = useState(null);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    if (onPress) {
      onPress(!isChecked);
    }
  };

  return (
    <View style={[styles.checkboxContainer, style]}>
      <TouchableOpacity onPress={toggleCheckbox} activeOpacity={0.4}>
        <View style={[styles.checkbox, isChecked && styles.checked]}>
          {isChecked && <Text style={styles.tick}>✓</Text>}
        </View>
      </TouchableOpacity>
      {remember ? (
        <TouchableOpacity onPress={toggleCheckbox} activeOpacity={0.4}>
          <Text style={styles.label}>{Strings.rememberMe}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={toggleCheckbox} activeOpacity={0.4}>
          <Text style={styles.label}>
            {Strings.termsTextStart}
            <Text style={[styles.label, styles.termsText]}>
              {Strings.termsConditions}
            </Text>
            {Strings.and}
            <Text style={[styles.label, styles.termsText]}>
              {Strings.PrivacyPolicy}
            </Text>
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: rhp(5),
    
  },
  checkbox: {
    width: rwp(20),
    height: rhp(20),
    borderWidth: rwp(1),
    borderRadius: 4,
    backgroundColor: 'white',
    borderColor: colors.disabled,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rwp(12),
  },
  checked: {
    backgroundColor: colors.primary,
    borderColor: colors.disabled,
  },
  tick: {
    color: 'black',
    fontSize: rfs(12),
    textAlignVertical: 'center',
  },
  label: {
    fontSize: rfs(14),
    fontWeight: '500',
    color: 'black',
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    textAlign: 'auto',
    marginRight: rhp(20),
  },
  termsText: {
    color: colors.primary,
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
  },
});

export default CustomCheckbox;
