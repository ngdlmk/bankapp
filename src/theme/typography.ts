import { Platform } from "react-native";

const fontFamily = (family: string) => {
  return Platform.select({
    ios: family,
    android: family,
    default: "System",
  });
};

export const createTypography = (colors: any) => ({
  /* ================= HEADINGS ================= */
  h1: {
    fontSize: 44,
    lineHeight: 52,
    fontWeight: "700" as const,
    fontFamily: fontFamily("Lufga-Bold"),
    letterSpacing: 0,
  },

  h2: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: "700" as const,
    fontFamily: fontFamily("Lufga-Bold"),
    letterSpacing: 0,
  },

  h3: {
    fontSize: 36,
    lineHeight: 42,
    fontWeight: "700" as const,
    fontFamily: fontFamily("Lufga-Bold"),
    letterSpacing: 0,
  },

  h4: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: "700" as const,
    fontFamily: fontFamily("Lufga-Bold"),
    letterSpacing: 0,
  },

  h5: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "700" as const,
    fontFamily: fontFamily("Lufga-Bold"),
  },

  h6: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "700" as const,
    fontFamily: fontFamily("Lufga-Bold"),
  },

  h7: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "700" as const,
    fontFamily: fontFamily("Lufga-Bold"),
  },

  h8: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "700" as const,
    fontFamily: fontFamily("Lufga-Bold"),
  },

  h9: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "700" as const,
    fontFamily: fontFamily("Lufga-Bold"),
  },

  /* ================= SUB HEADINGS ================= */

  subH1: {
    fontSize: 24,
    lineHeight: 34,
    fontWeight: "600" as const,
    fontFamily: fontFamily("Lufga-SemiBold"),
  },

  subH2: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "600" as const,
    fontFamily: fontFamily("Lufga-SemiBold"),
  },

  subH3: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600" as const,
    fontFamily: fontFamily("Lufga-SemiBold"),
  },

  subH4: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "600" as const,
    fontFamily: fontFamily("Lufga-SemiBold"),
  },

  /* ================= BODY ================= */

  body1: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "500" as const,
    fontFamily: fontFamily("Lufga-Medium"),
  },

  body2: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500" as const,
    fontFamily: fontFamily("Lufga-Medium"),
  },

  body3: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500" as const,
    fontFamily: fontFamily("Lufga-Medium"),
  },

  body4: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500" as const,
    fontFamily: fontFamily("Lufga-Medium"),
  },

  body5: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "500" as const,
    fontFamily: fontFamily("Lufga-Medium"),
  },

  body6: {
    fontSize: 8,
    lineHeight: 12,
    fontWeight: "500" as const,
    fontFamily: fontFamily("Lufga-Medium"),
  },

  /* ================= BODY REGULAR ================= */

  bodyR1: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "400" as const,
    fontFamily: fontFamily("Lufga-Regular"),
    color: colors.textSecondary,
  },

  bodyR2: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400" as const,
    fontFamily: fontFamily("Lufga-Regular"),
    color: colors.textSecondary,
  },

  bodyR3: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400" as const,
    fontFamily: fontFamily("Lufga-Regular"),
    color: colors.textSecondary,
  },

  bodyR4: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "400" as const,
    fontFamily: fontFamily("Lufga-Regular"),
    color: colors.textSecondary,
  },

  bodyR5: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "400" as const,
    fontFamily: fontFamily("Lufga-Regular"),
    color: colors.textSecondary,
  },

  bodyR6: {
    fontSize: 8,
    lineHeight: 12,
    fontWeight: "400" as const,
    fontFamily: fontFamily("Lufga-Regular"),
    color: colors.textSecondary,
  },
});

export type Typography = ReturnType<typeof createTypography>;
