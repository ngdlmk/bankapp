import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../../components/button/button';

export default function Tab1Screen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tab 1 Content</Text>

      <View style={styles.buttonWrapper}>
        <Button title="Button" onPress={() => router.push('/profile/1530')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    marginTop: 20,
    width: '80%',
  },
});
