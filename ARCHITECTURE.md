# Enterprise App Architecture Guide

Welcome to the core developer documentation. This project is structured using industry-standard **Enterprise-Level React Native (Expo) Conventions**, focusing heavily on scalability, strong TypeScript inference, zero-clutter file imports, and unified component ecosystems.

---

## 📁 `src/` Directory Architecture

The entire codebase lives inside the `src/` folder. Everything is systematically separated by domain rather than arbitrary folders.

```text
src/
 ├── api/             // Central API Client, React Query configs, and Domain-Endpoints
 ├── app/             // Expo Router File-Based Navigation (Screens & Tabs)
 ├── assets/          // Unified Asset Registry (Images, SVGs, Lottie)
 ├── components/      // Universal Design System UI Components (Button, Text, etc.)
 ├── constants/       // Universal Constants (TestIDs, Enums)
 ├── locales/         // i18n Translation dictionaries & RTL Managers
 ├── states/          // Global State Atoms (Jotai) + Storage bindings (MMKV)
 ├── theme/           // Unistyles Architecture (Palettes, Spacing, Typography)
 └── utils/           // Central Utilities (Analytics, Parsers, Helpers)
```

---

## 🏗️ 1. Multi-Environment Variables

We employ a robust environment injection strategy allowing seamless context switching.

- **`.env`**: Global base secrets.
- **`.env.development`**: Active locally during `npx expo start`. Points to dev APIs.
- **`.env.production`**: Exclusively compiled into the app when building for the App Store / Play Store.

> 🛠 **Rule:** Do NOT commit `.env.production.local` with real sensitive secrets, rely on EAS Secrets instead for extreme security.

---

## 📡 2. Centralized API & Networking (`src/api`)

We strictly decouple API configuration from data consumption.

- `apiClient.ts`: The unified Axios instance. Automatically embeds `Bearer ${token}` into headers.
- `hooks/`: Domain-driven React Query fetchers.
  - **Example Usage** in UI components:

    ```tsx
    import { usePosts } from '@/api/hooks/posts';

    // Inside your component:
    const { data: posts, isLoading } = usePosts();
    ```

---

## 🎨 3. Design System & Unistyles (`src/theme` & `components`)

We do not hardcode styles like `color: '#FFFFFF'`. We utilize `react-native-unistyles` enabling instant Light/Dark mode and RTL shifting.

### **The Color Palette (Tint/Shade Logic)**

Inside `src/theme/palette.ts`, you will notice semantic colors named `success`, `successLight`, and `successDark`.

- **Myth:** "Light" means Light Mode. (False!)
- **Fact:** "Light" means a visually "tinted / pale" background shade within the current theme.

_Usage:_ Use `primaryLight` for a soft accent background, and `primaryDark` for highly legible contrasting text overlaying that background.

### **Using Components (`Button` & `Text`)**

Always use the specialized UI kit located in `src/components`.

```tsx
import { Text } from '@/components/text/text';
import { Button } from '@/components/button/button';

// Renders an automated typography heading mapping directly to Lufga-Bold sizes
<Text variant="h1" color="primary">Headline</Text>

// Renders a robust, tracked interactive element
<Button
  title="Submit"
  variant="danger"
  size="lg"
  loading={false}
  analyticsEvent="btn_submit_clicked" // Automatically fires to Analytics core
  testID={TEST_IDS.BTN_SAVE} // Maps to E2E Testing registries
/>
```

---

## 🌐 4. Asset Barrel Registry (`src/assets`)

Never write spaghetti imports like: `require('../../assets/images/logo.png')`.
We export everything from `src/assets/index.ts`.

- **Images:** `<Image source={ASSETS.IMAGES.APP_ICON} />`
- **SVGs:** Native SVG components inherit sizes automatically:
  `<ASSETS.ICONS.NaarLogo width={100} height={100} color="red" />`

---

## 🔄 5. Global State Management (`src/states`)

Instead of bloated Redux boilerplates, we use **Jotai** integrated with **MMKV** for instantaneous asynchronous persistent state updates.

1. Declare atom: `export const userAtom = atomWithStorage('user', null, storage);`
2. Consume anywhere: `const [user, setUser] = useAtom(userAtom);`

---

## 🗺️ 6. i18n Localization & RTL (`src/locales`)

The application natively orchestrates translation shifts targeting English (`en`), Turkish (`tr`), and Arabic (`ar`).

1. Use the `t()` hook functionally within valid scopes:

```tsx
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
<Text>{t('welcome')}</Text>;
```

2. When the language switches to Arabic (`ar`), the iOS/Android `I18nManager` physically flips the entire UI matrix to Right-To-Left (RTL) mirroring inherently.

---

## 🧪 7. Future Proofing (TestIDs & Analytics)

Both features are implemented globally across core components:

- **`src/constants/testIDs.ts`**: Contains exact selectors avoiding typo bugs when writing QA tests (Detox/Appium).
- **`src/utils/analytics.ts`**: Re-route events safely through a single stream interface (Firebase/Adjust/Mixpanel without refactoring UI logic).
