# Nobaraneh — Base44 Development Environment

## Overview
Nobaraneh is a Persian RTL e-commerce website for an Iranian spice and traditional food brand, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Font:** Vazirmatn (Persian, loaded via CDN)
- **State:** React Context (cart, favorites) with localStorage persistence

## Development Setup
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
The app runs on port 3000 with hot reload enabled.

## Architecture
- `src/data/` — Product, category, recipe, and educational content (static TypeScript data, structured for future dynamic management)
- `src/components/` — Reusable UI components (Header, Footer, MobileNav, ProductCard, ProductShelf, section components)
- `src/app/` — Next.js App Router pages (homepage, shop, product detail, category, cart, checkout, etc.)
- `src/components/CartContext.tsx` — Global cart and favorites state with localStorage persistence

## Key Design Decisions
- **RTL:** Entire site is RTL with `dir="rtl"` and `lang="fa"` on the html element
- **Persian font:** Vazirmatn loaded from CDN in globals.css
- **Colors:** Deep Persian emerald (#005C4B), warm parchment (#FAF7F2), cinnamon brown (#8C5E3C)
- **Mobile-first:** Sticky bottom navigation, horizontally scrollable product shelves, responsive grids
- **Product data model:** Supports name, category, description, ingredients, weight options, price, discount, stock, images, tags, featured/best-seller/new-arrival flags, wholesale price, and related products

## Verification
- Homepage renders all sections: hero, categories, 7 product shelves, features, food inspiration, custom spice, story, recipes, educational, wholesale
- Product pages show full details with weight selector, quantity, add to cart, buy now
- Cart and checkout flow works with localStorage persistence
- Search and filter on /shop page
- Mobile bottom navigation with 5 tabs

## Sandbox Overrides
- `WATCHPACK_POLLING=true` — enables file watch polling for bind-mounted volumes
- `BASE44_PREVIEW_MODE` passed through to the service for any sandbox-specific gating
- Dev server binds to `0.0.0.0:3000` to accept the preview proxy hostname
