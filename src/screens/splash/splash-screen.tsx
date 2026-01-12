import ShawbrookLogo from '@/assets/svgs/shawbrook.svg';
import { routes } from '@/constants/routes';
import { SplashScreenNavigationProps } from '@/types/navigation-types';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { styles } from './splash-screen-styles';

const SplashScreen = ({ navigation }: SplashScreenNavigationProps) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;

    useEffect(() => {
        /* SecureStore.deleteItemAsync('user_token');
        SecureStore.deleteItemAsync('user_pin'); */
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 6,
                tension: 40,
                useNativeDriver: true,
            }),
        ]).start();

        const initApp = async () => {
            try {
                const [token] = await Promise.all([
                    SecureStore.getItemAsync('user_token'),
                    new Promise((resolve) => setTimeout(resolve, 2500)),
                ]);

                if (token) {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: routes.SECURITY_SCREEN }],
                    });
                } else {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: routes.LOGIN_SCREEN }],
                    });
                }
            } catch (error) {
                console.error("Splash Screen Error:", error);
                navigation.replace(routes.LOGIN_SCREEN);
            }
        };

        initApp();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.logoContainer,
                    {
                        opacity: fadeAnim,
                        transform: [{ scale: scaleAnim }],
                    },
                ]}
            >
                <ShawbrookLogo width={300} height={90} />
            </Animated.View>
        </View>
    );
};

export default SplashScreen;