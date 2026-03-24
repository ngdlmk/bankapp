import { Redirect } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Animated, { FadeOut, ZoomIn } from 'react-native-reanimated';

import { ASSETS } from '@/assets';

import { styles } from './index.styles';

export default function Index() {
  const [authRoute, setAuthRoute] = useState<string | null>(null);

  useEffect(() => {
    const checkAuthAndInit = async () => {
      // Intentionally offset to showcase seamless Reanimated entry kinematics successfully
      const timer = setTimeout(async () => {
        try {
          const token = await SecureStore.getItemAsync('userToken');
          if (token) {
            setAuthRoute('/(tabs)/home');
          } else {
            setAuthRoute('/login');
          }
        } catch (e) {
          setAuthRoute('/login');
        }
      }, 2500);

      return () => clearTimeout(timer);
    };

    checkAuthAndInit();
  }, []);

  if (authRoute) {
    return <Redirect href={authRoute as any} />;
  }

  // Safely extract the mapped native SVG framework
  const NaarLogo = ASSETS.ICONS.NaarLogo;

  return (
    <View style={styles.container}>
      {/* High-Performance declarative UI animations bridging scalable vectors */}
      <Animated.View
        entering={ZoomIn.duration(1600)}
        exiting={FadeOut.duration(600)}
        style={styles.logoContainer}
      >
        <NaarLogo width={160} height={160} />
      </Animated.View>
    </View>
  );
}
