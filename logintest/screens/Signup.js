import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Button, Platform, TouchableOpacity } from 'react-native';
// checkbox
import CheckBox from 'expo-checkbox';

// formik
import { Formik } from 'formik';

// icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';



import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    SPageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledTextInput,
    StyledInputLabel,
    LeftIcon,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    PageTitleBold,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    StyledBackgroundImg,
    LineDivider,
    LineText
} from './../components/styles';

// colors
const {black, white, darkGray} = Colors;

// DateTimePicker
import DateTimePicker from '@react-native-community/datetimepicker';

// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));

    // Actual date of birth to be sent
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    }
    // checkbox
    const [agree, setAgree] = useState(false);

    return (
    <KeyboardAvoidingWrapper>
        <StyledContainer>

        <StyledBackgroundImg resizeMode="cover" source={require('./../assets/img/PlainBG.png')}/>
            <StatusBar style="light"/>
            <InnerContainer>
                
            <SPageLogo resizeMode="contain" source={require('./../assets/img/karmaRunnerSM.png')}/>
                <SubTitle>We need some basic information to create a profile on Karmarunner.</SubTitle>

                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}

                <Formik
                    initialValues={{ 
                        email: '', confirmEmail: '', 
                        password: '', confirmPassword: '', 
                        firstName: '', lastName: '',  
                        dateOfBirth: '', country: ''
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate("Welcome");
                    }}
                >
                {({handleChange, handleBlur, handleSubmit, values}) => <StyledFormArea>

                        <StyledButton google={true} onPress={handleSubmit}>
                            <ButtonText>
                                Regiter With Facebook
                            </ButtonText>
                        </StyledButton>

                        <LineDivider lineWrap={true}>
                        <LineDivider lineRightLeft={true} />
                        <LineText>Or Use</LineText>
                        <LineDivider lineRightLeft={true} />
                        </LineDivider>

                        <MyTextInput
                            label=""
                            //icon="mail"
                            placeholder="Email"
                            placeholderTextColor={darkGray}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        <MyTextInput
                            label=""
                            placeholder="Repeat Email"
                            placeholderTextColor={darkGray}
                            onChangeText={handleChange('confirmEmail')}
                            onBlur={handleBlur('confirmEmail')}
                            value={values.confirmEmail}
                            keyboardType="email-address"
                        />      
                        <MyTextInput
                            label=""
                            placeholder="Password"
                            placeholderTextColor={darkGray}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MyTextInput
                            label=""
                            placeholder="Repeat Password"
                            placeholderTextColor={darkGray}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MyTextInput
                            label=""
                            placeholder="First Name"
                            placeholderTextColor={darkGray}
                            onChangeText={handleChange('firstName')}
                            onBlur={handleBlur('firstName')}
                            value={values.firstName}
                        />
                        <MyTextInput
                            label=""
                            placeholder="Last Name"
                            placeholderTextColor={darkGray}
                            onChangeText={handleChange('lastName')}
                            onBlur={handleBlur('lastName')}
                            value={values.lastName}
                        />
                        <MyTextInput
                            label=""
                            placeholder="Date Of Birth"
                            placeholderTextColor={darkGray}
                            onChangeText={handleChange('dateOfBirth')}
                            onBlur={handleBlur('dateOfBirth')}
                            value={dob ? dob.toDateString() : ''}
                            isDate={true}
                            editable={false}
                            showDatePicker={showDatePicker}
                        />
                        <MyTextInput
                            label=""
                            placeholder="Country"
                            placeholderTextColor={darkGray}
                            onChangeText={handleChange('country')}
                            onBlur={handleBlur('country')}
                            value={values.country}
                        />
                        
                        <MsgBox>...</MsgBox>
                        <ExtraView></ExtraView> 
                        <View style={styles.container}>
                            <View style={styles.wrapper}>
                                {Platform.OS === 'ios' ? (
                                <CheckBox
                                    boxType="square"
                                    value={agree}
                                    onChange={() => setAgree(!agree)}
                                />
                                ) : (
                                <CheckBox 
                                    value={agree}
                                    onValueChange={() => setAgree(!agree)} />
                                )}
                                <Text style={styles.text}>
                                Sign up for emails regarding Karmarunner
                                </Text>
                            </View>
                        </View>

                        <ExtraView>
                            <ExtraText>If you proceed to log in, you will accept our </ExtraText>
                            
                            <TextLink onPress={() => navigation.navigate("")}>
                                <TextLinkContent>Privacy Policy</TextLinkContent>
                            </TextLink>
                            <ExtraText>, </ExtraText>
                            <TextLink onPress={() => navigation.navigate("")}>
                                <TextLinkContent>Terms & Conditions</TextLinkContent>
                            </TextLink>
                        </ExtraView>

                        <StyledButton disabled={!agree} onPress={handleSubmit}>
                            <ButtonText>
                                Create Account
                            </ButtonText>
                        </StyledButton>
                        
                        <ExtraView>
                            <ExtraText>Are you already a karmarunner? </ExtraText>
                            <TextLink onPress={() => navigation.navigate("Login")}>
                                <TextLinkContent>Sign in</TextLinkContent>
                            </TextLink>
                        </ExtraView>

                    </StyledFormArea>}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
    return (<View>
        <LeftIcon>
            <Octicons name={icon} size={30} color={black} />
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>

        {!isDate && <StyledTextInput {...props} />}
        {isDate && (
            <TouchableOpacity onPress={showDatePicker}>
                <StyledTextInput {...props} />
            </TouchableOpacity>
        )}

        {isPassword && (
            <RightIcon onPress={() => setHidePassword(!hidePassword)} >
                <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={20} color={black} />
            </RightIcon>
        )}
    </View>)
};

const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
      paddingVertical: 0,
    },
    text: {
      lineHeight: 30,
      marginLeft: 10,
      color: '#FFF',
      marginTop: -5,
    },
  });

export default Signup;