import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useUnistyles } from 'react-native-unistyles';

import { trackEvent } from '../../utils/analytics';
import { ButtonSize, ButtonVariant, styles } from './button.styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.FC<SvgProps>;
  rightIcon?: React.FC<SvgProps>;

  // Automation and Data Analytics (BI)
  testID?: string;
  analyticsEvent?: string;
  analyticsParams?: Record<string, unknown>;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  style,
  testID,
  analyticsEvent,
  analyticsParams,
  ...rest
}) => {
  // 1. Hook into theme ecosystem for dynamic SVG and element coloring
  const { theme } = useUnistyles();
  const isDisabled = disabled || loading;

  // 2. Calculate dynamic SVG Icon dimension correlating with Button size
  let iconSize = 20;
  if (size === 'sm') iconSize = 16;
  if (size === 'lg') iconSize = 24;

  // 3. Assign contextual icon color respective to the Button variant
  let iconColor = theme.colors.white;
  if (variant === 'outline') iconColor = theme.colors.textPrimary;
  if (variant === 'ghost') iconColor = theme.colors.primary;

  // 4. Secure click handler intercepting original press with autonomous Data Analytics Tracker (Wrapper)
  const handlePress = (e: any) => {
    // Evaluate analytics pipeline event requirement directly overriding press origin
    if (analyticsEvent) {
      trackEvent(analyticsEvent, analyticsParams);
    }

    // Delegate execution back to inherited original function reference
    if (onPress) {
      onPress(e);
    }
  };

  return (
    <TouchableOpacity
      testID={testID} // Designated mapping hook for continuous End-to-End frameworks (Detox, Appium, Maestro)
      style={[styles.container(variant, size, isDisabled), style]}
      activeOpacity={0.8}
      onPress={handlePress}
      disabled={isDisabled}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={iconColor} size="small" />
      ) : (
        <>
          {/* Prefix Optional SVG Render Slot */}
          {LeftIcon && (
            <View style={styles.iconContainer}>
              <LeftIcon width={iconSize} height={iconSize} color={iconColor} />
            </View>
          )}

          <Text style={styles.text(variant, size)}>{title}</Text>

          {/* Postfix Optional SVG Render Slot */}
          {RightIcon && (
            <View style={styles.iconContainer}>
              <RightIcon width={iconSize} height={iconSize} color={iconColor} />
            </View>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};
