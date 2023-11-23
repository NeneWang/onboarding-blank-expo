import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.js';
import OnboardingScreen from '../screens/OnboardingScreen.js';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Onboarding">
                <Stack.Screen name="Onboarding" component={OnboardingScreen} 
                options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Home" component={HomeScreen} 
                options={{
                    headerShown: false
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;