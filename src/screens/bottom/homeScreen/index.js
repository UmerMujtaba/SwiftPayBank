import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { images } from '../../../assets/images'
import { Strings } from '../../../constants/strings'
import CustomAppBar from '../../../components/customAppBar'
import OptionContainer from '../../../components/optionContainer'
import AccessItemContainer from '../../../components/accessItemContainer'
import OptRoundedContainer from '../../../components/optRoundedContainer'
import { height, rhp, rwp } from '../../../constants/dimensions'
import CustomListTile from '../../../components/customListTile'
import { useSelector } from 'react-redux'


const data = [
  { id: '1', title: Strings.addMoney, imageSource: images.coinPic },
  { id: '2', title: Strings.createCard, imageSource: images.cardPic },
  { id: '3', title: Strings.earnInvite, imageSource: images.cashPic },
];


const HomeScreen = ({ route }) => {
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <CustomAppBar />
      <ScrollView>
        <OptionContainer />
        <View style={{ paddingHorizontal: 20, }}>
          <Image source={images.linePic} style={styles.lineStyle} />
          <Text style={styles.startTxt}>{Strings.getStarted}</Text>
          {data.map((item) => (
            <CustomListTile
              key={item.id}
              title={item.title}
              imageSource={item.imageSource}
              subTitle={Strings.getMore}
            />
          ))}
          <View style={{ paddingTop: 20 }}>
            <Text style={styles.quickHeading}>{Strings.quickAccess}</Text>
            <AccessItemContainer />
          </View>
          <View style={styles.transactionContainer}>
            <Text style={[styles.quickHeading, styles.todayTxtStyle]}>{Strings.today}</Text>
            <View style={styles.transactionsRow}>
              <OptRoundedContainer
                style={{ width: rwp(45), height: rhp(45) }}
                imageSource={images.recentIcon} />
              <Text style={styles.transactionText}>{Strings.noTransactions}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen