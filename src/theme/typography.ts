import { ThemeColors } from "./palette";

export const createTypography = (colors: ThemeColors) => ({
    h1: {
        fontSize: 32,
        fontWeight: "700" as const,
        fontFamily: "Inter-Bold",
        lineHeight: 40,
        letterSpacing: 0.1,
        color: colors.textPrimary,
    },
    body: {
        fontSize: 16,
        fontWeight: "400" as const,
        fontFamily: "Inter-Regular",
        lineHeight: 22,
        letterSpacing: 0.1,
        color: colors.textPrimary,
    },
    caption: {
        fontSize: 12,
        fontWeight: "400" as const,
        fontFamily: "Inter-Regular",
        lineHeight: 16,
        letterSpacing: 0.1,
        color: colors.textSecondary,
    },
});

export type Typography = ReturnType<typeof createTypography>;
