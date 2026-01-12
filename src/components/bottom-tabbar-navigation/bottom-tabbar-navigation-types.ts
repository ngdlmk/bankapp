import React from 'react';
import { SvgProps } from 'react-native-svg';

export type TabItemType = {
  inactiveIcon: React.ReactElement<SvgProps>;
  activeIcon: React.ReactElement<SvgProps>;
  routeName: string;
  label: string;
};

export type TabButtonProps = {
  isSelected: boolean;
  activeIcon: React.ReactElement<SvgProps>;
  inactiveIcon: React.ReactElement<SvgProps>;
  label?: string;
  onPress: () => void;
};