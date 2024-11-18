import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import ScreenHeader from '../../../components/header'
import { images } from '../../../assets/images'
import { GradientIconButton, PlainButton } from '../../../components/cta'
import { ScreenNames, Strings } from '../../../constants/strings'
import { navigate } from '../../../navigator/navigationRef'

const SuccessScreen = ({ navigation, route }) => {
    const AccDetails = route.params.details;
    console.log("🚀 ~ SuccessScreen ~ AccDetails:", AccDetails)

    const handleDownloadPress = () => {
        const currentTime = new Date().toLocaleString(); 
        console.log("Button pressed at:", currentTime);

        navigate(ScreenNames.DownloadScreen, { pressedTime: currentTime });
      };


    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <ScreenHeader onPress={() => navigation.goBack()} imageSource={images.leftArrow}/>
                <View style={styles.body}>

                    <Image source={images.successImage} style={styles.tickImg} />
                    <Text style={styles.successMsg}>{Strings.transferSuccess}</Text>


                    <Text style={styles.transferAmount}>
                        {`You have successfully transferred ₦ ${AccDetails.amount}`}
                    </Text>
                    <Text style={styles.bankNameAndAcc}>
                        {`Bank Name: ${AccDetails.bankName}`}
                    </Text>
                    <Text style={styles.bankNameAndAcc}>
                        {AccDetails.accountNum ? `${AccDetails.accountNum}`:`${AccDetails.alias}`}
                    </Text>
                    <GradientIconButton
                        buttonText={Strings.share}
                        imageSource={images.shareIcon}
                        imgStyle={styles.imgShare}
                        style={styles.shareBtn}
                    />

                    <PlainButton
                        buttonText={Strings.download}
                        imageSource={images.downloadIcon}
                        imgStyle={styles.imgShare}
                        style={styles.downloadBtn}
                        onPress={handleDownloadPress}
                    />
                </View>
            </View>
        </View>
    )
}
export default SuccessScreen