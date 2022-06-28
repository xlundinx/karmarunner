import React from 'react';
import { StatusBar } from 'expo-status-bar';
import BottomMenu from './BottomMenu';

import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    WelcomeContainer,
    Avatar,
    StyledContainer,
    StyledBackgroundImg
} from './../components/styles';


const Settings = ({navigation}) => {
    return (
        <StyledContainer>
            <BottomMenu />
            <StyledBackgroundImg resizeMode="contain" source={require('./../assets/img/HomeGradient.png')}/>
            <StatusBar style="light"/>
            <InnerContainer>
                <PageTitle>
                <PageTitle bold={true}>karma</PageTitle>runner
                </PageTitle>

                <StyledFormArea welcome={true}>
                    <StyledButton onPress={() => {navigation.navigate("EditProfile")}}>
                        <ButtonText>Edit Profile</ButtonText>
                    </StyledButton>
                </StyledFormArea>
            </InnerContainer>
        </StyledContainer>
    );
};

export default Settings;