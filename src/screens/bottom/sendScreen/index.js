import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import ScreenHeader from '../../../components/header'
import { images } from '../../../assets/images'
import { Strings } from '../../../constants/strings'

const SendScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <ScreenHeader title={'Send Screen'} onPress={() => navigation.goBack()} imageSource={images.leftArrow}/>
                <View style={styles.body}>
                <Image source={images.inProgressImage} style={styles.imgStyle} />
                    <Text style={styles.heading}>{Strings.underProgressMsg}</Text>
                
                
                </View>
            </View>
        </View>
    )
}
export default SendScreen