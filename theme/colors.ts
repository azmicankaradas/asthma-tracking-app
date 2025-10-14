import { ColorTheme } from './types';

// Base palette
const palette = {
  // Primary colors
  purple: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#9C27B0',
    600: '#8E24AA',
    700: '#7B1FA2',
    800: '#6A1B9A',
    900: '#4A148C',
  },
  
  // Secondary colors
  teal: {
    50: '#E0F2F1',
    100: '#B2DFDB',
    200: '#80CBC4',
    300: '#4DB6AC',
    400: '#26A69A',
    500: '#009688',
    600: '#00897B',
    700: '#00796B',
    800: '#00695C',
    900: '#004D40',
  },

  // Neutral colors
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },

  // Status colors
  status: {
    success: {
      light: '#81C784',
      main: '#4CAF50',
      dark: '#388E3C',
    },
    warning: {
      light: '#FFB74D',
      main: '#FF9800',
      dark: '#F57C00',
    },
    error: {
      light: '#E57373',
      main: '#F44336',
      dark: '#D32F2F',
    },
    info: {
      light: '#64B5F6',
      main: '#2196F3',
      dark: '#1976D2',
    },
  },

  // Special colors for medical context
  medical: {
    severe: '#D32F2F',
    moderate: '#F57C00',
    mild: '#FDD835',
    normal: '#4CAF50',
  },
};

// Dark theme colors
export const darkTheme: ColorTheme = {
  mode: 'dark',
  background: {
    default: '#121212',
    paper: '#1E1E1E',
    elevated: '#242424',
    overlay: 'rgba(0, 0, 0, 0.6)',
  },
  primary: {
    main: palette.purple[500],
    light: palette.purple[300],
    dark: palette.purple[700],
    contrast: '#FFFFFF',
  },
  secondary: {
    main: palette.teal[500],
    light: palette.teal[300],
    dark: palette.teal[700],
    contrast: '#FFFFFF',
  },
  text: {
    primary: 'rgba(255, 255, 255, 0.87)',
    secondary: 'rgba(255, 255, 255, 0.6)',
    disabled: 'rgba(255, 255, 255, 0.38)',
    hint: 'rgba(255, 255, 255, 0.38)',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  action: {
    active: 'rgba(255, 255, 255, 0.54)',
    hover: 'rgba(255, 255, 255, 0.08)',
    selected: 'rgba(255, 255, 255, 0.16)',
    disabled: 'rgba(255, 255, 255, 0.26)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
  },
  status: palette.status,
  medical: palette.medical,
};

// Light theme colors
export const lightTheme: ColorTheme = {
  mode: 'light',
  background: {
    default: '#FFFFFF',
    paper: '#F5F5F5',
    elevated: '#FFFFFF',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  primary: {
    main: palette.purple[700],
    light: palette.purple[500],
    dark: palette.purple[900],
    contrast: '#FFFFFF',
  },
  secondary: {
    main: palette.teal[700],
    light: palette.teal[500],
    dark: palette.teal[900],
    contrast: '#FFFFFF',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    selected: 'rgba(0, 0, 0, 0.08)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
  },
  status: palette.status,
  medical: palette.medical,
};
