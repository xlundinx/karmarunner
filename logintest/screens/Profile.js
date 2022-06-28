import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UploadImage from './../components/UploadImage';

const Image = ({navigation}) => {
 return (
<View style={styles.container}>
    <StatusBar style="dark"/>
    <UploadImage/>
    <Text style={{marginVertical:20,fontSize:16}}>Welcome to the world</Text>
</View>
 );
}

const styles = StyleSheet.create({
 container: {
   padding:50,
   backgroundColor: '#00B8BB',
   alignItems: 'center',
   justifyContent: 'center',
 },
});

export default Image;