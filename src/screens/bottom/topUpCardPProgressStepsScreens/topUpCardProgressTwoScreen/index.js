import React, { useState } from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { GradientButton } from "../../../../components/cta"
import { images } from "../../../../assets/images"
import { styles } from "./styles"
import ScreenHeader from "../../../../components/header";
import { ScreenNames } from "../../../../constants/strings"
import { navigate } from "../../../../navigator/navigationRef"


const TopUpCardProgressStepTwoScreen = ({ navigation,route }) => {
    const {amount} = route.params;
    const [loading, setLoading] = useState(false);


    const handleContinuePress = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate(ScreenNames.topUpUsingCardScreenStep3, { amount })
        }, 1000);

        
    };
    return (

        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <ScreenHeader title={'Top-up using Card'} onPress={() => navigation.goBack()} imageSource={images.leftArrow}/>
                <View style={styles.body}>
                    <View style={styles.amountContainer}>
                        <Text style={styles.totalAmount}>$ {amount}.00</Text>
                    </View>
                    <TouchableOpacity style={styles.cardTile}>
                        <View style={styles.roundContainer}>
                            <Image source={images.cardOutlinedIcon} style={styles.cardImg} />
                        </View>
                        <Text style={styles.cardText}>No card available</Text>
                    </TouchableOpacity>
                    <GradientButton
                    loaderLoading={loading}
                        buttonText={'Add new card'}
                        style={styles.addBtn}
                        onPress={handleContinuePress}
                    />
                </View>
            </View>
        </View>
    )
}

export default TopUpCardProgressStepTwoScreen