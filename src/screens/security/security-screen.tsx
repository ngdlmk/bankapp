import ShawbrookLogo from '@/assets/svgs/shawbrook.svg';
import { routes } from '@/constants/routes';
import { AppStackParamList } from '@/types/navigation-types';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as LocalAuthentication from 'expo-local-authentication';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, Vibration, View } from 'react-native';
import { styles } from './security-screen-styles';

type Props = NativeStackScreenProps<AppStackParamList, 'SECURITY_SCREEN'>;

type ScreenStatus = 'LOADING' | 'ENTER' | 'CREATE' | 'CONFIRM';

const SecurityScreen = ({ navigation }: Props) => {
    const [status, setStatus] = useState<ScreenStatus>('LOADING');
    const [pin, setPin] = useState('');
    const [tempPin, setTempPin] = useState('');
    const [biometricSupported, setBiometricSupported] = useState(false);

    useEffect(() => {
        checkSecurity();
    }, []);

    const checkSecurity = async () => {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();
        setBiometricSupported(hasHardware && isEnrolled);

        const storedPin = await SecureStore.getItemAsync('user_pin');

        if (storedPin) {
            setStatus('ENTER');
            if (hasHardware && isEnrolled) {
                promptBiometrics();
            }
        } else {
            setStatus('CREATE');
        }
    };

    const promptBiometrics = async () => {
        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Login to Shawbrook',
            fallbackLabel: 'Use PIN',
        });

        if (result.success) {
            unlockApp();
        }
    };

    const unlockApp = () => {
        navigation.replace(routes.TAB_NAVIGATOR, { screen: routes.DASHBOARD_TAB });
    };

    const handlePress = async (val: string) => {
        if (val === 'delete') {
            setPin(prev => prev.slice(0, -1));
            return;
        }

        if (val === 'bio') {
            promptBiometrics();
            return;
        }

        const newPin = pin + val;

        if (newPin.length <= 4) {
            setPin(newPin);
            if (newPin.length === 4) {
                await processPinLogic(newPin);
            }
        }
    };

    const processPinLogic = async (inputPin: string) => {
        setTimeout(async () => {
            if (status === 'ENTER') {
                const storedPin = await SecureStore.getItemAsync('user_pin');
                if (inputPin === storedPin) {
                    unlockApp();
                } else {
                    handleError();
                }
            }
            else if (status === 'CREATE') {
                setTempPin(inputPin);
                setPin('');
                setStatus('CONFIRM');
            }
            else if (status === 'CONFIRM') {
                if (inputPin === tempPin) {
                    await SecureStore.setItemAsync('user_pin', inputPin);
                    Alert.alert('Success', 'PIN created successfully!');
                    unlockApp();
                } else {
                    Alert.alert('Error', 'PINs do not match. Try again.');
                    setPin('');
                    setStatus('CREATE');
                }
            }
        }, 100);
    };

    const handleError = () => {
        Vibration.vibrate();
        setPin('');
        Alert.alert('Incorrect PIN', 'Please try again.');
    };

    const getTitle = () => {
        switch (status) {
            case 'CREATE': return 'Create a PIN';
            case 'CONFIRM': return 'Confirm your PIN';
            default: return 'Enter PIN';
        }
    };

    const getSubtitle = () => {
        switch (status) {
            case 'CREATE': return 'Secure your account with a 4-digit code';
            case 'CONFIRM': return 'Re-enter to confirm';
            default: return 'Enter your 4-digit security code';
        }
    };

    if (status === 'LOADING') {
        return (
            <View style={[styles.container, { backgroundColor: '#...ThemeBackground...' }]}>
                <ShawbrookLogo width={200} height={60} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{getTitle()}</Text>
            <Text style={styles.subtitle}>{getSubtitle()}</Text>
            <View style={styles.dotsContainer}>
                {[1, 2, 3, 4].map((i) => (
                    <View key={i} style={styles.dot(pin.length >= i)} />
                ))}
            </View>
            <View style={styles.keypadContainer}>
                {[
                    ['1', '2', '3'],
                    ['4', '5', '6'],
                    ['7', '8', '9'],
                    ['bio', '0', 'delete']
                ].map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((key) => {
                            if (key === 'bio') {
                                return (
                                    <TouchableOpacity
                                        key={key}
                                        style={styles.biometricIcon}
                                        onPress={() => status === 'ENTER' && promptBiometrics()}
                                        disabled={status !== 'ENTER' || !biometricSupported}
                                    >
                                        {status === 'ENTER' && biometricSupported && (
                                            <Ionicons name="finger-print" size={32} color="white" />
                                        )}
                                    </TouchableOpacity>
                                );
                            }
                            if (key === 'delete') {
                                return (
                                    <TouchableOpacity key={key} style={styles.biometricIcon} onPress={() => handlePress('delete')}>
                                        <Ionicons name="backspace-outline" size={32} color="white" />
                                    </TouchableOpacity>
                                );
                            }
                            return (
                                <TouchableOpacity
                                    key={key}
                                    style={styles.keyButton}
                                    onPress={() => handlePress(key)}
                                    activeOpacity={0.7}
                                >
                                    <Text style={styles.keyText}>{key}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                ))}
            </View>
        </View>
    );
};

export default SecurityScreen;