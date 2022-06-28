import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import CarouselCards from './../components/CarouselCards';

//formik
import { Formik } from 'formik';

import {
    Colors,
    NavText,
    NavInnerCon,
    StyledBackgroundImg,
    Container,
    BottomNav
} from './../components/styles';



const StartScreen = ({navigation}) => {
  return (
    <Container>
        <StyledBackgroundImg resizeMode="contain" source={require('./../assets/img/kontrast.png')}/>
        <StatusBar style="light"/> 
        <SafeAreaView style={styles.container}>
            <CarouselCards />
        </SafeAreaView>
    
        <Formik>
            <BottomNav>
                <NavInnerCon RightLine={true} onPress={() => navigation.navigate("Profile")}>
                    <NavText>
                        PROFILE
                    </NavText>
                </NavInnerCon>
                <NavInnerCon onPress={() => navigation.navigate("Login")}>
                    <NavText>
                        LOGIN
                    </NavText>
                </NavInnerCon>
            </BottomNav>
        </Formik>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
});

export default StartScreen;