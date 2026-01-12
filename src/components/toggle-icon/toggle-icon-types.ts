import React from 'react';
import { SvgProps } from 'react-native-svg';

export type ToggleIconProps = {
  isActive: boolean;
  activeIcon: React.ReactElement<SvgProps>;
  inactiveIcon: React.ReactElement<SvgProps>;
};