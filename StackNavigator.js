import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTab } from './src/components/navigation/BottomTap';
import LoginScreen from './src/screens/LoginScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={BottomTab} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default StackNavigator