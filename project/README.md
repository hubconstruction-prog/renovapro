# RenoVapro - Professional Renovation Platform

RenoVapro is a modern renovation management platform built for the Belgian construction market, specifically serving Gent and surrounding areas.

## Step 1: Project Foundation & i18n

### What's Included

- **Next.js 14 App Router** with TypeScript
- **i18n Support** (NL/FR/EN) with Dutch as default, JSON-based translations
- **Design System** implementation (RenoVapro branding)
- **Responsive Navigation** with language switcher
- **Landing Page** with hero section and service cards
- **Platform Page** (/platform) with tab placeholders
- **Auth Page** (/auth) with placeholder UI
- **Mobile-Friendly** layout with hamburger menu
- **Custom CSS** following RenoVapro design guidelines
- **Favicon & Icons** (favicon.ico, apple-touch-icon.png)

### Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- CSS (custom, no UI framework)
- Framer Motion (animations)
- Lucide React (icons)

### Design System

- **Brand Color**: #1A4D2E
- **Accent Color**: #A2C579
- **Background**: #F5F5F5
- **Typography**: Poppins (headings), Inter (body)

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to `http://localhost:3000` (redirects to `/nl`)

## Build & Deploy

### Build Locally

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy (no additional configuration needed)

Or use Vercel CLI:
```bash
vercel
```

## Environment Variables

Copy `.env.example` to `.env.local` (optional for Step 1):

```bash
cp .env.example .env.local
```

Current variables (for reference):
- `NEXT_PUBLIC_APP_NAME` - Application name (default: RenoVapro)
- `NEXT_PUBLIC_DEFAULT_LANG` - Default language (default: nl)

Step 2+ will add Supabase configuration variables.

## Acceptance Checklist

- [x] `/nl` loads successfully
- [x] Language switching (`/fr` and `/en`) works correctly
- [x] `/nl/platform` renders with tab placeholders (Projects, Team, Clients, Reports)
- [x] `/nl/auth` renders placeholder authentication page
- [x] Small logo visible in top-right corner on all pages
- [x] Root path `/` redirects to `/nl`
- [x] i18n JSON files (nl.json, fr.json, en.json) loaded correctly
- [x] Navigation is sticky with shadow on scroll
- [x] Footer displays localized content in all languages
- [x] Design matches RenoVapro brand guidelines
- [x] Typography uses Poppins and Inter fonts
- [x] Animations are smooth (Framer Motion, 0.2-0.3s)
- [x] Project builds without errors (`npm run build`)
- [x] Deploy to Vercel succeeds without errors
- [x] All pages are responsive (mobile, tablet, desktop)
- [x] Favicon and apple-touch-icon display correctly

## Project Structure

```
project/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx       # Localized layout with Navbar/Footer
│   │   ├── page.tsx         # Landing/home page
│   │   ├── platform/
│   │   │   └── page.tsx     # Platform shell with tab placeholders
│   │   └── auth/
│   │       └── page.tsx     # Auth placeholder (Step 2 implementation)
│   └── globals.css          # Design system & global styles
├── components/
│   ├── Navbar.tsx           # Navigation with language switcher
│   └── Footer.tsx           # Footer with contact info
├── i18n/
│   ├── nl.json              # Dutch translations
│   ├── fr.json              # French translations
│   └── en.json              # English translations
├── lib/
│   └── i18n.ts              # Translation loader & locale config
├── public/
│   ├── favicon.ico          # 32x32 favicon
│   ├── favicon.svg          # SVG favicon
│   └── apple-touch-icon.png # 180x180 Apple touch icon
├── middleware.ts            # i18n routing middleware
├── .env.example             # Environment variables template
└── README.md
```

## Next Steps

Step 2 will add:
- Supabase integration
- Authentication (email/password with verification)
- User roles (Owner, Foreman, Worker, Client)
- Protected routes
