import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { DevSettings, I18nManager } from 'react-native';

import ar from './ar.json';
import en from './en.json';
import tr from './tr.json';

const resources = {
  en: { translation: en },
  tr: { translation: tr },
  ar: { translation: ar },
};

// Extrapolate hardware device natively registered language profile to inject into localization bootstrap sequence
const deviceLang = getLocales()[0]?.languageCode ?? 'en';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources,
  lng: deviceLang,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

/**
 * Universal interface updating semantic locale profiles while seamlessly shifting Layout Direction matrix.
 */
export const changeLanguage = (lng: 'en' | 'tr' | 'ar') => {
  i18n.changeLanguage(lng).then(() => {
    // Assert Right-To-Left UI geometry shift execution flag
    const isRTL = lng === 'ar';

    if (I18nManager.isRTL !== isRTL) {
      I18nManager.allowRTL(isRTL);
      I18nManager.forceRTL(isRTL);

      // Execute full runtime evaluation reload mirroring physical framework restarting forcing architectural recompute sequence
      setTimeout(() => {
        if (__DEV__) {
          DevSettings.reload();
        } else {
          // Additional prompt should be shown in production to instruct user to manual restart
          console.warn(
            'RTL shift requires a full application hard-restart to map OS UI layers correctly natively.',
          );
        }
      }, 500);
    }
  });
};

export default i18n;
