import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ScreenContainer, Typography } from '../components/ui';
import { useTheme } from '../theme/ThemeProvider';

export const HomeScreen: React.FC = () => {
  const {
    theme: { spacing, colors },
  } = useTheme();

  return (
    <ScreenContainer>
      <Typography variant="headline" weight="bold">
        Welcome to EchoBible
      </Typography>
      <Typography style={styles.subtitle}>
        Start exploring scriptures in English and Telugu with our dual-language reader.
      </Typography>
      <View style={[styles.card, { marginTop: spacing.lg, backgroundColor: colors.surface }]}>
        <Typography weight="medium">Quick actions</Typography>
        <Typography variant="caption" style={styles.cardCaption}>
          Choose a passage or continue where you left off.
        </Typography>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 8,
  },
  card: {
    padding: 16,
    borderRadius: 16,
  },
  cardCaption: {
    marginTop: 4,
  },
});
