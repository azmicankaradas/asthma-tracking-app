import { Easing } from 'react-native-reanimated';
import { AnimationTheme } from './types';

// Standard durations
const durations = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195,
};

// Easing functions
const easings = {
  // Standard easing
  standard: Easing.bezier(0.4, 0, 0.2, 1),
  
  // Accelerate easing
  accelerate: Easing.bezier(0.4, 0, 1, 1),
  
  // Decelerate easing
  decelerate: Easing.bezier(0, 0, 0.2, 1),
  
  // Sharp curve for snappy animations
  sharp: Easing.bezier(0.4, 0, 0.6, 1),
  
  // Smooth curve for natural animations
  smooth: Easing.bezier(0.4, 0, 0.2, 1),
  
  // Spring-like easing
  spring: Easing.bezier(0.175, 0.885, 0.32, 1.275),
};

// Animation presets
export const animations: AnimationTheme = {
  durations,
  easings,
  
  // Common animation presets
  presets: {
    // Fade animations
    fade: {
      in: {
        duration: durations.shorter,
        easing: easings.decelerate,
      },
      out: {
        duration: durations.shorter,
        easing: easings.accelerate,
      },
    },
    
    // Slide animations
    slide: {
      in: {
        duration: durations.standard,
        easing: easings.decelerate,
      },
      out: {
        duration: durations.standard,
        easing: easings.accelerate,
      },
    },
    
    // Scale animations
    scale: {
      in: {
        duration: durations.shorter,
        easing: easings.spring,
      },
      out: {
        duration: durations.shorter,
        easing: easings.sharp,
      },
    },
    
    // Button press animation
    button: {
      press: {
        duration: durations.shortest,
        easing: easings.standard,
      },
      release: {
        duration: durations.shortest,
        easing: easings.standard,
      },
    },
    
    // Form element animations
    form: {
      focus: {
        duration: durations.shorter,
        easing: easings.standard,
      },
      error: {
        duration: durations.shorter,
        easing: easings.spring,
      },
    },
    
    // Medical data visualization animations
    medical: {
      dataUpdate: {
        duration: durations.complex,
        easing: easings.smooth,
      },
      alert: {
        duration: durations.shorter,
        easing: easings.spring,
      },
    },
  },
};
