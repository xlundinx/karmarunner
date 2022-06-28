import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from 'formik';

// icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
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
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    StyledBackgroundImg,
    Space
} from './../components/styles';
import {View} from 'react-native';

// colors
const {black, white, gray, darkGray} = Colors;

// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';


const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
    <KeyboardAvoidingWrapper>
        <StyledContainer>
<StyledBackgroundImg resizeMode="contain" source={require('./../assets/img/kontrast.png')}/>        
            <StatusBar style="light"/>
            <InnerContainer>
                <PageLogo resizeMode="contain" source={require('./../assets/img/-e-heart.png')}/>
                <PageTitle>
                    <PageTitle bold={true}>karma</PageTitle>runner
                </PageTitle>
                <SubTitle> LOG IN OR SIGN UP WITH </SubTitle>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate("Welcome");
                    }}
                >
                {({handleChange, handleBlur, handleSubmit, values}) =>
                    <StyledFormArea>
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
                            //icon="lock"
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
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Email Login
                            </ButtonText>
                        </StyledButton>
                        <StyledButton google={true} onPress={handleSubmit}>
                            <Fontisto name="facebook" color={white} size={25} />
                            <ButtonText google={true}>Facebook Login</ButtonText>
                        </StyledButton>
                        <ExtraView>
                            <ExtraText>Not a karmarunner yet?  </ExtraText>
                            <TextLink onPress={() => navigation.navigate("Signup")}>
                                <TextLinkContent>Join now</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                        <Space />
                    </StyledFormArea>}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (<View>
        <LeftIcon>
            <Octicons name={icon} size={30} color={gray} />
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props} />
        {isPassword && (
            <RightIcon onPress={() => setHidePassword(!hidePassword)} >
                <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={20} color={darkGray} />
            </RightIcon>
        )}
    </View>)
};

export default Login;