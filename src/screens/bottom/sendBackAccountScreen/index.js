import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { images } from '../../../assets/images'
import ScreenHeader from '../../../components/header'
import CustomTextInput from '../../../components/customTextInput'
import DropDownPicker from 'react-native-dropdown-picker'
import { navigate } from '../../../navigator/navigationRef'
import { GradientButton } from '../../../components/cta'
import { colors } from '../../../constants/colors'
import { Banks, ScreenNames, Strings } from '../../../constants/strings'
import Card from '../../../components/card'
import { setCardsData } from "../../../redux/slices/cardSlice";
import { useDispatch } from "react-redux";


const SendBankAccountScreen = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(Banks);
    const [accountNum, setAccountNum] = useState('')
    const [beneficiaryName, setBeneficiaryName] = useState('')
    const [amount, setAmount] = useState('')
    const [remarks, setRemarks] = useState('')
    const [loaderLoading, setLoaderLoading] = useState(false);
    const [showTile, setShowTile] = useState(false);
    const [selectedBank, setSelectedBank] = useState(null);
    const dispatch = useDispatch();



    const allOptions = value && accountNum && beneficiaryName;


    
    console.log("🚀 ~ SendBankAccountScreen ~ setItems:", JSON.stringify(items))
    const handleContinuePress = () => {
        setLoaderLoading(true);
        setTimeout(() => {
            // dispatch(setCardsData({ selectedBank, beneficiaryName, amount ,accountNum}));
            setLoaderLoading(false);
            setShowTile(true);
        }, 1000);

        console.log("🚀 ~ SendBankAccountScreen ~ beneficiaryName:", beneficiaryName)
        console.log("🚀 ~ SendBankAccountScreen ~ amount:", amount)
        console.log("🚀 ~ handleContinuePress ~ selectedBank:", selectedBank)
        console.log("🚀 ~ SendBankAccountScreen ~ accountNum:", accountNum)
    };

    const handleSubmitPress = () => {
        const bankName = selectedBank.label;
        setLoaderLoading(true);
        let cardsData ={
            bankName:bankName,
            beneficiaryName:beneficiaryName,
            amount:amount,
            accountNum:accountNum
        }
        setTimeout(() => {
            dispatch(setCardsData( cardsData));
            console.log("🚀 ~ setTimeout ~ setCardsData:", cardsData)
            setLoaderLoading(false);
        }, 1000); 

        let obj = {
            beneficiaryName,
            amount,
            bankName,
            accountNum
        }
        console.log("🚀 ~ handleSubmitPress ~ obj:", obj)
        navigate(ScreenNames.passcodeScreen, { obj })
        console.log("🚀 ~ SendBankAccountScreen ~ beneficiaryName:", beneficiaryName)
        console.log("🚀 ~ SendBankAccountScreen ~ amount:", amount)
        console.log("🚀 ~ handleContinuePress ~ selectedBank:", selectedBank.label)
        console.log("🚀 ~ SendBankAccountScreen ~ accountNum:", accountNum)
    };

    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <ScreenHeader title={'Send to Bank Account'} onPress={() => navigation.goBack()} imageSource={images.leftArrow} />
                <Card/>
                <View style={styles.body}>
                    {showTile ? (
                        <>
                            <TouchableOpacity style={styles.tileStyle} onPress={() => setShowTile(false)}>
                                <View style={styles.tileCol}>
                                    <Image source={selectedBank.img} style={styles.tileImg} />
                                    <View style={styles.tileTextContainer}>
                                        <Text style={styles.tileText}>{beneficiaryName}</Text>
                                        <Text style={styles.tileSubText}>{accountNum}</Text>
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
                                placeholder='Account Number'
                                keyboardType='numeric'
                                onChangeText={setAccountNum}
                                value={accountNum}
                            />
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                //setItems={setItems}
                                placeholder="Bank"
                                style={styles.dropdown}
                                dropDownContainerStyle={styles.dropdownContainer}
                                listItemLabelStyle={styles.listItemLabel}
                                labelStyle={styles.label}
                                selectedItemLabelStyle={styles.selectedLabel}
                                itemSeparator
                                itemSeparatorStyle={styles.separator}
                                showArrowIcon
                                placeholderStyle={styles.placeholderStyling}
                                onSelectItem={(item) => setSelectedBank(item)}
                            />
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
                                buttonText={loaderLoading ? Strings.loading : Strings.continue}
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
export default SendBankAccountScreen