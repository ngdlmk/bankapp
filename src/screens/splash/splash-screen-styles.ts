import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
    text: theme.typography.h1,
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing.lg,
    },
}));