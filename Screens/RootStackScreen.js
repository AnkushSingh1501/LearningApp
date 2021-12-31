import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen';
import SignInScreen from './SignInScreen';
import ProfileScreen from './ProfileScreen';


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="HomeScreen" component={HomeScreen}/>
        <RootStack.Screen name="RegisterScreen" component={RegisterScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="ProfileScreen" component={ProfileScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;