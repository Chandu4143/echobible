import React from 'react';
import { Text, TextProps } from 'react-native';

import { useTheme } from '../../theme/ThemeProvider';

type TypographyVariant = 'caption' | 'body' | 'title' | 'headline';
type TypographyWeight = 'regular' | 'medium' | 'bold';

const fontWeightMap: Record<TypographyWeight, TextProps['style']> = {
  regular: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  bold: { fontWeight: '700' },
};

interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  weight = 'regular',
  style,
  children,
  ...rest
}) => {
  const {
    theme: { colors, fontSizes },
  } = useTheme();

  return (
    <Text
      {...rest}
      style={[
        {
          color: colors.text,
          fontSize: fontSizes[variant],
        },
        fontWeightMap[weight],
        style,
      ]}
    >
      {children}
    </Text>
  );
};
