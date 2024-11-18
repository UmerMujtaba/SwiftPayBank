import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { rfs, rhp } from "../../../constants/dimensions";
import fonts from "../../../constants/fonts";
import { colors } from "../../../constants/colors";
import { navigate, navigateReset } from "../../../navigator/navigationRef";
import { ScreenNames, Strings } from "../../../constants/strings";
import { useNavigation } from "@react-navigation/native";

const ThankYouScreen = () => {
    const [loaderLoading, setLoaderLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(()=> {
        setTimeout(()=> {
            setLoaderLoading(false);
            navigateReset(ScreenNames.WelcomingScreen)
        },3000)
    },[])
    
    return (
        <View style={styles.loaderContainer}>
            {loaderLoading ? (
                <>
                    <ActivityIndicator size={'large'} color={'grey'} style={{ marginBottom: rhp(12) }} animating={true} />
                    <Text style={styles.thankYou}>{Strings.thankYouText}</Text>
                    <Text style={styles.timeAndRestartText}>{Strings.timeText}</Text>
                    <Text style={styles.timeAndRestartText}>{Strings.restartText}</Text>
                </>
            ) : null}
        </View>
    )
}

export default ThankYouScreen


const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    thankYou: {
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Bold,
        fontSize: rfs(16),
        color: colors.blacK,
        marginBottom: rhp(8)
    },
    timeAndRestartText: {
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
        fontSize: rfs(15),
        color: colors.grey
    },

})