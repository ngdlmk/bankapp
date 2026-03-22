import { colors, primitiveColors } from './colors';

const common = {
  // Brand Colors (Shawbrook Theme)
  primary: '#E91E63', // Main primary color used across the app
  primaryLight: '#FADCE9', // Replaced nested primary["100"]
  primaryDark: '#B0005A', // Replaced nested primary["700"]
  secondary: '#240646', // Shawbrook Navy

  // Primitives
  white: primitiveColors.white,
  black: primitiveColors.black,

  // Semantic Colors mapped to base colors
  successLight: colors.success[100],
  successDark: colors.success[900],
  success: colors.success[500],
  error: colors.error[500],
  errorLight: colors.error[100],
  errorDark: colors.error[900],
};

export const lightPalette = {
  ...common,
  background: primitiveColors.white,
  backgroundAlt: '#F5F7F8', // Light gray for contrast
  surface: primitiveColors.white,
  textPrimary: '#240646', // Navy text for Light mode
  textSecondary: '#546E7A',
  border: '#ECEFF1',
  codeBg: 'rgba(245, 247, 248, 1)',
};

export const darkPalette = {
  ...common,
  background: '#121212',
  backgroundAlt: '#1E1E1E',
  surface: '#2C2C2C',
  textPrimary: primitiveColors.white, // White text for Dark mode
  textSecondary: '#AAAAAA',
  border: '#333333',
  codeBg: 'rgba(255, 255, 255, 0.1)',
};

export type ThemeColors = typeof lightPalette;
