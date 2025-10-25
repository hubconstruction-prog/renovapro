# Public Assets

This folder contains static assets served by Next.js.

## Icons

All icons feature the RenoVapro "R" logo with brand color (#1A4D2E) on a solid background.

- **favicon.ico** - 32x32 PNG format favicon (standard browser tab icon)
- **favicon.svg** - Scalable vector favicon (modern browsers)
- **favicon-16x16.png** - 16x16 PNG (legacy support)
- **favicon-32x32.png** - 32x32 PNG (legacy support)
- **apple-touch-icon.png** - 180x180 PNG (iOS home screen icon)

These files are automatically referenced in the app layout metadata and should not be removed.

## Regenerating Icons

If you need to regenerate icons (e.g., to change the logo), you can:

1. Install sharp: `npm install --save-dev sharp`
2. Create a script similar to the original generator
3. Update the SVG template with your new design
4. Run the script to generate all required formats

The current design uses:
- Background: #1A4D2E (RenoVapro brand green)
- Text: White "R" centered
- Font: Arial Bold
