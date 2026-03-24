import { useAtomValue } from 'jotai';
import React from 'react';
import { Text, View } from 'react-native';

import { appStateAtom } from '@/states/app-state-atom';

import { styles } from './live.styles';

export default function Tab3Screen() {
  // Exclusively consume runtime values suppressing bidirectional mutation overrides (Read-only setup)
  const appState = useAtomValue(appStateAtom);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab 3 (Read-Only)</Text>
      <Text style={styles.subtitle}>The text entered in Tab 2 updates dynamically below.</Text>

      <View style={styles.valueBox}>
        {appState ? (
          <Text style={styles.valueText}>{appState}</Text>
        ) : (
          <Text style={[styles.valueText, { color: '#999', fontSize: 16 }]}>
            No value entered yet
          </Text>
        )}
      </View>
    </View>
  );
}
