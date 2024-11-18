import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';
import ScreenHeader from '../../../components/header';
import { images } from '../../../assets/images';
import { styles } from './styles';
import { Strings } from '../../../constants/strings';

const InvestScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <ScreenHeader title={'Invest Screen'} onPress={() => navigation.goBack()} imageSource={images.leftArrow} />
        <View style={styles.body}>
          <Image source={images.inProgressImage} style={styles.imgStyle} />
          <Text style={styles.heading}>{Strings.underProgressMsg}</Text>
        </View>
      </View>
    </View>
  )
}

export default InvestScreen;
