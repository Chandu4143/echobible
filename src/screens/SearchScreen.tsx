import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { ScreenContainer, Typography } from '../components/ui';
import { useTheme } from '../theme/ThemeProvider';

export const SearchScreen: React.FC = () => {
  const {
    theme: { colors, spacing },
  } = useTheme();

  return (
    <ScreenContainer>
      <Typography variant="headline" weight="bold">
        Search
      </Typography>
      <Typography style={styles.subtitle}>
        Look up verses or themes across English and Telugu translations.
      </Typography>
      <View style={{ marginTop: spacing.lg }}>
        <TextInput
          placeholder="Search scripture..."
          placeholderTextColor={colors.muted}
          style={[styles.input, { backgroundColor: colors.surface, color: colors.text, borderColor: colors.border }]}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 8,
  },
  input: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
});
