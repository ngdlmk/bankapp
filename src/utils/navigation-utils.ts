import { AppStackParamList } from '@/types/navigation-types';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<AppStackParamList>();

export function navigateToSecurity() {
  if (navigationRef.isReady()) {
    navigationRef.navigate('SECURITY_SCREEN');
  }
}