# Background Ripple Effect Feature

## Overview
Added an interactive background ripple effect to the Mode Selection section on the HomePage, visible only in dark mode.

## What's New

### 1. BackgroundRippleEffect Component
- **Location**: `src/components/ui/background-ripple-effect.tsx`
- **Features**:
  - Interactive grid of cells that ripple when clicked
  - Customizable rows, columns, and cell size
  - Wave-like animation effect spreading from clicked cell
  - Smooth opacity transitions

### 2. Updated HomePage
- **Location**: `src/pages/HomePage.tsx`
- **Changes**:
  - Integrated `BackgroundRippleEffect` in the Mode Selection section
  - Effect is only visible in dark mode (`dark:block`)
  - Positioned absolutely behind the content (doesn't interfere with interactions)
  - Configured with 10 rows × 30 columns of 50px cells

### 3. CSS Animation
- **Location**: `src/index.css`
- **Added**: `cell-ripple` keyframe animation
- Animates opacity from 0.4 → 0.8 → 0.4 over 600ms

### 4. Utility Function
- **Location**: `src/utils/cn.ts`
- **Purpose**: Merge Tailwind classes using `clsx` and `tailwind-merge`
- Enables conditional class names and proper class merging

## Dependencies Added
```bash
npm install clsx tailwind-merge
```

## Usage
The ripple effect is automatically active in dark mode. Users can:
1. Click anywhere on the grid background
2. Watch the ripple effect spread from the clicked cell
3. Each cell's animation is delayed based on its distance from the click point

## Customization
You can adjust the ripple effect by modifying props in `HomePage.tsx`:
```tsx
<BackgroundRippleEffect 
  rows={10}        // Number of rows
  cols={30}        // Number of columns
  cellSize={50}    // Size of each cell in pixels
/>
```

## Visual Effect
- **Light Mode**: No ripple effect (clean, professional look)
- **Dark Mode**: Subtle indigo ripple effect that adds depth and interactivity
- **Colors**: Uses indigo theme colors with low opacity for subtlety

## Performance
- Optimized with `useCallback` hook to prevent unnecessary re-renders
- Auto-resets after 2 seconds to prevent memory buildup
- Minimal performance impact due to CSS animations

## Browser Compatibility
Works on all modern browsers that support CSS Grid and animations.
