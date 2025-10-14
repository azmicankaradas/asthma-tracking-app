# Theme System Documentation

## Overview

The theme system provides a consistent design language across the asthma health app. It follows a dark-mode first approach with careful consideration for accessibility and medical app requirements.

## Theme Structure

```typescript
interface Theme {
  mode: "dark" | "light";
  colors: ColorTheme;
  typography: TypographyTheme;
  spacing: SpacingTheme;
  borderRadius: BorderRadiusTheme;
  shadows: ShadowTheme;
  animations: AnimationTheme;
  breakpoints: BreakpointTheme;
}
```

## Implementation Files

The theme system is split into the following files:

- `theme.ts` - Main theme configuration
- `colors.ts` - Color palette and schemes
- `typography.ts` - Typography system
- `spacing.ts` - Spacing and layout
- `animations.ts` - Animation presets
- `shadows.ts` - Elevation and shadow system
- `breakpoints.ts` - Responsive breakpoints
- `hooks.ts` - Theme utility hooks
