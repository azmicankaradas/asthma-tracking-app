// Color theme types
export interface ColorTheme {
  mode: 'light' | 'dark';
  background: {
    default: string;
    paper: string;
    elevated: string;
    overlay: string;
  };
  primary: {
    main: string;
    light: string;
    dark: string;
    contrast: string;
  };
  secondary: {
    main: string;
    light: string;
    dark: string;
    contrast: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  };
  divider: string;
  action: {
    active: string;
    hover: string;
    selected: string;
    disabled: string;
    disabledBackground: string;
  };
  status: {
    success: {
      light: string;
      main: string;
      dark: string;
    };
    warning: {
      light: string;
      main: string;
      dark: string;
    };
    error: {
      light: string;
      main: string;
      dark: string;
    };
    info: {
      light: string;
      main: string;
      dark: string;
    };
  };
  medical: {
    severe: string;
    moderate: string;
    mild: string;
    normal: string;
  };
}

// Typography theme types
export interface TypographyTheme {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  subtitle1: TextStyle;
  subtitle2: TextStyle;
  body1: TextStyle;
  body2: TextStyle;
  button: TextStyle;
  caption: TextStyle;
  overline: TextStyle;
  medical: {
    value: TextStyle;
    unit: TextStyle;
  };
}

interface TextStyle {
  fontFamily: string;
  fontWeight: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
}

// Spacing theme types
export interface SpacingTheme {
  unit: number;
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  layout: {
    page: number;
    section: number;
    component: number;
  };
  components: {
    card: {
      padding: number;
      gap: number;
    };
    button: {
      padding: number;
      gap: number;
    };
    input: {
      padding: number;
      gap: number;
    };
    list: {
      gap: number;
      itemPadding: number;
    };
  };
  getValue: (multiplier: number) => number;
}

// Animation theme types
export interface AnimationTheme {
  durations: {
    shortest: number;
    shorter: number;
    short: number;
    standard: number;
    complex: number;
    enteringScreen: number;
    leavingScreen: number;
  };
  easings: {
    standard: Animated.EasingFunction;
    accelerate: Animated.EasingFunction;
    decelerate: Animated.EasingFunction;
    sharp: Animated.EasingFunction;
    smooth: Animated.EasingFunction;
    spring: Animated.EasingFunction;
  };
  presets: {
    fade: AnimationPreset;
    slide: AnimationPreset;
    scale: AnimationPreset;
    button: {
      press: AnimationConfig;
      release: AnimationConfig;
    };
    form: {
      focus: AnimationConfig;
      error: AnimationConfig;
    };
    medical: {
      dataUpdate: AnimationConfig;
      alert: AnimationConfig;
    };
  };
}

interface AnimationPreset {
  in: AnimationConfig;
  out: AnimationConfig;
}

interface AnimationConfig {
  duration: number;
  easing: Animated.EasingFunction;
}

// Main theme type
export interface Theme {
  colors: ColorTheme;
  typography: TypographyTheme;
  spacing: SpacingTheme;
  animations: AnimationTheme;
}
