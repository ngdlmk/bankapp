import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { Alert, Keyboard, Text, TextInput, View } from 'react-native';

import { Button } from '@/components/button/button';
import { appStateAtom } from '@/states/app-state-atom';

import { styles } from './discover.styles';

export default function Tab2Screen() {
  const [appState, setAppState] = useAtom(appStateAtom);
  const [inputText, setInputText] = useState('');

  const handleSave = () => {
    if (!inputText.trim()) {
      Alert.alert('Warning', 'Please enter a valid text.');
      return;
    }

    // Automatically syncing persistent storage mechanism resolving Jotai MMKV bindings natively
    setAppState(inputText);

    // Reset buffer pipeline tracking active input and suspend interaction window (Keyboard)
    setInputText('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jotai & MMKV Test</Text>

      {appState ? (
        <Text style={styles.savedText}>Saved Value: {appState}</Text>
      ) : (
        <Text style={styles.subtitle}>No value saved yet.</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Enter text to save to Atom"
        placeholderTextColor="#999"
        value={inputText}
        onChangeText={setInputText}
      />

      <Button title="Save to Atom" onPress={handleSave} />
    </View>
  );
}
