import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import ProgressBar from "../../../components/progressBar";
import AppBar from "../../../components/appBar";
import { Strings } from "../../../constants/strings";
import DialPad from "../../../components/passcodeInput";


const CreatePasscodesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppBar start={3} end={5} onPress={() => navigation.goBack()} />
            <ProgressBar
                prevState={60} nextState={60}
                style={{ borderBottomLeftRadius: 8, borderBottomTopRadius: 8 }}
            />
            <Text style={styles.title}>{Strings.createYourPassword} </Text>
            <Text style={styles.subTitle}>{Strings.thisWillBeUsedForLoggingInAndAccessYourApp} </Text>
            <View style={styles.body}>
            <DialPad />
            </View>
        </View>

    )
}
export default CreatePasscodesScreen

