import React, { createContext, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { useSettingsStore } from '../store/settingsStore';
import { createTheme } from './themes';
import { ThemeContextValue, ThemePreference } from './types';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

const fallbackPreference: ThemePreference = 'system';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const themePreference = useSettingsStore((state) => state.themePreference ?? fallbackPreference);
  const fontScale = useSettingsStore((state) => state.fontScale);
  const setThemePreference = useSettingsStore((state) => state.setThemePreference);
  const setFontScale = useSettingsStore((state) => state.setFontScale);

  const resolvedMode = themePreference === 'system' ? systemColorScheme ?? 'light' : themePreference;

  const theme = useMemo(() => createTheme(resolvedMode, fontScale), [resolvedMode, fontScale]);

  const value = useMemo(
    () => ({
      theme,
      themePreference,
      setThemePreference,
      fontScale,
      setFontScale,
    }),
    [theme, themePreference, setThemePreference, fontScale, setFontScale]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
