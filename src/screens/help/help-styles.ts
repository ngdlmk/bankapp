import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme, rt) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    header: {
        padding: theme.spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
        backgroundColor: theme.colors.background,
    },
    title: {
        ...theme.typography.h1,
        fontSize: 20,
    },
    subtitle: {
        ...theme.typography.body,
        fontSize: 14,
        color: theme.colors.textSecondary,
    },

    chatContainer: {
        paddingHorizontal: theme.spacing.md,
        paddingTop: theme.spacing.md,
    },

    messageBubble: (isUser: boolean) => ({
        maxWidth: '80%',
        padding: theme.spacing.md,
        borderRadius: theme.spacing.md,
        marginBottom: theme.spacing.md,
        alignSelf: isUser ? 'flex-end' : 'flex-start',
        backgroundColor: isUser ? theme.colors.primary : theme.colors.backgroundAlt,
        borderBottomRightRadius: isUser ? 0 : theme.spacing.md,
        borderBottomLeftRadius: isUser ? theme.spacing.md : 0,
    }),

    messageText: (isUser: boolean) => ({
        ...theme.typography.body,
        fontSize: 15,
        color: isUser ? theme.colors.white : theme.colors.textPrimary,
    }),
    inputContainer: {
        flexDirection: 'row',
        padding: theme.spacing.md,
        borderTopWidth: 1,
        borderTopColor: theme.colors.border,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        paddingBottom: rt.insets.bottom > 0 ? rt.insets.bottom : theme.spacing.md,
    },
    textInput: {
        flex: 1,
        backgroundColor: theme.colors.backgroundAlt,
        borderRadius: 25,
        paddingHorizontal: theme.spacing.lg,
        paddingVertical: theme.spacing.sm,
        color: theme.colors.textPrimary,
        fontSize: 16,
        maxHeight: 100,
        marginRight: theme.spacing.sm,
    },
    sendButton: {
        backgroundColor: theme.colors.primary,
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButtonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    loadingText: {
        ...theme.typography.caption,
        marginLeft: theme.spacing.sm,
        marginTop: 4,
        color: theme.colors.textSecondary
    }
}));