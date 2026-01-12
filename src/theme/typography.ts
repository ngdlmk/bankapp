import { Platform } from "react-native";
import { ThemeColors } from "./palette";

const fontFamily = (family: string) => {
    return Platform.select({
        ios: family,
        android: family,
        default: 'System'
    });
};

export const createTypography = (colors: ThemeColors) => ({
    h1: {
        fontSize: 28,
        fontWeight: "700" as const,
        fontFamily: fontFamily("Inter-Bold"),
        lineHeight: 34,
        letterSpacing: 0.1,
        color: colors.textPrimary,
    },
    h2: {
        fontSize: 22,
        fontWeight: "600" as const,
        fontFamily: fontFamily("Inter-SemiBold"),
        lineHeight: 28,
        color: colors.textPrimary,
    },
    body: {
        fontSize: 16,
        fontWeight: "400" as const,
        fontFamily: fontFamily("Inter-Regular"),
        lineHeight: 24,
        color: colors.textSecondary,
    },
    button: {
        fontSize: 16,
        fontWeight: "600" as const,
        fontFamily: fontFamily("Inter-SemiBold"),
        letterSpacing: 0.5,
        color: colors.white,
    },
    code: {
        fontSize: 14,
        fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
        color: colors.primary,
    },
    caption: {
        fontSize: 12,
        fontWeight: "400" as const,
        fontFamily: fontFamily("Inter-Regular"),
        lineHeight: 16,
        color: colors.textSecondary,
    },
});

export type Typography = ReturnType<typeof createTypography>;