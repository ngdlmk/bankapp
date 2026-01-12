import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme, rt) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    contentContainer: {
        padding: theme.spacing.lg,
        paddingBottom: theme.spacing.xxl,
    },
    headerContainer: {
        marginBottom: theme.spacing.xl,
    },
    headerBar: {
        height: 4,
        width: 60,
        backgroundColor: theme.colors.primary,
        marginBottom: theme.spacing.md,
        borderRadius: 2,
    },
    pageTitle: {
        ...theme.typography.h1,
        marginBottom: theme.spacing.xs,
    },
    pageSubtitle: {
        ...theme.typography.body,
        color: theme.colors.textSecondary,
    },
    accountCard: {
        backgroundColor: theme.colors.surface || '#FFFFFF',
        borderRadius: theme.spacing.md,
        padding: theme.spacing.lg,
        marginBottom: theme.spacing.md,
        shadowColor: theme.colors.textPrimary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
        borderWidth: 1,
        borderColor: theme.colors.border,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: theme.spacing.sm,
    },
    accountName: {
        ...theme.typography.h2,
        fontSize: 18,
    },
    accountNumber: {
        ...theme.typography.caption,
        fontSize: 14,
        marginTop: 4,
    },
    balance: {
        ...theme.typography.h1,
        color: theme.colors.primary,
        fontSize: 24,
        marginTop: theme.spacing.sm,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: theme.colors.background,
        borderTopLeftRadius: theme.spacing.xl,
        borderTopRightRadius: theme.spacing.xl,
        height: '85%',
        paddingTop: theme.spacing.lg,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: theme.spacing.lg,
        paddingBottom: theme.spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    modalTitle: {
        ...theme.typography.h2,
    },
    closeButtonText: {
        ...theme.typography.button,
        color: theme.colors.primary,
    },
    transactionList: {
        paddingHorizontal: theme.spacing.lg,
    },
    transactionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: theme.spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    },
    txDescription: {
        ...theme.typography.body,
        fontWeight: '600',
        marginBottom: 2,
    },
    txDate: {
        ...theme.typography.caption,
    },
    txAmount: (type: 'CREDIT' | 'DEBIT') => ({
        ...theme.typography.body,
        fontWeight: '700',
        color: type === 'CREDIT' ? '#2E7D32' : theme.colors.textPrimary,
    }),
}));