# Light Mode Design System

## Overview
Light mode maintains the technical/utilitarian aesthetic with inverted colors while preserving all animations, interactions, and visual hierarchy.

## Color System

### Dark Mode (Default)
```css
--black:   #000000  /* backgrounds */
--white:   #f8f8f8  /* primary text */
--fog:     rgba(255,255,255,0.75)  /* secondary text */
--dim:     rgba(255,255,255,0.45)  /* tertiary text */
--cobalt:  #1A1AFF  /* accent */
--line:    rgba(255,255,255,0.07)  /* borders */
```

### Light Mode
```css
--black:   #ffffff  /* backgrounds */
--white:   #080808  /* primary text */
--fog:     rgba(0,0,0,0.75)  /* secondary text */
--dim:     rgba(0,0,0,0.45)  /* tertiary text */
--cobalt:  #0D0DCC  /* accent (darker for contrast) */
--line:    rgba(0,0,0,0.09)  /* borders */
```

## Implementation Strategy

### 1. CSS Variable System
All colors use CSS variables that automatically update when `data-theme="light"` is applied to `<html>`.

```css
[data-theme="light"] {
  --black: #ffffff;
  --white: #080808;
  /* ... */
}
```

### 2. Automatic Theme Persistence
- Theme preference saved to `localStorage`
- Automatically applied on page load
- No flash of wrong theme

### 3. Smooth Transitions
All theme-aware elements have transitions:
```css
transition: background-color 400ms cubic-bezier(0.16, 1, 0.3, 1),
            color 400ms cubic-bezier(0.16, 1, 0.3, 1);
```

## Component Adjustments

### Hero
- Full-bleed video remains visible in both modes
- Text maintains high contrast
- Technical poster aesthetic preserved
- Condensed typography unaffected

### Liquid Background
**Dark Mode:**
- Screen blend mode
- High opacity (0.9)
- Strong contrast (80)

**Light Mode:**
- Multiply blend mode
- Low opacity (0.25)
- Reduced contrast (60)
- Lighter blob colors with reduced opacity

### Navigation
**Dark Mode:**
- `background: rgba(0,0,0,0.94)`
- `border: rgba(255,255,255,0.08)`

**Light Mode:**
- `background: rgba(255,255,255,0.94)`
- `border: rgba(0,0,0,0.08)`

### Glass Effects
All glass components automatically adapt via CSS variables:
- Borders update from white to black tints
- Backgrounds invert properly
- Backdrop blur remains consistent

## Animations Preserved

All animations work in both modes:
- ✅ Blob floating animations
- ✅ Reveal animations
- ✅ Scroll indicators
- ✅ Hover effects
- ✅ Flow diagram animations
- ✅ Marquee effects
- ✅ Custom cursor

## Theme Toggle

### Location
Positioned in the nav bar between the nav rail and CTA button.

### Design
- Minimal toggle switch (48×24px)
- Sun (☀) and moon (☾) icons
- Smooth thumb animation
- Clear visual feedback
- Accessible focus states

### Interaction
- Click/tap to toggle
- Instant theme switch with smooth transitions
- Visual confirmation via thumb position

## Accessibility

### Contrast Ratios
All text maintains WCAG AA compliance:
- Primary text: 16:1 (dark) / 15:1 (light)
- Secondary text: 12:1 (dark) / 11:1 (light)
- Tertiary text: 7:1 (dark) / 6.5:1 (light)

### Focus States
```css
outline: 2px solid var(--cobalt);
outline-offset: 2px;
```
Cobalt accent provides clear focus indication in both modes.

### Motion
- Respects `prefers-reduced-motion`
- All animations can be disabled
- Transitions remain smooth but can be instant if needed

## Future Enhancements

### System Preference Detection
Add auto-detection of OS theme:
```js
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light'
```

### Per-Section Themes
Consider allowing certain sections (like the hero) to remain dark even in light mode for dramatic effect.

### Advanced Light Mode
Introduce multiple light variants:
- Pure light (pure white background)
- Warm light (slight cream tint)
- Cool light (slight blue tint)

## Technical Notes

### Why CSS Variables?
- Single source of truth
- Automatic cascade to all components
- No component-level theme prop drilling
- Easy to extend
- Performant theme switching

### Why Data Attribute Over Class?
- More semantic
- Easier to query in CSS
- Works better with SSR
- More predictable specificity

### Transition Timing
400ms cubic-bezier(0.16, 1, 0.3, 1) chosen for:
- Smooth enough to feel intentional
- Fast enough to not feel sluggish
- Easing curve provides professional feel
- Matches other UI transitions in the design system
