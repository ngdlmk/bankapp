import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: theme.spacing.xl,
    },
    title: {
        ...theme.typography.h2,
        color: theme.colors.white,
        marginBottom: theme.spacing.md,
        textAlign: 'center',
    },
    subtitle: {
        ...theme.typography.body,
        color: theme.colors.white,
        marginBottom: theme.spacing.xl,
        textAlign: 'center',
        opacity: 0.8,
    },
    dotsContainer: {
        flexDirection: 'row',
        gap: theme.spacing.lg,
        marginBottom: 60,
    },
    dot: (filled: boolean) => ({
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.colors.white,
        backgroundColor: filled ? theme.colors.white : 'transparent',
    }),
    keypadContainer: {
        width: '100%',
        maxWidth: 300,
        gap: theme.spacing.lg,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    keyButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'rgba(255,255,255, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    keyText: {
        ...theme.typography.h2,
        color: theme.colors.white,
        fontSize: 28,
    },
    biometricIcon: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    }
}));