import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme, rt) => ({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: theme.colors.border,
        backgroundColor: theme.colors.background,
        paddingBottom: rt.insets.bottom + theme.spacing.sm,
        paddingTop: theme.spacing.xs,
    },
    defaultButton: {
        alignItems: 'center',
        marginTop: theme.spacing.sm,
        flex: 1,
    },

    indicator: (isSelected: boolean) => ({
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 18,
        borderRadius: 20,
        backgroundColor: isSelected
            ? (theme.name === 'dark' ? theme.colors.successDark : theme.colors.successLight)
            : 'transparent',
    }),
    label: (isSelected: boolean) => ({
        fontSize: 14,
        marginTop: theme.spacing.sm,
        lineHeight: 16,
        color: isSelected ? theme.colors.textPrimary : theme.colors.textSecondary,
        fontWeight: isSelected ? '600' : '400',
        fontFamily: isSelected ? 'Inter-SemiBold' : 'Inter-Regular',
    }),
}));