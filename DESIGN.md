---
name: CareFour Business
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#404850'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#707881'
  outline-variant: '#bfc7d1'
  surface-tint: '#006399'
  primary: '#005d90'
  on-primary: '#ffffff'
  primary-container: '#0077b6'
  on-primary-container: '#f3f7ff'
  inverse-primary: '#94ccff'
  secondary: '#0c6780'
  on-secondary: '#ffffff'
  secondary-container: '#9ae1ff'
  on-secondary-container: '#09657f'
  tertiary: '#565a5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#6f7274'
  on-tertiary-container: '#f6f8fa'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cde5ff'
  primary-fixed-dim: '#94ccff'
  on-primary-fixed: '#001d32'
  on-primary-fixed-variant: '#004b74'
  secondary-fixed: '#baeaff'
  secondary-fixed-dim: '#89d0ed'
  on-secondary-fixed: '#001f29'
  on-secondary-fixed-variant: '#004d62'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is engineered for **CareFour Business (CRFBC)**, focusing on the high-stakes environments of logistics, freight dispatch, and customs clearance across the African continent. The brand personality is rooted in **reliability, transparency, and operational velocity**.

The visual style follows a **Corporate / Modern** aesthetic. It prioritizes clarity and utility to ensure users can navigate complex data—such as manifest tracking and duty calculations—without cognitive overload. The interface utilizes a "Utility-First" approach: heavy whitespace to separate dense information, subtle depth to indicate interactivity, and a disciplined color application that directs attention to status updates and calls to action. The emotional response should be one of "controlled efficiency," providing users in DR Congo, Uganda, and beyond with a tool that feels as robust as the physical infrastructure they manage.

## Colors

The palette is anchored by the sky blue requested, but optimized for professional legibility. 

- **Primary (#0077B6):** A deepened version of sky blue used for primary actions, active states, and branding. This ensures AA accessibility against white backgrounds.
- **Secondary (#87CEEB):** The signature Sky Blue, used for accents, progress bars, and illustrative icons.
- **Neutral/Surface (#F8FAFC):** A very light cool gray used for background tiling to reduce eye strain compared to pure white.
- **Text/Ink (#1E293B):** A deep charcoal for high-contrast typography, ensuring readability in various lighting conditions (including outdoor mobile use).
- **Status Colors:** Success (Emerald), Warning (Amber), and Error (Rose) are used strictly for shipment statuses and clearance alerts.

## Typography

This design system utilizes **Inter** for its systematic, utilitarian character and exceptional legibility at small sizes—critical for data-heavy manifests and digital receipts.

- **Headlines:** Use Semi-Bold (600) or Bold (700) weights with slight negative letter-spacing to maintain a compact, authoritative appearance.
- **Body Text:** Set primarily in 16px for desktop and 14px for dense tables. Line heights are kept generous (1.5x) to prevent lines of text from blurring together during quick scanning.
- **Labels:** Small caps or bolded 12px type is used for table headers and form field captions to create a clear hierarchy against user-inputted data.

## Layout & Spacing

The layout philosophy uses a **Fixed Grid** on desktop and a **Fluid Grid** on mobile devices.

- **Desktop:** A 12-column grid with a maximum width of 1280px. Gutters are fixed at 24px to ensure content breathability.
- **Mobile:** A 4-column fluid grid with 16px side margins. 
- **Spacing Rhythm:** Based on a 4px baseline. Most components should use `md` (16px) or `lg` (24px) padding to reflect the "generous whitespace" required for a professional, uncluttered look.
- **Data Density:** In dashboards, use 12px (sm+xs) vertical padding for list items to allow more information above the fold while maintaining touch-target safety.

## Elevation & Depth

To convey a sense of organization and hierarchy, the design system employs **Ambient Shadows** and **Tonal Layering**.

- **Level 0 (Surface):** The main background uses the Neutral/Surface hex (#F8FAFC).
- **Level 1 (Cards/Containers):** Pure White (#FFFFFF) surfaces with a subtle 1px border (#E2E8F0) and a soft, low-opacity shadow (Y: 2px, Blur: 4px, Opacity: 4%). This is used for main content blocks.
- **Level 2 (Dropdowns/Modals):** Floating elements use a more pronounced shadow (Y: 8px, Blur: 16px, Opacity: 8%) to clearly sit above the primary interface.
- **Interactive States:** Buttons shift from Level 1 to Level 0 on press, simulating a physical push.

## Shapes

The shape language is consistently **Rounded**, striking a balance between modern friendliness and professional structure.

- **Standard Elements:** Buttons, Input fields, and List items use a 0.5rem (8px) corner radius.
- **Large Elements:** Container cards and Modals use a 1rem (16px) corner radius.
- **Icon Enclosures:** Small status indicators (e.g., "In Transit" dots) may use a full pill shape for distinctiveness.

## Components

- **Buttons:** Primary buttons are solid Primary Blue with white text. Secondary buttons use a Sky Blue tint (10% opacity) with Primary Blue text. All buttons have a minimum height of 48px for mobile accessibility.
- **Input Fields:** Outlined style with a 1px neutral border. Labels are always visible above the field (never just placeholders). On focus, the border thickens to 2px Primary Blue.
- **Chips/Badges:** Used for shipment status (e.g., "Cleared," "Pending Customs"). Use low-saturation background colors with high-saturation text of the same hue to ensure they are visible but not distracting.
- **Lists:** Data rows should have a subtle hover state (#F1F5F9) and a 1px bottom divider. For logistics, include a "Compact" list variant for mobile manifest viewing.
- **Cards:** Used for individual shipment summaries. They must feature a clear header, a primary status badge in the top right, and the main tracking number in a bolded sub-headline.
- **Progress Steppers:** Vertical steppers are used for tracking shipment milestones, providing a clear "source-to-destination" visual path.