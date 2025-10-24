import React from 'react';
import { render } from '@testing-library/react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from '../../theme/ThemeProvider';
import { HomeScreen } from '../HomeScreen';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <SafeAreaProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </SafeAreaProvider>
);

describe('HomeScreen', () => {
  it('renders the welcome message', () => {
    const { getByText } = render(
      <Providers>
        <HomeScreen />
      </Providers>
    );

    expect(getByText(/Welcome to EchoBible/i)).toBeTruthy();
  });
});
