import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { ScreenContainer, Typography } from '../components/ui';
import { useTheme } from '../theme/ThemeProvider';
import { FontScaleOption, useSettingsStore } from '../store/settingsStore';
import { ThemePreference } from '../theme/types';

const themeOptions: ThemePreference[] = ['system', 'light', 'dark'];
const fontScaleOptions: Array<{ label: string; value: FontScaleOption }> = [
  { label: 'Small', value: 0.85 },
  { label: 'Default', value: 1 },
  { label: 'Large', value: 1.15 },
];

export const SettingsScreen: React.FC = () => {
  const { theme } = useTheme();
  const { colors, spacing } = theme;
  const themePreference = useSettingsStore((state) => state.themePreference);
  const fontScale = useSettingsStore((state) => state.fontScale);
  const setThemePreference = useSettingsStore((state) => state.setThemePreference);
  const setFontScale = useSettingsStore((state) => state.setFontScale);

  return (
    <ScreenContainer>
      <Typography variant="headline" weight="bold">
        Settings
      </Typography>

      <Typography style={styles.sectionLabel} weight="medium">
        Appearance
      </Typography>
      <View style={styles.optionGroup}>
        {themeOptions.map((option, index) => {
          const isActive = themePreference === option;
          return (
            <Pressable
              key={option}
              onPress={() => setThemePreference(option)}
              style={[
                styles.optionButton,
                index !== themeOptions.length - 1 && styles.optionSpacing,
                {
                  borderColor: colors.border,
                  backgroundColor: isActive ? colors.primary : colors.surface,
                },
              ]}
            >
              <Typography weight="medium" style={{ color: isActive ? '#FFFFFF' : colors.text }}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </Typography>
            </Pressable>
          );
        })}
      </View>

      <Typography style={[styles.sectionLabel, { marginTop: spacing.lg }]} weight="medium">
        Font size
      </Typography>
      <View style={styles.optionGroup}>
        {fontScaleOptions.map((option, index) => {
          const isActive = fontScale === option.value;
          return (
            <Pressable
              key={option.label}
              onPress={() => setFontScale(option.value)}
              style={[
                styles.optionButton,
                index !== fontScaleOptions.length - 1 && styles.optionSpacing,
                {
                  borderColor: colors.border,
                  backgroundColor: isActive ? colors.secondary : colors.surface,
                },
              ]}
            >
              <Typography weight="medium" style={{ color: isActive ? colors.background : colors.text }}>
                {option.label}
              </Typography>
            </Pressable>
          );
        })}
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  sectionLabel: {
    marginTop: 24,
  },
  optionGroup: {
    flexDirection: 'row',
    marginTop: 12,
  },
  optionButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
  },
  optionSpacing: {
    marginRight: 12,
  },
});
