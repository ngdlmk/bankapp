import { ShawbrookButton } from '@/components/button/button';
import { routes } from '@/constants/routes';
import { LoginScreenNavigationProps } from '@/types/navigation-types';
import * as SecureStore from 'expo-secure-store';
import React, { useState } from 'react';
import {
    Modal,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView, WebViewNavigation } from 'react-native-webview';
import { styles } from './login-screen-styles';

const REDIRECT_URI = 'https://openidconnect.net/callback';
const AUTH_URL = `https://samples.auth0.com/authorize?client_id=kbyuFDidLLm280LIwVFiazOqjO3ty8KH&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=openid%20profile%20email%20phone%20address&response_type=code&state=828e7bb8b03048eb13ea52cc7149461dca531be3`;

const LoginScreen = ({ navigation }: LoginScreenNavigationProps) => {
    const [showLogin, setShowLogin] = useState(false);
    const [authCode, setAuthCode] = useState<string | null>(null);

    const handleNavigationStateChange = async (navState: WebViewNavigation) => {
        const { url } = navState;
        if (url.startsWith(REDIRECT_URI)) {
            if (url.includes('code=')) {
                const match = url.match(/code=([^&]*)/);
                if (match) {
                    const code = match[1];
                    await SecureStore.setItemAsync('user_token', code);
                    setAuthCode(code);
                    setShowLogin(false);
                    setTimeout(() => {
                        navigation.replace(routes.SECURITY_SCREEN);
                    }, 1500);
                }
            }
            
            if (url.includes('error=')) {
                setShowLogin(false);
            }
        }
    };

    return (
        <>
            <StatusBar barStyle="default" />
            <SafeAreaView style={styles.container}>
                <View style={styles.contentContainer}>

                    <View style={styles.headerBar} />
                    <Text style={styles.title}>Connect Account</Text>
                    <Text style={styles.subtitle}>
                        Securely link your profile.
                    </Text>

                    <View style={styles.spacerLarge} />

                    {authCode ? (
                        <View style={styles.resultBox}>
                            <Text style={styles.resultLabel}>Authorization Successful</Text>
                            <Text style={styles.codeText} selectable>Redirecting to security setup...</Text>
                            <View style={styles.spacerSmall} />
                        </View>
                    ) : (
                        <ShawbrookButton title="Continue to Secure Login" onPress={() => setShowLogin(true)} />
                    )}
                </View>

                <Modal visible={showLogin} animationType="slide" presentationStyle="pageSheet">
                    <SafeAreaView style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Sign In</Text>
                            <TouchableOpacity onPress={() => setShowLogin(false)} style={styles.cancelBtn}>
                                <Text style={styles.cancelText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.webViewWrapper}>
                            <WebView
                                source={{ uri: AUTH_URL }}
                                onNavigationStateChange={handleNavigationStateChange}
                                incognito={true}
                                startInLoadingState={true}
                                renderLoading={() => (
                                    <View style={styles.loadingContainer}>
                                        <Text style={styles.loadingText}>Loading...</Text>
                                    </View>
                                )}
                            />
                        </View>
                    </SafeAreaView>
                </Modal>
            </SafeAreaView>
        </>
    );
};

export default LoginScreen;