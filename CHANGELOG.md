# Changelog

All notable changes to RenoVapro will be documented in this file.

## [Step 1 - Foundation] - 2025-10-25

### Added
- Initial Next.js 14 project setup with App Router and TypeScript
- i18n routing system (NL/FR/EN) with Dutch default
- JSON-based translation files (i18n/nl.json, fr.json, en.json)
- Middleware for automatic locale redirection (/ → /nl)
- Complete design system implementation following UI Guide
- Responsive Navbar with language switcher and mobile menu
- Footer with localized contact information (3-column layout)
- Landing page with hero section and service cards
- Platform page (/platform) with tab placeholders (Projects, Team, Clients, Reports)
- Auth page (/auth) placeholder for Step 2 implementation
- Framer Motion animations (0.2-0.3s fade-in, slide effects)
- Custom CSS following RenoVapro brand guidelines (no UI framework)
- Typography system (Poppins 600 headings, Inter 400 body)
- Small logo (Hammer icon) in top-right corner on all pages
- Favicon and apple-touch-icon (RenoVapro "R" branding)
- .env.example with NEXT_PUBLIC_APP_NAME and NEXT_PUBLIC_DEFAULT_LANG

### Fixed
- next.config.js now uses default output type (not 'export') for dev compatibility
- Added proper icon metadata to layout
- Eliminated favicon.ico and apple-touch-icon.png missing file errors

### Design System
- Brand color: #1A4D2E
- Accent color: #A2C579
- Background: #F5F5F5
- Button styles (primary, secondary)
- Card component styles
- Responsive breakpoints
