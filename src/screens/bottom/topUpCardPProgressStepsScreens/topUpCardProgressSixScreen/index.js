import React, { useState } from "react"
import { Text, View, TouchableOpacity, Image } from "react-native"
import { styles } from "./styles"
import ScreenHeader from "../../../../components/header";
import { GradientButton, GradientIconButton } from "../../../../components/cta"
import { navigate } from "../../../../navigator/navigationRef"
import { images } from "../../../../assets/images"
import { ScreenNames, Strings } from "../../../../constants/strings"

const TopUpCardProgressStepSixScreen = ({ navigation, route }) => {
    const { obj } = route.params;
    const [loading, setLoading] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <ScreenHeader onPress={() => navigate(ScreenNames.Home)} imageSource={images.crossIcon} />
                <View style={styles.body}>
                    <Image source={images.successImage} style={styles.checkImg} />
                    <Text style={styles.successMsg}>{Strings.transferSuccess}</Text>
                    <Text style={styles.transferAmount}>
                        {`₦ ${obj.amount} has been added to\nyour account.`}
                    </Text>
                    <GradientIconButton
                        buttonText={Strings.share}
                        imageSource={images.shareIcon}
                        imgStyle={styles.imgShare}
                        style={styles.shareBtn}
                    />
                </View>
            </View>
        </View>
    )
}

export default TopUpCardProgressStepSixScreen