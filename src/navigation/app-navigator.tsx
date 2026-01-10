import "@/theme/index";
import React from 'react';
import { routes } from '../constants/routes';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import BottomSheetComponent from '../components/molecules/BottomSheet/bottomSheet';
import { AppStackParamList } from '../types/navigation-types';

import { NavigationContainer } from '@react-navigation/native';
import ESimInstallationScreen from '../screens/esim-installation/esim-installation-screen';
import IntroScreen from '../screens/intro/intro-screen';
import SplashScreen from '../screens/splash/splash-screen';
import VerifyEmailScreen from '../screens/verify-email/verify-email-screen';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.SPLASH_SCREEN}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={routes.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen
          name={routes.ESIM_INSTALLATION_SCREEN}
          component={ESimInstallationScreen}
          options={{ animation: 'none' }}
        />
        <Stack.Screen
          name={routes.INTRO_SCREEN}
          component={IntroScreen}
          options={{ animation: 'none' }}
        />
        <Stack.Screen
          name={routes.VERIFY_EMAIL_SCREEN}
          component={VerifyEmailScreen}
          options={{ animation: 'none' }}
        />
      </Stack.Navigator>
      {/* <BottomSheetComponent /> */}
    </NavigationContainer>
  );
};

export default AppNavigator;
