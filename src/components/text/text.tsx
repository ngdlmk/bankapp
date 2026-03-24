import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

import { ThemeColors } from '@/theme/palette';
import { Typography } from '@/theme/typography';

export interface TextProps extends RNTextProps {
  /** Typography (Theme visual identity variants) e.g., h1, h2, body1, caption */
  variant?: keyof Typography;

  /**
   * Target palette extraction or standalone hex injection
   * Values implicitly matched contextually with defined elements: primary, error, textSecondary, etc.
   */
  color?: keyof ThemeColors | string;

  /** Intrinsic rendering alignment definition */
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';

  /** Explicit external weight composition normally controlled internally via respective Typography variant overrides */
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';

  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body', // Base implicit text topology resolution mapping
  color,
  align,
  weight,
  style,
  children,
  ...rest
}) => {
  // Dynamic reference extraction accessing environment variable light/dark dependencies structurally
  const { theme } = useUnistyles();

  // 1. Isolate target component baseline configurations mapping layout height and font rendering metrics globally
  // Resolving automatic properties directly derived against Lufga fonts configurations
  const typographyStyle = theme.typography[variant];

  // 2. Extrapolate designated color mappings resolving implicit dependencies fallback if unresolved correctly against textPrimary component defaults.
  let finalColor = (typographyStyle as any).color || theme.colors.textPrimary;

  if (color) {
    // Assert payload mapping validity determining raw hex injections or targeted property resolution matching directly
    const themeColor = (theme.colors as any)[color];
    finalColor = themeColor || color;
  }

  return (
    <RNText
      // Maintain environment scale integrations uniformly
      allowFontScaling={true}
      style={[
        typographyStyle,
        { color: finalColor },
        align && { textAlign: align },
        weight && { fontWeight: weight },
        style, // Expose uppermost style override index allowing custom implementations
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
};
