# Alex Electric

Production website for an electrical services business in Albania, built as a bilingual, SEO-focused, conversion-oriented Next.js application.

[Live website](https://alex-electric.com)

## Overview

Alex Electric is a real business website for electrical services in Tirana, Durres, and nearby areas. The project is designed to help customers quickly understand the available services, choose the right page for their need, and contact the business by phone or WhatsApp.

The site also works as a portfolio case study in practical product engineering: it combines local SEO strategy, structured content, multilingual routing, reusable UI sections, analytics-aware contact flows, and modern frontend implementation.

## What This Project Demonstrates

- Product thinking for a service business with clear customer journeys
- Local SEO architecture for city, service, audience, and guide pages
- Bilingual content strategy for Albanian and English-speaking visitors
- Responsive UI design for mobile-first service discovery
- Reusable component structure for service pages, guides, FAQs, and contact sections
- Technical SEO with metadata, canonical URLs, Open Graph images, sitemap generation, robots configuration, and structured data
- Contact conversion tracking for phone and WhatsApp interactions
- Server-side rendering patterns with the Next.js App Router
- Clean TypeScript implementation with content typed as reusable data

## Key Features

- Albanian homepage and service pages
- English hub for expats, landlords, Airbnb hosts, businesses, and coastal property owners
- Location-focused pages for Tirana and Durres
- Service pages for repairs, installations, emergency work, electrical panels, EV chargers, solar panels, smart home work, apartments, villas, offices, shops, restaurants, and hotels
- Blog and guide content connected back to relevant services
- Dynamic metadata and social preview images for important routes
- JSON-LD structured data for local business, website, FAQ, breadcrumbs, services, and guides
- Phone and WhatsApp calls to action across key conversion points
- Private contact-click reporting route backed by Vercel Blob storage
- Sitemap and robots.txt generation with private routes excluded
- Responsive navigation and reusable page sections

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Bun
- Vercel Analytics
- Vercel Blob
- Framer Motion
- Lucide React
- next-sitemap

## Product Scope

The site is structured around high-intent customer needs:

- Emergency electrician services
- Electrical repairs and diagnostics
- Electrical installations for homes and businesses
- Electrical panel checks and upgrades
- EV charger installation
- Solar panel installation and planning
- Smart home and lighting work
- Apartment, villa, rental, office, shop, restaurant, and hotel service pages
- English-language support for expats, landlords, Airbnb hosts, and international customers

## SEO and Content Strategy

This project uses a content model built around search intent instead of only a generic services list.

- Main service pages target direct commercial searches.
- Location pages target local demand in Tirana and Durres.
- Audience pages target specific customer groups such as expats, landlords, and Airbnb hosts.
- Guide pages support informational searches and link users back to relevant service pages.
- Metadata, canonical links, language alternates, Open Graph images, and structured data are generated per route where appropriate.

## Project Structure

```text
alex-electric/
|-- app/
|   |-- (components)/          Shared UI sections and navigation
|   |-- (en)/                  English routes
|   |-- (sq)/                  Albanian routes, blog, services, and private reporting
|   |-- api/                   Contact-click tracking endpoint
|   |-- layout.tsx             Root layout
|   |-- opengraph-image.tsx    Generated social preview image
|   `-- twitter-image.tsx      Generated Twitter preview image
|-- lib/
|   |-- content/               Typed service and guide content
|   |-- contact.ts             Contact channel configuration
|   |-- contact-click-store.ts Contact-click storage logic
|   |-- seo.ts                 SEO and structured-data helpers
|   `-- site.ts                Site URL configuration
|-- public/                    Logos, icons, favicon, robots.txt, and sitemap
|-- next-sitemap.config.js     Sitemap and robots configuration
|-- next.config.ts             Next.js configuration
|-- package.json               Scripts and dependencies
`-- README.md
```

## Getting Started

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

Build for production:

```bash
bun run build
```

Run linting:

```bash
bun run lint
```

Start the production build locally:

```bash
bun run start
```

## Environment Variables

The site can run without private tracking configured. For local development, create a `.env.local` file only when these values are needed:

```bash
NEXT_PUBLIC_SITE_URL=https://alex-electric.com
BLOB_READ_WRITE_TOKEN=
CONTACT_CLICK_VIEWER_SECRET=
```

`BLOB_READ_WRITE_TOKEN` enables storage for click events. `CONTACT_CLICK_VIEWER_SECRET` protects the private reporting page.

## Available Scripts

| Script | Purpose |
| --- | --- |
| `bun run dev` | Start the local development server |
| `bun run build` | Create a production build and generate the sitemap |
| `bun run start` | Run the production build locally |
| `bun run lint` | Run ESLint checks |

## Professional Focus

This repository is built to show more than a finished UI. It highlights the ability to translate a real business goal into a maintainable web product:

- turn customer intent into page architecture
- support multiple audiences and languages without duplicating the entire app
- structure content so service pages and guides reinforce each other
- connect SEO, UX, and conversion paths
- keep implementation readable, typed, and scalable as the business grows

## Status

The website is live and production-oriented. Future improvements can include richer visual case studies, deeper analytics dashboards, additional city pages, more guide content, and expanded service proof sections.
