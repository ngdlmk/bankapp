/**
 * Core Automation E2E Selectors
 * Centralized registry mapping interactive components for QA UI-testing frameworks (Detox/Appium).
 */
export const TEST_IDS = {
  // Screens
  SCREEN_LOGIN: 'screen-login',
  SCREEN_HOME: 'screen-home',
  SCREEN_PROFILE: 'screen-profile',

  // Buttons
  BTN_LOGIN: 'btn-login',
  BTN_LOGOUT: 'btn-logout',
  BTN_SAVE: 'btn-save',
  BTN_SWITCH_LANG: 'btn-switch-language',

  // Inputs
  INPUT_EMAIL: 'input-email',
  INPUT_PASSWORD: 'input-password',
  INPUT_SEARCH: 'input-search',
} as const;
