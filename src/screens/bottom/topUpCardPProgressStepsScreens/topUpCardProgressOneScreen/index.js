import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import ScreenHeader from "../../../../components/header";
import CustomTextInput from "../../../../components/customTextInput";
import { GradientButton } from "../../../../components/cta";
import { navigate } from "../../../../navigator/navigationRef";
import { ScreenNames } from "../../../../constants/strings";
import { images } from "../../../../assets/images";

const TopUpCardProgressStepOneScreen = ({ navigation }) => {
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);

    const isButtonEnabled = amount.length > 0;

    const handleContinuePress = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate(ScreenNames.topUpUsingCardScreenStep2, { amount })
        }, 1000);

       
    };
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>

                <ScreenHeader title={'Top-up using Card'} onPress={() => navigation.goBack()}imageSource={images.leftArrow} />
                <View style={styles.body}>
                    <CustomTextInput
                        placeholder="Amount"
                        keyboardType="numeric"
                        onChangeText={setAmount}
                        value={amount}
                        style={styles.input}
                    />
                    <View style={styles.tile}>
                        <View style={styles.tileInsideView}>
                            <Text style={styles.rememberText}>
                                For amount above N9,999.00{' '}
                            </Text>
                            <Text style={styles.clickText}> {'use bank transfer >>'}</Text>
                        </View>
                    </View>
                    <GradientButton
                        loaderLoading={loading}
                        buttonText={'Next'}
                        style={styles.btn(isButtonEnabled)}
                        onPress={handleContinuePress}
                    />
                </View>
            </View>
        </View>
    )
}

export default TopUpCardProgressStepOneScreen