import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import { styles } from "./style";
import ScreenHeader from "../../../../components/header";
import { images } from "../../../../assets/images";
import { ScreenNames, Strings } from "../../../../constants/strings";
import CustomTextInput from "../../../../components/customTextInput";
import { GradientButton } from "../../../../components/cta";
import { navigate } from "../../../../navigator/navigationRef";

const TopUpCardProgressStepFiveScreen = ({ navigation, route }) => {
    const [cvc, setCvc] = useState('');
    const { obj } = route.params;
    const { cardNum } = obj;
    const [showToast, setShowToast] = useState(false);
    const [loading, setLoading] = useState(false)

    const showCustomToast = () => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
            setLoading(false);
        }, 2000); 
      
    };

    useEffect(() => {
        showCustomToast();  
    }, []);

    const formatCardNumber = (cardNum) => {
        if (cardNum.length === 16) {
            const firstPart = cardNum.slice(0, 8); 
            const lastPart = cardNum.slice(12, 16); 
            return `${firstPart}****${lastPart}`;
        }
        return cardNum;  
    };

    const isCvcEntered = cvc.length === 3;
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <ScreenHeader title={'Top-up using Card'} onPress={() => navigation.goBack()} imageSource={images.leftArrow}/>
                <View style={styles.body}>
                    <View style={styles.amountContainer}>
                        <Text style={styles.totalAmount}>$ {obj.amount}.00</Text>
                    </View>
                    <View style={styles.addCardContainer}>
                        <Text style={styles.heading}>Funding Method</Text>
                        <TouchableOpacity style={styles.tileStyle} onPress={() => setShowTile(false)}>

                            <View style={styles.tileCol}>
                                <Image source={images.alFalahBank} style={styles.tileImg} />
                                <View style={styles.tileTextContainer}>
                                    <Text style={styles.tileText}>United Bank for Africa</Text>
                                    <Text style={styles.tileSubText}>{formatCardNumber(cardNum)}</Text>
                                </View>
                            </View>
                            <View style={styles.changeRow}>
                                <Text style={styles.changeText}>{Strings.change}</Text>
                                <Image source={images.rightArrowIcon} style={styles.tileArrow} />
                            </View>
                        </TouchableOpacity>

                        <CustomTextInput
                            placeholder="CVC"
                            keyboardType="numeric"
                            onChangeText={setCvc}
                            value={cvc}
                            style={styles.inputContainer}
                            maxLength={3}
                        />
                        <Image source={images.infoPicture} style={styles.infoImg} />

                        <GradientButton
                            loaderLoading={loading}
                            buttonText={'Add Money'}
                            style={styles.btn(isCvcEntered)}
                           onPress={() => navigate(ScreenNames.topUpUsingCardScreenStep4,{obj:{...obj, hideAmount:true}})}
                        />
                    </View>
                </View>
            </View>
            {showToast && (
                <Modal transparent={true} animationType="fade" visible={showToast}>
                    <View style={styles.toastContainer}>
                        <View style={styles.toast}>
                            <Image source={images.checkFilledIcon} style={styles.tickImg} />
                            <Text style={styles.toastText}>New Card Added!</Text>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    )
}

export default TopUpCardProgressStepFiveScreen