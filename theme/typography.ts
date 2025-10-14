import { Platform } from 'react-native';
import { TypographyTheme } from './types';

// Font families
const fontFamily = {
  // Primary font family
  primary: Platform.select({
    ios: 'SF Pro Display',
    android: 'Roboto',
    default: 'System',
  }),
  
  // Secondary font family for special cases
  secondary: Platform.select({
    ios: 'SF Pro Text',
    android: 'Roboto',
    default: 'System',
  }),
  
  // Monospace font for numbers and code
  mono: Platform.select({
    ios: 'SF Mono',
    android: 'Roboto Mono',
    default: 'monospace',
  }),
};

// Base typography settings
export const typography: TypographyTheme = {
  h1: {
    fontFamily: fontFamily.primary,
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  
  h2: {
    fontFamily: fontFamily.primary,
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: -0.25,
  },
  
  h3: {
    fontFamily: fontFamily.primary,
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
  },
  
  h4: {
    fontFamily: fontFamily.primary,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.15,
  },
  
  subtitle1: {
    fontFamily: fontFamily.secondary,
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  
  subtitle2: {
    fontFamily: fontFamily.secondary,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.1,
  },
  
  body1: {
    fontFamily: fontFamily.secondary,
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  
  body2: {
    fontFamily: fontFamily.secondary,
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  
  button: {
    fontFamily: fontFamily.primary,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 1.25,
    textTransform: 'uppercase',
  },
  
  caption: {
    fontFamily: fontFamily.secondary,
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  
  overline: {
    fontFamily: fontFamily.secondary,
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  
  // Special styles for medical data
  medical: {
    value: {
      fontFamily: fontFamily.mono,
      fontWeight: '500',
      fontSize: 20,
      lineHeight: 24,
      letterSpacing: 0,
    },
    unit: {
      fontFamily: fontFamily.mono,
      fontWeight: 'normal',
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0,
    },
  },
};
