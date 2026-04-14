# Susan Wang Group — Real Estate Website

A premium, production-quality real estate website for **Susan Wang Group**, a luxury real estate advisor affiliated with Coldwell Banker serving Orange County and Los Angeles.

## Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v4** (styling)
- **Framer Motion** (animations)
- **Wouter** (client-side routing)
- **React Hook Form** + **Zod** (contact form)
- **Lucide React** (icons)
- **Google Fonts** — Cormorant Garamond (headings) + Inter (body)

## Pages

| Route | Page |
|-------|------|
| `/` | Home — full-featured homepage with hero, services, listings preview, testimonials |
| `/about` | About Susan — personal brand story, philosophy, credentials |
| `/buyers` | Buyers — representation approach, process, FAQ |
| `/sellers` | Sellers — strategy, marketing, valuation CTA |
| `/investors` | Investors — investment advisory, market analysis |
| `/communities` | Communities — Irvine, Newport Beach, Huntington Beach, LA |
| `/listings` | Featured Listings — placeholder cards, IDX-ready architecture |
| `/videos` | Video Gallery — YouTube embeds, market updates, neighborhood tours |
| `/testimonials` | Testimonials — client reviews grid |
| `/contact` | Contact / Book Consultation — form, contact info |

## Project Structure

```
src/
├── components/
│   ├── ui/                   # Radix UI primitives
│   ├── Navigation.tsx        # Sticky nav with mobile menu
│   ├── Footer.tsx            # Full footer with compliance info
│   ├── CTAButton.tsx         # Reusable CTA button
│   ├── SectionHeading.tsx    # Reusable section heading
│   ├── ListingCard.tsx       # Property listing card
│   ├── TestimonialCard.tsx   # Client testimonial card
│   ├── VideoCard.tsx         # YouTube video card
│   └── CommunityCard.tsx     # Area/community card
└── pages/
    ├── HomePage.tsx
    ├── AboutPage.tsx
    ├── BuyersPage.tsx
    ├── SellersPage.tsx
    ├── InvestorsPage.tsx
    ├── CommunitiesPage.tsx
    ├── ListingsPage.tsx
    ├── VideosPage.tsx
    ├── TestimonialsPage.tsx
    └── ContactPage.tsx
```

## Local Development

```bash
npm install   # or pnpm install
npm run dev   # starts dev server
```

## Building for Production

```bash
npm run build   # outputs to dist/public/
```

## Deploying to Cloudflare Pages

1. Push this folder to a GitHub repository
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your GitHub repository
4. Set build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist/public`
5. Click **Save and Deploy**

> **Note:** If deploying as a standalone repo (not the full monorepo), remove the `BASE_PATH` and `PORT` environment variable checks from `vite.config.ts` and replace with standard Vite config.

### Standalone vite.config.ts (for GitHub export)

When exporting outside this monorepo, replace `vite.config.ts` with:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
  },
});
```

## Customization Guide

### Swapping in Real Content

| Placeholder | Where to Replace |
|-------------|-----------------|
| Agent headshot | Search for "SW" initials in `AboutPage.tsx`, `HomePage.tsx` — replace `div` with `<img>` |
| Listing photos | `ListingCard.tsx` — update `image` field in listings data arrays |
| Community photos | `CommunitiesPage.tsx` — update `image` field in communities data array |
| YouTube videos | `VideosPage.tsx` and `HomePage.tsx` — replace `dQw4w9WgXcQ` with real video IDs |
| Phone number | Search for `949) 555-0182` — replace in `ContactPage.tsx` and `Footer.tsx` |
| Email | Search for `susan@susanwanggroup.com` — replace in `ContactPage.tsx` and `Footer.tsx` |
| Instagram handle | Search for `@susanwanggroup` — replace in `ContactPage.tsx` |
| DRE# | Already set to `02132358` in `Footer.tsx` and `AboutPage.tsx` |

### IDX / MLS Integration

The `/listings` page is built to be IDX-ready:
- `ListingCard.tsx` accepts a standard listing data shape
- The listings data array in `ListingsPage.tsx` uses a clean type interface
- Replace the placeholder listings array with your IDX feed data
- The filter/search UI is already in place as a visual scaffold

### Contact Form Integration

The contact form in `ContactPage.tsx` uses React Hook Form + Zod validation. To connect it to a real backend or service:
- **Formspree**: Add your form ID to the form `action` attribute
- **Email service**: Add a server action or API route that sends via SendGrid/Resend
- **CRM**: Wire the `onSubmit` handler to your CRM's API

### Logo

The current logo is a clean text-based wordmark using Cormorant Garamond. To use a custom SVG logo:
1. Add your SVG file to `src/assets/`
2. Replace the logo markup in `Navigation.tsx` and `Footer.tsx`

## Brand Colors

| Token | Value | Use |
|-------|-------|-----|
| Background | `hsl(40 30% 97%)` | Warm off-white |
| Foreground | `hsl(0 0% 17%)` | Deep charcoal |
| Primary | `hsl(34 28% 68%)` | Warm taupe/sand |
| Secondary | `hsl(205 20% 65%)` | Muted blue-gray |
| Muted | `hsl(40 15% 92%)` | Light sand |
| Accent | `hsl(38 40% 92%)` | Very light sand |

## Compliance

- DRE# 02132358 displayed in footer and About page
- Coldwell Banker Realty affiliation stated clearly
- Copyright notice in footer
- Privacy Policy and Terms links in footer (pages to be created)
