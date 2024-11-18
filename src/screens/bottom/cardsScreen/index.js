import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { images } from '../../../assets/images';
import ScreenHeader from '../../../components/header';
import { Strings } from '../../../constants/strings';
import { useSelector } from 'react-redux';

const CardScreen = ({ navigation }) => {
  const cardsData = useSelector((state) => state.cards.cardsData);
  console.log("🚀 ~ CardScreen ~ cardsData:", cardsData);

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <ScreenHeader title={'Card Screen'} onPress={() => navigation.goBack()} imageSource={images.leftArrow} />

        {cardsData.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Image source={images.inProgressImage} style={styles.imgStyle} />
            <Text style={styles.heading}>{Strings.underProgressMsg}</Text>
          </View>
        ) : (

          <View style={styles.cardContainer}>
            <Text style={styles.cardDataHeading}>Added cards:</Text>
            {cardsData.map((card, index) => (
              <View key={index} style={styles.tileContainer}>
                <Text style={styles.bankName}>{card.bankName}</Text>
                <Text style={styles.accName}>{`Beneficiary Name: ${card.beneficiaryName}`}</Text>
                <Text style={styles.accNo}>{`Account No: ${card.accountNum}`}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default CardScreen;

