import React from 'react';

import {Colors} from './../components/styles'
const {black, white} = Colors;
// react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import StartScreen from './../screens/StartScreen';
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';
import Profile from './../screens/Profile';
import Settings from './../screens/Settings';
import EditProfile from './../screens/EditProfile';
import BottomMenu from './../screens/BottomMenu';



const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: white,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    }
                }}
                initialRouteName="StartScreen"
            >
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="BottomMenu" component={BottomMenu} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default RootStack;