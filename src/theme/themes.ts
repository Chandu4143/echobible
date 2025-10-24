import { AppTheme, ThemeMode } from './types';

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

const lightColors = {
  background: '#FFFFFF',
  surface: '#F6F7FB',
  card: '#FFFFFF',
  primary: '#4C6EF5',
  secondary: '#82C91E',
  text: '#1C1C1E',
  muted: '#6C757D',
  border: '#E0E0E0',
  notification: '#F03E3E',
} as const;

const darkColors = {
  background: '#121212',
  surface: '#1E1E1E',
  card: '#1F1F1F',
  primary: '#748FFC',
  secondary: '#94D82D',
  text: '#F5F5F5',
  muted: '#9DA3AE',
  border: '#2C2C2E',
  notification: '#FF6B6B',
} as const;

const getFontSizes = (scale: number) => ({
  caption: Math.round(12 * scale),
  body: Math.round(16 * scale),
  title: Math.round(20 * scale),
  headline: Math.round(24 * scale),
});

export const createTheme = (mode: ThemeMode, fontScale: number): AppTheme => ({
  mode,
  colors: mode === 'dark' ? darkColors : lightColors,
  spacing,
  fontScale,
  fontSizes: getFontSizes(fontScale),
});
