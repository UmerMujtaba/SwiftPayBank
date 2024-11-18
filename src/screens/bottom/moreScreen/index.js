import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import ModalHeader from '../../../components/modalHeader'
import { images } from '../../../assets/images'
import { Strings } from '../../../constants/strings'
import ItemTile from '../../../components/itemTitle'
import { height, rfs, rhp } from '../../../constants/dimensions'
import { useSelector } from 'react-redux'

const MoreScreen = () => {
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
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <ScrollView>
          <View style={styles.topBar}>
            <Text style={styles.headerTitle}>More</Text>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.avatarContainer}>
              <Image source={images.userIcon} style={styles.avatarImg} />
            </View>
            <Text style={styles.nameStyle}>{userName? {userName}: 'Victor Jim'}</Text>
            <Text style={styles.accNoStyle}>{`Account Number: ${Strings.userAccNum}`}</Text>
          </View>
          <View style={styles.accContainer}>
            <Text style={styles.accHeading}>{Strings.account}</Text>

            <ItemTile title={Strings.personalDetails} img />
            <ItemTile title={Strings.transactionHistory} img />
            <ItemTile title={Strings.privacy} img />
          </View>

          <View style={styles.accContainer}>
            <Text style={styles.accHeading}>{Strings.support}</Text>

            <ItemTile title={Strings.support} img />
            <ItemTile title={Strings.featureRequest} img />
            <ItemTile title={Strings.status} verify />
          </View>


          <View style={[styles.accContainer,{paddingBottom:0}]}>
            <Text style={styles.accHeading}>{Strings.referAndEarn}</Text>

            <ItemTile title={Strings.points} logo style={{ fontSize: rfs(15),lineHeight:20 }} styleContainer={{ height: rhp(56) }} />
          </View>

          <TouchableOpacity style={styles.logoutContainer}>
            <Text style={styles.logoutText}>{Strings.logoutText}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}
export default MoreScreen