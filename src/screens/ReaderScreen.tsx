import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ScreenContainer, Typography } from '../components/ui';
import { useTheme } from '../theme/ThemeProvider';

export const ReaderScreen: React.FC = () => {
  const {
    theme: { colors },
  } = useTheme();

  return (
    <ScreenContainer>
      <Typography variant="headline" weight="bold">
        Reader
      </Typography>
      <Typography style={styles.subtitle}>
        Dual-language scripture reading experience will live here.
      </Typography>
      <View style={[styles.placeholder, { backgroundColor: colors.surface }]}>
        <Typography variant="caption">Passage content preview</Typography>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 8,
  },
  placeholder: {
    marginTop: 24,
    borderRadius: 12,
    padding: 16,
  },
});
