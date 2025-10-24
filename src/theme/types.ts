export type ThemeMode = 'light' | 'dark';
export type ThemePreference = ThemeMode | 'system';

export interface ThemeColors {
  background: string;
  surface: string;
  card: string;
  primary: string;
  secondary: string;
  text: string;
  muted: string;
  border: string;
  notification: string;
}

export interface ThemeSpacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface ThemeFontSizes {
  caption: number;
  body: number;
  title: number;
  headline: number;
}

export interface AppTheme {
  mode: ThemeMode;
  colors: ThemeColors;
  spacing: ThemeSpacing;
  fontSizes: ThemeFontSizes;
  fontScale: number;
}

export interface ThemeContextValue {
  theme: AppTheme;
  themePreference: ThemePreference;
  setThemePreference: (mode: ThemePreference) => void;
  fontScale: number;
  setFontScale: (scale: number) => void;
}
