// src/theme/unistyles.ts
import { StyleSheet as UniStyleSheet } from "react-native-unistyles";
import { darkTheme } from "./dark";
import { lightTheme } from "./light";

type AppTheme = typeof lightTheme;

declare module "react-native-unistyles" {
    export interface UnistylesThemes {
        light: AppTheme;
        dark: AppTheme;
    }
}

UniStyleSheet.configure({
    themes: {
        light: lightTheme,
        dark: darkTheme,
    },
    settings: {
        initialTheme: "light",
    },
});
