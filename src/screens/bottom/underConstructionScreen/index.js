import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { images } from "../../../assets/images";
import ScreenHeader from "../../../components/header";
import { Strings } from "../../../constants/strings";

const UnderConstructionScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <ScreenHeader title={'In Progress'} onPress={() => navigation.goBack()} imageSource={images.crossIcon} />
                <View style={styles.body}>
                    <Image source={images.inProgressImage} style={styles.imgStyle} />
                    <Text style={styles.heading}>{Strings.underProgressMsg}</Text>
                </View>
            </View>
        </View>
    )
}

export default UnderConstructionScreen