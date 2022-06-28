import React, {useState} from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

// screens
import StartScreen from './screens/StartScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';

// react navigation stack
import RootStack from './navigators/RootStack';

export default function App() {
    return <RootStack />;
}


