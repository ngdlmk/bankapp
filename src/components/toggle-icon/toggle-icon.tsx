import { ToggleIconProps } from './toggle-icon-types';


const ToggleIcon = ({ activeIcon, inactiveIcon, isActive }: ToggleIconProps) => {
  if (isActive) {
    return activeIcon;
  }
  return inactiveIcon;
};

export default ToggleIcon;