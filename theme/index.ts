import { darkTheme, lightTheme } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { animations } from './animations';
import type { Theme } from './types';

// Create the dark theme
export const darkThemeConfig: Theme = {
  colors: darkTheme,
  typography,
  spacing,
  animations,
};

// Create the light theme
export const lightThemeConfig: Theme = {
  colors: lightTheme,
  typography,
  spacing,
  animations,
};

// Export the default theme (dark theme)
export const defaultTheme = darkThemeConfig;

// Export all theme-related types
export * from './types';

// Export individual theme modules
export { darkTheme, lightTheme } from './colors';
export { typography } from './typography';
export { spacing } from './spacing';
export { animations } from './animations';
