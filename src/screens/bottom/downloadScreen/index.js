import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import ScreenHeader from "../../../components/header";
import { images } from "../../../assets/images";
import { useRoute } from "@react-navigation/native";
import { colors } from "../../../constants/colors";
import fonts from "../../../constants/fonts";
import TransferTileTextContainer from "../../../components/transferTileTextContainer";
import { Strings } from "../../../constants/strings";


const ReceiptDownloadScreen = ({ navigation }) => {
    const route = useRoute(); // Get route params
    const pressedTime = route.params?.pressedTime; // Extract time from route params



    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <ScreenHeader
                    title={'Download receipt'}
                    onPress={() => navigation.goBack()}
                    imageSource={images.leftArrow}
                    imageSource2={images.shareBlackIcon}
                />
                <View style={styles.body}>
                    <View style={styles.receiptContainer}>
                        <View style={styles.header}>
                            <Image source={images.bankIcon} style={styles.bankImg} />
                            <Text style={styles.bankName}>{Strings.bankName}</Text>
                        </View>
                        <Text style={styles.receipt}>{Strings.transactionReceipt}</Text>
                    </View>
                    <View style={styles.mainContainer}>
                        <Text style={styles.timeText}>{Strings.generatedFromSwiftPayBankOn} {pressedTime}</Text>
                        <TransferTileTextContainer headingText={'Transaction Amount'} subHeadingText={'$50000.00'} />
                        <TransferTileTextContainer headingText={'Transaction Type'} subHeadingText={'INTER-BANK'} />
                        <TransferTileTextContainer headingText={'Transaction Date'} subHeadingText={pressedTime} />
                        <TransferTileTextContainer headingText={'Sender'} subHeadingText={'Victor Jim'} />
                        <TransferTileTextContainer headingText={'Benificiary'} subHeadingText={'15233532352'} />
                        <TransferTileTextContainer headingText={'Transaction Reference'} subHeadingText={'NG0120515151'} />
                        <View style={styles.textContainer}>
                            <Text style={styles.headingText}>{Strings.transferStatus}</Text>
                            <View style={styles.transferContainer}>
                                <Image source={images.tickGreenImage} style={styles.tickImg} />
                                <Text style={styles.subHeadingText}>{Strings.transferSuccessful}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ReceiptDownloadScreen