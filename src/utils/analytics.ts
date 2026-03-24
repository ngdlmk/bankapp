/**
 * Centralized Analytics Service
 * When integrating Firebase, Mixpanel, Adjust or Amplitude later on,
 * you only need to modify this specific function logic instead of hundreds of files.
 */
export const trackEvent = async (eventName: string, params?: Record<string, unknown>) => {
  try {
    // Real Analytics Code Placeholder (e.g., await analytics().logEvent(eventName, params);)

    if (__DEV__) {
      console.log(`📊 [Analytics Event]: ${eventName}`, params || {});
    }
  } catch (error) {
    if (__DEV__) {
      console.error(`🚨 [Analytics Error]: Failed to log event ${eventName}`, error);
    }
  }
};
