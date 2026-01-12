import { routes } from '@/constants/routes';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';
import BottomNavigationTabButton from './bottom-tabbar-navigation-button';
import { styles } from './bottom-tabbar-navigation-styles';
import { TabItemType } from './bottom-tabbar-navigation-types';

const BottomNavigationTabBar = ({ state, navigation }: BottomTabBarProps) => {
  const { theme } = useUnistyles();
  const activeColor = theme.colors.primary;
  const inactiveColor = theme.colors.textSecondary;

  const tabButtons: TabItemType[] = [
    {
      inactiveIcon: <Ionicons name="bar-chart-outline" size={32} color={inactiveColor} />,
      activeIcon: <Ionicons name="bar-chart" size={32} color={activeColor} />,
      routeName: routes.DASHBOARD_TAB,
      label: 'Dashboard',
    },
    {
      inactiveIcon: <Ionicons name="chatbox-outline" size={32} color={inactiveColor} />,
      activeIcon: <Ionicons name="chatbox" size={32} color={activeColor} />,
      routeName: routes.HELP_TAB,
      label: 'Help',
    },
  ];

  const onPressTab = (
    index: number,
    isSelected: boolean,
    routeName?: string
  ) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: state.routes[index].key,
      canPreventDefault: true,
    });

    if (!isSelected && !event.defaultPrevented && routeName) {
      navigation.navigate(routeName);
    }
  };

  return (
    <View style={styles.buttonContainer}>
      {tabButtons.map((tabItem, index) => {
        const isSelected = state.index === index;

        return (
          <BottomNavigationTabButton
            key={tabItem.routeName}
            onPress={() => onPressTab(index, isSelected, tabItem.routeName)}
            activeIcon={tabItem.activeIcon}
            inactiveIcon={tabItem.inactiveIcon}
            isSelected={isSelected}
            label={tabItem.label}
          />
        );
      })}
    </View>
  );
};

export default BottomNavigationTabBar;