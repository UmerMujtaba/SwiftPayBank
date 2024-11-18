import React, { useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import ScreenHeader from "../../../../components/header";
import CustomTextInput from "../../../../components/customTextInput"
import { GradientButton } from "../../../../components/cta"
import { navigate } from "../../../../navigator/navigationRef"
import { ScreenNames } from "../../../../constants/strings"
import DatePicker from "react-native-date-picker"
import { images } from "../../../../assets/images"

const TopUpCardProgressStepThreeScreen = ({ navigation, route }) => {
    const { amount } = route.params
    const [cardNum, setCardNum] = useState('');
    const [expiryDate, setExpiryDate] = useState(new Date());
    const [cvc, setCvc] = useState('');
    const [cardPin, setCardPin] = useState('')
    const [loading, setLoading] = useState(false);
    const [isSecureCheck, setIsSecureCheck] = useState(true);
    const [open, setOpen] = useState(false);

    const handleContinuePress = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);

            let obj = { cardNum, expiryDate, cvc, cardPin,amount, hideAmount:false };
            navigate(ScreenNames.topUpUsingCardScreenStep4, { obj })
        }, 1000);
    };

    const formatMonthYear = (date) => {
        const month = date.toLocaleString('default', { month: 'numeric' }); // Get month name
        const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year (e.g., 2024 -> "24")
        return `${month}/${year}`;
    };

    const handleConfirm = (date) => {
        setExpiryDate(date);
        setOpen(false);
    };
    const isButtonEnabled = amount.length > 0 && cardNum.length == 16 && cvc.length == 3 && cardPin.length == 4;
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <ScreenHeader title={'Top-up using Card'} onPress={() => navigation.goBack()} imageSource={images.leftArrow}/>
                <View style={styles.body}>
                    <View style={styles.amountContainer}>
                        <Text style={styles.totalAmount}>$ {amount}.00</Text>
                    </View>
                    <View style={styles.addCardContainer}>
                        <Text style={styles.heading}>Add debit card</Text>
                        <Text style={styles.subHeading}>Enter your card details</Text>
                        <Text style={styles.inputHeadingMain}>Card number</Text>
                        <CustomTextInput
                            placeholder="Card number"
                            keyboardType="numeric"
                            onChangeText={setCardNum}
                            value={cardNum}
                            style={styles.input}
                            maxLength={16}
                        />
                        <View style={styles.dataAndCvcContainer}>
                            <View>
                                <Text style={styles.inputHeading}>Expiry Date</Text>
                                <TouchableOpacity onPress={() => setOpen(true)} style={styles.dateContainer}>
                                    <Text style={styles.dateStyle}>
                                        {expiryDate ? formatMonthYear(expiryDate) : 'Select Expiry Date'}
                                    </Text>
                                </TouchableOpacity>
                                <DatePicker
                                    modal
                                    open={open}
                                    date={expiryDate}
                                    onConfirm={handleConfirm}
                                    onCancel={() => setOpen(false)}
                                    mode="date"
                                />
                            </View>
                            
                            <View>
                                <Text style={styles.inputHeading}>CVC </Text>
                                <CustomTextInput
                                    placeholder="CVC"
                                    keyboardType="numeric"
                                    onChangeText={setCvc}
                                    value={cvc}
                                    style={styles.inputContainer}
                                    maxLength={3}
                                />
                            </View>
                        </View>
                        <Text style={styles.inputHeading}>Card PIN</Text>
                        <CustomTextInput
                            placeholder="Card PIN"
                            keyboardType="numeric"
                            onChangeText={setCardPin}
                            value={cardPin}
                            style={styles.input}
                            secureTextEntry={isSecureCheck}
                            maxLength={4}
                        />
                    </View>


                    <GradientButton
                        loaderLoading={loading}
                        buttonText={'Continue'}
                        style={styles.btn(isButtonEnabled)}
                        onPress={handleContinuePress}
                    />
                </View>
            </View>
        </View>
    )
}

export default TopUpCardProgressStepThreeScreen