import { create } from 'zustand';

import { ThemePreference } from '../theme/types';

export type FontScaleOption = 0.85 | 1 | 1.15;

interface SettingsState {
  themePreference: ThemePreference;
  fontScale: FontScaleOption;
  setThemePreference: (themePreference: ThemePreference) => void;
  setFontScale: (fontScale: FontScaleOption) => void;
}

const initialState: Pick<SettingsState, 'themePreference' | 'fontScale'> = {
  themePreference: 'system',
  fontScale: 1,
};

export const useSettingsStore = create<SettingsState>((set) => ({
  ...initialState,
  setThemePreference: (themePreference) => set({ themePreference }),
  setFontScale: (fontScale) => set({ fontScale }),
}));
