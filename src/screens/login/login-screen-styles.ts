import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: theme.spacing.xl,
    },
    loadingContainer: {
        backgroundColor: theme.colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        ...theme.typography.body,
    },
    headerBar: {
        height: theme.spacing.xs,
        width: 60,
        backgroundColor: theme.colors.primary,
        marginBottom: theme.spacing.xl,
        borderRadius: theme.spacing.xs,
    },
    title: {
        ...theme.typography.h1,
        marginBottom: theme.spacing.md,
    },
    subtitle: {
        ...theme.typography.body,
        color: theme.colors.textSecondary,
    },
    spacerLarge: {
        height: theme.spacing.xxl + theme.spacing.sm,
    },
    spacerSmall: {
        height: theme.spacing.xl,
    },
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
    resultBox: {
        width: '100%',
        padding: theme.spacing.xl,
        backgroundColor:
            theme.name === 'dark' ? theme.colors.successDark : theme.colors.successLight,
        borderRadius: theme.spacing.md,
        borderWidth: 1,
        borderColor: theme.colors.border,
    },
    resultLabel: {
        ...theme.typography.h2,
        fontSize: 16,
        color: theme.colors.primary,
        marginBottom: theme.spacing.sm,
    },
    codeText: {
        ...theme.typography.code,
        backgroundColor: theme.colors.codeBg,
        color: theme.colors.textPrimary,
        padding: theme.spacing.md,
        borderRadius: theme.spacing.xs,
        overflow: 'hidden',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: theme.colors.backgroundAlt,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing.lg,
        backgroundColor: theme.colors.background,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    modalTitle: {
        ...theme.typography.h2,
        fontSize: 18,
    },
    cancelBtn: {
        padding: theme.spacing.sm,
    },
    cancelText: {
        ...theme.typography.button,
        color: theme.colors.primary,
        fontWeight: '500',
    },
    webViewWrapper: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
}));