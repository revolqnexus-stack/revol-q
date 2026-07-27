# REVOLQ Rebuild Implementation Plan

## Current Assessment

**Good:**
- Liquid background animation (working)
- GSAP animations infrastructure  
- NIXTUDIO project imagery
- Transparent pricing concept
- Technical foundation (Next.js, proper routing)

**Critical Issues:**
1. Overdesigned service section with aggressive hover accordion
2. Unverified metrics everywhere
3. Too much conceptual language, not enough clarity
4. Excessive spacing making pages feel endless
5. Low contrast text everywhere
6. Inconsistent team photos
7. CTAs look like tiny labels
8. Order: Services before Work (backwards)

---

## PHASE 1: Quick Wins (Immediate Impact - ~2 hours)
**Goal: Make it convert better without breaking anything**

### 1.1 Fix Homepage Order
- Move WorkPreview BEFORE ServicesIndex
- People need proof before features

### 1.2 Improve Hero Readability  
- Make "that work." fully visible (not outline)
- Increase supporting text contrast
- Make CTAs look like actual buttons (48px height minimum)
- Simplify right side (remove competing elements)

### 1.3 Service Section Fixes
- Remove aggressive blue hover background
- Make it click-to-expand instead of hover
- Tone down the copy ("templates bleed revenue" → simpler language)
- Add clear outcome-focused translations

### 1.4 Work Section Metrics
- Comment out unverified metrics for now
- Add clear [VERIFIED OUTCOME REQUIRED] placeholders
- Or replace with honest qualitative statements

### 1.5 Global Contrast
- Increase body text from `rgba(255,255,255,0.55)` to `rgba(255,255,255,0.75)`
- Make all CTAs have proper button styling

### 1.6 Reduce Spacing
- Cut section padding from `10rem` to `6rem` (desktop)
- Remove excessive margins between sections

---

## PHASE 2: Design System (3-4 hours)
**Goal: Consistent visual language**

### 2.1 CSS Variables
```css
:root {
  /* Surfaces */
  --ink: #090909;
  --surface: #111111;
  --surface-raised: #171717;
  --paper: #F1EEE6;
  --paper-text: #101010;
  
  /* Text */
  --text: #F4F1EA;
  --text-muted: #A8A8A8;  /* UP from #A6A6A6 */
  --text-subtle: #777;     /* UP from rgba */
  
  /* Signal system */
  --signal: #304BFF;
  --signal-soft: rgba(48, 75, 255, 0.16);
  
  /* Grid */
  --page-max: 1480px;
  --page-padding: clamp(24px, 3.6vw, 56px);
  --grid-gap: clamp(16px, 1.8vw, 28px);
  
  /* Motion */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-system: cubic-bezier(0.65, 0, 0.35, 1);
}
```

### 2.2 Typography Scale
- Implement Instrument Sans + Serif
- Create utility classes
- Limit outline font to ONE use per page

### 2.3 Button Component
Create proper button system with variants

---

## PHASE 3: New Section Order & Content (4-5 hours)
**Goal: Narrative that converts**

New homepage structure:
1. Header
2. Hero (fixed copy)
3. **NEW: Credibility Rail** (industries served)
4. **Work (MOVED UP)**
5. Systems (renamed from Services, 3 clear systems)
6. Automation Story (3AM concept, simplified)
7. Process (4 stages)
8. Pricing (clarified scope)
9. Studio (consistent photos needed)
10. Final CTA
11. Footer

---

## PHASE 4: Polish & Performance (2-3 hours)
- Reduce custom cursor aggression
- Mobile-specific layouts
- Accessibility
- Loading states

---

## What I'll Do Right Now

I'll implement **Phase 1** changes that give you immediate improvement:

1. ✅ Reorder homepage (Work before Services)
2. ✅ Fix hero readability  
3. ✅ Improve button styling
4. ✅ Increase text contrast globally
5. ✅ Remove/mark unverified metrics
6. ✅ Simplify service hover behavior
7. ✅ Reduce excessive spacing

This will take your site from "5.5/10 conversion" to at least "7/10" without breaking anything.

Then you tell me if you want me to continue with Phase 2-4 or adjust the approach.

