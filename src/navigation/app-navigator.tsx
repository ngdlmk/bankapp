import SecurityScreen from "@/screens/security/security-screen";
import { navigateToSecurity, navigationRef } from "@/utils/navigation-utils";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useRef } from 'react';
import { AppState } from "react-native";
import { routes } from '../constants/routes';
import LoginScreen from "../screens/login/login-screen";
import SplashScreen from '../screens/splash/splash-screen';
import { AppStackParamList } from '../types/navigation-types';
import TabNavigator from "./tab-navigator";

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {

  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', async (nextAppState) => {
      if (
        appState.current === 'active' &&
        (nextAppState === 'inactive' || nextAppState === 'background')
      ) {
        const token = await SecureStore.getItemAsync('user_token');
        if (token) {
          navigateToSecurity();
        }
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={routes.SPLASH_SCREEN}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={routes.LOGIN_SCREEN}
          component={LoginScreen}
        />
        <Stack.Screen
          name={routes.SECURITY_SCREEN}
          component={SecurityScreen}
          options={{ animation: 'fade' }}
        />
        <Stack.Screen
          name={routes.SPLASH_SCREEN}
          component={SplashScreen}
        />
        <Stack.Screen
          name={routes.TAB_NAVIGATOR}
          component={TabNavigator}
          options={{ animation: 'fade' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
