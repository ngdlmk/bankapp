// src/theme/dark.ts
import { darkPalette } from "./palette";
import { spacing } from "./spacing";
import { createTypography } from "./typography";

export const darkTheme = {
    name: "dark",
    colors: darkPalette,
    spacing,
    typography: createTypography(darkPalette),
};
