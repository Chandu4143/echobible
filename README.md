# EchoBible

EchoBible is a bilingual Bible reading experience focused on seamless English and Telugu study. This repository contains the React Native (Expo) mobile application scaffold, featuring opinionated architecture, theming, navigation, and state management foundations.

## Getting started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the Expo development server**
   ```bash
   npm run start
   ```
3. Launch the platform of your choice (press `i` for iOS simulator, `a` for Android emulator, or `w` for web) once the Expo CLI is running.

### Available scripts

- `npm run start` – launch the Expo Metro bundler.
- `npm run android` – build and run the Android app (requires Android tooling).
- `npm run ios` – build and run the iOS app (requires macOS + Xcode).
- `npm run web` – run the project in a web browser.
- `npm run lint` – run ESLint against the TypeScript source.
- `npm run typecheck` – run the TypeScript compiler in `--noEmit` mode.
- `npm run test` – execute the Jest test suite.

## Project structure

```
.
├── App.tsx                     # Root application entry
├── app.json                    # Expo project configuration
├── assets/                     # Static assets placeholder
├── data/                       # Scripture data sources
├── src/
│   ├── components/
│   │   └── ui/                 # Shared UI primitives
│   ├── navigation/             # React Navigation setup
│   ├── screens/                # Feature screens (Home, Reader, Search, Settings)
│   ├── store/                  # Global Zustand stores
│   └── theme/                  # Theming utilities and provider
├── jest.config.js              # Jest configuration
├── jest.setup.ts               # Jest environment bootstrap
├── metro.config.js             # Metro bundler config
├── package.json
├── prettier.config.js
├── tsconfig.json
└── .husky/                     # Git hooks (configured via Husky)
```

## Architectural overview

### Navigation
- Uses React Navigation with a native stack that hosts a bottom tab navigator (Home, Reader, Search, Settings).
- Screen-level scaffolds provide separation of concerns and simplify future feature expansion.

### State management
- Global app settings are powered by [Zustand](https://github.com/pmndrs/zustand).
- Initial store tracks theme preference (system/light/dark) and font scaling to support accessibility.

### Theming
- `ThemeProvider` resolves system color scheme alongside user preferences and exposes a typed theme object.
- Light/Dark palettes and scalable typography are centralized, ensuring consistent design tokens across the app.
- Hooks (`useTheme`) expose theme values to screens, components, and navigation containers.

### UI primitives
- `ScreenContainer` standardizes safe area handling, background colors, and spacing.
- `Typography` wraps React Native `Text` with semantic variants, theme-aware colors, and font weights.

## Testing, linting, and formatting

- Unit testing is configured with Jest and Testing Library for React Native.
- ESLint (with the React Native community config) and Prettier ensure consistent code quality.
- Run `npm run lint`, `npm run typecheck`, and `npm run test` to validate changes locally.

## Commit hooks

- Husky is configured with a `pre-commit` hook that runs `lint-staged` for targeted linting and formatting.
- After installing dependencies, Husky hooks are enabled automatically via the `prepare` script. If needed manually, run:
  ```bash
  npx husky install
  ```

## Data sources

The `data/` directory retains the bilingual scripture datasets used by the reader experience. These files are not consumed yet but remain part of the repository for future integrations.
