/**
 * Master Asset Registry
 * Centralized repository exposing statically analyzed media assets.
 * Eliminates fragile relative pathing across deep UI component tree structures.
 */

// 1. Scalable Vector Graphics (SVG)
import IconNaarLogo from './svgs/naar-logo.svg';

// 2. Native Rasterized Images (PNG, JPG)
const IMAGES = {
  APP_ICON: require('./images/icon.png'),
  SPLASH_ICON: require('./images/splash-icon.png'),
  FAVICON: require('./images/favicon.png'),
  REACT_LOGO: require('./images/react-logo.png'),
} as const;

// 3. Centralized Export Node
export const ASSETS = {
  ICONS: {
    NaarLogo: IconNaarLogo,
  },
  IMAGES,
};
