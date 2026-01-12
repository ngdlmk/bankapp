import ToggleIcon from '@/components/toggle-icon/toggle-icon';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './bottom-tabbar-navigation-styles';
import { TabButtonProps } from './bottom-tabbar-navigation-types';

const TabButton = ({
  isSelected,
  activeIcon,
  inactiveIcon,
  onPress,
  label,
}: TabButtonProps) => {
  return (
    <TouchableOpacity
      testID="bottom-tab-button"
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.defaultButton}
    >
      <View style={styles.indicator(isSelected)}>
        <ToggleIcon
          isActive={isSelected}
          activeIcon={activeIcon}
          inactiveIcon={inactiveIcon}
        />
      </View>
      
      {label && (
        <Text style={styles.label(isSelected)}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default TabButton;