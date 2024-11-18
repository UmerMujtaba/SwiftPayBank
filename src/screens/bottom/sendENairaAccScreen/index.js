import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenHeader from '../../../components/header'
import { GradientButton } from '../../../components/cta'
import CustomTextInput from '../../../components/customTextInput'
import DropDownPicker from 'react-native-dropdown-picker'
import { ScreenNames, Strings } from '../../../constants/strings'
import { styles } from '../sendBackAccountScreen/styles'
import { images } from '../../../assets/images'
import Card from '../../../components/card'
import { colors } from '../../../constants/colors'
import { navigate } from '../../../navigator/navigationRef'

const SendENairaAccScreen = ({navigation}) => {
    const [showTile, setShowTile] = useState(false);
    const [alias, setAlias] = useState('');
    const [beneficiaryName, setBeneficiaryName] = useState('');
    const [loaderLoading, setLoaderLoading] = useState(false);
    const [amount, setAmount] = useState('')
    const [remarks, setRemarks] = useState('')
    const [bankName,setBankName]=useState('');

    const handleContinuePress = () => {
        setBankName('eNaira');
        console.log("🚀 ~ SendBankAccountScreen ~ beneficiaryName:", beneficiaryName)
        console.log("🚀 ~ SendBankAccountScreen ~ amount:", alias)

        setLoaderLoading(true);
        setTimeout(() => {
            setLoaderLoading(false);
            setShowTile(true);
        }, 1000);
    };

    const handleSubmitPress = () => {
        console.log("🚀 ~ SendBankAccountScreen ~ beneficiaryName:", beneficiaryName)
        console.log("🚀 ~ SendBankAccountScreen ~ amount:", amount)
        console.log("🚀 ~ SendENairaAccScreen ~ bankName:", bankName)

        setLoaderLoading(true);
        setTimeout(() => {
            setLoaderLoading(false);
        }, 1000);

        let obj = {
            alias,
            amount,
            bankName
        }
        console.log("🚀 ~ handleSubmitPress ~ obj:", obj)
        
        navigate(ScreenNames.passcodeScreen, { obj })
    };

    const allOptions = alias && beneficiaryName;

    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>

                <ScreenHeader title={'Send to eNaira Account'} onPress={() => navigation.goBack()} imageSource={images.leftArrow}/>

               <Card/>

                <View style={styles.body}>
                    {showTile ? (
                        <>
                            <TouchableOpacity style={styles.tileStyle} onPress={() => setShowTile(false)}>

                                <View style={styles.tileCol}>
                                    <Image source={images.eNairaLogo} style={styles.tileImg} />
                                    <View style={styles.tileTextContainer}>
                                        <Text style={styles.tileText}>{beneficiaryName}</Text>
                                        <Text style={styles.tileSubText}>{alias}</Text>
                                    </View>
                                </View>
                                <View style={styles.changeRow}>
                                    <Text style={styles.changeText}>{Strings.change}</Text>
                                    <Image source={images.rightArrowIcon} style={styles.tileArrow} />
                                </View>
                            </TouchableOpacity>

                            <CustomTextInput
                                placeholder="Amount"
                                keyboardType="numeric"
                                onChangeText={setAmount}
                                value={amount}
                            />
                            <CustomTextInput
                                placeholder="Remarks (optional)"
                                keyboardType="default"
                                onChangeText={setRemarks}
                                value={remarks}
                            />

                            <GradientButton
                                buttonText={Strings.submit}
                                style={styles.btn(true)}
                                onPress={handleSubmitPress}
                            />
                        </>
                    ) : (
                        <>
                    <CustomTextInput
                        placeholder='eNaira Wallet allias'
                        keyboardType='numeric'
                        onChangeText={setAlias}
                        value={alias}
                    />
                    <Image source={images.infoImage} style={styles.infoText}/>

                    <CustomTextInput
                        placeholder={Strings.beneficiary}
                        keyboardType='default'
                        onChangeText={setBeneficiaryName}
                        value={beneficiaryName}
                        eye
                        eyeSource={images.searchIcon}
                        suffixIconStyle={styles.iconStyle}
                    />

                    <GradientButton
                        loaderLoading={loaderLoading}
                        buttonText={Strings.continue}
                        style={[styles.btn(allOptions), loaderLoading && { backgroundColor: colors.secondary }]}
                        onPress={handleContinuePress}
                    />
                    </>
                    )}
                </View>
            </View>
        </View>
    )
}

export default SendENairaAccScreen