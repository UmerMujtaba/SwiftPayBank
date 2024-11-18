import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import ScreenHeader from "../../../../components/header";
import { styles } from "./styles";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { GradientButton } from "../../../../components/cta";
import { navigate } from "../../../../navigator/navigationRef";
import { ScreenNames } from "../../../../constants/strings";
import { images } from "../../../../assets/images";

const TopUpCardProgressStepFourScreen = ({ navigation, route }) => {
    const obj = route?.params.obj
    const [otpCode, setOtpCode] = useState(null);
    const CELL_COUNT = 6;
    const [value, setValue] = useState('');
    const [results, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const isOtpComplete = value.length === CELL_COUNT;
    const [loading, setLoading] = useState(false);

    const handleContinuePress = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (!obj?.hideAmount) {
                navigate(ScreenNames.topUpUsingCardScreenStep5, { obj });
            } else {
                navigate(ScreenNames.topUpUsingCardScreenStep6, { obj });
            }

            setOtpCode('');
            setValue('')
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <ScreenHeader title={'Top-up using Card'} onPress={() => navigation.goBack()} imageSource={images.leftArrow} />
                <View style={styles.body}>
                    {!obj?.hideAmount &&
                        <View style={styles.amountContainer}>
                            <Text style={styles.totalAmount}>$ {obj.amount}.00</Text>
                        </View>
                    }
                    <View style={styles.addCardContainer}>
                        <Text style={styles.heading}>Enter OTP Code</Text>
                        <Text style={styles.subHeading}>Enter the 6-digit OTP code sent to your mobile number.</Text>
                    </View>
                    <View style={styles.otpContainer}>
                        <CodeField
                            ref={ref}
                            {...results}
                            caretHidden={false}
                            value={value}
                            onChangeText={text => {
                                setValue(text)
                                setOtpCode(text);
                            }}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            autoComplete={Platform.select({
                                android: 'sms-otp',
                                default: 'one-time-code',
                            })}
                            testID="my-code-input"
                            renderCell={({ index, symbol, isFocused }) => (
                                <View style={styles.cell}>
                                    <Text
                                        key={index}
                                        style={[styles.cellText]}
                                        onLayout={getCellOnLayoutHandler(index)}>
                                        {symbol || (isFocused ? <Cursor /> : null)}
                                    </Text>
                                </View>
                            )}
                        />
                    </View>
                    <GradientButton
                        loaderLoading={loading}
                        buttonText={'Continue'}
                        style={styles.btn(isOtpComplete)}
                        onPress={handleContinuePress}
                    />
                </View>
            </View>
        </View>
    )
}

export default TopUpCardProgressStepFourScreen