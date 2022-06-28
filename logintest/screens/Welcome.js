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



const GetCurrentDate=()=>{

    let date = new Date(2020, 0, 0); // 2020-06-21
    let longMonth = date.toLocaleString('en-us', { month: 'long' }); /* June */

    var dates = new Date().getDate();
    var year = new Date().getFullYear();
    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date();
    var monthName=months[d.getMonth()];

    return dates + ' ' + monthName + ' ' + year;
}

const Welcome = ({navigation}) => {
    return (
        <StyledContainer>
            <BottomMenu />
            <StyledBackgroundImg resizeMode="contain" source={require('./../assets/img/HomeGradient.png')}/>
            <StatusBar style="light"/>
            <InnerContainer>
                <PageTitle>
                <PageTitle bold={true}>karma</PageTitle>runner
                </PageTitle>
                <Avatar resizeMode="cover" source={require('./../assets/img/Fry2.jpg')}/>
                <WelcomeContainer>
                    <PageTitle welcome={true}>Familiar Fry</PageTitle>
                    <SubTitle welcome={true}>
                        <GetCurrentDate />
                    </SubTitle>                   
                </WelcomeContainer>
                <StyledFormArea welcome={true}>
                    <StyledButton onPress={() => {navigation.navigate("Profile")}}>
                        <ButtonText>Profile</ButtonText>
                    </StyledButton>
                </StyledFormArea>
            </InnerContainer>
        </StyledContainer>
    );
};

export default Welcome;