import { colors, primitiveColors } from './colors';

export type ThemeColors = {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  white: string;
  black: string;
  successLight: string;
  successDark: string;
  success: string;
  error: string;
  errorLight: string;
  errorDark: string;
  background: string;
  backgroundAlt: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  codeBg: string;
};

export const lightPalette: ThemeColors = {
  primary: colors.primary[500],
  primaryLight: colors.primary[100],
  primaryDark: colors.primary[700],
  secondary: colors.secondary[500],
  white: primitiveColors.white,
  black: primitiveColors.black,
  successLight: colors.success[100],
  successDark: colors.success[900],
  success: colors.success[500],
  error: colors.error[500],
  errorLight: colors.error[100],
  errorDark: colors.error[900],
  background: primitiveColors.white,
  backgroundAlt: colors.neutral[100],
  surface: primitiveColors.white,
  textPrimary: primitiveColors.black,
  textSecondary: colors.neutral[700],
  border: colors.border[200],
  codeBg: colors.neutral[200],
};

export const darkPalette: ThemeColors = {
  primary: colors.primary[500],
  primaryLight: colors.primary[900],
  primaryDark: colors.primary[200],
  secondary: colors.secondary[500],
  white: primitiveColors.white,
  black: primitiveColors.black,
  successLight: colors.success[900],
  successDark: colors.success[100],
  success: colors.success[500],
  error: colors.error[500],
  errorLight: colors.error[900],
  errorDark: colors.error[100],
  background: primitiveColors.black,
  backgroundAlt: colors.neutral[900],
  surface: colors.neutral[800],
  textPrimary: primitiveColors.white,
  textSecondary: colors.neutral[400],
  border: colors.border[700],
  codeBg: colors.neutral[800],
};
