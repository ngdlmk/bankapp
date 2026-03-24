import { StyleSheet } from 'react-native-unistyles';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export const styles = StyleSheet.create((theme) => ({
  container: (variant: ButtonVariant, size: ButtonSize, disabled: boolean) => {
    // 1. Background Color
    let backgroundColor: string = theme.colors.primary;
    if (variant === 'secondary') backgroundColor = theme.colors.secondary;
    if (variant === 'danger') backgroundColor = theme.colors.error;
    if (variant === 'outline' || variant === 'ghost') backgroundColor = 'transparent';

    // 2. Border Settings
    let borderColor: string = 'transparent';
    let borderWidth = 0;
    if (variant === 'outline') {
      borderColor = theme.colors.border;
      borderWidth = 1.5;
    }

    // 3. Height and Padding (Size Config)
    let height = 50;
    let paddingHorizontal = 24;
    if (size === 'sm') {
      height = 40;
      paddingHorizontal = 16;
    } else if (size === 'lg') {
      height = 60;
      paddingHorizontal = 32;
    }

    return {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.spacing.sm,
      backgroundColor,
      borderColor,
      borderWidth,
      height,
      paddingHorizontal,
      opacity: disabled ? 0.6 : 1, // Dim if disabled

      // Shadow effect (Primary, Secondary, Danger)
      ...(variant !== 'outline' &&
        variant !== 'ghost' &&
        !disabled && {
          shadowColor: backgroundColor,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 8,
          elevation: 4,
        }),
    };
  },

  text: (variant: ButtonVariant, size: ButtonSize) => {
    // 1. Text Color
    let color: string = theme.colors.white;
    if (variant === 'outline') color = theme.colors.textPrimary;
    if (variant === 'ghost') color = theme.colors.primary; // Ghost buttons usually inherit the primary brand color

    // 2. Font Size
    let fontSize = 16;
    if (size === 'sm') fontSize = 14;
    if (size === 'lg') fontSize = 18;

    return {
      ...theme.typography.button, // Merge global font properties to allow overriding where intended
      color,
      fontSize,
      fontWeight: '700',
    };
  },

  iconContainer: {
    marginHorizontal: 8,
  },
}));
