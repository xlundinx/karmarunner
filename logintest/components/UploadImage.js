import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function UploadImage() {
 const [image, setImage] = useState(null);
 const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });
 
    console.log(JSON.stringify(_image));
 
    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  };

  const  checkForCameraRollPermission=async()=>{
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
        useEffect(() => {
            checkForCameraRollPermission()
          }, []);
      alert("Please grant camera roll permissions inside your system's settings");
    }else{
      console.log('Media Permissions are granted')
    }

    }

 return (
<View style={imageUploaderStyles.container}>
    {
        image  &&<Image source={{ uri: image }} style={{ width: 150, height: 150 }} />
    }

<View style={imageUploaderStyles.uploadBtnContainer}>
    <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
        <Text>{image ? 'Edit' : 'Upload'} Image</Text>
        <AntDesign name="plus" size={30} color="black" />
    </TouchableOpacity>
</View>


</View>

 );
}

const imageUploaderStyles=StyleSheet.create({
   container:{
       elevation:2,
       height:150,
       width:150,
       backgroundColor:'#efefef',
       position:'relative',
       borderRadius:999,
       overflow:'hidden',
   },
   uploadBtnContainer:{
       opacity:0.7,
       position:'absolute',
       right:0,
       bottom:0,
       backgroundColor:'transparent',
       width:'100%',
       height:'60%',
   },
   uploadBtn:{
       display:'flex',
       alignItems:"center",
       justifyContent:'center'
   }
})