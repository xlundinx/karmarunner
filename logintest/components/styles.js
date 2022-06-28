import styled from 'styled-components/native';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.StatusBarHeight;
// colors
export const Colors = {
    black: "#00252A",
    darkGreen: "#007986",
    lightGreen: "#00B8BB",
    darkGray: "#7B8E90",
    gray: "#E8EEEF",
    white: "#FFFFFF",
    red: "#DA4167",
    yellow: "#FFCB47",
    blue: "#0042A6",
};

const { black, darkGreen, lightGreen, darkGray, gray, white, red, yellow, blue } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: 55px;
    background-color: ${black};
`;

export const Container = styled.View`
    flex: 1;
    background-color: ${black};
`;

export const StyledBackgroundImg = styled.Image`
    position: absolute;
    width: 130%;
    height: 130%;
    top: -70px;
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
`;

export const PageLogo = styled.Image`
    width: 60%;
    height: 200px;
`;

export const SPageLogo = styled.Image`
    width: 60%;
    height: 50px;
`;

export const Avatar = styled.Image`
    width: 150px;
    height: 150px;
    margin: auto;
    border-radius: 200px;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
    height: 50%;
    min-width: 100%;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    color: ${white};
    padding: 10px;

    ${(props) => props.welcome && `
        font-size: 30px;
        font-weight: bold;
    `}
    ${(props) => props.bold && `
        font-weight: bold;
    `}
`;

export const SubTitle = styled.Text`
    font-size: 16px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    color: ${white};

    ${(props) => props.welcome && `
        margin-bottom: 5px;
        font-weight: normal;
        font-size: 20px;
        color: ${lightGreen}
    `}
`;

export const StyledFormArea = styled.View`
    width: 90%;
    ${(props) => props.welcome && `
        margin-bottom: 50px;
    `}
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${white};
    padding: 0px;
    font-style: italic;
    padding-left: 20px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 13px;
    height: 40px;
    margin-vertical: 3px;
    margin-bottom: 0px;
    color: ${black};
`;

export const StyledInputLabel = styled.Text`
    color: ${gray};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left : 15px;
    top: 30px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right : 15px;
    top: 30px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 5px;
    background-color: ${lightGreen};
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    margin-vertical: 10px;
    height: 55px;

    ${(props) => props.google == true && `
        background-color: ${blue};
        flex-direction: row;
        justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${white};
    font-size: 16px;
    font-weight: bold;

    ${(props) => props.google == true && `
        padding: 10px;
    `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;

export const LineDivider = styled.View`
    ${(props) => props.lineWrap == true && `
        flex-direction: row;
        padding-top: 5px;
    `}
    ${(props) => props.lineRightLeft == true && `
        background-color: ${white};
        height: 1px;
        flex: 1;
        align-self: center;
    `}
`;

export const LineText = styled.Text`
    align-self: center;
    padding-horizontal: 5px;
    font-size: 13px;
    color: ${white}
`;

export const Space = styled.View`
    padding: 40px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${white};
    font-size: 13px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${white};
    font-size: 13px;
    border-bottom-color: ${white};
    border-bottom-width: 1px;
    font-weight: bold;
`;

export const StyledBottomMenuContainer = styled.View`
    position : absolute;
    bottom: 0;
    right: -25px;
    left: -25px;
    background-color: ${white}
    justify-content: center;
    align-items: center;
    flex-direction: row;
    z-index: 1;
    width: 130%;
    height: 50px;
    padding-right: 25px;
    padding-left: 25px;

`;

export const BottomNav = styled.View`
    flex: 1;
    position : absolute;
    bottom: 0;
    right: -25px;
    left: -25px;
    background-color: ${white}
    justify-content: center;
    align-items: center;
    flex-direction: row;
    z-index: 1;
    height: 50px;
    padding-right: 25px;
    padding-left: 25px;
`;

export const StyledBottomMenuInnerContainer = styled.TouchableOpacity`
    height: 25px;
    width: 20%;
`;

export const BottomMenuIcon = styled.Image`
    height: 25px;
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
`;

export const NavInnerCon = styled.TouchableOpacity`
    height: 25px; 
    width: 50%;
    justify-content: center;
    align-items: center;
    ${(props) => props.RightLine == true && `
    border-right-color: ${black};
    border-right-width: 1px;
    `}
`;

export const NavText = styled.Text`
    color: ${black};
    font-size: 18px;
    font-weight: bold;
`;

