import { routes } from '@/constants/routes';
import React from 'react';

import BottomNavigationTabBar from '@/components/bottom-tabbar-navigation/bottom-tabbar-navigation';
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from '@/screens/dashboard/dashboard-screen';
import HelpScreen from '@/screens/help/help-screen';
import {
  DashboardStackParamList,
  HelpStackParamList,
} from '@/types/navigation-types';

type TabParamsList = {
  DASHBOARD_TAB: undefined;
  HELP_TAB: undefined;
};

const Tab = createBottomTabNavigator<TabParamsList>();
export const DashboardStack = createNativeStackNavigator<DashboardStackParamList>();
export const HelpStack = createNativeStackNavigator<HelpStackParamList>();

const DashboardStackScreen = () => (
  <DashboardStack.Navigator screenOptions={{ headerShown: false }}>
    <DashboardStack.Screen name={routes.DASHBOARD_SCREEN} component={DashboardScreen} />
  </DashboardStack.Navigator>
);

const HelpStackScreen = () => (
  <HelpStack.Navigator screenOptions={{ headerShown: false }}>
    <HelpStack.Screen
      name={routes.HELP_SCREEN}
      component={HelpScreen}
    />
  </HelpStack.Navigator>
);

const TabNavigator = () => {
  const screenOptions: BottomTabNavigationOptions = { headerShown: false };

  function tabBar(props: BottomTabBarProps) {
    return <BottomNavigationTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      initialRouteName={routes.DASHBOARD_TAB}
      screenOptions={screenOptions}
      tabBar={tabBar}
    >
      <Tab.Screen name={routes.DASHBOARD_TAB} component={DashboardStackScreen} />
      <Tab.Screen name={routes.HELP_TAB} component={HelpStackScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
