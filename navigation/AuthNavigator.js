import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import LoginScreen from '../screens/auth/LoginScreen.js';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgotScreen from '../screens/auth/ForgotScreen';

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
        <AuthStack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Welcome" component={WelcomeScreen}/>
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="Register" component={RegisterScreen} />
            <AuthStack.Screen name="Forgot" component={ForgotScreen}/>
        </AuthStack.Navigator>
    );
}
