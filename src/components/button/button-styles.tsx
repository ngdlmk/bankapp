import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
    btnContainer: (variant: 'primary' | 'outline') => ({
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.spacing.sm,
        marginTop: theme.spacing.md,
        backgroundColor: variant === 'primary' ? theme.colors.primary : 'transparent',
        borderWidth: variant === 'primary' ? 0 : 2,
        borderColor: theme.colors.primary,
        shadowColor: theme.colors.primary,
        shadowOffset: { width: 0, height: theme.spacing.xs },
        shadowOpacity: variant === 'primary' ? 0.2 : 0,
        shadowRadius: theme.spacing.sm,
        elevation: variant === 'primary' ? 4 : 0,
    }),
    btnText: (variant: 'primary' | 'outline') => ({
        ...theme.typography.button,
        color: variant === 'primary' ? theme.colors.white : theme.colors.primary,
    }),
}));