// src/theme/light.ts
import { lightPalette } from "./palette";
import { spacing } from "./spacing";
import { createTypography } from "./typography";

export const lightTheme = {
    name: "light",
    colors: lightPalette,
    spacing,
    typography: createTypography(lightPalette),
};