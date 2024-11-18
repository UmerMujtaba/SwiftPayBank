import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { styles } from "./styles";
import ProgressBar from "../../../components/progressBar";
import AppBar from "../../../components/appBar";
import { ScreenNames, Strings } from "../../../constants/strings";
import CustomTextInput from "../../../components/customTextInput";
import DatePicker from "react-native-date-picker";
import { rhp } from "../../../constants/dimensions";
import { GradientButton } from "../../../components/cta";
import { images } from "../../../assets/images";
import { navigate } from "../../../navigator/navigationRef";
import { setUserData } from "../../../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const day = date.getDate().toString().padStart(2, '0'); 
    return `${year}/${month}/${day}`;
};

const UserDetailsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [firstName, setFirstNameState] = useState('');
    const [lastName, setLastNameState] = useState('');
    const [dob, setDobState] = useState(null);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const user = useSelector((state) => state.userRegistration.userData);
    console.log("🚀 ~ UserDetailsScreen ~ user:", user)

    const handleConfirm = (date) => {
        setDobState(date);
        setOpen(false);
    };

    const isValid = firstName.length > 0 && lastName.length > 0;

    const hanldeSubmit = () => {
        setLoading(true);
        if (isValid) {
            let updatedUserData = {
                ...user,
                firstName: firstName,
                lastName: lastName,
                dob:dob,
            };
            dispatch(setUserData(updatedUserData));
            console.log("🚀 ~ handleSubmit ~ user data dispatched:", { updatedUserData });
            setTimeout(() => {
                setLoading(false);
                navigate(ScreenNames.BvnScreen)
            }, 1000);
        }

        else {
            Alert.alert('Fill required data')
            setTimeout(() => {
                setLoading(false);
                //navigate(ScreenNames.topUpUsingCardScreenStep4, { obj })
            }, 1000);
        }
        console.log("🚀 ~ hanldeSubmit ~ dob:", dob)
        console.log("🚀 ~ hanldeSubmit ~ lastName:", lastName)
        console.log("🚀 ~ hanldeSubmit ~ firstName:", firstName)
    }
    return (
        <View style={styles.container}>
            <View>

            <AppBar start={4} end={5} onPress={() => navigation.goBack()} />
            <ProgressBar prevState={60} nextState={80} style={{ borderBottomLeftRadius: 8, borderBottomTopRadius: 8 }} />
            <Text style={styles.title}>{Strings.justALittleBitMoreAbout}</Text>
            <Text style={styles.subTitle}>{Strings.weNeedSomeAdditionalInformation}</Text>
            <View style={styles.body}>
                {firstName &&
                    <Text style={[styles.inputHeading, { marginTop: rhp(24) }]}>{Strings.firstName}</Text>
                }
                <CustomTextInput
                    placeholder={Strings.firstName}
                    keyboardType="default"
                    returnKeyType="next"
                    value={firstName}
                    onChangeText={setFirstNameState}
                    style={styles.inputStyle}
                />
                {lastName &&
                    <Text style={styles.inputHeading}>{Strings.lastName}</Text>
                }
                <CustomTextInput
                    placeholder={Strings.lastName}
                    keyboardType="default"
                    returnKeyType="next"
                    value={lastName}
                    onChangeText={setLastNameState}
                    style={styles.inputStyle}
                />
                {dob &&
                    <Text style={styles.inputHeading}>{Strings.dateOfBirthFormat}</Text>
                }
                <TouchableOpacity onPress={() => setOpen(true)} style={styles.dateContainer} >
                    <Text style={styles.dateStyle}>
                        {dob
                            ? <Text style={styles.dateStyle}>{formatDate(dob)}</Text>  // Style for the formatted date
                            : <Text style={styles.placeholderText}>{Strings.dateOfBirthFormat}</Text>      // Style for the placeholder text
                        }
                    </Text>
                </TouchableOpacity>
                <DatePicker
                    modal
                    open={open}
                    date={dob || new Date()}
                    onConfirm={handleConfirm}
                    onCancel={() => setOpen(false)}
                    mode="date"
                />
            </View>
            </View>

            <View style={styles.bottomContent}>
                <Image source={images.lockGuidelineImage} style={styles.lockImg} />

                <GradientButton
                    loaderLoading={loading}
                    buttonText={'Submit'}
                    style={styles.btn(isValid)}
                    onPress={hanldeSubmit}
                />
            </View>
        </View>
    );
};

export default UserDetailsScreen;
