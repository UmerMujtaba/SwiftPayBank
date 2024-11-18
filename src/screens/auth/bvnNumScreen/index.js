import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert, Platform, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import ProgressBar from "../../../components/progressBar";
import AppBar from "../../../components/appBar";
import { ScreenNames, Strings } from "../../../constants/strings";
import CustomTextInput from "../../../components/customTextInput";
import { GradientButton } from "../../../components/cta";
import { images } from "../../../assets/images";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { colors } from "../../../constants/colors";
import { rhp, rwp } from "../../../constants/dimensions";
import fonts from "../../../constants/fonts";
import { navigate } from "../../../navigator/navigationRef";
import { setUserData } from "../../../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";


const BVNVerifyScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const [bvn, setBvnState] = useState('');
    const [formattedBvn, setFormattedBvn] = useState('');
    const [otpCode, setOtpCode] = useState(null);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');
    const CELL_COUNT = 6;
    const isValid = bvn.length === 12;
    const [results, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [validation, setValidation] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);


    const user = useSelector((state) => state.userRegistration.userData);
    console.log("🚀 ~ BVNVerifyScreen ~ user:", user)


    const formatBvn = (bvn) => {
        if (!bvn) return '';
        const lastFour = bvn.slice(-4);
        return `**** **** ${lastFour}`;
    };

    const handleSubmit = () => {
        setLoading(true);
        console.log("🚀 ~ handleSubmit ~ handleVerfiyBVN:")
        if (validation) {
            console.log("🚀 ~ handleSubmit ~ validation:", validation)
            setTimeout(() => {
                setLoading(false);
                setIsSubmitted(true);
                navigation.navigate(ScreenNames.thankYouScreen);
            }, 2000);
            return
        }
        if (isValid) {
            let updatedUserData = {
                ...user,
                bvn: bvn,
            };
            dispatch(setUserData(updatedUserData));
            console.log("🚀 ~ handleSubmit ~ updatedUserData:", updatedUserData)
            console.log("🚀 ~ handleSubmit ~ bvn:", bvn)
            const formatted = formatBvn(bvn);
            setFormattedBvn(formatted);
            setTimeout(() => {
                setLoading(false);
                Alert.alert('BVN Submitted Successfully!', `Your formatted BVN is: ${formatted}`);
                // navigate(ScreenNames.topUpUsingCardScreenStep4, { obj });
            }, 2000);
            setValidation(true);
            setIsSubmitted(true);
            console.log("🚀 ~ handleSubmit ~ handleSubmit:", isSubmitted)
        }
           

        else {
            Alert.alert('Fill required data');
            setTimeout(() => {
                setLoading(false);
                // navigate(ScreenNames.topUpUsingCardScreenStep4, { obj });
            }, 1000);
        }
    };

    return (
        <View style={styles.container}>
            <AppBar start={5} end={5} onPress={() => navigation.goBack()} />
            <ProgressBar
                prevState={80} nextState={100}
                style={{ borderBottomLeftRadius: 8, borderBottomTopRadius: 8 }}
            />
            {validation ? (
                <>
                    <Text style={styles.title}>{Strings.bvnConfirmation}</Text>
                    <Text style={styles.subTitle}>{`Please enter the code we sent to ${formattedBvn || formatBvn(bvn)}`}</Text>
                </>
            ) : (
                <>
                    <Text style={styles.title}>{Strings.verifyYourDetails}</Text>
                    <Text style={styles.subTitle}>{Strings.toVerifyYourIdentityWeNeedYouTo}</Text>
                </>
            )}

            {validation ? (
                <View style={styles.otpContainer}>
                    <CodeField
                        ref={ref}
                        {...results}
                        caretHidden={false}
                        value={value}
                        onChangeText={text => {
                            setValue(text);
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
                                    onLayout={getCellOnLayoutHandler(index)}
                                >
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            </View>
                        )}
                    />
                </View>
            ) : (
                <View style={styles.body}>
                    <CustomTextInput
                        placeholder={'BVN'}
                        keyboardType="numeric"
                        returnKeyType="next"
                        value={bvn}
                        onChangeText={setBvnState}
                        style={styles.inputStyle}
                        maxLength={12}
                    />
                </View>
            )}

            {validation && (
                <View style={styles.bottomTextRow}>
                    <Text style={styles.codeText}>{Strings.codeReceive}</Text>
                    <TouchableOpacity>
                        <Text
                            style={[
                                styles.codeText,
                                {
                                    color: colors.primary,
                                    marginLeft: rwp(4),
                                    fontFamily: fonts.SF_PRO_TEXT.PlusJakartaSans.SemiBold,
                                },
                            ]}
                        >
                            {Strings.resendCode}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
            <View style={styles.bottomContent}>
                {!validation && <Image source={images.bvnGuidelineImage} style={styles.lockImg} />}
                <GradientButton
                    //loaderLoading={loading}
                    buttonText={isValid ? 'Submit' : 'Verify BVN'}
                    style={styles.btn(isValid)}
                    onPress={handleSubmit}
                />
            </View>
        </View>
    );
};

export default BVNVerifyScreen;
