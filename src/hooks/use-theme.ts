import { darkPalette, lightPalette, ThemeColors } from '@/theme/palette';
import { useColorScheme } from 'react-native';

export const useTheme = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  const colors: ThemeColors = isDark ? darkPalette : lightPalette;

  return {
    colors,
    isDark,
  };
};