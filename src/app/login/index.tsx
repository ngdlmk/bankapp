import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React, { useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';

import { Button } from '@/components/button/button';

import { styles } from './index.styles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Warning', 'Please fill in all fields.');
      return;
    }

    // Generate random arbitrary token sequence for dummy simulation
    const randomToken = Math.random().toString(36).substring(2) + Date.now().toString(36);

    // Store generated token uniformly persisting into device localized registry
    await SecureStore.setItemAsync('userToken', randomToken);

    // Reroute active session resolving back into primary stack entry
    router.replace('/(tabs)/home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
