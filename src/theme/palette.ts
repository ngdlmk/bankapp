const common = {
    primary: '#E91E63',
    white: '#FFFFFF',
    black: '#000000',
};

export const lightPalette = {
    ...common,
    background: '#FFFFFF',
    surface: '#F5F5F5',
    textPrimary: '#000000',
    textSecondary: '#666666',
    border: '#E0E0E0',
};

export const darkPalette = {
    ...common,
    background: '#121212',
    surface: '#1E1E1E',
    textPrimary: '#FFFFFF',
    textSecondary: '#AAAAAA',
    border: '#333333',
};

export type ThemeColors = typeof lightPalette;