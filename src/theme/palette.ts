const common = {
    primary: '#D6006E',       // Shawbrook Pink
    primaryDark: '#B0005A',   // Darker pink for active states
    secondary: '#240646',     // Shawbrook Navy
    white: '#FFFFFF',
    black: '#000000',
    successLight: '#FADCE9',  // Light pink background for success
    successDark: '#4A0D28',   // Dark mode equivalent
};

export const lightPalette = {
    ...common,
    background: '#FFFFFF',
    backgroundAlt: '#F5F7F8', // Light gray for contrast
    surface: '#FFFFFF',
    textPrimary: '#240646',   // Navy text for Light mode
    textSecondary: '#546E7A',
    border: '#ECEFF1',
    codeBg: 'rgba(245, 247, 248, 1)', 
};

export const darkPalette = {
    ...common,
    background: '#121212',
    backgroundAlt: '#1E1E1E',
    surface: '#2C2C2C',
    textPrimary: '#FFFFFF',   // White text for Dark mode
    textSecondary: '#AAAAAA',
    border: '#333333',
    codeBg: 'rgba(255, 255, 255, 0.1)',
};

export type ThemeColors = typeof lightPalette;