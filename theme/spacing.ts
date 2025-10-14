import { SpacingTheme } from './types';

// Base unit for spacing calculations
const BASE_UNIT = 4;

// Spacing system
export const spacing: SpacingTheme = {
  // Basic spacing units
  unit: BASE_UNIT,
  
  // Predefined spacing values
  xxs: BASE_UNIT, // 4
  xs: BASE_UNIT * 2, // 8
  sm: BASE_UNIT * 3, // 12
  md: BASE_UNIT * 4, // 16
  lg: BASE_UNIT * 6, // 24
  xl: BASE_UNIT * 8, // 32
  xxl: BASE_UNIT * 12, // 48
  
  // Layout spacing
  layout: {
    page: BASE_UNIT * 4, // 16
    section: BASE_UNIT * 6, // 24
    component: BASE_UNIT * 3, // 12
  },
  
  // Component-specific spacing
  components: {
    card: {
      padding: BASE_UNIT * 4,
      gap: BASE_UNIT * 3,
    },
    button: {
      padding: BASE_UNIT * 3,
      gap: BASE_UNIT * 2,
    },
    input: {
      padding: BASE_UNIT * 3,
      gap: BASE_UNIT * 2,
    },
    list: {
      gap: BASE_UNIT * 2,
      itemPadding: BASE_UNIT * 3,
    },
  },
  
  // Helper function to get custom spacing
  getValue: (multiplier: number) => BASE_UNIT * multiplier,
};
