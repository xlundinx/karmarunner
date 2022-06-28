import React from 'react';
//formik
import { Formik } from 'formik';

import {
    Colors,
    StyledBottomMenuContainer,
    StyledBottomMenuInnerContainer,
    BottomMenuIcon
} from '../components/styles';

const BottomMenu = ({navigation}) => {
    return (
        <StyledBottomMenuContainer>
            <StyledBottomMenuInnerContainer onPress={() => navigation.navigate("Login")}>
                <BottomMenuIcon resizeMode="contain" source={require('./../assets/KARMAicons/Heart.png')}/>
            </StyledBottomMenuInnerContainer>
            <StyledBottomMenuInnerContainer onPress={() => navigation.navigate("Login")}>
                <BottomMenuIcon resizeMode="contain" source={require('./../assets/KARMAicons/Group.png')}/>
            </StyledBottomMenuInnerContainer>
            <StyledBottomMenuInnerContainer onPress={() => navigation.navigate("Login")}>
                <BottomMenuIcon resizeMode="contain" source={require('./../assets/KARMAicons/KarmaRun.png')}/>
            </StyledBottomMenuInnerContainer>
            <StyledBottomMenuInnerContainer onPress={() => navigation.navigate("Login")}>
                <BottomMenuIcon resizeMode="contain" source={require('./../assets/KARMAicons/User.png')}/>
            </StyledBottomMenuInnerContainer>
            <StyledBottomMenuInnerContainer onPress={() => navigation.navigate("Profile")}>
                <BottomMenuIcon resizeMode="contain" source={require('./../assets/KARMAicons/Settings.png')}/>
            </StyledBottomMenuInnerContainer>
        </StyledBottomMenuContainer>
    );
};

export default BottomMenu;