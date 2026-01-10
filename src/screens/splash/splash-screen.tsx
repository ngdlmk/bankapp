import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './splash-screen-styles';

const SplashScreen = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Splash Screen</Text>
    </View>
);

export default SplashScreen;