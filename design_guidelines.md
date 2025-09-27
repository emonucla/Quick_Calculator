# Calculator Application Design Guidelines

## Design Approach
**System-Based Approach**: Following Material Design principles for a calculator application that prioritizes functionality, accessibility, and familiarity. Calculators are utility-focused tools where users expect consistent, predictable interactions.

## Key Design Principles
- **Immediate Recognition**: Interface should be instantly recognizable as a calculator
- **Touch-Friendly**: Large, easily tappable buttons for mobile and desktop use
- **Visual Hierarchy**: Clear distinction between numbers, operators, and special functions
- **Error Prevention**: Visual feedback for invalid operations

## Core Design Elements

### A. Color Palette
**Light Mode:**
- Background: 210 20% 98%
- Primary buttons (numbers): 210 15% 95%
- Operator buttons: 220 70% 50%
- Special functions (clear, delete): 0 70% 55%
- Display background: 210 15% 97%
- Text: 210 15% 15%

**Dark Mode:**
- Background: 210 15% 10%
- Primary buttons (numbers): 210 15% 20%
- Operator buttons: 220 70% 45%
- Special functions: 0 70% 50%
- Display background: 210 15% 15%
- Text: 210 15% 90%

### B. Typography
- **Display Font**: `'JetBrains Mono', 'SF Mono', monospace` for consistent number spacing
- **Button Labels**: `'Inter', system-ui, sans-serif`
- **Display Text Size**: Large (2xl-4xl) for primary calculations
- **Button Text**: Medium weight, readable at smaller sizes

### C. Layout System
**Spacing Primitives**: Consistent use of Tailwind units 2, 4, 6, and 8
- Button spacing: gap-2
- Container padding: p-6
- Display margins: mb-4
- Button padding: p-4

**Grid Structure**: 4-column button grid with strategic spanning for larger buttons (0, =)

### D. Component Library

**Core Components:**
- **Display Panel**: Large, monospace text area showing current calculation and result
- **Button Grid**: 4x5 grid layout with number pad, operators, and functions
- **Number Buttons**: Large, primary styled buttons (0-9)
- **Operator Buttons**: Distinct colored buttons (+, -, ×, ÷, =)
- **Function Buttons**: Clear (C), All Clear (AC), Delete/Backspace
- **Decimal Button**: Integrated with number pad

**Button Hierarchy:**
1. Numbers (0-9): Primary background, most prominent
2. Basic operators (+, -, ×, ÷): Secondary color, medium prominence  
3. Equals (=): Accent color, high prominence
4. Functions (C, AC, ⌫): Tertiary color, utility prominence

**Interactive States:**
- Hover: Subtle brightness increase
- Active/Pressed: Slight scale down (95%) with brightness change
- Disabled: Reduced opacity for invalid operations

### E. Layout Structure
**Single Screen Application:**
- Centered calculator container (max-width: 320px)
- Display area at top (full width)
- 4×5 button grid below display
- Responsive scaling for different screen sizes
- Subtle drop shadow or border for container definition

**Button Sizing:**
- Standard buttons: Equal square dimensions
- Zero button: Spans 2 columns (wider)
- All buttons minimum 60px height for accessibility

### F. Accessibility Features
- High contrast ratios for all color combinations
- Large touch targets (minimum 44px)
- Clear visual focus indicators
- Semantic HTML structure
- Keyboard navigation support

## Images
**No images required** - This is a purely functional utility application that relies on typography and color for visual appeal rather than imagery.

This design creates a professional, accessible calculator that feels familiar while maintaining modern aesthetics through thoughtful use of color, spacing, and typography.