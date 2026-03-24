import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, View } from 'react-native';

import { Button } from '@/components/button/button';
import { Text } from '@/components/text/text';
import { changeLanguage } from '@/locales/i18n';

import { styles } from './profile.styles';

export default function ProfileScreen() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const handleLogout = async () => {
    try {
      await SecureStore.deleteItemAsync('userToken');
      // Transition strictly enforcing authorization scope closure inherently
      router.replace('/login');
    } catch (error) {
      Alert.alert(t('error'), t('logout_error'));
    }
  };

  const handleLangToggle = () => {
    // Rotation toggling algorithm enforcing seamless locale permutations encompassing RTL shift (AR)
    if (i18n.language === 'en') changeLanguage('tr');
    else if (i18n.language === 'tr') changeLanguage('ar');
    else changeLanguage('en');
  };

  return (
    <View style={styles.container}>
      <Text variant="h2" color="textPrimary">
        {t('my_profile')}
      </Text>

      <Text variant="body2" color="textSecondary" style={{ marginTop: 16 }}>
        {t('test_api')}: {apiUrl || 'Not Found'}
      </Text>

      <View style={{ marginTop: 32, width: '100%' }}>
        <Button title={t('switch_lang')} onPress={handleLangToggle} variant="ghost" />
      </View>

      <View style={{ marginTop: 8, width: '100%' }}>
        <Button title={t('logout')} onPress={handleLogout} variant="danger" />
      </View>
    </View>
  );
}
