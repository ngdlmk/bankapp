import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing.xl,
    },
    slogan: {
        ...theme.typography.caption,
        marginTop: theme.spacing.lg,
        color: theme.colors.textSecondary,
        letterSpacing: 2,
        opacity: 0.6,
    }
}));