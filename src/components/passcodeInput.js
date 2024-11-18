import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Alert, ActivityIndicator } from 'react-native';
import { rfs, rhp, rwp, wp } from '../constants/dimensions';
import { colors } from '../constants/colors';
import fonts from '../constants/fonts';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../constants/strings';
import { navigate } from '../navigator/navigationRef';

const DialPad = ({ details }) => {
    console.log("🚀 ~ DialPad ~ details:", details)
    const [input, setInput] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const correctPin = '1234';  // The fixed PIN

    const handlePress = (number) => {
        if (input.length < 4) {
            const newInput = [...input, number];
            setInput(newInput);

            if (newInput.length === 4) {
                // Check if the entered PIN is correct
                checkPin(newInput.join(''));
            }
        }
    };

    const handleDelete = () => {
        setInput((prevInput) => prevInput.slice(0, -1));
    };
    const checkPin = (enteredPin) => {
        if (enteredPin === correctPin) {
            setIsLoading(true); // Show loading
            setTimeout(() => {
                setIsLoading(false); // Hide loading
                if (details) {
                    navigate(ScreenNames.successScreen, { details });
                }
                else {
                    navigate(ScreenNames.UserDataScreen);
                }
            }, 1000); // Adjust the timeout duration as needed
        } else {
            Alert.alert('Incorrect PIN', 'Please try again.');
            setInput([]); // Clear input if PIN is incorrect
        }
    };



    const renderCircle = (filled) => (
        <View style={[styles.circle, filled ? styles.circleFilled : styles.circleEmpty]} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={styles.circlesContainer}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <View key={index}>
                            {renderCircle(index < input.length)}
                        </View>
                    ))}
                </View>
            </View>
            <View style={styles.padContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={colors.gradientColor2} 
                    
                    // style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"red"}}
                    />
                ) : (
                    <>
                        {[['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']].map((row, rowIndex) => (
                            <View key={rowIndex} style={styles.row}>
                                {row.map((number) => (
                                    <TouchableOpacity key={number} style={styles.button} onPress={() => handlePress(number)}>
                                        <Text style={styles.buttonText}>{number}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ))}
                        <View style={styles.row}>
                            <TouchableOpacity style={styles.emptyButton} />
                            <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
                                <Text style={styles.buttonText}>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={handleDelete}>
                                <Text style={[styles.buttonText]}>{'<'}</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: rhp(30)
    },
    inputContainer: {
        width: wp(100),
        alignItems: 'center',
    },
    circlesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: rwp(110),
        marginBottom: rhp(30)
    },
    circle: {
        width: rwp(15),
        height: rhp(15),
        borderRadius: 7.5,
        borderWidth: 1.5,
        borderColor: colors.gradientColor2,
    },
    circleEmpty: {
        backgroundColor: '#fff',
    },
    circleFilled: {
        backgroundColor: colors.gradientColor2,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: rhp(10),
    },
    button: {
        width: rwp(76),
        height: rhp(76),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bgColor,
        borderRadius: 40,
        marginVertical: rhp(13),
        marginHorizontal: rwp(13)
    },
    emptyButton: {
        width: rwp(70),
        height: rhp(70),
        margin: 16,
    },
    buttonText: {
        fontSize: rfs(28),
        fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Medium,
        color: colors.darkGrey,
        fontWeight: '700'
    },
});

export default DialPad;