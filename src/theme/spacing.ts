export const spacing = {
  "3xs": 2,
  "2xs": 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  "2xl": 32,
  "3xl": 40,
  "4xl": 44,
  "5xl": 48,
  "6xl": 52,
  "7xl": 56,
  "8xl": 60,
} as const;

export type Spacing = typeof spacing;
