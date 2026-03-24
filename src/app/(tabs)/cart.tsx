import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Tab4Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tab 4 Content</Text>
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
});
