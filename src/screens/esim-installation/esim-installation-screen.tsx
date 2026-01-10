import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    onDone?: () => void;
};

/**
 * Simple success screen for eSIM installation.
 * - Shows a check icon, title, message and a Done button.
 * - If onDone prop is provided it will be called, otherwise the screen will try to goBack() or navigate to 'Home'.
 */
const EsimInstallationScreen: React.FC<Props> = ({ onDone }) => {
    const navigation: any = useNavigation();

    const handleDone = () => {
        if (onDone) {
            onDone();
            return;
        }

        if (navigation && typeof navigation.canGoBack === 'function' && navigation.canGoBack()) {
            navigation.goBack();
            return;
        }

        if (navigation && typeof navigation.navigate === 'function') {
            navigation.navigate('Home');
            return;
        }

        // fallback
        console.log('Done pressed');
    };

    return (
        <View style={styles.container}>
            <View style={styles.iconCircle}>
                <Text style={styles.icon}>✓</Text>
            </View>

            <Text style={styles.title}>Installation Complete</Text>
            <Text style={styles.message}>Your eSIM was installed successfully.</Text>

            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleDone}>
                <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EsimInstallationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    iconCircle: {
        width: 96,
        height: 96,
        borderRadius: 48,
        backgroundColor: '#E6FFF2',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    icon: {
        fontSize: 48,
        color: '#07A76A',
        lineHeight: 48,
        fontWeight: '600',
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 8,
    },
    message: {
        fontSize: 15,
        color: '#6B7280',
        textAlign: 'center',
        marginBottom: 32,
        paddingHorizontal: 12,
    },
    button: {
        backgroundColor: '#0EA5A4',
        paddingVertical: 12,
        paddingHorizontal: 28,
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});